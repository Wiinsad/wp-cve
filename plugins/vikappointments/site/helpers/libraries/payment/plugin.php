<?php
/** 
 * @package     VikAppointments
 * @subpackage  core
 * @author      E4J s.r.l.
 * @copyright   Copyright (C) 2021 E4J s.r.l. All Rights Reserved.
 * @license     http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 * @link        https://vikwp.com
 */

// No direct access
defined('ABSPATH') or die('No script kiddies please!');

/**
 * Payment adpater used to allow third-party plugins to perform the payment process.
 *
 * The I/O of this class MUST be the same for all the E4J programs that support
 * extendable payment methods.
 *
 * @note  The class prefix is equals to the 3-letter name of the program,
 *        "VAP" in this case.
 *
 * @since 1.7.1
 */
final class VAPPaymentPlugin
{
	/**
	 * The payment driver name.
	 *
	 * @var string
	 */
	private $driver;

	/**
	 * The order information needed to complete the payment process.
	 *
	 * @var JRegistry
	 */
	private $order;

	/**
	 * The payment configuration.
	 *
	 * @var JRegistry
	 */
	private $params;

	/**
	 * The event dispatcher instance.
	 *
	 * @var mixed
	 */
	private $dispatcher;
	
	/**
	 * Class constructor.
	 *
	 * @param 	string 	$driver  The driver name.
	 * @param 	array 	$order 	 The order info array.
	 * @param 	array 	$params  The payment configuration saved through the fields
	 *                           generated by onLoadPaymentMethodConfigurationForm.
	 */
	public function __construct($driver, $order, $params = array())
	{
		$this->driver = $driver;
		$this->order  = new JRegistry($order);
		$this->params = new JRegistry($params);

		/**
		 * Create the event dispatcher.
		 *
		 * @note  Handle the dispatcher according to the platform version.
		 */
		$this->dispatcher = VAPFactory::getEventDispatcher();
	}

	/**
	 * This method is invoked every time a user visits the page of a 
	 * reservation with PENDING Status.
	 *
	 * @return 	void
	 */
	public function showPayment()
	{
		/**
		 * Trigger hook to allow third-party plugins to start a payment transaction.
		 * Here it is possible to do a redirect to the bank website or to display
		 * a seamless form.
		 *
		 * @note  The caller (1st argument) must be equals to the program in use.
		 *
		 * @param 	string     $element  The component that triggered this event.
		 * @param 	string     $payment  The ID of the payment driver.
		 * @param 	JRegistry  $order    The order info registry.
		 * @param 	JRegistry  $params   The payment configuration saved through the fields
		 *                               generated by onLoadPaymentMethodConfigurationForm.
		 *
		 * @return 	string     The HTML to display.
		 *
		 * @since 	1.7.1
		 */
		$results = $this->dispatcher->trigger('onStartPaymentTransaction', array('vikappointments', $this->driver, $this->order, $this->params));

		// auto-display all the returned strings
		echo implode("\n", array_filter($results));
	}

	/**
	 * Validates the transaction details sent from the bank. 
	 * This method is invoked by the system every time the Notify URL 
	 * is visited (the one used in the showPayment() method). 
	 *
	 * @return 	array 	The array result, which MUST contain the "verified" key (1 or 0).
	 */
	public function validatePayment()
	{
		/**
		 * Create payment status.
		 *
		 * @note  The status class must be loaded and renamed
		 *        according to the program requirements.
		 */
		VAPLoader::import('libraries.payment.status');
		$status = new VAPPaymentStatus();

		/**
		 * Trigger hook to allow third-party plugins to validate the transaction started
		 * through the showPayment method.
		 *
		 * @note  The caller (1st argument) must be equals to the program in use.
		 *
		 * @param 	string            $element  The component that triggered this event.
		 * @param 	string            $payment  The ID of the payment driver.
		 * @param 	VAPPaymentStatus  $status   The object holding the payment status.
		 * @param 	JRegistry         $order    The order info registry.
		 * @param 	JRegistry         $params   The payment configuration saved through the fields
		 *                                      generated by onLoadPaymentMethodConfigurationForm.
		 *
		 * @return 	void
		 *
		 * @since 	1.7.1
		 */
		$this->dispatcher->trigger('onValidatePaymentTransaction', array('vikappointments', $this->driver, $status, $this->order, $this->params));

		return $status;
	}

	/**
	 * This function is called after the payment has been validated for redirect actions.
	 * When this method is called, the class is invoked after the validatePayment() function.
	 *
	 * @param 	boolean  $result  The result of the transaction.
	 *
	 * @return 	void
	 */
	public function afterValidation($result = false)
	{
		/**
		 * Trigger hook to allow third-party plugins to do something after validating
		 * a payment transaction, in example to do a redirect or to terminate the session.
		 *
		 * @note  The caller (1st argument) must be equals to the program in use.
		 *
		 * @param 	string     $element  The component that triggered this event.
		 * @param 	string     $payment  The ID of the payment driver.
		 * @param 	boolean    $status   True in case of success, false otherwise.
		 * @param 	JRegistry  $order    The order info registry.
		 * @param 	JRegistry  $params   The payment configuration saved through the fields
		 *                               generated by onLoadPaymentMethodConfigurationForm.
		 *
		 * @return 	void
		 *
		 * @since 	1.7.1
		 */
		$this->dispatcher->trigger('onCompletePaymentTransaction', array('vikappointments', $this->driver, $result, $this->order, $this->params));
	}

	/**
	 * Performs the refund request of a payment.
	 *
	 * @return 	array 	The array result, which MUST contain the "verified" key (1 or 0).
	 */
	public function refund()
	{
		/**
		 * Create payment status.
		 *
		 * @note  The status class must be loaded and renamed
		 *        according to the program requirements.
		 */
		VAPLoader::import('libraries.payment.status');
		$status = new VAPPaymentStatus();

		/**
		 * Trigger hook to allow third-party plugins to perform a refund of a transaction.
		 *
		 * @note  The caller (1st argument) must be equals to the program in use.
		 *
		 * @param 	string            $element  The component that triggered this event.
		 * @param 	string            $payment  The ID of the payment driver.
		 * @param 	VAPPaymentStatus  $status   The object holding the payment status.
		 * @param 	JRegistry         $order    The order info registry.
		 * @param 	JRegistry         $params   The payment configuration saved through the fields
		 *                                      generated by onLoadPaymentMethodConfigurationForm.
		 *
		 * @return 	void
		 *
		 * @since 	1.7.1
		 */
		$this->dispatcher->trigger('onRefundPaymentTransaction', array('vikappointments', $this->driver, $status, $this->order, $this->params));

		return $status;
	}
}
