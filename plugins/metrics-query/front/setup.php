<?php
/**
 * Author: Yehuda Hassine
 * Author URI: https://metricsquery.com
 * Copyright 2013 by Alin Marcu and forked by Yehuda Hassine
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
	exit();

if ( ! class_exists( 'GADWP_Frontend_Setup' ) ) {

	final class GADWP_Frontend_Setup {

		private $gadwp;

		public function __construct() {
			$this->gadwp = GAB();

			// Styles & Scripts
			add_action( 'wp_enqueue_scripts', array( $this, 'load_styles_scripts' ) );
		}

		/**
		 * Styles & Scripts conditional loading
		 *
		 * @param
		 *            $hook
		 */
		public function load_styles_scripts() {
			$lang = get_bloginfo( 'language' );
			$lang = explode( '-', $lang );
			$lang = $lang[0];

			/*
			 * Item reports Styles & Scripts
			 */
			if ( GADWP_Tools::check_roles( $this->gadwp->config->options['access_front'] ) && $this->gadwp->config->options['frontend_item_reports'] ) {

				wp_enqueue_style( 'gadwp-nprogress', METRICS_QUERY_URL . 'common/nprogress/nprogress.css', null, GADWP_CURRENT_VERSION );

				wp_enqueue_style( 'gadwp-frontend-item-reports', METRICS_QUERY_URL . 'front/css/item-reports.css', null, GADWP_CURRENT_VERSION );

				$country_codes = GADWP_Tools::get_countrycodes();
				if ( $this->gadwp->config->options['ga_target_geomap'] && isset( $country_codes[$this->gadwp->config->options['ga_target_geomap']] ) ) {
					$region = $this->gadwp->config->options['ga_target_geomap'];
				} else {
					$region = false;
				}

				wp_enqueue_style( "wp-jquery-ui-dialog" );

				wp_register_script( 'googlecharts', 'https://www.gstatic.com/charts/loader.js', array(), null );

				wp_enqueue_script( 'gadwp-nprogress', METRICS_QUERY_URL . 'common/nprogress/nprogress.js', array( 'jquery' ), GADWP_CURRENT_VERSION );

				wp_enqueue_script( 'gadwp-frontend-item-reports', METRICS_QUERY_URL . 'common/js/reports5.js', array( 'gadwp-nprogress', 'googlecharts', 'jquery', 'jquery-ui-dialog' ), GADWP_CURRENT_VERSION, true );

				/* @formatter:off */
				wp_localize_script( 'gadwp-frontend-item-reports', 'gadwpItemData', array(
					'ajaxurl' => admin_url( 'admin-ajax.php' ),
					'security' => wp_create_nonce( 'gadwp_frontend_item_reports' ),
					'dateList' => array(
						'today' => __( "Today", 'google-analytics-board' ),
						'yesterday' => __( "Yesterday", 'google-analytics-board' ),
						'7daysAgo' => sprintf( __( "Last %d Days", 'google-analytics-board' ), 7 ),
						'14daysAgo' => sprintf( __( "Last %d Days", 'google-analytics-board' ), 14 ),
						'30daysAgo' =>  sprintf( __( "Last %d Days", 'google-analytics-board' ), 30 ),
						'90daysAgo' =>  sprintf( __( "Last %d Days", 'google-analytics-board' ), 90 ),
						'365daysAgo' =>  sprintf( _n( "%s Year", "%s Years", 1, 'google-analytics-board' ), __('One', 'google-analytics-board') ),
						'1095daysAgo' =>  sprintf( _n( "%s Year", "%s Years", 3, 'google-analytics-board' ), __('Three', 'google-analytics-board') ),
					),
					'reportList' => array(
						'uniquePageviews' => __( "Unique Views", 'google-analytics-board' ),
						'users' => __( "Users", 'google-analytics-board' ),
						'organicSearches' => __( "Organic", 'google-analytics-board' ),
						'pageviews' => __( "Page Views", 'google-analytics-board' ),
						'visitBounceRate' => __( "Bounce Rate", 'google-analytics-board' ),
						'locations' => __( "Location", 'google-analytics-board' ),
						'referrers' => __( "Referrers", 'google-analytics-board' ),
						'searches' => __( "Searches", 'google-analytics-board' ),
						'trafficdetails' => __( "Traffic", 'google-analytics-board' ),
						'technologydetails' => __( "Technology", 'google-analytics-board' ),
					),
					'i18n' => array(
							__( "A JavaScript Error is blocking plugin resources!", 'google-analytics-board' ), //0
							__( "Traffic Mediums", 'google-analytics-board' ),
							__( "Visitor Type", 'google-analytics-board' ),
							__( "Search Engines", 'google-analytics-board' ),
							__( "Social Networks", 'google-analytics-board' ),
							__( "Unique Views", 'google-analytics-board' ),
							__( "Users", 'google-analytics-board' ),
							__( "Page Views", 'google-analytics-board' ),
							__( "Bounce Rate", 'google-analytics-board' ),
							__( "Organic Search", 'google-analytics-board' ),
							__( "Pages/Session", 'google-analytics-board' ),
							__( "Invalid response", 'google-analytics-board' ),
							__( "No Data", 'google-analytics-board' ),
							__( "This report is unavailable", 'google-analytics-board' ),
							__( "report generated by", 'google-analytics-board' ), //14
							__( "This plugin needs an authorization:", 'google-analytics-board' ) . ' <strong>' . __( "authorize the plugin", 'google-analytics-board' ) . '</strong>!',
							__( "Browser", 'google-analytics-board' ), //16
							__( "Operating System", 'google-analytics-board' ),
							__( "Screen Resolution", 'google-analytics-board' ),
							__( "Mobile Brand", 'google-analytics-board' ),
							__( "Future Use", 'google-analytics-board' ),
							__( "Future Use", 'google-analytics-board' ),
							__( "Future Use", 'google-analytics-board' ),
							__( "Future Use", 'google-analytics-board' ),
							__( "Future Use", 'google-analytics-board' ),
							__( "Future Use", 'google-analytics-board' ), //25
							__( "Time on Page", 'google-analytics-board' ),
							__( "Page Load Time", 'google-analytics-board' ),
							__( "Exit Rate", 'google-analytics-board' ),
							__( "Precision: ", 'google-analytics-board' ), //29
					),
					'colorVariations' => GADWP_Tools::variations( $this->gadwp->config->options['theme_color'] ),
					'region' => $region,
					'mapsApiKey' => apply_filters( 'gadwp_maps_api_key', $this->gadwp->config->options['maps_api_key'] ),
					'language' => get_bloginfo( 'language' ),
					'filter' => $_SERVER["REQUEST_URI"],
					'viewList' => false,
					'scope' => 'front-item',
				 )
				);
				/* @formatter:on */
			}
		}
	}
}
