!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=318)}({1:function(e,t){e.exports=jQuery},291:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var a=function(){e.post(ajaxurl,{action:"edd_recapture_remote_install"},(function(e){!e.success&&e.data&&confirm(e.data.error)?location.reload():window.location.href="https://recapture.io/register"}))}}).call(this,n(1))},318:function(e,t,n){"use strict";n.r(t),function(e,t){var a=n(291),d=(n(319),{init:function(){this.general(),this.misc(),this.gateways(),this.emails()},general:function(){var t,n=e(".edd-color-picker");n.length&&n.wpColorPicker(),window.formfield="",e(document.body).on("click",".edd_settings_upload_button",(function(n){n.preventDefault();var a=e(this);window.formfield=e(a.data("input")),t||((t=wp.media.frames.file_frame=wp.media({title:a.data("uploader_title"),library:{type:"image"},button:{text:a.data("uploader_button_text")},multiple:!1})).on("menu:render:default",(function(e){e.unset("library-separator"),e.unset("gallery"),e.unset("featured-image"),e.unset("embed"),e.unset("playlist"),e.unset("video-playlist"),e.set({})})),t.on("select",(function(){t.state().get("selection").each((function(e,t){e=e.toJSON(),window.formfield.val(e.url)}))}))),t.open()})),window.formfield=""},misc:function(){var t=e('select[name="edd_settings[download_method]"]'),n=t.parent().parent().next(),a=e('input[name="edd_settings[allow_tracking]"]');"direct"===t.val()&&(n.css("opacity","0.4"),n.find("input").prop("checked",!1).prop("disabled",!0)),t.on("change",(function(){"direct"===e(this).val()?(n.css("opacity","0.4"),n.find("input").prop("checked",!1).prop("disabled",!0)):(n.find("input").prop("disabled",!1),n.css("opacity","1"))})),a.on("change",(function(){e(".allow_tracking.edd-heart").toggleClass("edd-hidden")}))},gateways:function(){e('#edd-payment-gateways input[type="checkbox"]').on("change",(function(){var t=e(this).data("gateway-key"),n=e("#edd_settings\\[default_gateway\\]"),a=n.find('option[value="'+t+'"]');a.prop("disabled",(function(e,t){return!t})),a.prop("selected")&&a.prop("selected",!1),n.trigger("chosen:updated")}))},emails:function(){e("#edd-recapture-connect").on("click",(function(t){t.preventDefault(),e(this).html(edd_vars.wait+' <span class="edd-loading"></span>'),document.body.style.cursor="wait",Object(a.a)()}));var t=e('select[name="edd_settings[email_summary_recipient]"]'),n=t.val(),d=e('textarea[name="edd_settings[email_summary_custom_recipients]"]').parents("tr"),o=e("#edd-send-test-summary-save-changes-notice"),s=e("#edd-send-test-summary"),i=e("#edd-send-test-summary-notice");t.on("change",(function(){d.toggleClass("hidden"),s.removeClass("hidden updated-message"),i.empty(),o.empty(),n!==t.val()&&(s.addClass("hidden"),o.html('<div class="notice notice-info"><p>'+edd_vars.test_email_save_changes+"</p></div>"))})),s.on("click",(function(t){t.preventDefault(),e.ajax({type:"GET",dataType:"json",url:ajaxurl,data:{action:"edd_send_test_email_summary"},beforeSend:function(){i.empty(),s.addClass("updating-message").prop("disabled",!0)},success:function(e){"error"==e.status?i.html('<div class="updated '+e.status+'"><p>'+e.message+"</p></div>"):(s.addClass("updated-message"),setTimeout((function(){s.removeClass("updated-message")}),3e3))}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){s.removeClass("updating-message").prop("disabled",!1)}))}))}});t(document).ready((function(e){d.init()}))}.call(this,n(1),n(1))},319:function(e,t,n){(function(e){e(document).ready((function(t){if("undefined"!=typeof eddPayPalConnectVars){var n=document.getElementById("edd-paypal-commerce-errors");if(n&&n.length){for(;n.firstChild;)n.removeChild(n.firstChild);n.classList.remove("notice notice-error")}if(eddPayPalConnectVars.isConnected){var a=document.getElementById("edd-paypal-commerce-reconnect");a&&a.addEventListener("click",(function(e){e.preventDefault();var n=t("#edd-paypal-commerce-errors");n.empty().removeClass("notice notice-error"),a.classList.add("updating-message"),a.disabled=!0,t.post(ajaxurl,{action:"edd_paypal_commerce_reconnect",_ajax_nonce:a.dataset.nonce}).done((function(){})).fail((function(e){console.log("Reconnect failure",e.data),a.classList.remove("updating-message"),a.disabled=!1,n.html("<p>"+e.data+"</p>").addClass("notice notice-error")}))})),function e(){var n=document.getElementById("edd-paypal-commerce-connect-wrap");n&&t.post(ajaxurl,{action:"edd_paypal_commerce_get_account_info",_ajax_nonce:n.getAttribute("data-nonce")},(function(a){var d="<p>"+eddPayPalConnectVars.defaultError+"</p>";a.success?(d=a.data.account_status,a.data.actions&&a.data.actions.length&&(d+='<p class="edd-paypal-connect-actions">'+a.data.actions.join(" ")+"</p>"),a.data.disconnect_links&&a.data.disconnect_links.length&&(document.getElementById("edd-paypal-disconnect").innerHTML=a.data.disconnect_links.join(" "))):a.data&&a.data.message&&(d=a.data.message),n.innerHTML=d,n.classList.remove("notice-success","notice-warning","notice-error","loading");var o=a.success&&a.data.status?"notice-"+a.data.status:"notice-error";n.classList.add(o);var s,i=document.getElementById("edd-paypal-commerce-get-help");"success"===a.data.status?(i.classList.add("edd-hidden"),i.classList.remove("button","button-secondary")):(i.classList.remove("edd-hidden"),i.classList.add("button","button-secondary")),(s=document.querySelectorAll(".edd-paypal-connect-action"))&&s.length&&s.forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault();var a=n.target;a.disabled=!0,a.classList.add("updating-message");var d=document.getElementById("edd-paypal-commerce-connect-wrap");d&&d.length&&d.remove(),t.post(ajaxurl,{action:a.dataset.action,_ajax_nonce:a.dataset.nonce}).done((function(){e()})).fail((function(e){console.log("Failure",e.data),a.disabled=!1,a.classList.remove("updating-message"),d.html("<p>"+e.data+"</p>").addClass("edd-paypal-actions-error-wrap")}))}))}))}))}()}else{if(document.getElementById("edd-paypal-commerce-link")){var d=document.createElement("script");d.id="edd-paypal-commerce-onboarding",d.src="https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js",document.body.appendChild(d),setTimeout((function(){"undefined"!==window.PAYPAL.apps.Signup&&window.PAYPAL.apps.Signup.render()}),1e3)}window.eddPayPalOnboardingCallback=function(t,n){var a=document.getElementById("edd-paypal-commerce-link"),d=document.getElementById("edd-paypal-commerce-errors");e.post(ajaxurl,{action:"edd_paypal_commerce_get_access_token",auth_code:t,share_id:n,_ajax_nonce:a.dataset.nonce}).done((function(){a.classList.add("disabled","updating-message"),a.disabled=!0})).fail((function(e){d.innerHTML="<p>"+e.data+"</p>",d.classList.add("notice","notice-error");var t=document.getElementById("edd-paypal-commerce-get-help");t.classList.remove("edd-hidden"),t.classList.add("button","button-secondary")}))}}}}))}).call(this,n(1))}});