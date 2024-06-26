<?php

/**
 * ACADP Listings Widget.
 *
 * @link    https://pluginsware.com
 * @since   1.0.0
 *
 * @package Advanced_Classifieds_And_Directory_Pro
 */

// Exit if accessed directly
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * ACADP_Widget_Listings Class.
 *
 * @since 1.5.4
 */
class ACADP_Widget_Listings extends WP_Widget {
	
	/**
     * Unique identifier for the widget.
     *
     * @since  1.5.4
	 * @access protected
     * @var    string
     */
    protected $widget_slug;
	
	/**
     * General Settings.
     *
     * @since  1.5.4
	 * @access private
     * @var    array
     */
    private $general_settings;
	
	/**
     * Listings Settings.
     *
     * @since  1.5.4
	 * @access private
     * @var    array
     */
    private $listings_settings;
	
	/**
     * Featured Listings Settings.
     *
     * @since  1.5.4
	 * @access private
     * @var    array
     */
    private $featured_listing_settings;
	
	/**
     * Default Settings.
     *
     * @since  1.5.4
	 * @access private
     * @var    array
     */
    private $defaults;
	
	/**
	 * Get things going.
	 *
	 * @since 1.5.4
	 */
	public function __construct() {		
		$this->widget_slug = ACADP_PLUGIN_NAME . '-widget-listings';
		$this->general_settings = get_option( 'acadp_general_settings' );
		$this->listings_settings = get_option( 'acadp_listings_settings' );
		$this->featured_listing_settings = get_option( 'acadp_featured_listing_settings' );

		$this->defaults = array(
			'title'              => __( 'Listings', 'advanced-classifieds-and-directory-pro' ),
			'view'               => 'standard',
			'has_location'       => empty( $this->general_settings['has_location'] ) ? 0 : 1,
			'base_location'      => max( 0, $this->general_settings['base_location'] ),
			'location'           => max( 0, $this->general_settings['base_location'] ),
			'category'           => 0,			
			'orderby'            => $this->listings_settings['orderby'],
			'order'              => $this->listings_settings['order'],
			'columns'            => 1,
			'limit'              => 15,
			'has_featured'       => empty( $this->featured_listing_settings['enabled'] ) ? 0 : 1,
			'featured'           => 0,	
			'related_listings'   => 0,
			'has_images'         => empty( $this->general_settings['has_images'] ) ? 0 : 1,
			'show_image'         => 1,
			'image_position'     => 'left',
			'show_excerpt'       => 0,
			'show_category'      => isset( $this->listings_settings['display_in_listing'] ) && in_array( 'category', $this->listings_settings['display_in_listing'] ) ? 1 : 0,
			'show_location'      => isset( $this->listings_settings['display_in_listing'] ) && in_array( 'location', $this->listings_settings['display_in_listing'] ) ? 1 : 0,
			'has_price'          => empty( $this->general_settings['has_price'] ) ? 0 : 1,
			'show_price'         => isset( $this->listings_settings['display_in_listing'] ) && in_array( 'price', $this->listings_settings['display_in_listing'] ) ? 1 : 0,
			'show_date'          => 0,
			'show_user'          => 0,
			'show_views'         => 0,
			'show_custom_fields' => 0
		);
		
		parent::__construct(
			$this->widget_slug,
			__( 'ACADP Listings', 'advanced-classifieds-and-directory-pro' ),
			array(
				'classname'   => $this->widget_slug . '-class',
				'description' => __( 'Displays "Advanced Classifieds and Directory Pro" Listings.', 'advanced-classifieds-and-directory-pro' )
			)
		);		
	}

	/**
	 * Outputs the content of the widget.
	 *
	 * @since 1.5.4
	 * @param array $args	  The array of form elements.
	 * @param array $instance The current instance of the widget.
	 */
	public function widget( $args, $instance ) {	
		// Merge incoming $instance array with $defaults
		if ( is_array( $instance ) ) {
			$instance = array_merge( $this->defaults, $instance );
		} else {
			$instance = $this->defaults;
		}

		if ( isset( $instance['show_description'] ) ) {
			$instance['show_excerpt'] = $instance['show_description'];
		}
		
		// WP Query
		global $post;
		
		$query = array(				
			'post_type'      => 'acadp_listings',
			'post_status'    => 'publish',
			'posts_per_page' => ! empty( $instance['limit'] ) ? (int) $instance['limit'] : -1
		);
		
		$tax_queries  = array();
		$meta_queries = array();
		
		$location = (int) $instance['location'];
		
		if ( $instance['has_location'] ) {		
			if ( $instance['related_listings'] ) {			
				$term_slug = get_query_var( 'acadp_location' );
			
				if ( '' != $term_slug ) {		
					$term = get_term_by( 'slug', sanitize_text_field( $term_slug ), 'acadp_locations' );
					$location = $term->term_id;
				}				
			}
		
			if ( $location > 0 ) {				
				$tax_queries[] = array(
					'taxonomy'         => 'acadp_locations',
					'field'            => 'term_id',
					'terms'            => $location,
					'include_children' => isset( $this->listings_settings['include_results_from'] ) && in_array( 'child_locations', $this->listings_settings['include_results_from'] ) ? true : false,
				);						
			} elseif ( $instance['base_location'] > 0 ) {		
				$tax_queries[] = array(
					'taxonomy'         => 'acadp_locations',
					'field'            => 'term_id',
					'terms'            => $instance['base_location'],
					'include_children' => true,
				);				
			}		
		}
		
		$category = (int) $instance['category'];
	
		if ( $instance['related_listings'] ) {		
			if ( is_singular( 'acadp_listings' ) ) {			
				$category = wp_get_object_terms( $post->ID, 'acadp_categories' );
				$category = ! empty( $category ) ? $category[0]->term_id : 0;
				
				$query['post__not_in'] = array( $post->ID );
			} else {			
				$term_slug = get_query_var( 'acadp_category' );
				
				if ( '' != $term_slug ) {		
					$term = get_term_by( 'slug', sanitize_text_field( $term_slug ), 'acadp_categories' );
					$category = $term->term_id;
				}			
			}			
		}
		
		if ( $category > 0 ) {		
			$tax_queries[] = array(
				'taxonomy'         => 'acadp_categories',
				'field'            => 'term_id',
				'terms'            => $category,
				'include_children' => isset( $this->listings_settings['include_results_from'] ) && in_array( 'child_categories', $this->listings_settings['include_results_from'] ) ? true : false,
			);					
		}
		
		$featured_only = 0;
		if ( $instance['has_featured'] ) {
			$featured_only = $instance['featured'];
		}
		
		if ( $featured_only ) {			
			$meta_queries[] = array(
				'key'     => 'featured',
				'value'   => 1,
				'compare' => '='
			);				
		}
		
		$count_tax_queries = count( $tax_queries );
		if ( $count_tax_queries ) {
			$query['tax_query'] = ( $count_tax_queries > 1 ) ? array_merge( array( 'relation' => 'AND' ), $tax_queries ) : array( $tax_queries );
		}
	
		$count_meta_queries = count( $meta_queries );
		if ( $count_meta_queries ) {
			$query['meta_query'] = ( $count_meta_queries > 1 ) ? array_merge( array( 'relation' => 'AND' ), $meta_queries ) : array( $meta_queries );
		}
		
		$orderby = sanitize_text_field( $instance['orderby'] );
		$order   = sanitize_text_field( $instance['order'] );
	
		switch ( $orderby ) {
			case 'price' :
			case 'views' :
				$query['meta_key'] = $orderby;
				$query['orderby']  = 'meta_value_num';
				
				$query['order']    = $order;
				break;
			case 'rand' :
				$query['orderby'] = $orderby;
				break;
			default :
				$query['orderby'] = $orderby;
				$query['order']   = $order;
		}
		
		$query = apply_filters( 'acadp_query_args', $query, 'widget_listings' );
		$acadp_query = new WP_Query( $query );
		
		// Output
		echo $args['before_widget'];
		
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}

		if ( $acadp_query->have_posts() ) {	
			$this->enqueue_dependencies();			

			if ( 'map' == $instance['view'] ) {
				$deprecated = array( 'template' => 'acadp-widget-public-listings-map-display.php', 'widget' => 'listings' );
				include apply_filters( 'acadp_load_template', ACADP_PLUGIN_DIR . 'widgets/templates/listings/layout-map.php', array( 'deprecated' => $deprecated ) );
			} elseif ( $instance['show_image'] && 'left' == $instance['image_position'] ) {
				$deprecated = array( 'template' => 'acadp-widget-public-listings-media-display.php', 'widget' => 'listings' );
				include apply_filters( 'acadp_load_template', ACADP_PLUGIN_DIR . 'widgets/templates/listings/layout-list.php', array( 'deprecated' => $deprecated ) );
			} else {
				$deprecated = array( 'template' => 'acadp-widget-public-listings-thumbnail-display.php', 'widget' => 'listings' );
				include apply_filters( 'acadp_load_template', ACADP_PLUGIN_DIR . 'widgets/templates/listings/layout-grid.php', array( 'deprecated' => $deprecated ) );
			}					
		} else {
			echo '<span>' . __( 'No listings found', 'advanced-classifieds-and-directory-pro' ) . '</span>';
		}

		echo $args['after_widget'];
	}
	
	/**
	 * Processes the widget's options to be saved.
	 *
	 * @since 1.5.4
	 * @param array $new_instance The new instance of values to be generated via the update.
	 * @param array $old_instance The previous instance of values before the update.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		
		$instance['title']              = ! empty( $new_instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';
		$instance['view']               = isset( $new_instance['view'] ) ? sanitize_text_field( $new_instance['view'] ) : 'standard';
		$instance['location']           = isset( $new_instance['location'] ) ? (int) $new_instance['location'] : 0;
		$instance['category']           = isset( $new_instance['category'] ) ? (int) $new_instance['category'] : 0;		
		$instance['columns']            = ! empty( $new_instance['columns'] ) ? (int) $new_instance['columns'] : 1;
		$instance['limit']              = isset( $new_instance['limit'] ) ? (int) $new_instance['limit'] : 0;
		$instance['orderby']            = isset( $new_instance['orderby'] ) ? sanitize_text_field( $new_instance['orderby'] ) : 'title';
		$instance['order']              = isset( $new_instance['order'] ) ? sanitize_text_field( $new_instance['order'] ) : 'asc';
		$instance['featured']           = isset( $new_instance['featured'] ) ? (int) $new_instance['featured'] : 0;	
		$instance['related_listings']   = isset( $new_instance['related_listings'] ) ? (int) $new_instance['related_listings'] : 0;
		$instance['show_image']         = isset( $new_instance['show_image'] ) ? (int) $new_instance['show_image'] : 0;
		$instance['image_position']     = isset( $new_instance['image_position'] ) ? sanitize_text_field( $new_instance['image_position'] ) : 'left';
		$instance['show_excerpt']       = isset( $new_instance['show_excerpt'] ) ? (int) $new_instance['show_excerpt'] : 0;
		$instance['show_category']      = isset( $new_instance['show_category'] ) ? (int) $new_instance['show_category'] : 0;
		$instance['show_location']      = isset( $new_instance['show_location'] ) ? (int) $new_instance['show_location'] : 0;
		$instance['show_price']         = isset( $new_instance['show_price'] ) ? (int) $new_instance['show_price'] : 0;
		$instance['show_date']          = isset( $new_instance['show_date'] ) ? (int) $new_instance['show_date'] : 0;
		$instance['show_user']          = isset( $new_instance['show_user'] ) ? (int) $new_instance['show_user'] : 0;
		$instance['show_views']         = isset( $new_instance['show_views'] ) ? (int) $new_instance['show_views'] : 0;
		$instance['show_custom_fields'] = isset( $new_instance['show_custom_fields'] ) ? (int) $new_instance['show_custom_fields'] : 0;
		
		if ( isset( $instance['show_description'] ) ) {
			unset( $instance['show_description'] );
		}

		return $instance;
	}
	
	/**
	 * Generates the administration form for the widget.
	 *
	 * @since 1.5.4
	 * @param array $instance The array of keys and values for the widget.
	 */
	public function form( $instance ) {
		// Parse incoming $instance into an array and merge it with $defaults
		$instance = wp_parse_args(
			(array) $instance,
			$this->defaults
		);

		if ( isset( $instance['show_description'] ) ) {
			$instance['show_excerpt'] = $instance['show_description'];
		}
			
		// Display the admin form
		include ACADP_PLUGIN_DIR . 'widgets/forms/listings.php';
	}
	
	/**
	 * Enqueue dependencies.
	 *
	 * @since 1.5.4
	 */
	public function enqueue_dependencies() {
		wp_enqueue_style( ACADP_PLUGIN_NAME . '-markerclusterer' );	
		wp_enqueue_style( ACADP_PLUGIN_NAME );
		
		wp_enqueue_script( ACADP_PLUGIN_NAME . '-markerclusterer' );
		wp_enqueue_script( ACADP_PLUGIN_NAME );			
	}
	
}
