<?php

use CKPL\Pay\Exception\Api\PublicKeyAlreadyExistException;
use CKPL\Pay\Exception\ConfigurationException;
use CKPL\Pay\Exception\Exception;
use CKPL\Pay\Pay;
use WC_Gateway_Conotoxia_Pay_Logger as Logger;

class WC_Gateway_Conotoxia_Pay extends WC_Payment_Gateway_Conotoxia
{

    public function __construct()
    {
        $this->id = Identifier::CONOTOXIA_PAY;
        $this->title = __('Conotoxia Pay', CONOTOXIA_PAY);
        $this->description = __('Pay conveniently online with Conotoxia Pay.', CONOTOXIA_PAY);
        $this->has_fields = true;
        $this->method_title = __('Conotoxia Pay payment gateway', CONOTOXIA_PAY);
        $this->method_description = __('Accept payments using the Conotoxia Pay payment gateway.', CONOTOXIA_PAY);
        $this->supports = [
            'products',
            'refunds'
        ];
        $this->init_payment_icon('images/conotoxia_pay_logo.svg');

        $this->init_settings();
        if ($this->is_admin_panel()) {
            $this->init_form_fields();
            add_action('admin_enqueue_scripts', [$this, 'custom_admin_options']);
        }

        // Hooks
        add_action('woocommerce_update_options_payment_gateways_' . $this->id, [$this, 'process_admin_options']);
        add_action('woocommerce_api_wc_gateway_' . $this->id, [$this, 'process_incoming_request']);

        // Filters
        add_filter('woocommerce_thankyou_order_received_text', [$this, 'process_order_received'], 10, 2);
        add_filter('woocommerce_available_payment_gateways', [$this, 'hide_payment_gateway']);
        add_filter(
            'woocommerce_settings_api_form_fields_' . Identifier::CONOTOXIA_PAY_BLIK,
            [$this, 'add_required_form_fields']
        );
    }

    /**
     * Called when configuration page is loading
     * @return void
     */
    public function init_form_fields(): void
    {
        $this->form_fields = [
            'enabled' => [
                'title' => __('Enable/Disable', CONOTOXIA_PAY),
                'label' => __('Enable Conotoxia Pay payment method', CONOTOXIA_PAY),
                'type' => 'checkbox',
                'default' => 'no',
            ],
            'client_id' => [
                'title' => __('API Client identifier', CONOTOXIA_PAY),
                'type' => 'text',
                'description' => __('API Client identifier can be generated in the Merchant\'s Panel on Configuration page.', CONOTOXIA_PAY),
                'desc_tip' => true
            ],
            'client_secret' => [
                'title' => __('API Client secret', CONOTOXIA_PAY),
                'type' => 'password',
                'description' => __('API Client secret can be generated in the Merchant\'s Panel on Configuration page.', CONOTOXIA_PAY),
                'desc_tip' => true
            ],
            'point_of_sale' => [
                'title' => __('Point of Sale identifier', CONOTOXIA_PAY),
                'type' => 'text',
                'description' => __('Point of Sale identifier is generated by the Conotoxia Pay system in the Merchant\'s Panel (e.g. POS1234567898765432).', CONOTOXIA_PAY),
                'desc_tip' => true
            ],
            'private_key' => [
                'title' => __('Private key', CONOTOXIA_PAY),
                'type' => 'textarea',
                'description' =>
                    '<div id="cx-private-key-description">' .
                    '<button type="button" id="js-cx-generate-key-button">' .
                    __('Generate new key', CONOTOXIA_PAY) .
                    '</button>' .
                    '<span id="js-cx-generate-key-toast"></span>' .
                    '</div>'
            ],
            'public_key_id' => [
                'title' => __('Public key identifier', CONOTOXIA_PAY),
                'type' => 'text',
                'description' => __('This field is automatically generated based on the public key.', CONOTOXIA_PAY),
                'desc_tip' => true,
                'custom_attributes' => [
                    'readonly' => true
                ]
            ],
            'public_key' => [
                'title' => __('Public key', CONOTOXIA_PAY),
                'type' => 'textarea',
                'description' => __('RSA public key that will be sent to Conotoxia Pay. This field is automatically generated based on the private key.', CONOTOXIA_PAY),
                'desc_tip' => true,
                'custom_attributes' => [
                    'readonly' => true
                ]
            ],
            'sandbox' => [
                'title' => __('Sandbox mode', CONOTOXIA_PAY),
                'description' => __('Enable sandbox mode to test payments. For more information on setting up a test account, please contact our ', CONOTOXIA_PAY) . nl2br('<a href="' . __('sales www', CONOTOXIA_PAY) . '" target="_blank" rel="noopener noreferrer">' . __('sales department.', CONOTOXIA_PAY) . '</a>'),
                'type' => 'checkbox',
                'default' => 'no',
            ],
            'asDefault' => [
                'title' => __('Default payment method', CONOTOXIA_PAY),
                'description' => __('Sets ConotoxiaPay as the default payment method.', CONOTOXIA_PAY),
                'type' => 'checkbox',
                'default' => 'no',
            ],
            'icon' => [
                'title' => __('Conotoxia Pay payment icon', CONOTOXIA_PAY),
                'description' => __('Show the Conotoxia Pay icon on the payment method selection screen.', CONOTOXIA_PAY),
                'type' => 'checkbox',
                'default' => 'yes',
            ],
            'blik' => [
                'label' => 'BLIK',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'visa' => [
                'label' => 'Visa',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'mastercard' => [
                'label' => 'Mastercard',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'bancontact' => [
                'label' => 'Bancontact (BCMC)',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'cartes_bancaires' => [
                'label' => 'Cartes Bancaires',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'dankort' => [
                'label' => 'Dankort',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'discover' => [
                'label' => 'Discover',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'diners_club' => [
                'label' => 'Diners Club',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'jcb' => [
                'label' => 'JCB',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'union_pay' => [
                'label' => 'UnionPay',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'online_transfer' => [
                'title' => __('Payment method icons', CONOTOXIA_PAY),
                'label' => __('Online transfer', CONOTOXIA_PAY),
                'type' => 'checkbox',
                'default' => 'no',
                'class' => 'js-cx-payment-method'
            ],
            'google_pay' => [
                'label' => 'Google Pay',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'apple_pay' => [
                'label' => 'Apple Pay',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no'
            ],
            'pay_pal' => [
                'label' => 'PayPal',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
            ],
            'skrill' => [
                'label' => 'Skril Wallet',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
            ],
            'vipps' => [
                'label' => 'Vipps',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
            ],
            'rapid_transfer' => [
                'label' => 'Rapid Transfer',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
            ],
            'trustly' => [
                'label' => 'Trustly',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
            ],
            'eps' => [
                'label' => 'EPS',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
            ],
            'ideal' => [
                'label' => 'Ideal',
                'type' => 'checkbox',
                'class' => 'js-cx-payment-method',
                'default' => 'no',
                'description' => __('Show selected payment method icons on the payment method selection screen.', CONOTOXIA_PAY)
            ],
        ];
    }

    /**
     * @param array $form_fields
     * @return array
     */
    public function add_required_form_fields(array $form_fields): array
    {
        $read_only_field_description = __(
            'Here, you will see read-only data. To edit them, go to the Conotoxia Pay payment gateway.',
            CONOTOXIA_PAY
        );
        $form_fields['client_id'] = [
            'title' => __('API Client identifier', CONOTOXIA_PAY),
            'type' => 'text',
            'description' => $read_only_field_description,
            'desc_tip' => true,
            'custom_attributes' => [
                'readonly' => true,
            ],
            'default' => $this->settings['client_id'] ?? '',
        ];
        $form_fields['client_secret'] = [
            'title' => __('API Client secret', CONOTOXIA_PAY),
            'type' => 'password',
            'description' => $read_only_field_description,
            'desc_tip' => true,
            'custom_attributes' => [
                'readonly' => true,
            ],
            'default' => $this->settings['client_secret'] ?? '',
        ];
        $form_fields['point_of_sale'] = [
            'title' => __('Point of Sale identifier', CONOTOXIA_PAY),
            'type' => 'text',
            'description' => $read_only_field_description,
            'desc_tip' => true,
            'custom_attributes' => [
                'readonly' => true,
            ],
            'default' => $this->settings['point_of_sale'] ?? '',
        ];
        $form_fields['private_key'] = [
            'title' => __('Private key', CONOTOXIA_PAY),
            'type' => 'textarea',
            'description' => $read_only_field_description,
            'desc_tip' => true,
            'custom_attributes' => [
                'readonly' => true,
            ],
            'default' => $this->settings['private_key'] ?? '',
        ];
        $form_fields['public_key_id'] = [
            'title' => __('Public key identifier', CONOTOXIA_PAY),
            'type' => 'text',
            'description' => $read_only_field_description,
            'desc_tip' => true,
            'custom_attributes' => [
                'readonly' => true,
            ],
            'default' => $this->settings['public_key_id'] ?? '',
        ];
        $form_fields['public_key'] = [
            'title' => __('Public key', CONOTOXIA_PAY),
            'type' => 'textarea',
            'description' => $read_only_field_description,
            'desc_tip' => true,
            'custom_attributes' => [
                'readonly' => true,
            ],
            'default' => $this->settings['public_key'] ?? '',
        ];
        return $form_fields;
    }

    /**
     * @param mixed $available_payment_gateways
     * @return mixed
     */
    public function hide_payment_gateway($available_payment_gateways)
    {
        if (!$this->is_configuration_completed()) {
            unset($available_payment_gateways[Identifier::CONOTOXIA_PAY]);
            unset($available_payment_gateways[Identifier::CONOTOXIA_PAY_BLIK]);

            if (is_checkout()) {
                Logger::log('Configuration of the Conotoxia Pay plugin has not been completed. Go to plugin configuration and complete the missing fields.');
            }
        }

        return $available_payment_gateways;
    }

    /**
     * Handling payment creation.
     *
     * @param int $order_id
     *
     * @return array|bool
     */
    public function process_payment($order_id)
    {
        $order = wc_get_order($order_id);

        try {
            $payment = $this->create_payment($order);
            $created_payment = $this->initialize_conotoxia_pay()->payments()->makePayment($payment);

            $payment_id = $created_payment->getPaymentId();

            if(class_exists(\Automattic\WooCommerce\Utilities\OrderUtil::class)
                && \Automattic\WooCommerce\Utilities\OrderUtil::custom_orders_table_usage_is_enabled()) {
                    $payment_message = $order->get_transaction_id() ?
                        __('Conotoxia Pay: Re-payment %s has been created. Waiting for customer confirmation.', CONOTOXIA_PAY)
                        : __('Conotoxia Pay: Payment %s has been created. Waiting for customer confirmation.', CONOTOXIA_PAY);
                    $order->set_transaction_id($payment_id);
                    $order->add_order_note(sprintf($payment_message, $payment_id));
                    $order->save();
                }
            else {
                $this->save_transaction_id($order, $order_id, $payment_id);
            }

            WC()->cart->empty_cart();

            return [
                'result' => 'success',
                'redirect' => $created_payment->getApproveUrl()
            ];
        } catch (Exception | WC_Data_Exception $e) {
            Logger::log('Payment creation problem: ' . $e->getMessage());
            wc_add_notice(
                __('There was a problem with creating payment. Please contact the store support.', CONOTOXIA_PAY),
                'error'
            );
            return false;
        }
    }

    /**
     * Initialize settings.
     *
     * Overwritten in order to process enabled payment method icons as an array.
     * @return void
     */
    public function init_settings(): void
    {
        parent::init_settings();
        if (is_array($this->settings) && array_key_exists('icons', $this->settings)) {
            $enabled_payment_methods = $this->settings['icons'];
            foreach ($enabled_payment_methods as $payment_method) {
                $this->settings[$payment_method] = 'yes';
            }
        }
    }

    /**
     * Called when settings are saved on configuration page
     * @return bool
     */
    public function process_admin_options(): bool
    {
        $this->init_settings();
        $processed = $this->save_form_fields();

        $private_key = $this->get_option('private_key');
        if (empty($private_key)) {
            $this->update_option('public_key');
        } else {
            $public_key = $this->get_public_key($private_key);
            if ($public_key !== null) {
                $this->update_option('public_key', $public_key);
            } else {
                $this->update_option('public_key');
                $this->show_notice(__('Cannot generate public key from provided private key.', CONOTOXIA_PAY), 'error');
            }
        }

        if ($this->is_configuration_completed()) {
            try {
                $sdk = $this->initialize_conotoxia_pay();
                $sdk->merchant()->invalidateToken();
                $sdk->pickSignatureKey();
                $added_key_response = $sdk->merchant()->sendPublicKey();
                $this->update_option('public_key_id', $added_key_response->getKeyId());
                $this->show_notice(
                    __('Public key was successfully sent to Conotoxia Pay server.', CONOTOXIA_PAY),
                    'success'
                );
                if ($added_key_response->getStatus() !== 'ACTIVATED') {
                    $generate_keys_message = __(
                        'The generated public key is inactive. To complete the configuration, activate it in the',
                        CONOTOXIA_PAY
                    );
                    $merchant_panel = __('Conotoxia Merchant Panel.', CONOTOXIA_PAY);
                    $merchant_panel_url = __('https://fx.conotoxia.com/merchant/configuration', CONOTOXIA_PAY);
                    $this->show_notice($generate_keys_message . ' ' . "<a href='$merchant_panel_url' target='_blank' rel='noopener noreferrer'>$merchant_panel</a>");
                }
            } catch (PublicKeyAlreadyExistException $e) {
                $sdk->merchant()->setPublicKeyId($e->getKid());
                $this->update_option('public_key_id', $e->getKid());
            } catch (Exception $e) {
                $this->show_notice(
                    __('Cannot send public key to Conotoxia Pay server: ', CONOTOXIA_PAY) . __($e->getMessage(), CONOTOXIA_PAY),
                    'error'
                );
                Logger::log('Cannot send public key to Conotoxia Pay server: ' . $e->getMessage());
            }
        }

        return $processed;
    }

    /**
     * Saves form fields into DB.
     * @return bool
     */
    private function save_form_fields(): bool
    {
        $post_data = $this->get_post_data();
        $enabled_payment_methods = [];
        foreach ($this->get_form_fields() as $key => $field) {
            if ('title' !== $this->get_field_type($field)) {
                try {
                    $value = $this->get_field_value($key, $field, $post_data);
                    if ($this->is_payment_method($key)) {
                        unset($this->settings[$key]);
                        if ($value === 'yes') {
                            $enabled_payment_methods[] = $key;
                        }
                    } else {
                        $this->settings[$key] = $value;
                    }
                } catch (Exception $e) {
                    $this->add_error($e->getMessage());
                }
            }
        }
        $this->settings['icons'] = $enabled_payment_methods;
        return update_option(
            $this->get_option_key(),
            apply_filters('woocommerce_settings_api_sanitized_fields_' . $this->id, $this->settings),
            'yes'
        );
    }

    /**
     * @param string $value
     * @return bool
     */
    private function is_payment_method(string $value): bool
    {
        $payment_methods = ['blik',
            'visa', 'mastercard', 'bancontact', 'cartes_bancaires', 'dankort', 'discover', 'diners_club', 'jcb', 'union_pay',
            'online_transfer',
            'google_pay', 'apple_pay', 'pay_pal', 'skrill', 'vipps',
            'rapid_transfer', 'trustly', 'eps', 'ideal'];
        return in_array($value, $payment_methods);
    }

    /**
     * @return void
     */
    public function custom_admin_options(): void
    {
        $admin_options_script = 'admin_options_script';
        wp_enqueue_script(
            $admin_options_script,
            plugins_url('scripts/admin_options.js', __DIR__),
            ['jquery']
        );
        wp_localize_script(
            $admin_options_script,
            'translations',
            [
                'generateNewKey' => __('Generate new key', CONOTOXIA_PAY),
                'generating' => __('Generating...', CONOTOXIA_PAY),
                'rememberToSaveChangesAfterGeneratingKeys' => __(
                    'Remember to save changes after generating keys.',
                    CONOTOXIA_PAY
                ),
                'anErrorOccurredWhileGeneratingNewKey' => __(
                    'An error occurred while generating new key.',
                    CONOTOXIA_PAY
                ),
            ]
        );
        wp_localize_script(
            $admin_options_script,
            'adminAjax',
            [
                'url' => admin_url('admin-ajax.php')
            ]
        );

        wp_enqueue_style(
            'admin_options_style',
            plugins_url('styles/admin_options.css', __DIR__)
        );
    }

    /**
     * Displays payment method icons based on form fields
     * @return void
     */
    public function payment_fields(): void
    {
        parent::payment_fields();
        if ($this->has_fields()) {
            echo '<div style="display: flex; flex-wrap: wrap; column-gap: 10px; margin-top: 1em;">';
            foreach ($this->get_payment_method_icons(get_locale()) as $payment_method_icon) {
                $image_src = WC_HTTPS::force_https_url(
                    apply_filters(
                        CONOTOXIA_PAY . '_' . $payment_method_icon['name'],
                        plugins_url('images/' . $payment_method_icon['name'] . '.svg', __DIR__)
                    )
                );
                echo '<img src="' . esc_url($image_src) . '" style="min-width: 51px; min-height: 32px; margin-bottom: 0.5em;" alt="' . esc_attr($payment_method_icon['title']) . '"/>';
            }
            echo '</div>';
        }
    }

    /**
     * @return void
     */
    public function process_incoming_request(): void
    {
        if (isset($_SERVER['REQUEST_METHOD']) && sanitize_text_field($_SERVER['REQUEST_METHOD']) === 'POST') {
            $input = file_get_contents('php://input');

            try {
                $sdk = $this->initialize_conotoxia_pay();
                $notification = $sdk->notification()->getNotification($input);
            } catch (Exception $e) {
                Logger::log('Notification deserialization problem: ' . $e->getMessage());
                $this->send_problem_response(400);
                return;
            }

            if ($notification->isPaymentNotification()) {
                $this->process_incoming_payment($notification);
            } elseif ($notification->isRefundNotification()) {
                $this->process_incoming_refund($notification);
            } else {
                $this->send_problem_response(400, 'Unsupported notification');
            }
        } else {
            $this->send_problem_response(405);
        }
    }

    /**
     * @param $thank_you_title string
     * @param $order WC_Order
     * @return string
     */
    public function process_order_received($thank_you_title, $order): string
    {
        $data = isset($_REQUEST['data']) ? sanitize_text_field($_REQUEST['data']) : null;
        if (!$order || $data === null) {
            return $thank_you_title;
        }

        $payment_method = $order->get_payment_method();
        if ($payment_method !== $this->id) {
            return $thank_you_title;
        }

        try {
            $decoded_data = $this->initialize_conotoxia_pay()->payments()->decodeReturn($data);
        } catch (Exception $e) {
            Logger::log('Return url data deserialization problem: ' . $e->getMessage());
            return $thank_you_title;
        }
        if ((string)$order->get_id() !== $decoded_data->getExternalPaymentId()) {
            Logger::log('Order id ' . $order->get_id() . ' not match with this from url: ' . $decoded_data->getExternalPaymentId());
            return $thank_you_title;
        }
        if ($order->get_transaction_id() !== $decoded_data->getPaymentId()) {
            Logger::log('Payment id ' . $order->get_transaction_id() . ' not match with this from url: ' . $decoded_data->getPaymentId());
            return $thank_you_title;
        }

        switch ($decoded_data->getResult()) {
            case 'SUCCESS':
                $message = sprintf(__('Status: Payment %s completed.', CONOTOXIA_PAY), $decoded_data->getPaymentId());
                break;
            case 'SUCCESS_WITH_PAY_LATER':
                $message = sprintf(__('Status: Payment %s pending.', CONOTOXIA_PAY), $decoded_data->getPaymentId());
                break;
            case 'REJECTED':
                $message = sprintf(__('Status: Payment %s rejected.', CONOTOXIA_PAY), $decoded_data->getPaymentId());
                break;
            case 'ERROR':
                $message = sprintf(__('Status: Payment %s error.', CONOTOXIA_PAY), $decoded_data->getPaymentId());
                break;
            default:
                $message = __('Status: Payment error.', CONOTOXIA_PAY);
        }
        return esc_html($message);
    }

    /**
     * @return bool
     */
    public function is_sandbox_mode_enabled(): bool
    {
        return $this->get_option('sandbox') === 'yes';
    }

    /**
     * @param WC_Gateway_Conotoxia_Pay|null $primary_gateway
     * @return Pay
     * @throws ConfigurationException
     */
    public function initialize_conotoxia_pay(WC_Gateway_Conotoxia_Pay $primary_gateway = null): Pay
    {
        return parent::initialize_conotoxia_pay($this);
    }

    /**
     * @param string $language
     * @return array
     */
    private function get_payment_method_icons(string $language): array
    {
        $payment_method_icons_to_display = array();
        $enabled_payment_method_icons = $this->get_enabled_payment_methods();

        foreach ($this->get_payment_methods() as $payment_method) {
            if (in_array($payment_method['name'], $enabled_payment_method_icons)) {
                $payment_method_icons_to_display[] = $this->get_language_specific_payment_method_icon($language, $payment_method);
            }
        }

        return $payment_method_icons_to_display;
    }

    /**
     * @param string $language
     * @param array $payment_method
     * @return array
     */
    private function get_language_specific_payment_method_icon(string $language, array $payment_method): array
    {
        if ($payment_method['name'] === 'online_transfer') {
            $payment_method_icon['name'] = $language === 'pl_PL' ? 'przelew_online' : 'online_transfer';
        } else {
            $payment_method_icon['name'] = $payment_method['name'];
        }
        $payment_method_icon['title'] = __($payment_method['title'], CONOTOXIA_PAY);
        return $payment_method_icon;
    }

    /**
     * @return array
     */
    private function get_payment_methods(): array
    {
        return array(
            // Blik
            array('name' => 'blik', 'title' => 'BLIK'),

            // Cards
            array('name' => 'visa', 'title' => 'Visa'),
            array('name' => 'mastercard', 'title' => 'MasterCard'),
            array('name' => 'bancontact', 'title' => 'Bancontact (BCMC)'),
            array('name' => 'cartes_bancaires', 'title' => 'Cartes Bancaires'),
            array('name' => 'dankort', 'title' => 'Dankort'),
            array('name' => 'discover', 'title' => 'Discover'),
            array('name' => 'diners_club', 'title' => 'Diners Club'),
            array('name' => 'jcb', 'title' => 'JCB'),
            array('name' => 'union_pay', 'title' => 'UnionPay'),

            // Online Transfer
            array('name' => 'online_transfer', 'title' => 'Online Transfer'),

            // Wallets
            array('name' => 'google_pay', 'title' => 'Google Pay'),
            array('name' => 'apple_pay', 'title' => 'Apple Pay'),
            array('name' => 'pay_pal', 'title' => 'PayPal'),
            array('name' => 'skrill', 'title' => 'Skrill Wallet'),
            array('name' => 'vipps', 'title' => 'Vipps'),

            // Transfers
            array('name' => 'rapid_transfer', 'title' => 'Rapid Transfer'),
            array('name' => 'trustly', 'title' => 'Trustly'),
            array('name' => 'eps', 'title' => 'EPS'),
            array('name' => 'ideal', 'title' => 'Ideal')
        );
    }

    /**
     * @return bool
     */
    public function is_configuration_completed(): bool
    {
        $required = ['client_id', 'client_secret', 'point_of_sale', 'private_key', 'public_key'];
        foreach ($required as $option) {
            if (empty($this->get_option($option))) {
                return false;
            }
        }
        return true;
    }

    /**
     * @param CKPL\Pay\Notification\Payment\PaymentNotificationInterface $notification
     * @return void
     */
    private function process_incoming_payment(CKPL\Pay\Notification\Payment\PaymentNotificationInterface $notification): void
    {
        $order_key = wc_get_order_id_by_order_key($notification->getAdditionalParameters()['wcOrderKey']);
        $order = wc_get_order($order_key);
        if (!$order) {
            Logger::log(
                'Order with key \'%s\' and id \'%s\' was not found for notification of %s payment.',
                $notification->getAdditionalParameters()['wcOrderKey'],
                $notification->getExternalPaymentId(),
                $notification->getPaymentId()
            );
            $this->send_problem_response(404, 'Order with key \'' . $notification->getAdditionalParameters()['wcOrderKey'] . '\' for order id \'' . $notification->getExternalPaymentId() . '\' not found');
            return;
        }

        if ($notification->isCompleted()) {
            if (!$order->has_status('pending')) {
                Logger::log(
                    'Incoming notification for order %s with status %s for payment %s.',
                    $notification->getExternalPaymentId(),
                    $order->get_status(),
                    $notification->getPaymentId()
                );
            }
            $order->payment_complete($notification->getPaymentId());
            $order->add_order_note(sprintf(
                __('Conotoxia Pay: Payment %s has been completed.', CONOTOXIA_PAY),
                $notification->getPaymentId()
            ));
        } elseif ($notification->isCancelled()) {
            if (!$order->has_status('pending')) {
                Logger::log(
                    'Incoming notification for order %s with status %s for payment %s.',
                    $notification->getExternalPaymentId(),
                    $order->get_status(),
                    $notification->getPaymentId()
                );
            }
            $message = sprintf(__('Conotoxia Pay: Payment %s has been cancelled.', CONOTOXIA_PAY), $notification->getPaymentId());
            $order->add_order_note($message);
        } elseif ($notification->isRejected()) {
            if (!$order->has_status('pending')) {
                Logger::log(
                    'Incoming notification for order %s with status %s for payment %s.',
                    $notification->getExternalPaymentId(),
                    $order->get_status(),
                    $notification->getPaymentId()
                );
            }
            $message = sprintf(__('Conotoxia Pay: Payment %s has been rejected.', CONOTOXIA_PAY), $notification->getPaymentId());
            $order->add_order_note($message);
        }

        $this->send_ok_response();
    }

    /**
     * @param CKPL\Pay\Notification\Refund\RefundNotificationInterface $notification
     * @return void
     */
    private function process_incoming_refund(CKPL\Pay\Notification\Refund\RefundNotificationInterface $notification): void
    {
        $order_key = wc_get_order_id_by_order_key($notification->getAdditionalParameters()['wcOrderKey']);
        if ($order_key == 0) {
            $order_key = $notification->getExternalRefundId();
            Logger::log('Missing wcOrderKey in notification response body - using externalRefundId field of %s refund.', $notification->getRefundId());
        }
        $order = wc_get_order($order_key);

        if (!$order) {
            Logger::log('Order \'%s\' was not found for notification of %s refund.', $order_key, $notification->getRefundId());
            $this->send_problem_response(404, 'Order with key \'' . $order_key . '\' not found');
            return;
        }

        if ($notification->isCompleted()) {
            $order->add_order_note(sprintf(__('Conotoxia Pay: Refund %s has been completed.', CONOTOXIA_PAY), $notification->getRefundId()));
        } elseif ($notification->isProcessing()) {
            $order->add_order_note(sprintf(__('Conotoxia Pay: Refund %s is being processed.', CONOTOXIA_PAY), $notification->getRefundId()));
        } elseif ($notification->isPending()) {
            $order->add_order_note(sprintf(__('Conotoxia Pay: Refund %s pending.', CONOTOXIA_PAY), $notification->getRefundId()));
        } elseif ($notification->isCancelled()) {
            $order->add_order_note(sprintf(__('Conotoxia Pay: Refund %s has been cancelled.', CONOTOXIA_PAY), $notification->getRefundId()));
        }

        $this->send_ok_response();
    }

    /**
     * @return array
     */
    private function get_enabled_payment_methods(): array
    {
        return $this->get_option('icons', []);
    }

    /**
     * @param string $private_key
     * @return string|null
     */
    private function get_public_key($private_key): ?string
    {
        if (!extension_loaded('openssl')) {
            Logger::log('Error:  Missing OpenSSL extension.');
            return null;
        }
        $key_pair = openssl_pkey_get_private($private_key);
        if ($key_pair === false) {
            return null;
        }
        $public_key = openssl_pkey_get_details($key_pair)['key'];
        if (PHP_VERSION_ID < 80000) {
            openssl_pkey_free($key_pair);
        }
        return trim($public_key);
    }

    /**
     * @return void
     */
    private function send_ok_response(): void
    {
        header('HTTP/1.1 200 OK');
        echo 'OK';
        ob_flush();
    }

    /**
     * @param int $code
     * @param string|null $detail
     * @return void
     */
    private function send_problem_response(int $code, string $detail = null): void
    {
        switch ($code) {
            case 400:
                $title = 'Bad Request';
                break;
            case 404:
                $title = 'Not Found';
                break;
            case 405:
                $title = 'Method Not Allowed';
                break;
            default:
                $title = 'Internal Server Error';
                $code = 500;
                Logger::log('Unsupported ' . $code . ' status code');
                break;
        }
        header('HTTP/1.1 ' . $code . ' ' . $title);
        header('Content-Type: application/problem+json');

        if ($detail !== null) {
            $detail = ',"detail":"' . $detail . '"';
        }
        echo '{"title":"' . esc_html($title) . '","status":' . esc_html($code . $detail) . '}';
        ob_flush();
    }
}
