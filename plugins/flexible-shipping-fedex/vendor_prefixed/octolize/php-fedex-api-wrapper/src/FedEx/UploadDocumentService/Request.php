<?php

namespace FedExVendor\FedEx\UploadDocumentService;

use FedExVendor\FedEx\AbstractRequest;
/**
 * Request sends the SOAP call to the FedEx servers and returns the response
 *
 * @author      Jeremy Dunn <jeremy@jsdunn.info>
 * @package     PHP FedEx API wrapper
 * @subpackage  Upload Document Service
 */
class Request extends \FedExVendor\FedEx\AbstractRequest
{
    const PRODUCTION_URL = 'https://ws.fedex.com:443/web-services/uploaddocument';
    const TESTING_URL = 'https://wsbeta.fedex.com:443/web-services/uploaddocument';
    protected static $wsdlFileName = 'UploadDocumentService_v19.wsdl';
    /**
     * Sends the UploadDocumentsRequest and returns the response
     *
     * @param ComplexType\UploadDocumentsRequest $uploadDocumentsRequest
     * @param bool $returnStdClass Return the $stdClass response directly from \SoapClient
     * @return ComplexType\UploadDocumentsReply|stdClass
     */
    public function getUploadDocumentsReply(\FedExVendor\FedEx\UploadDocumentService\ComplexType\UploadDocumentsRequest $uploadDocumentsRequest, $returnStdClass = \false)
    {
        $response = $this->getSoapClient()->uploadDocuments($uploadDocumentsRequest->toArray());
        if ($returnStdClass) {
            return $response;
        }
        $uploadDocumentsReply = new \FedExVendor\FedEx\UploadDocumentService\ComplexType\UploadDocumentsReply();
        $uploadDocumentsReply->populateFromStdClass($response);
        return $uploadDocumentsReply;
    }
    /**
     * Sends the UploadDocumentsWithShipmentDataRequest and returns the response
     *
     * @param ComplexType\UploadDocumentsWithShipmentDataRequest $uploadDocumentsWithShipmentDataRequest
     * @param bool $returnStdClass Return the $stdClass response directly from \SoapClient
     * @return ComplexType\UploadDocumentsWithShipmentDataReply|stdClass
     */
    public function getUploadDocumentsWithShipmentDataReply(\FedExVendor\FedEx\UploadDocumentService\ComplexType\UploadDocumentsWithShipmentDataRequest $uploadDocumentsWithShipmentDataRequest, $returnStdClass = \false)
    {
        $response = $this->getSoapClient()->uploadDocumentsWithShipmentData($uploadDocumentsWithShipmentDataRequest->toArray());
        if ($returnStdClass) {
            return $response;
        }
        $uploadDocumentsWithShipmentDataReply = new \FedExVendor\FedEx\UploadDocumentService\ComplexType\UploadDocumentsWithShipmentDataReply();
        $uploadDocumentsWithShipmentDataReply->populateFromStdClass($response);
        return $uploadDocumentsWithShipmentDataReply;
    }
    /**
     * Sends the UploadImagesRequest and returns the response
     *
     * @param ComplexType\UploadImagesRequest $uploadImagesRequest
     * @param bool $returnStdClass Return the $stdClass response directly from \SoapClient
     * @return ComplexType\UploadImagesReply|stdClass
     */
    public function getUploadImagesReply(\FedExVendor\FedEx\UploadDocumentService\ComplexType\UploadImagesRequest $uploadImagesRequest, $returnStdClass = \false)
    {
        $response = $this->getSoapClient()->uploadImages($uploadImagesRequest->toArray());
        if ($returnStdClass) {
            return $response;
        }
        $uploadImagesReply = new \FedExVendor\FedEx\UploadDocumentService\ComplexType\UploadImagesReply();
        $uploadImagesReply->populateFromStdClass($response);
        return $uploadImagesReply;
    }
}
