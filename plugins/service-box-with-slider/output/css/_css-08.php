<?php

$cssCode = "
    .sbs-6310-template-".esc_attr($ids)." {
      float: left;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      transition: .5s;
      border: ".esc_attr($cssData['sbs_6310_box_border_width'])."px solid ".esc_attr($cssData['sbs_6310_box_border_color']).";      background: ".esc_attr($cssData['sbs_6310_box_background_color']).";
      box-shadow: 0px 0px ".esc_attr($cssData['sbs_6310_box_shadow_blur'])."px ".esc_attr($cssData['sbs_6310_box_shadow_width'])."px ".esc_attr($cssData['sbs_6310_box_shadow_color']).";
      z-index: 1;
      padding: 15px;
    }

    .sbs-6310-template-".esc_attr($ids).":hover {  
      background: ".esc_attr($cssData['sbs_6310_box_background_hover_color'])."; 
    }

    .sbs-6310-template-".esc_attr($ids)."::before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      opacity: 0;
      border-top: ".esc_attr($cssData['sbs_6310_border_hover_width'])."px solid ".esc_attr($cssData['sbs_6310_border_hover_color']).";
      border-left: ".esc_attr($cssData['sbs_6310_border_hover_width'])."px solid ".esc_attr($cssData['sbs_6310_border_hover_color']).";
      transition: 1s;
      z-index: -1;
    }

    .sbs-6310-template-".esc_attr($ids)."::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
      border-bottom: ".esc_attr($cssData['sbs_6310_border_hover_width'])."px solid ".esc_attr($cssData['sbs_6310_border_hover_color']).";        border-right: ".esc_attr($cssData['sbs_6310_border_hover_width'])."px solid ".esc_attr($cssData['sbs_6310_border_hover_color']).";
      transition: 1s;
      z-index: -1;
    }

    .sbs-6310-template-".esc_attr($ids).":hover::after {
      width: 100%;
      height: 100%;
      opacity: 1;
    }

    .sbs-6310-template-".esc_attr($ids).":hover::before {
      width: 100%;
      height: 100%;
      opacity: 1;
    }

    .sbs-6310-template-".esc_attr($ids).":hover {
      border-color: ".esc_attr($cssData['sbs_6310_box_border_hover_color']).";
      box-shadow: 0px 0px ".esc_attr($cssData['sbs_6310_box_shadow_blur'])."px ".esc_attr($cssData['sbs_6310_box_shadow_width'])."px ".esc_attr($cssData['sbs_6310_box_shadow_hover_color']).";
      transform: scale(1.02);
    }
    .sbs-6310-template-".esc_attr($ids)."-icon{
      width: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px !important;
      height: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px !important;
    }  
    .sbs-6310-template-".esc_attr($ids)."-icon img{
      width: 100%;
      height: auto;
    }

    .sbs-6310-template-".esc_attr($ids)."-icon {
      float: left;
      width: 100%;
      font-size: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px;
      color: ".esc_attr($cssData['sbs_6310_icon_color']).";
      box-sizing: border-box;
      text-align: center;
    }
    .sbs-6310-template-".esc_attr($ids)."-icon-wrapper {
      float: left;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
     margin-top: ".esc_attr($cssData['sbs_6310_icon_margin_top'])."px;
      margin-bottom: ".esc_attr($cssData['sbs_6310_icon_margin_bottom'])."px;
    }

    .sbs-6310-template-".esc_attr($ids).":hover .sbs-6310-template-".esc_attr($ids)."-icon {
      color: ".esc_attr($cssData['sbs_6310_icon_hover_color']).";
    }

    @media only screen and (max-width: 767px) {
      .sbs-6310-col {
        width: 100%;
        margin: 0 auto;
      }
      .sbs-6310-template-".esc_attr($ids)." {
        margin-bottom: 5px;
      }
      .sbs-6310-row {
        display: inline-block;
        width: 100%;
      }
    }
    
  ";

  wp_register_style( "sbs-6310-template-".esc_attr($ids)."-css", "" );
  wp_enqueue_style( "sbs-6310-template-".esc_attr($ids)."-css" );
  wp_add_inline_style( "sbs-6310-template-".esc_attr($ids)."-css", $cssCode );
?>
