(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c796d"],{"50ea":function(t,e,s){"use strict";s.r(e);var a={name:"Base",data(){return{formChanged:0,isLoaded:!1,action:wb_cnf.action||{act:"",fetch:"",push:""},is_pro:0,filter_domain:"",can_use:wb_cnf.watermark,watermark_preview:"",cnf:{},opt:{del_src_url:0,filter:{},rule:{},proxy_manual:[],watermark:{}},tooltips:{active_method:"自动采集，仅当贴入外链图片至编辑器时以默认采集模式执行；手动采集则需要手动点击保存站外图片时执行。",proxy_ip:"若自定义代理IP地址无用户名及密码，则留空即可。仅勾选自动采集默认，自动采集图片才使用代理服务器采集。",width_limit:"不超过指定宽度，即若采集图片的宽度像素超出设置值，将压缩为指定值宽度。如要保留原尺寸图片，使用默认值即可。",img_rename:"自定义文件名可以使用一个或者多个命名规则参数。比如可以设置为%filename%%date%。",img_filter:"如需过滤多张图像，以英文逗号分隔。过滤最后一张图片，以字母z代替数字。",exc_domain:"比如CDN/图床/云存储等图片链接对于域名地址。"}}},components:{},created(){this._get_data(),this.$cnf.is_pro&&this.$isPrdActive(this.$WB)},filters:{},methods:{_get_data(){const e=this;e.$api.getData({action:e.action.act,op:e.action.fetch}).then(t=>{e.opt=t.data.opt,e.cnf=t.data.cnf,e.check_ext(),e.opt,!e.is_pro&&e.opt.watermark.type&&(e.opt.watermark.type=0),e.isLoaded=!0})},updateData(){const e=this;e.$api.saveData({_ajax_nonce:_wb_imgspider_ajax_nonce,action:e.action.act,op:e.action.push,opt:e.opt,tab:"base"}).then(t=>{t.code||e.$wbui.toast("保存成功"),e.formChanged=1})},setDefMode(t){const e=this;e.check_ext(),"proxy"==t?(e.opt.df_mode="none",e.$wbui.confirm("请设置代理。",{btn:["去设置","取消"],yes(){location.hash="scProxy"}})):"ext"!=t||e.is_pro||(e.opt.df_mode="none",e.$wbui.confirm("该功能为Pro版本专属。",{btn:["了解详情","取消"],yes(){e.$router.push({path:"/extension"})}}))},addNewProxy(){this.opt.proxy_manual.push({name:"",ip:"",port:"",user:"",pwd:""})},removeProxy(t){var e=this;e.$wbui.confirm("确认移除？",function(){e.opt.proxy_manual.splice(t,1)})},check_ext(){imgspider_ver&&window.imgspider&&(this.is_pro=1)}},mounted(){this.is_pro=imgspider_ver&&window.imgspider?1:0},computed:{},watch:{opt:{handler(){this.formChanged++},deep:!0}},beforeRouteLeave(t,e,s){const a=this;2<a.formChanged?a.$wbui.open({content:"您修改的设置尚未保存，确定离开此页面吗？",btn:["保存并离开","放弃修改"],yes(){return s(!1),a.updateData(()=>{s()}),!1},no(){return s(),!1}}):s()}},s=s("2877"),s=Object(s.a)(a,function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.isLoaded,expression:"!isLoaded"}],staticClass:"wbs-content-inner base-code",class:{"wb-page-loaded":a.isLoaded}},[i("div",{staticClass:"wbs-main"},[a.isLoaded?i("div",[a._m(0),i("div",{staticClass:"sc-body"},[i("table",{staticClass:"wbs-form-table"},[i("tr",[i("th",{staticClass:"row w8em"},[a._v(" 自动或手动 "),i("wbs-tooltip",{attrs:{"data-msg":a.tooltips.active_method}})],1),i("td",{staticClass:"info"},[i("el-radio-group",{model:{value:a.opt.mode,callback:function(t){a.$set(a.opt,"mode",t)},expression:"opt.mode"}},[i("el-radio",{attrs:{label:"0"}},[a._v("自动")]),i("el-radio",{attrs:{label:"1"}},[a._v("手动")])],1)],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("默认采集模式")]),i("td",{staticClass:"info"},[i("el-radio-group",{model:{value:a.opt.df_mode,callback:function(t){a.$set(a.opt,"df_mode",t)},expression:"opt.df_mode"}},[i("el-radio",{attrs:{label:"none"}},[a._v("服务器采集")]),a.opt.proxy_manual.length<1?i("el-radio",{attrs:{label:"proxy"},on:{change:a.setDefMode}},[a._v("代理采集")]):a._e(),a._l(a.opt.proxy_manual,function(t,e){return i("el-radio",{key:e,attrs:{label:e}},[a._v("代理["+a._s(t.name)+"]采集")])}),i("el-radio",{attrs:{label:"ext"},on:{change:a.setDefMode}},[i("span",{staticClass:"ib"},[a._v("浏览器采集")]),i("i",{staticClass:"tag-pro"},[a._v("Pro")])])],2)],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("特色图片")]),i("td",{staticClass:"info"},[i("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:a.opt.thumbnail,callback:function(t){a.$set(a.opt,"thumbnail",t)},expression:"opt.thumbnail"}}),i("span",{staticClass:"description ml"},[i("b",[a._v(a._s(1==a.opt.thumbnail?"已启用":"已取消"))]),a._v("默认采集第一张图片作为特色图。")])],1)])])]),i("div",{staticClass:"sc-header",attrs:{id:"scProxy"}},[i("h3",[i("strong",[a._v("代理设置 "),i("wbs-tooltip",{attrs:{"data-msg":a.tooltips.proxy_ip}})],1)])]),i("div",{staticClass:"sc-body"},[i("table",{staticClass:"wbs-table"},[a._m(1),i("tbody",a._l(a.opt.proxy_manual,function(e,s){return i("tr",{key:s},[i("td",[i("el-input",{attrs:{size:"mini"},model:{value:e.name,callback:function(t){a.$set(e,"name",t)},expression:"v.name"}})],1),i("td",[i("el-input",{attrs:{size:"mini"},model:{value:e.ip,callback:function(t){a.$set(e,"ip",t)},expression:"v.ip"}})],1),i("td",[i("el-input",{attrs:{size:"mini"},model:{value:e.port,callback:function(t){a.$set(e,"port",t)},expression:"v.port"}})],1),i("td",[i("el-input",{attrs:{size:"mini"},model:{value:e.user,callback:function(t){a.$set(e,"user",t)},expression:"v.user"}})],1),i("td",[i("el-input",{attrs:{size:"mini",type:"password",name:"proxy_psw_"+s},model:{value:e.pwd,callback:function(t){a.$set(e,"pwd",t)},expression:"v.pwd"}})],1),i("td",[i("el-button",{attrs:{icon:"el-icon-delete",size:"small",circle:"",title:"删除"},on:{click:function(t){return a.removeProxy(s)}}})],1)])}),0)]),i("p",{staticClass:"align-right mt"},[i("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-circle-plus-outline"},on:{click:a.addNewProxy}},[a._v("添加代理")])],1)]),a._m(2),i("div",{staticClass:"sc-body"},[i("table",{staticClass:"wbs-form-table"},[i("tr",[i("th",{staticClass:"row w8em"},[a._v(" 尺寸规格 "),i("wbs-tooltip",{attrs:{"data-msg":a.tooltips.width_limit}})],1),i("td",[i("el-radio-group",{staticClass:"selector-items-block",model:{value:a.opt.rule.size,callback:function(t){a.$set(a.opt.rule,"size",t)},expression:"opt.rule.size"}},[a._l(["原尺寸（默认）","不超过1080px宽度","不超过720px宽度"],function(t,e){return i("el-radio",{key:"rule_size"+e,attrs:{label:e}},[a._v(a._s(t))])}),i("el-radio",{attrs:{label:3}},[a._v(" 不超过 "),i("span",{staticClass:"ml"},[i("el-input-number",{staticClass:"w8em",attrs:{size:"mini",placeholder:""},model:{value:a.opt.rule.custom_size,callback:function(t){a.$set(a.opt.rule,"custom_size",t)},expression:"opt.rule.custom_size"}}),i("span",{staticClass:"description"},[a._v("px宽度")])],1)])],2)],1)]),i("tr",[i("th",{staticClass:"row"},[a._v(" 文件名规则 "),i("wbs-tooltip",{attrs:{"data-msg":a.tooltips.img_rename}})],1),i("td",[i("el-radio-group",{staticClass:"selector-items-block",model:{value:a.opt.rule.file_name,callback:function(t){a.$set(a.opt.rule,"file_name",t)},expression:"opt.rule.file_name"}},[a._l(["系统自动命名（默认）","保留原文件名"],function(t,e){return i("el-radio",{key:"file_name"+e,attrs:{label:e}},[a._v(a._s(t))])}),i("el-radio",{attrs:{label:2}},[a._v(" 自定义 "),2===a.opt.rule.file_name?i("span",{staticClass:"ml"},[i("el-input",{attrs:{size:"mini",placeholder:""},model:{value:a.opt.rule.custom_name,callback:function(t){a.$set(a.opt.rule,"custom_name",t)},expression:"opt.rule.custom_name"}})],1):a._e()])],2),2===a.opt.rule.file_name?i("div",{staticClass:"description"},[a._m(3),a._m(4),a._m(5),a._m(6),a._m(7),a._m(8),a._m(9)]):a._e()],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("标题及替代文本")]),i("td",[i("el-radio-group",{staticClass:"selector-items-block",model:{value:a.opt.rule.title_alt,callback:function(t){a.$set(a.opt.rule,"title_alt",t)},expression:"opt.rule.title_alt"}},[i("el-radio",{attrs:{label:0}},[a._v(" 保留来源数据（默认） ")]),i("el-radio",{attrs:{label:1}},[a._v(" 自定义 "),1===a.opt.rule.title_alt?i("span",{staticClass:"ml"},[i("el-input",{attrs:{size:"mini",placeholder:""},model:{value:a.opt.rule.custom_title,callback:function(t){a.$set(a.opt.rule,"custom_title",t)},expression:"opt.rule.custom_title"}})],1):a._e()])],1),1===a.opt.rule.title_alt?i("div",{staticClass:"description"},[a._m(10),a._m(11),a._m(12)]):a._e()],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("对齐方式")]),i("td",{staticClass:"info"},[i("el-radio-group",{model:{value:a.opt.rule.align,callback:function(t){a.$set(a.opt.rule,"align",t)},expression:"opt.rule.align"}},a._l({none:"无（默认）",center:"居中对齐",left:"左对齐",right:"右对齐"},function(t,e){return i("el-radio",{key:"rule_align"+e,attrs:{label:e}},[a._v(a._s(t))])}),1)],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("图片链接")]),i("td",{staticClass:"info"},[i("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:a.opt.del_src_url,callback:function(t){a.$set(a.opt,"del_src_url",t)},expression:"opt.del_src_url"}}),i("span",{staticClass:"description ml"},[i("b",[a._v(a._s(1==a.opt.del_src_url?"已启用":"已取消"))]),a._v("移除采集图片a标签内容（即图片超链接）")])],1)])])]),a._m(13),i("div",{staticClass:"sc-body"},[i("table",{staticClass:"wbs-form-table"},[i("tbody",[i("tr",[i("th",{staticClass:"row w8em"},[a._v(" 过滤指定顺序 "),i("wbs-tooltip",{attrs:{"data-msg":a.tooltips.img_filter}})],1),i("td",[i("span",[a._v("第")]),i("el-input",{staticClass:"w8em wb-sph",attrs:{size:"mini"},model:{value:a.opt.filter.except_index,callback:function(t){a.$set(a.opt.filter,"except_index",t)},expression:"opt.filter.except_index"}}),i("span",[a._v("张图片")])],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("过滤特定尺寸")]),i("td",[i("span",[a._v("宽度低于")]),i("el-input",{staticClass:"w6em wb-sph",attrs:{size:"mini"},model:{value:a.opt.filter.min_width,callback:function(t){a.$set(a.opt.filter,"min_width",t)},expression:"opt.filter.min_width"}}),i("span",[a._v("像素")])],1)]),i("tr",[i("th",{staticClass:"row"},[a._v("过滤格式")]),i("td",[i("el-input",{attrs:{size:"mini"},model:{value:a.opt.filter.type,callback:function(t){a.$set(a.opt.filter,"type",t)},expression:"opt.filter.type"}}),a._v(" 多个格式以英文逗号分割，如jpg,svg,gif ")],1)]),i("tr",[i("th",{staticClass:"row"},[a._v(" 排除图像域名 "),i("wbs-tooltip",{staticClass:"on-top",attrs:{"data-msg":a.tooltips.exc_domain}})],1),i("td",[i("el-input",{attrs:{type:"textarea"},model:{value:a.opt.filter.domain,callback:function(t){a.$set(a.opt.filter,"domain",t)},expression:"opt.filter.domain"}}),i("div",{staticClass:"mt"},[a._v("输入一级域名即可，每行一个域名。")])],1)])])])])]):a._e(),i("wb-prompt",{directives:[{name:"show",rawName:"v-show",value:a.isLoaded,expression:"isLoaded"}],staticClass:"mt"})],1),a.isLoaded&&!a.is_pro?i("wbs-more-sources"):a._e(),i("wbs-footer"),i("wbs-ctrl-bar",{on:{submit:a.updateData}})],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"sc-header"},[e("h3",[e("strong",[t._v("基本设置")])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("thead",[e("tr",[e("th",[t._v("名称")]),e("th",[t._v("IP地址")]),e("th",[t._v("端口")]),e("th",[t._v("用户名")]),e("th",[t._v("密码")]),e("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"sc-header",attrs:{id:"scImage"}},[e("h3",[e("strong",[t._v("图片选项")])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",{staticClass:"mt"},[e("b",[t._v("请选择自定义方式：")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%filename%")]),this._v(" : 原文件名")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%date%")]),this._v(" : 年月日，例：20200101")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%year%")]),this._v(" : 年份，例：2020。")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%month%")]),this._v(" : 月份，例如：01。")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%day%")]),this._v(" : 日期，例如：15。")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%random%")]),this._v(" : 五位数字字母随机码，例如：m1x88。")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",{staticClass:"mt"},[t("b",[this._v("请选择自定义方式：")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%filename%")]),this._v(" : 原文件名")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("%postname% ")]),this._v(": 文章标题")])},function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"sc-header",attrs:{id:"scRule"}},[t("h3",[t("strong",[this._v("过滤规则")])])])}],!1,null,null,null);e.default=s.exports}}]);