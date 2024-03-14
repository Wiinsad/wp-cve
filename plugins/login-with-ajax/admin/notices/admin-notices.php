<?php
namespace Login_With_AJAX;
/**
 * Handles the registration and display of admin notices, including storage and retrieval of individual Admin_Notice notice objects. 
 * @since 5.8.2.0
 */
class Admin_Notices {
	
	/**
	 * Flag for whether or not to add dismissable notice JS to admin page footer.
	 * @var boolean
	 */
	public static $js_footer = false;
	/**
	 * Name of option to get data from
	 * @var string
	 */
	public static $option_name = 'custom_admin_notices';
	/**
	 * Name of option to get data from
	 * @var string
	 */
	public static $option_notices_name = 'custom_admin_notices_data';
	
	/**
	 * Initialize EM Admin Notices by adding the relevant hooks. 
	 */
	public static function init(){
		add_action('admin_notices', 'Login_With_AJAX\Admin_Notices::admin_notices');
		add_action('wp_ajax_lwa_dismiss_admin_notice', 'Login_With_AJAX\Admin_Notices::dismiss_admin_notice');
		if( is_multisite() ){
			add_action('admin_notices', 'Login_With_AJAX\Admin_Notices::network_admin_notices');
			add_action('network_admin_notices', 'Login_With_AJAX\Admin_Notices::network_admin_notices');
			add_action('wp_ajax_lwa_dismiss_network_admin_notice', 'Login_With_AJAX\Admin_Notices::dismiss_admin_notice');
		}
	}
	
	/**
	 * Adds an admin notice to the site. If $network is set to true, notice will be saved at network level.
	 * If a string is provided as $Admin_Notice, it will be considered as a notice requiring a hook to ouptut anything.
	 * If a notice with an identical key is provided, it will overwrite the previously stored notice.
	 * When adding a notice that all users will see and can dismiss, it's recommended you use a hook to build the Admin_Notice object, to avoid storing unecessary data in the DB
	 * @param Admin_Notice|string $Admin_Notice
	 * @param boolean $network
	 * @return boolean Returns true if added successfully, false if not or if the exact same record exists.
	 */
	public static function add( $Admin_Notice, $network = false ){
		$network = $network && is_multisite(); //make sure we are actually in multisite!
		if( is_string($Admin_Notice) ){
		    $Admin_Notice = new Admin_Notice( $Admin_Notice );
		    $hook_notice = true;
		}
		if( !$Admin_Notice->name ) return false;
		//get options data
		$data = $network ? get_site_option(static::$option_name) : get_option(static::$option_name);
		$data = empty($data) ? array() : maybe_unserialize($data);
		if( !is_array($data)) $data = array();
		$notices_data = $network ? get_site_option(static::$option_notices_name) : get_option(static::$option_notices_name);
		$notices_data = empty($notices_data) ? array() : maybe_unserialize($notices_data);
		if( !is_array($notices_data)) $notices_data = array(); //we store the data regarldess of whether a message will require a hook, since it contains location and caps considtions
		//start building data
		$notices = !empty($data['admin_notices']) ? $data['admin_notices'] : array();
		$notices[$Admin_Notice->name] = !empty($Admin_Notice->when) ? $Admin_Notice->when : 0;
		if( empty($hook_notice) ){ //we only skip this if simply a key is provided initially in $Admin_Notice
            $notices_data[$Admin_Notice->name] = $Admin_Notice->to_array();
        }
		if( !empty($notices) ){
			$data['admin_notices'] = $notices;
			$update_notices =  $network ? update_site_option(static::$option_name, $data) : update_option(static::$option_name, $data);
			$update_notices_data = true;
			if( !empty($notices_data) ){
				$update_notices_data =  $network ? update_site_option(static::$option_notices_name, $notices_data) : update_option(static::$option_notices_name, $notices_data, false);
			}
			return $update_notices && $update_notices_data;
		}
		return false;
	}
	
	/**
	 * Remove an admin notice. If $network is true, then a network-level admin notice will be removed.
	 * @param string $notice_key
	 * @param string $network
	 * @return boolean Returns true if successfully deleted, false if there's an error or if there's nothing to delete. 
	 */
	public static function remove( $notice_key, $network = false ){
		$network = $network && is_multisite(); //make sure we are actually in multisite!
		$data = $network ? get_site_option(static::$option_name) : get_option(static::$option_name);
		if( !empty($data['admin_notices']) && isset($data['admin_notices'][$notice_key])){
			unset($data['admin_notices'][$notice_key]);
			if( empty($data['admin_notices']) ) unset($data['admin_notices']);
			$result = $update_notices_data = $network ? update_site_option(static::$option_name, $data) : update_option(static::$option_name, $data);
			$notices_data = $network ? get_site_option(static::$option_notices_name) : get_option(static::$option_notices_name);
			if( !empty($notices_data[$notice_key]) ){
				unset($notices_data[$notice_key]);
				if( empty($notices_data) ){
					$update_notices_data =  $network ? delete_site_option(static::$option_notices_name) : delete_option(static::$option_notices_name);
				}else{
					$update_notices_data =  $network ? update_site_option(static::$option_notices_name, $notices_data) : update_option(static::$option_notices_name, $notices_data, false);
				}
			}
			return $result && $update_notices_data;
		}
		return false;
	}
	
	/**
	 * Adds admin notice to network rather than specific blog. Equivalent to self::add( $Admin_Notice, true );
	 * @see Admin_Notices::add()
	 */
	public static function network_add( $Admin_Notice ){ return self::add( $Admin_Notice, true ); }
	
	/**
	 * Removes admin notice from network rather than specific blog. Equivalent to self::remove( $Admin_Notice, true );
	 * @see Admin_Notices::remove()
	 */
	public static function network_remove( $notice_key ){  return self::remove( $notice_key, true ); }
	
	/**
	 * Output the admin notices we need to output now. If $network is true, MultiSite network messages will be output.
	 * @param string $network
	 */
	public static function admin_notices( $network = false ){
		$notices = array();
		$data = $network ? get_site_option(static::$option_name) : get_option(static::$option_name);
		$possible_notices = is_array($data) && !empty($data['admin_notices']) ? $data['admin_notices'] : array();
		//we may have something to show, so we make sure that there's something to show right now
		foreach( $possible_notices as $key => $val ){
			//to avoid extra loading etc. we weed out time-based notices that aren't triggered right now 
			if( empty($val) || ($val > 0 && $val < time()) ){
				//we have a match, so we add this to $notices
				$notices[$key] = self::get_notice($key, $network);
			}
		}
		self::output( $notices, $network );
	}
	
	public static function get_notice( $key, $network = false ){
		//build notice object
		$notice_data = $network ? get_site_option(static::$option_notices_name) : get_option(static::$option_notices_name);
		if( empty($notice_data[$key]) || !is_array($notice_data[$key]) ){
			$notice = array('name'=>$key, 'network'=>$network);
		}else{
			$notice = $notice_data[$key];
			$notice['network'] = $network;
		}
		return new Admin_Notice($notice);
	}
	
	/**
	 * Outputs admin notices at network level, same as Login_With_AJAX\Admin_Notices::admin_notices(true)
	 * @see Admin_Notices::admin_notices()
	 */
	public static function network_admin_notices(){ self::admin_notices(true); }
	
	/**
	 * Outputs admin notices and calls the dismissable JS to be output at footer of admin page.
	 * If $network is true, only MultiSite network-level notices will be shown.
	 * @param array $notices
	 * @param boolean $network
	 */
	public static function output( $notices, $network = false ){
		foreach( $notices as $Admin_Notice ){
			//output the notice if meant to
			if( $Admin_Notice->can_show() ){
				if( $Admin_Notice->output() ) self::$js_footer = true;
			}
		}
		if( self::$js_footer ){
			add_action('admin_footer', 'Login_With_AJAX\Admin_Notices::admin_footer');
		}
	}
	
	/**
	 * If called via AJAX, the notice will be removed. 
	 */
	public static function dismiss_admin_notice(){
		if( empty($_REQUEST['notice']) ) return;
		if( empty($_REQUEST['nonce']) || !wp_verify_nonce($_REQUEST['nonce'], $_REQUEST['action'].$_REQUEST['notice'] ) ) die('Invalid Nonce');
		$key = $_REQUEST['notice'];
		$network = $_REQUEST['action'] == 'lwa_dismiss_network_admin_notice';
		//get the notice
		$Admin_Notice = self::get_notice($key, $network);
		if( $Admin_Notice->is_user_notice() ){
			//user-specific notices are flagged on the user-level
			$user_id = get_current_user_id();
			$dismissed_notices = get_user_meta( $user_id, '_lwa_dismissed_notices', true);
			$dismissed_notices = is_array($dismissed_notices) ? $dismissed_notices : array(); 
			if( !in_array($Admin_Notice->name, $dismissed_notices) ){
				$dismissed_notices[] = $Admin_Notice->name;
				$result = update_user_meta( $user_id, '_lwa_dismissed_notices', $dismissed_notices);
			}
		}else{
			$result = self::remove($_REQUEST['notice'], $network);
		}
		if( !empty($_REQUEST['redirect']) ){
			wp_safe_redirect( wp_get_referer() );
			exit();
		}
		echo !empty($result) ? 'Thou art dismissed!' : 'Thou shall not pass!';
		exit();
	}
	
	/**
	 * Outputs JS for dismissing notices.
	 */
	public static function admin_footer(){
		?>
		<script type="text/javascript">
			document.addEventListener('DOMContentLoaded', function(){
				document.querySelectorAll('.lwa-admin-notice').forEach( function( notice ){
					notice.addEventListener('click', function( e ){
						if( e.target.matches('button.notice-dismiss') ) {
							e.preventDefault();
							fetch( notice.dataset.url ).then( (response) => {
								if ( response.ok ) {
									return response.text();
								} else {
									console.log( 'Could not dismiss admin notice die to not OK repsonse: %o', response );
									response.reject();
								}
							}, {mode : 'no-cors'} ).then( (response) => {
								console.log( 'Admin notice dismissed OK with response: %s', response );
							}).catch( (error) => {
								console.log( 'Could not dismiss admin notice, error is %o', error );
							});
							return false;
						}
					});
				});
			});
		</script>
		<?php
	}
}
include('admin-notice.php');
Admin_Notices::init();