<?php 
/**
	Admin Page Framework v3.9.0b10 by Michael Uno 
	Generated by PHP Class Files Script Generator <https://github.com/michaeluno/PHP-Class-Files-Script-Generator>
	<http://en.michaeluno.jp/task-scheduler>
	Copyright (c) 2013-2021, Michael Uno; Licensed under MIT <http://opensource.org/licenses/MIT> */
class TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator extends TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator_Base {
    public $oFactory;
    public $aInputs = array();
    public $aRawInputs = array();
    public $aOptions = array();
    public function __construct($oFactory) {
        $this->oFactory = $oFactory;
        add_filter("validation_pre_" . $this->oFactory->oProp->sClassName, array($this, '_replyToValidateUserFormInputs'), 10, 4);
    }
    public function _replyToValidateUserFormInputs($aInputs, $aRawInputs, $aOptions, $oFactory) {
        $_sTabSlug = sanitize_text_field($this->getElement($_POST, 'tab_slug', ''));
        $_sPageSlug = sanitize_text_field($this->getElement($_POST, 'page_slug', ''));
        $_aSubmits = $this->getHTTPRequestSanitized($this->getElementAsArray($_POST, '__submit', array()));
        $_sPressedInputName = $this->_getPressedSubmitButtonData($_aSubmits, 'name');
        $_sSubmitSectionID = $this->_getPressedSubmitButtonData($_aSubmits, 'section_id');
        $_aSubmitsInformation = array('page_slug' => $_sPageSlug, 'tab_slug' => $_sTabSlug, 'input_id' => $this->_getPressedSubmitButtonData($_aSubmits, 'input_id'), 'section_id' => $_sSubmitSectionID, 'field_id' => $this->_getPressedSubmitButtonData($_aSubmits, 'field_id'), 'input_name' => $_sPressedInputName,);
        $_aClassNames = array('TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__Link', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__Redirect', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__Import', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__Export', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__Reset', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__ResetConfirm', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__ContactForm', 'TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__ContactFormConfirm',);
        foreach ($_aClassNames as $_sClassName) {
            new $_sClassName($this->oFactory);
        }
        try {
            $this->addAndDoActions($this->oFactory, 'try_validation_before_' . $this->oFactory->oProp->sClassName, $aInputs, $aRawInputs, $_aSubmits, $_aSubmitsInformation, $this->oFactory);
            $_oFormSubmissionFilter = new TaskScheduler_AdminPageFramework_Model__FormSubmission__Validator__Filter($this->oFactory, $aInputs, $aRawInputs, $aOptions, $_aSubmitsInformation);
            $aInputs = $_oFormSubmissionFilter->get();
            $this->addAndDoActions($this->oFactory, 'try_validation_after_' . $this->oFactory->oProp->sClassName, $aInputs, $aRawInputs, $_aSubmits, $_aSubmitsInformation, $this->oFactory);
        }
        catch(Exception $_oException) {
            $_sPropertyName = $_oException->getMessage();
            if (isset($_oException->$_sPropertyName)) {
                $this->_setSettingNoticeAfterValidation(empty($_oException->{$_sPropertyName}));
                return $_oException->{$_sPropertyName};
            }
            return array();
        }
        $this->_setSettingNoticeAfterValidation(empty($aInputs));
        return $aInputs;
    }
    }
    