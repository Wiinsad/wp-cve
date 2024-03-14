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

JHtml::fetch('vaphtml.assets.select2');
JHtml::fetch('vaphtml.assets.fancybox');
JHtml::fetch('vaphtml.assets.fontawesome');

// reviews section
$reviews_enabled = VikAppointments::isEmployeesReviewsEnabled();
$rev_sub_title 	 = '';

if ($this->employee->reviews->size > 0)
{
	$rev_sub_title = JText::sprintf('VAPREVIEWSSUBTITLE1', $this->employee->reviews->size);
}

if ($this->employee->reviews->votes > 0 && $this->employee->reviews->votes != $this->employee->reviews->size)
{
	if (!empty($rev_sub_title))
	{
		$rev_sub_title .= ', '; 
	}

	$rev_sub_title .= JText::sprintf('VAPREVIEWSSUBTITLE2', $this->employee->reviews->votes);
}

if (empty($rev_sub_title))
{
	$rev_sub_title = JText::translate('VAPNOREVIEWSSUBTITLE');
}

?>

<!-- EMPLOYEE DETAILS -->

<?php
// Register the employee details within a property of this class 
// to make it available also for the sublayout.
$this->displayData = array(
	'reviewsEnabled' => $reviews_enabled,
	'review_sub'     => $rev_sub_title,
);

// Get employee template with name, description,
// image and so on.
echo $this->loadTemplate('employee');
?>

<!-- CONTACT FORM -->

<?php
// load the contact form only if enabled
if ($this->employee->quick_contact)
{
	// get quick contact template
	echo $this->loadTemplate('contact');
}
?>

<!-- SEARCH FORM -->

<form name="empsearchform" action="<?php echo JRoute::rewrite('index.php?option=com_vikappointments&view=employeesearch&id_employee=' . $this->idEmployee  . ($this->itemid ? '&Itemid=' . $this->itemid : '')); ?>" method="post" id="vapempsearchform">
	
	<!-- FILTER BAR -->

	<?php
	// Get filterbar template, containing the selection of the service,
	// the month and the number of people.
	echo $this->loadTemplate('filterbar');
	?>

	<!-- CALENDARS -->

	<?php
	// get calendars template
	echo $this->loadTemplate('calendars');
	?>

	<!-- TIMELINE -->

	<?php
	/**
	 * Display timeline template.
	 * Before 1.7 version, this layout was included
	 * within default_calendar.php
	 *
	 * @since 1.7
	 */
	echo $this->loadTemplate('timeline');
	?>

	<!-- SERVICE DESCRIPTION -->

	<?php
	if ($this->service)
	{
		// fetch full service description
		$desc = VikAppointments::renderHtmlDescription($this->service->description, 'servicesearch');

		if ($desc)
		{
			?>
			<div class="vapserdescriptiondiv">
				<?php echo $desc; ?>
			</div>
			<?php
		}
	}
	?>

	<!-- OPTIONS -->

	<?php
	if ($this->employee->options)
	{
		// get options template
		echo $this->loadTemplate('options');
	}
	?>

	<!-- CHECKOUT -->

	<?php
	// get checkout template containing the recurrence box and the checkout buttons
	echo $this->loadTemplate('checkout');
	?>
	
	<input type="hidden" name="id_employee" value="<?php echo (int) $this->idEmployee; ?>" />
	<input type="hidden" name="date" value="<?php echo $this->escape($this->date); ?>" id="vapdayselected" />
	<input type="hidden" name="people" value="" id="vappeopleselected" />
	
	<input type="hidden" name="task" value="employeesearch" />
	<input type="hidden" name="option" value="com_vikappointments" />
</form>

<!-- CONFIRMATION FORM -->

<form name="confirmapp" action="<?php echo JRoute::rewrite('index.php?option=com_vikappointments&view=confirmapp' . ($this->itemid ? '&Itemid=' . $this->itemid : '')); ?>" method="post" id="vapempconfirmapp">
	
	<input type="hidden" name="id_service" value="" id="vapconfserselected" />
	<input type="hidden" name="id_employee" value="" id="vapconfempselected" />
	<input type="hidden" name="date" value="" id="vapconfdayselected" />
	<input type="hidden" name="hour" value="" id="vapconfhourselected" />
	<input type="hidden" name="min" value="" id="vapconfminselected" />
	<input type="hidden" name="people" value="1" id="vapconfpeopleselected" />
	
	<input type="hidden" name="from" value="2" />
	<input type="hidden" name="view" value="confirmapp" />
	<input type="hidden" name="option" value="com_vikappointments" />
	
</form>

<!-- REVIEWS -->

<?php 
if (VikAppointments::isEmployeesReviewsEnabled())
{
	// Register the review details within a property of this class 
	// to make it available also for the sublayout.
	$this->displayData = array(
		'subtitle' => $rev_sub_title,
	);

	// get reviews template
	echo $this->loadTemplate('reviews');
}
?>

<!-- WAITING LIST -->

<?php
if (VikAppointments::isWaitingList())
{
	// load resources needed to support the WL phone field
	JHtml::fetch('vaphtml.assets.intltel');
	// get waiting list template (modal box)
	echo $this->loadTemplate('waitlist');
}
?>

<script>

	/**
	 * @usedby 	views/employeesearch/tmpl/default_calendars.php
	 * @usedby 	layouts/blocks/checkout.php 	
	 */
	var LAST_TIMESTAMP_USED = null;

</script>
