<?php 
/**
	Admin Page Framework v3.9.0b10 by Michael Uno 
	Generated by PHP Class Files Script Generator <https://github.com/michaeluno/PHP-Class-Files-Script-Generator>
	<http://en.michaeluno.jp/task-scheduler>
	Copyright (c) 2013-2021, Michael Uno; Licensed under MIT <http://opensource.org/licenses/MIT> */
abstract class TaskScheduler_AdminPageFramework_Utility_SystemInformation extends TaskScheduler_AdminPageFramework_Utility_File {
    static private $_aPHPInfo;
    static public function getPHPInfo() {
        if (isset(self::$_aPHPInfo)) {
            return self::$_aPHPInfo;
        }
        ob_start();
        phpinfo(-1);
        $_sOutput = preg_replace(array('#^.*<body>(.*)</body>.*$#ms', '#<h2>PHP License</h2>.*$#ms', '#<h1>Configuration</h1>#', "#\r?\n#", "#</(h1|h2|h3|tr)>#", '# +<#', "#[ \t]+#", '#&nbsp;#', '#  +#', '# class=".*?"#', '%&#039;%', '#<tr>(?:.*?)" src="(?:.*?)=(.*?)" alt="PHP Logo" /></a>' . '<h1>PHP Version (.*?)</h1>(?:\n+?)</td></tr>#', '#<h1><a href="(?:.*?)\?=(.*?)">PHP Credits</a></h1>#', '#<tr>(?:.*?)" src="(?:.*?)=(.*?)"(?:.*?)Zend Engine (.*?),(?:.*?)</tr>#', "# +#", '#<tr>#', '#</tr>#'), array('$1', '', '', '', '</$1>' . "\n", '<', ' ', ' ', ' ', '', ' ', '<h2>PHP Configuration</h2>' . "\n" . '<tr><td>PHP Version</td><td>$2</td></tr>' . "\n" . '<tr><td>PHP Egg</td><td>$1</td></tr>', '<tr><td>PHP Credits Egg</td><td>$1</td></tr>', '<tr><td>Zend Engine</td><td>$2</td></tr>' . "\n" . '<tr><td>Zend Egg</td><td>$1</td></tr>', ' ', '%S%', '%E%'), ob_get_clean());
        $_aSections = explode('<h2>', strip_tags($_sOutput, '<h2><th><td>'));
        unset($_aSections[0]);
        $_aOutput = array();
        foreach ($_aSections as $_sSection) {
            $_iIndex = substr($_sSection, 0, strpos($_sSection, '</h2>'));
            preg_match_all('#%S%(?:<td>(.*?)</td>)?(?:<td>(.*?)</td>)?(?:<td>(.*?)</td>)?%E%#', $_sSection, $_aAskApache, PREG_SET_ORDER);
            foreach ($_aAskApache as $_aMatches) {
                if (!isset($_aMatches[1], $_aMatches[2])) {
                    array_slice($_aMatches, 2);
                    continue;
                }
                $_aOutput[$_iIndex][$_aMatches[1]] = !isset($_aMatches[3]) || $_aMatches[2] == $_aMatches[3] ? $_aMatches[2] : array_slice($_aMatches, 2);
            }
        }
        self::$_aPHPInfo = $_aOutput;
        return self::$_aPHPInfo;
    }
    static public function getDefinedConstants($asCategories = null, $asRemovingCategories = null) {
        $_aCategories = is_array($asCategories) ? $asCategories : array($asCategories);
        $_aCategories = array_filter($_aCategories);
        $_aRemovingCategories = is_array($asRemovingCategories) ? $asRemovingCategories : array($asRemovingCategories);
        $_aRemovingCategories = array_filter($_aRemovingCategories);
        $_aConstants = get_defined_constants(true);
        if (empty($_aCategories)) {
            return self::dropElementsByKey($_aConstants, $_aRemovingCategories);
        }
        return self::dropElementsByKey(array_intersect_key($_aConstants, array_flip($_aCategories)), $_aRemovingCategories);
    }
    static public function getPHPErrorLogPath() {
        $_aPHPInfo = self::getPHPInfo();
        return isset($_aPHPInfo['PHP Core']['error_log']) ? $_aPHPInfo['PHP Core']['error_log'] : '';
    }
    static public function getPHPErrorLog($iLines = 1) {
        $_sLog = self::getFileTailContents(self::getPHPErrorLogPath(), $iLines);
        return $_sLog ? $_sLog : print_r(@error_get_last(), true);
    }
    }
    