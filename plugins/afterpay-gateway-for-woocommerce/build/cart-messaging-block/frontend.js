(()=>{"use strict";const t=window.React,e=window.wc.blocksCheckout,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"afterpay-gateway-for-woocommerce/cart-messaging","title":"Afterpay Cart Messaging","category":"widgets","description":"Adds an Afterpay placement to the cart block","keywords":["afterpay","messaging","placement"],"version":"1","textdomain":"afterpay-gateway-for-woocommerce","parent":["woocommerce/cart-totals-block"],"viewScript":["square_marketplace_js","afterpay_cart_messaging"],"editorScript":"file:./editor.js"}'),r=window.wc.wcSettings,o=t=>Array.isArray(t)?t.map((t=>t.sku)).filter((t=>t)):[],s=t=>{if(Array.isArray(t)){const e=t.map((t=>t.extensions?.woo_afterpay?.categories)).flat().filter((t=>t));return[...new Set(e)]}return[]},i=t=>!Array.isArray(t)||!t.some((t=>0==t.extensions?.woo_afterpay?.eligible)),c={metadata:a,component:e=>{if(e?.cart?.cartTotals){const{frontend_is_ready:a,cart_placement_attributes:c}=(()=>{const t=(0,r.getSetting)("afterpay_data",null);return t||console.log("Afterpay initialization data is not available"),t})()||{};if(a){const{cart:{cartTotals:a,cartItems:r}}=e,n={...c,"data-amount":a.total_price/Math.pow(10,a.currency_minor_unit),"data-item-skus":o(r).join(),"data-item-categories":s(r).join(),"data-cart-is-eligible":i(r)};return(0,t.createElement)("div",{class:e.className},(0,t.createElement)("square-placement",{...n}))}}else console.log("Context Cart Unavailable.")}};(0,e.registerCheckoutBlock)(c)})();