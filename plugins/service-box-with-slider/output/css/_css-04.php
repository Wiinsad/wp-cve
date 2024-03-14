<?php

$cssCode = "
    .sbs-6310-template-".esc_attr($ids)." {
      float: left;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      transition: .5s;
      box-shadow: 0px 0px ".esc_attr($cssData['sbs_6310_box_shadow_blur'])."px ".esc_attr($cssData['sbs_6310_box_shadow_width'])."px ".esc_attr($cssData['sbs_6310_box_shadow_color']).";
      background: ".esc_attr($cssData['sbs_6310_box_background_color']).";
      border-radius: ".esc_attr($cssData['sbs_6310_box_radius'])."px;
      z-index:1;
      padding: 10px;
    }
    .sbs-6310-template-".esc_attr($ids).":hover{
      box-shadow: 0px 0px ".esc_attr($cssData['sbs_6310_box_shadow_blur'])."px ".esc_attr($cssData['sbs_6310_box_shadow_width'])."px ".esc_attr($cssData['sbs_6310_box_shadow_hover_color']).";
    }
    .sbs-6310-template-".esc_attr($ids)."::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ".esc_attr($cssData['sbs_6310_box_background_hover_color']).";
      transition: .5s;
      z-index: -1;
      transform: translateX(-99%);
    }

    .sbs-6310-template-".esc_attr($ids).":hover::after {
      transform: translateX(0);
    }
    .sbs-6310-template-".esc_attr($ids)."-icon{
      width: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px !important;
      height: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px !important;
    }  
    .sbs-6310-template-".esc_attr($ids)."-icon img{
      width: 100%;
      height: auto;
    }
    .sbs-6310-template-".esc_attr($ids)."-icon-wrapper {
      float: left;
      width: 100%;
      display: flex;
      justify-content: center;
     margin-top: ".esc_attr($cssData['sbs_6310_icon_margin_top'])."px;
      margin-bottom: ".esc_attr($cssData['sbs_6310_icon_margin_bottom'])."px;
    }

    .sbs-6310-template-".esc_attr($ids)."-icon {
      float: left;
      width: 100%;
      font-size: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px;
      line-height: ".esc_attr($cssData['sbs_6310_icon_font_size'])."px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ".esc_attr($cssData['sbs_6310_icon_color']).";  
      transition: .5s;
      box-sizing: border-box;
    }

    .sbs-6310-template-".esc_attr($ids).":hover .sbs-6310-template-".esc_attr($ids)."-icon {
      transform: scale(0.8);
      color: ".esc_attr($cssData['sbs_6310_icon_hover_color']).";
    }


    @media only screen and (max-width: 767px) {
      .sbs-6310-col {
        width: 100%;
        margin: 0 auto;
      }
      .sbs-6310-template-".esc_attr($ids)." {
        margin: 5px;
        width: calc(100% - 10px);
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
