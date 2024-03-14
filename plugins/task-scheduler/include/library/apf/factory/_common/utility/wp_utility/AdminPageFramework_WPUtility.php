<?php 
/**
	Admin Page Framework v3.9.0b10 by Michael Uno 
	Generated by PHP Class Files Script Generator <https://github.com/michaeluno/PHP-Class-Files-Script-Generator>
	<http://en.michaeluno.jp/task-scheduler>
	Copyright (c) 2013-2021, Michael Uno; Licensed under MIT <http://opensource.org/licenses/MIT> */
class TaskScheduler_AdminPageFramework_WPUtility extends TaskScheduler_AdminPageFramework_WPUtility_SystemInformation {
    static private $___iCustomNonceLifeSpan;
    static public function getNonceCreated($sAction = - 1, $iLifespan = 86400) {
        self::$___iCustomNonceLifeSpan = $iLifespan;
        add_filter('nonce_life', array(__CLASS__, '_replyToSetNonceLifeSpan'));
        $_sNonce = ( string )wp_create_nonce($sAction);
        remove_filter('nonce_life', array(__CLASS__, '_replyToSetNonceLifeSpan'));
        self::$___iCustomNonceLifeSpan = null;
        return $_sNonce;
    }
    static public function _replyToSetNonceLifeSpan($iLifespanInSeconds) {
        return self::$___iCustomNonceLifeSpan;
        return isset(self::$___iCustomNonceLifeSpan) ? self::$___iCustomNonceLifeSpan : $iLifespanInSeconds;
    }
    static public function getPostTypeSubMenuSlug($sPostTypeSlug, $aPostTypeArguments) {
        $_sCustomMenuSlug = self::getShowInMenuPostTypeArgument($aPostTypeArguments);
        if (is_string($_sCustomMenuSlug)) {
            return $_sCustomMenuSlug;
        }
        return 'edit.php?post_type=' . $sPostTypeSlug;
    }
    static public function getShowInMenuPostTypeArgument($aPostTypeArguments) {
        return self::getElement($aPostTypeArguments, 'show_in_menu', self::getElement($aPostTypeArguments, 'show_ui', self::getElement($aPostTypeArguments, 'public', false)));
    }
    static public function getWPAdminDirPath() {
        $_sWPAdminPath = str_replace(get_bloginfo('url') . '/', ABSPATH, get_admin_url());
        return rtrim($_sWPAdminPath, '/');
    }
    static public function goToLocalURL($sURL, $oCallbackOnError = null) {
        self::redirectByType($sURL, 1, $oCallbackOnError);
    }
    static public function goToURL($sURL, $oCallbackOnError = null) {
        self::redirectByType($sURL, 0, $oCallbackOnError);
    }
    static public function redirectByType($sURL, $iType = 0, $oCallbackOnError = null) {
        $_iRedirectError = self::getRedirectPreError($sURL, $iType);
        if ($_iRedirectError && is_callable($oCallbackOnError)) {
            call_user_func_array($oCallbackOnError, array($_iRedirectError, $sURL,));
            return;
        }
        $_sFunctionName = array(0 => 'wp_redirect', 1 => 'wp_safe_redirect',);
        exit($_sFunctionName[( integer )$iType]($sURL));
    }
    static public function getRedirectPreError($sURL, $iType) {
        if (!$iType && filter_var($sURL, FILTER_VALIDATE_URL) === false) {
            return 1;
        }
        if (headers_sent()) {
            return 2;
        }
        return 0;
    }
    static public function isDebugMode() {
        return ( boolean )defined('WP_DEBUG') && WP_DEBUG;
    }
    static public function isDoingAjax() {
        return defined('DOING_AJAX') && DOING_AJAX;
    }
    static public function flushRewriteRules() {
        if (self::$_bIsFlushed) {
            return;
        }
        flush_rewrite_rules();
        self::$_bIsFlushed = true;
    }
    static private $_bIsFlushed = false;
    }
    