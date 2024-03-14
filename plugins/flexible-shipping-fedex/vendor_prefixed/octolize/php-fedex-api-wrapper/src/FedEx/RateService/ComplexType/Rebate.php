<?php

namespace FedExVendor\FedEx\RateService\ComplexType;

use FedExVendor\FedEx\AbstractComplexType;
/**
 * Rebate
 *
 * @author      Jeremy Dunn <jeremy@jsdunn.info>
 * @package     PHP FedEx API wrapper
 * @subpackage  Rate Service
 *
 * @property \FedEx\RateService\SimpleType\RebateType|string $RebateType
 * @property string $Description
 * @property Money $Amount
 * @property float $Percent
 */
class Rebate extends \FedExVendor\FedEx\AbstractComplexType
{
    /**
     * Name of this complex type
     *
     * @var string
     */
    protected $name = 'Rebate';
    /**
     * Set RebateType
     *
     * @param \FedEx\RateService\SimpleType\RebateType|string $rebateType
     * @return $this
     */
    public function setRebateType($rebateType)
    {
        $this->values['RebateType'] = $rebateType;
        return $this;
    }
    /**
     * Set Description
     *
     * @param string $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->values['Description'] = $description;
        return $this;
    }
    /**
     * Set Amount
     *
     * @param Money $amount
     * @return $this
     */
    public function setAmount(\FedExVendor\FedEx\RateService\ComplexType\Money $amount)
    {
        $this->values['Amount'] = $amount;
        return $this;
    }
    /**
     * Set Percent
     *
     * @param float $percent
     * @return $this
     */
    public function setPercent($percent)
    {
        $this->values['Percent'] = $percent;
        return $this;
    }
}
