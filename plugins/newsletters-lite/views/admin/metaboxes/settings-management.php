<?php // phpcs:ignoreFile ?>
<!-- Manage Subscriptions Settings -->

<?php
	
$managementauthtype = $this -> get_option('managementauthtype');
$management_password = $this -> get_option('management_password');
$managementshowsubscriptions = $this -> get_option('managementshowsubscriptions');	
$managementdelete = $this -> get_option('managementdelete');
$managementshowprivate = $this -> get_option('managementshowprivate');
	
?>

<table class="form-table">
	<tbody>
    	<tr class="advanced-setting">
        	<th><label for="managementpost"><?php esc_html_e('Management Post ID', 'wp-mailinglist'); ?></label></th>
            <td>
            	<?php $this -> get_managementpost(); ?>
            	<?php if ($this -> language_do()) : ?>
            		<?php 
					
					$languages = $this -> language_getlanguages(); 
					$managementpost = $this -> get_managementpost(false);
					
					?>
					<div id="managementposttabs">
						<ul>
							<?php $tabnumber = 1; ?>
			                <?php foreach ($languages as $language) : ?>
			                 	<li><a href="#managementposttab<?php echo esc_html($tabnumber); ?>"><?php echo wp_kses_post( $this -> language_flag($language)); ?></a></li>
			                    <?php $tabnumber++; ?>
			                <?php endforeach; ?>
			            </ul>
			            
			            <?php $tabnumber = 1; ?>
			            <?php foreach ($languages as $language) : ?>
			            	<div id="managementposttab<?php echo esc_html($tabnumber); ?>">
			            		<input type="text" name="managementpost[<?php echo esc_html( $language); ?>]" value="<?php echo esc_attr(wp_unslash($this -> get_managementpost(false, false, $language))); ?>" id="managementpost_<?php echo esc_html( $language); ?>" class="widefat" />
			            	</div>
			            	<?php $tabnumber++; ?>
			            <?php endforeach; ?>
					</div>
					
					<script type="text/javascript">
					jQuery(document).ready(function() {
						if (jQuery.isFunction(jQuery.fn.tabs)) {
							jQuery('#managementposttabs').tabs();
						}
					});
					</script>
            	<?php else : ?>
            		<input type="text" name="managementpost" value="<?php echo esc_attr(wp_unslash($this -> get_managementpost(false))); ?>" id="managementpost" class="widefat" style="width:65px;" />
            	<?php endif; ?>
            	<span class="howto"><?php echo sprintf(__('ID of the WordPress post with the %s shortcode in it.', 'wp-mailinglist'), '<code>[newsletters_management]</code>'); ?></span>
            </td>
        </tr>
        <tr>
			<th><label for="<?php echo esc_html( $this -> pre); ?>managelinktext"><?php esc_html_e('Management Link text', 'wp-mailinglist'); ?></label></th>
			<td>
				<?php if ($this -> language_do()) : ?>
					<?php 
					
					$languages = $this -> language_getlanguages(); 
					$managelinktext = $this -> get_option('managelinktext');
					
					?>
					<div id="managelinktexttabs">
						<ul>
							<?php $tabnumber = 1; ?>
			                <?php foreach ($languages as $language) : ?>
			                 	<li><a href="#managelinktexttab<?php echo esc_html($tabnumber); ?>"><?php echo wp_kses_post( $this -> language_flag($language)); ?></a></li>
			                    <?php $tabnumber++; ?>
			                <?php endforeach; ?>
			            </ul>
			            
			            <?php $tabnumber = 1; ?>
			            <?php foreach ($languages as $language) : ?>
			            	<div id="managelinktexttab<?php echo esc_html($tabnumber); ?>">
			            		<input type="text" name="managelinktext[<?php echo esc_html( $language); ?>]" value="<?php echo esc_attr(wp_unslash($this -> language_use($language, $managelinktext))); ?>" id="managelinktext_<?php echo esc_html( $language); ?>" class="widefat" />
			            	</div>
			            	<?php $tabnumber++; ?>
			            <?php endforeach; ?>
					</div>
					
					<script type="text/javascript">
					jQuery(document).ready(function() {
						if (jQuery.isFunction(jQuery.fn.tabs)) {
							jQuery('#managelinktexttabs').tabs();
						}
					});
					</script>
				<?php else : ?>
					<input class="widefat" type="text" id="<?php echo esc_html( $this -> pre); ?>managelinktext" name="managelinktext" value="<?php echo esc_attr(wp_unslash($this -> get_option('managelinktext'))); ?>" />
				<?php endif; ?>
				<span class="howto"><?php echo sprintf(__('displays subscription management page. generated by %s in content', 'wp-mailinglist'), '<code>[newsletters_manage]</code>'); ?></span>
			</td>
		</tr>
        <tr>
        	<th><label for="managementloginsubject"><?php esc_html_e('Authentication Email Subject', 'wp-mailinglist'); ?></label></th>
            <td>
            	<?php if ($this -> language_do()) : ?>
            		<?php 
					
					$languages = $this -> language_getlanguages(); 
					$managementloginsubject = $this -> get_option('managementloginsubject');
					
					?>
					<div id="managementloginsubjecttabs">
						<ul>
							<?php $tabnumber = 1; ?>
			                <?php foreach ($languages as $language) : ?>
			                 	<li><a href="#managementloginsubjecttab<?php echo esc_html($tabnumber); ?>"><?php echo wp_kses_post( $this -> language_flag($language)); ?></a></li>
			                    <?php $tabnumber++; ?>
			                <?php endforeach; ?>
			            </ul>
			            
			            <?php $tabnumber = 1; ?>
			            <?php foreach ($languages as $language) : ?>
			            	<div id="managementloginsubjecttab<?php echo esc_html($tabnumber); ?>">
			            		<input type="text" name="managementloginsubject[<?php echo esc_html( $language); ?>]" value="<?php echo esc_attr(wp_unslash($this -> language_use($language, $managementloginsubject))); ?>" id="managementloginsubject_<?php echo esc_html( $language); ?>" class="widefat" />
			            	</div>
			            	<?php $tabnumber++; ?>
			            <?php endforeach; ?>
					</div>
					
					<script type="text/javascript">
					jQuery(document).ready(function() {
						if (jQuery.isFunction(jQuery.fn.tabs)) {
							jQuery('#managementloginsubjecttabs').tabs();
						}
					});
					</script>
            	<?php else : ?>
            		<input type="text" class="widefat" name="managementloginsubject" value="<?php echo esc_attr(wp_unslash($this -> get_option('managementloginsubject'))); ?>" id="managementloginsubject" />
            	<?php endif; ?>
                <span class="howto"><?php esc_html_e('The subject of the email when a subscriber authenticates.', 'wp-mailinglist'); ?></span>
            </td>
        </tr>
        <tr>
	        <th><label for="authenticatelinktext"><?php esc_html_e('Authenticate Link Text', 'wp-mailinglist'); ?></label></th>
	        <td>
		        <?php if ($this -> language_do()) : ?>
            		<?php 
					
					$languages = $this -> language_getlanguages(); 
					$authenticatelinktext = $this -> get_option('authenticatelinktext');
					
					?>
					<div id="authenticatelinktexttabs">
						<ul>
							<?php $tabnumber = 1; ?>
			                <?php foreach ($languages as $language) : ?>
			                 	<li><a href="#authenticatelinktexttab<?php echo esc_html($tabnumber); ?>"><?php echo wp_kses_post( $this -> language_flag($language)); ?></a></li>
			                    <?php $tabnumber++; ?>
			                <?php endforeach; ?>
			            </ul>
			            
			            <?php $tabnumber = 1; ?>
			            <?php foreach ($languages as $language) : ?>
			            	<div id="authenticatelinktexttab<?php echo esc_html($tabnumber); ?>">
			            		<input type="text" name="authenticatelinktext[<?php echo esc_html( $language); ?>]" value="<?php echo esc_attr(wp_unslash($this -> language_use($language, $authenticatelinktext))); ?>" id="authenticatelinktext_<?php echo esc_html( $language); ?>" class="widefat" />
			            	</div>
			            	<?php $tabnumber++; ?>
			            <?php endforeach; ?>
					</div>
					
					<script type="text/javascript">
					jQuery(document).ready(function() {
						if (jQuery.isFunction(jQuery.fn.tabs)) {
							jQuery('#authenticatelinktexttabs').tabs();
						}
					});
					</script>
            	<?php else : ?>
            		<input type="text" class="widefat" name="authenticatelinktext" value="<?php echo esc_attr(wp_unslash($this -> get_option('authenticatelinktext'))); ?>" id="authenticatelinktext" />
            	<?php endif; ?>
		        <span class="howto"><?php esc_html_e('Text of the link in the Manage Subscriptions authentication email', 'wp-mailinglist'); ?></span>
	        </td>
        </tr>
        <tr class="advanced-setting">
	        <th><label for="managementauthtype_3"><?php esc_html_e('Authentication Type', 'wp-mailinglist'); ?></label></th>
	        <td>
		        <label><input <?php echo (!empty($managementauthtype) && $managementauthtype == 1) ? 'checked="checked"' : ''; ?> type="radio" name="managementauthtype" value="1" id="managementauthtype_1" /> <?php esc_html_e('Cookie', 'wp-mailinglist'); ?></label>
		        <label><input <?php echo (!empty($managementauthtype) && $managementauthtype == 2) ? 'checked="checked"' : ''; ?> type="radio" name="managementauthtype" value="2" id="managementauthtype_2" /> <?php esc_html_e('Session', 'wp-mailinglist'); ?></label>
		        <label><input <?php echo (!empty($managementauthtype) && $managementauthtype == 3) ? 'checked="checked"' : ''; ?> type="radio" name="managementauthtype" value="3" id="managementauthtype_3" /> <?php esc_html_e('Both (Cookie & Session)', 'wp-mailinglist'); ?></label>
	        </td>
        </tr>
        <tr class="advanced-setting">
	        <th><label for="management_password"><?php esc_html_e('Password Authentication', 'wp-mailinglist'); ?></label></th>
	        <td>
		        <label><input <?php echo (!empty($management_password)) ? 'checked="checked"' : ''; ?> type="checkbox" name="management_password" value="1" id="management_password" /> <?php esc_html_e('Yes, allow password authentication for manage subscriptions', 'wp-mailinglist'); ?></label>
		        <span class="howto"><?php esc_html_e('Allow subscribers to set a password to login to manage subscriptions in the future.', 'wp-mailinglist'); ?></span>
	        </td>
        </tr>
        <tr>
	        <th><label for="managementdelete"><?php esc_html_e('Delete Account Button', 'wp-mailinglist'); ?></label></th>
	        <td>
		        <label><input type="checkbox" <?php echo (!empty($managementdelete)) ? 'checked="checked"' : ''; ?> name="managementdelete" value="1" id="managementdelete" /> <?php esc_html_e('Yes, show a "Delete Account" button in Manage Subscriptions.', 'wp-mailinglist'); ?></label>
	        </td>
        </tr>
        <tr>
	        <th><label for="managementshowsubscriptions_Y"><?php esc_html_e('Show Current Subscriptions', 'wp-mailinglist'); ?></label></th>
	        <td>
		        <label><input <?php echo (empty($managementshowsubscriptions) || (!empty($managementshowsubscriptions) && $managementshowsubscriptions == "Y")) ? 'checked="checked"' : ''; ?> type="radio" name="managementshowsubscriptions" value="Y" id="managementshowsubscriptions_Y" /> <?php esc_html_e('Yes', 'wp-mailinglist'); ?></label>
		        <label><input <?php echo (!empty($managementshowsubscriptions) && $managementshowsubscriptions == "N") ? 'checked="checked"' : ''; ?> type="radio" name="managementshowsubscriptions" value="N" id="managementshowsubscriptions_N" /> <?php esc_html_e('No', 'wp-mailinglist'); ?></label>
	        </td>
        </tr>
        <tr>
	        <th><label for="managementshowprivate"><?php esc_html_e('Show Private Lists', 'wp-mailinglist'); ?></label></th>
	        <td>
		        <label><input <?php echo (!empty($managementshowprivate)) ? 'checked="checked"' : ''; ?> type="checkbox" name="managementshowprivate" value="1" id="managementshowprivate" /> <?php esc_html_e('Yes, show private lists', 'wp-mailinglist'); ?></label>
	        </td>
        </tr>
        <tr>
        	<th><label for="managementallownewsubscribes_Y"><?php esc_html_e('Allow New Subscribes', 'wp-mailinglist'); ?></label></th>
            <td>
            	<label><input <?php echo ($this -> get_option('managementallownewsubscribes') == "Y") ? 'checked="checked"' : ''; ?> type="radio" name="managementallownewsubscribes" value="Y" id="managementallownewsubscribes_Y" /> <?php esc_html_e('Yes', 'wp-mailinglist'); ?></label>
                <label><input <?php echo ($this -> get_option('managementallownewsubscribes') == "N") ? 'checked="checked"' : ''; ?> type="radio" name="managementallownewsubscribes" value="N" id="managementallownewsubscribes_N" /> <?php esc_html_e('No', 'wp-mailinglist'); ?></label>
            	<span class="howto"><?php esc_html_e('Should other, non-private lists be shown for subscribers to subscribe to?', 'wp-mailinglist'); ?></span>
            </td>
        </tr>
        <tr>
        	<th><label for="managementcustomfields_Y"><?php esc_html_e('Custom Fields In Management', 'wp-mailinglist'); ?></label></th>
            <td>
            	<label><input onclick="jQuery('#managementcustomfieldsdiv').show();" <?php echo ($this -> get_option('managementcustomfields') == "Y") ? 'checked="checked"' : ''; ?> type="radio" name="managementcustomfields" value="Y" id="managementcustomfields_Y" /> <?php esc_html_e('Yes', 'wp-mailinglist'); ?></label>
                <label><input onclick="jQuery('#managementcustomfieldsdiv').hide();" <?php echo ($this -> get_option('managementcustomfields') == "N") ? 'checked="checked"' : ''; ?> type="radio" name="managementcustomfields" value="N" id="managementcustomfields_N" /> <?php esc_html_e('No', 'wp-mailinglist'); ?></label>
            	<span class="howto"><?php esc_html_e('Should custom fields be shown in the management section to allow subscribers to edit values?', 'wp-mailinglist'); ?></span>
            </td>
        </tr>
    </tbody>
</table>

<div class="newsletters_indented" class="advanced-setting" id="managementcustomfieldsdiv" style="display:<?php echo ($this -> get_option('managementcustomfields') == "Y") ? 'block' : 'none'; ?>;">
	<table class="form-table">
		<tbody>
			<tr>
	        	<th><label for="managementallowemailchange_Y"><?php esc_html_e('Allow Changing Email Address', 'wp-mailinglist'); ?></label></th>
	        	<td>
	        		<label><input <?php echo ($this -> get_option('managementallowemailchange') == "Y") ? 'checked="checked"' : ''; ?> type="radio" name="managementallowemailchange" value="Y" id="managementallowemailchange_Y" /> <?php esc_html_e('Yes', 'wp-mailinglist'); ?></label>
	        		<label><input <?php echo ($this -> get_option('managementallowemailchange') == "N") ? 'checked="checked"' : ''; ?> type="radio" name="managementallowemailchange" value="N" id="managementallowemailchange_N" /> <?php esc_html_e('No', 'wp-mailinglist'); ?></label>
	        		<span class="howto"><?php esc_html_e('Allow subscribers to change their email address?', 'wp-mailinglist'); ?></span>
	        	</td>
	        </tr>
	        <tr>
	        	<th><label for=""><?php esc_html_e('Allow Changing of Format', 'wp-mailinglist'); ?></label></th>
	        	<td>
	        		<?php $managementformatchange = $this -> get_option('managementformatchange'); ?>
	        		<label><input <?php echo (!empty($managementformatchange) && $managementformatchange == "Y") ? 'checked="checked"' : ''; ?> type="radio" name="managementformatchange" value="Y" id="managementformatchange_Y" /> <?php esc_html_e('Yes', 'wp-mailinglist'); ?></label>
	        		<label><input <?php echo (!empty($managementformatchange) && $managementformatchange == "N") ? 'checked="checked"' : ''; ?> type="radio" name="managementformatchange" value="N" id="managementformatchange_N" /> <?php esc_html_e('No', 'wp-mailinglist'); ?></label>
	        		<span class="howto"><?php esc_html_e('Let subscribers choose between HTML and TEXT formatted emails.', 'wp-mailinglist'); ?></span>
	        	</td>
	        </tr>
		</tbody>
	</table>
</div>