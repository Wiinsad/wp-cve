<?php

namespace FedExVendor\FedEx\PickupService\SimpleType;

use FedExVendor\FedEx\AbstractSimpleType;
/**
 * Identifies the environment (level) for which an AuthenticationCredential is valid, and within which transactions are received.
 *
 * @author      Jeremy Dunn <jeremy@jsdunn.info>
 * @package     PHP FedEx API wrapper
 * @subpackage  Pickup Service
 */
class WebServiceEnvironment extends \FedExVendor\FedEx\AbstractSimpleType
{
    const _PRODUCTION = 'PRODUCTION';
    const _TEST = 'TEST';
}
