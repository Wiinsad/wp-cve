<?php

namespace FedExVendor\FedEx\OpenShipService\ComplexType;

use FedExVendor\FedEx\AbstractComplexType;
/**
 * PendingShipmentProcessingOptionsRequested
 *
 * @author      Jeremy Dunn <jeremy@jsdunn.info>
 * @package     PHP FedEx API wrapper
 * @subpackage  OpenShip Service
 *
 * @property \FedEx\OpenShipService\SimpleType\PendingShipmentProcessingOptionType|string[] $Options
 */
class PendingShipmentProcessingOptionsRequested extends \FedExVendor\FedEx\AbstractComplexType
{
    /**
     * Name of this complex type
     *
     * @var string
     */
    protected $name = 'PendingShipmentProcessingOptionsRequested';
    /**
     * Set Options
     *
     * @param \FedEx\OpenShipService\SimpleType\PendingShipmentProcessingOptionType[]|string[] $options
     * @return $this
     */
    public function setOptions(array $options)
    {
        $this->values['Options'] = $options;
        return $this;
    }
}
