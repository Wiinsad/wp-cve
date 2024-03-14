<?php

namespace FedExVendor\FedEx\RateService\SimpleType;

use FedExVendor\FedEx\AbstractSimpleType;
/**
 * Specifies the type of brokerage to be applied to a shipment.
 *
 * @author      Jeremy Dunn <jeremy@jsdunn.info>
 * @package     PHP FedEx API wrapper
 * @subpackage  Rate Service
 */
class ClearanceBrokerageType extends \FedExVendor\FedEx\AbstractSimpleType
{
    const _BROKER_INCLUSIVE = 'BROKER_INCLUSIVE';
    const _BROKER_INCLUSIVE_NON_RESIDENT_IMPORTER = 'BROKER_INCLUSIVE_NON_RESIDENT_IMPORTER';
    const _BROKER_SELECT = 'BROKER_SELECT';
    const _BROKER_SELECT_NON_RESIDENT_IMPORTER = 'BROKER_SELECT_NON_RESIDENT_IMPORTER';
    const _BROKER_UNASSIGNED = 'BROKER_UNASSIGNED';
}
