!function(e){"use strict";e(window).on("load",function(){e("form.sform").on("submit",function(s){-1<window.location.href.indexOf("sending")&&window.history.pushState({},"",window.location.href.split("&sending")[0]),e(".sform-field,label.checkbox,div.captcha").removeClass("is-invalid"),e("form.sform").removeClass("was-validated"),e("form.sform").addClass("needs-validation"),e(".msgoutside span").removeClass("v-visible");var i=e(this).attr("form");e(this).addClass("was-validated");var a=!0;e(this).hasClass("needs-validation")&&(!1===e(this)[0].checkValidity()?(a=!1,e(this).find(".sform-field").each(function(){var s=e(this).attr("parent");e(this).is(":invalid")&&s==i&&(e(this).addClass("is-invalid"),e(this).parent(".captcha").addClass("is-invalid"))}),e(this).find("#errors-"+i+" span").addClass("v-visible"),1==e("#sform-consent-"+i).prop("required")&&0==e("#sform-consent-"+i).prop("checked")&&(e(this).find("#sform-consent-"+i).addClass("is-invalid"),e(this).find('label[for="sform-consent-'+i+'"]').addClass("is-invalid")),(e(this).hasClass("needs-focus")?e(this).find(":invalid").first():e(this).find("#errors-"+i)).trigger("focus")):e("#form-"+i).removeClass("needs-validation")),!1===a&&s.preventDefault()}),e("input,textarea").on("input",function(){var s=e(this).attr("parent"),i=e(this).attr("id");e(this).is(":valid")?(e(this).removeClass("is-invalid"),e(this).prop("required")&&e("label[for="+i+"] span.mark").addClass("d-none"),e('label[for="'+e(this).attr("id")+'"]').removeClass("is-invalid"),e(this).next().children("span.required-symbol").removeClass("d-block"),e(this).parent(".captcha").removeClass("is-invalid"),e("#form-"+s).hasClass("needs-validation")?e("#form-"+s).find(":invalid").length||e(".message").removeClass("v-visible"):e("#form-"+s).find(".is-invalid").length||e(".message").removeClass("v-visible")):(e("#form-"+s).hasClass("was-validated")&&(e(this).addClass("is-invalid"),e('label[for="'+e(this).attr("id")+'"]').addClass("is-invalid"),e(this).parent(".captcha").addClass("is-invalid"),e(".message").hasClass("v-visible")||(s=e("input[name=multiple-errors]").val(),e(".message").addClass("v-visible"),e(".message").text(s))),e(this).prop("required")&&(e('label[for="'+i+'"] span.mark').removeClass("d-none"),e(this).next().children("span.required-symbol").addClass("d-block")))}),e(":checkbox").on("click",function(){0==e(this).prop("checked")?e(this).val("false"):e(this).val("true")}),e(".sform-field.captcha").on("focus",function(){e(this).parent().addClass("focus"),e(this).prev().addClass("focus")}).on("blur",function(){e(this).parent().removeClass("focus"),e(this).prev().removeClass("focus")}),e(".sform-field.question").on("click",function(){e(this).next().trigger("focus")}),e(".sform-field.captcha").on("input",function(s){var i=e(this).attr("id"),a=e(this).attr("parent");e(this).is(":valid")&&(e('label[for="'+i+'"] span.mark').addClass("d-none"),e(this).removeClass("is-invalid"),e("#"+i).removeClass("is-invalid"),e("#captcha-error-"+a+" span").removeClass("d-block"))}),e(".sform-field.captcha").on("keypress",function(s){48!==s.which||this.value.length||s.preventDefault()}),e("input, textarea").on("keypress",function(s){32!==s.which||this.value.length||s.preventDefault()})})}(jQuery);