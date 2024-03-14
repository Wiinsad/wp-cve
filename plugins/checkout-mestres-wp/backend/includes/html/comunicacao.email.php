<?php
	$menu_nonce = wp_create_nonce('menu_nonce');
    if (isset($_GET['page']) && $_GET['page'] === 'cwmp_admin_menu') {
        // Nonce válido, execute as ações necessárias
        if (isset($_GET['_wpnonce']) && wp_verify_nonce(sanitize_key($_GET['_wpnonce']), 'menu_nonce')) {
            echo '<div class="notice notice-success is-dismissible"><p>Ação realizada com sucesso!</p></div>';
        } else {
            // Nonce inválido, redirecionar ou lidar com a situação de não autorizado
            echo '<div class="notice notice-error is-dismissible"><p>Erro: Nonce inválido ou ausente.</p></div>';
            return;
        }
    }
		if(isset($_GET['action'])){
		if($_GET['action']=="add"){
			global $wpdb;
			$table_name = $wpdb->prefix . 'cwmp_template_emails';
			foreach($_POST['metodo'] as $value){
				$add_bump = $wpdb->insert($table_name, array(
					'metodo' => $value,
					'status' => $_POST['status'],
					'titulo' => $_POST['titulo'],
					'conteudo' => $_POST['conteudo'],
				));
			}
		}
		if($_GET['action']=="edit"){
			global $wpdb;
			$table_name = $wpdb->prefix . 'cwmp_template_emails';
			$add_bump = $wpdb->update($table_name, array(
				'metodo' => $_POST['metodo'],
				'status' => $_POST['status'],
				'titulo' => $_POST['titulo'],
				'conteudo' => $_POST['conteudo']
			),array('id'=>$_POST['id']));
			
		}
		if($_GET['action']=="delete"){
			global $wpdb;
			$table_name = $wpdb->prefix . 'cwmp_template_emails';
			$add_bump = $wpdb->delete($table_name, array('id'=>$_GET['id']));
		}
		}
			$args = array(
				'box'=>array(
					'title'=>__('Transactional Emails', 'checkout-mestres-wp'),
					'description'=>__('Send personalized transactional emails to your customers.', 'checkout-mestres-wp'),
					'button'=>array(
						'label'=>__('Create Transactional Email', 'checkout-mestres-wp'),
						'url'=>'admin.php?page=cwmp_admin_comunicacao&type=comunicacao.email-add',
					),
					'help'=>'https://docs.mestresdowp.com.br',
					'patch'=>'admin.php?page=cwmp_admin_comunicacao&type=comunicacao.email-',
					'bd'=>array(
						'name'=> 'cwmp_template_emails',
						'lines'=> array(
							'0'=>array(
								'type'=>'status',
								'value'=>'status',
							),
							'1'=>array(
								'type'=>'shipping',
								'value'=>'metodo',
							),
						),
						'order'=>array(
							'by'=>'ASC',
							'value'=>'status'
						)
					)
				),
			);
			echo cwmpAdminCreateLists($args);
			include "config.copyright.php";
