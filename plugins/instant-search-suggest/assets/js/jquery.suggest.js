(function(a){a.suggest=function(b,c){var d=this;d.input=b;d.options=c;d.$input=a(b).attr("autocomplete","off");d.$results=a(document.createElement("ul"));d.currentItem=-1;d.items=false;d.timeout=false;d.prevLength=0;d.cache=[];d.cacheSize=0;d.$results.addClass(d.options.resultsClass).appendTo("body");d.resetPosition();a(window).load(function(){d.resetPosition()}).resize(function(){d.resetPosition()});d.$input.blur(function(){setTimeout(function(){d.hideResults()},200)});try{d.$results.bgiframe()}catch(e){}if(a.browser.mozilla)d.$input.keypress(function(a){d.processKey(a)});else d.$input.keydown(function(a){d.processKey(a)})};a.extend(a.suggest.prototype,{addMatchClass:function(a,b){return a.replace(new RegExp(b,"ig"),'<span class="'+this.options.matchClass+'">$&</span>')},resetPosition:function(){var a=this.$input.offset();this.$results.css({top:a.top+this.input.offsetHeight+"px",left:a.left+"px"})},processKey:function(a){this.resetPosition();if(/27$|38$|40$/.test(a.keyCode)&&this.$results.is(":visible")||/^13$|^9$/.test(a.keyCode)&&this.currentItem>=0){if(a.preventDefault)a.preventDefault();if(a.stopPropagation)a.stopPropagation();a.cancelBubble=true;a.returnValue=false;switch(a.keyCode){case 38:this.selectItem(this.currentItem-1);break;case 40:this.selectItem(this.currentItem+1);break;case 9:case 13:this.selectCurrentItem();break;case 27:this.hideResults();break}}else if(this.$input.val().length!=this.prevLength){var b=this;if(b.timeout)clearTimeout(b.timeout);b.timeout=setTimeout(function(){b.suggest()},b.options.delay);b.prevLength=b.$input.val().length}},suggest:function(){var b=a.trim(this.$input.val());if(b.length>=this.options.minchars){cached=this.checkCache(b);if(cached){this.items=cached["items"];this.displayItems(b)}else{var c=this;a.get(c.options.source,{q:b},function(a){c.hideResults();c.items=c.options.createItems?c.options.createItems.call(this,a):a.split(c.options.delimiter);c.displayItems(b);c.addToCache(b,a.length)})}}else{this.hideResults()}},checkCache:function(a){for(var b=0;b<this.cache.length;b++)if(this.cache[b]["q"]==a){this.cache.unshift(this.cache.splice(b,1)[0]);return this.cache[0]}return false},addToCache:function(a,b){while(this.cache.length&&this.cacheSize+b>this.options.maxCacheSize){var c=this.cache.pop();this.cacheSize-=c["size"]}this.cache.push({q:a,size:b,items:this.items});this.cacheSize+=b},displayItems:function(a){var b=this;if(!b.items)return;var c="";for(var d=0;d<b.items.length;d++){var e=b.options.formatItem?b.options.formatItem.call(b,b.items[d],a):b.formatItem(b.items[d],a);if(!e)b.items.splice(d,1);else c+=e}if(!b.items.length){b.hideResults();return}b.$results.html(c).show().children().mouseover(function(){var a=b.$results.children();for(var c=0;c<a.length;c++)if(a[c]==this)break;b.selectItem(c)}).click(function(a){b.selectCurrentItem();return false})},formatItem:function(b,c){b=a.trim(b);if(b)return"<li>"+this.addMatchClass(b,c)+"</li>";return false},hideResults:function(){this.$results.hide();this.currentItem=-1},selectItem:function(a){if(a<0)a=this.items.length-1;if(a>=this.items.length)a=0;this.currentItem=a;this.$results.children().removeClass(this.options.selectClass).eq(a).addClass(this.options.selectClass)},selectCurrentItem:function(){if(this.currentItem>=0){var a=this.currentItem;this.$input.val(this.options.selectItemText?this.options.selectItemText.call(this,this.items[a]):this.$results.children().eq(a).text());this.hideResults();if(this.options.onSelect)this.options.onSelect.call(this.$input[0],this.items[a])}}});a.fn.suggest=function(b,c){if(!b)return;c=a.extend({delay:100,resultsClass:"ac_results",selectClass:"ac_over",matchClass:"ac_match",minchars:2,delimiter:"\n",createItems:false,formatItem:false,selectItemText:false,onSelect:false,maxCacheSize:65536},c);c.source=b;this.each(function(){new a.suggest(this,c)});return this}})(jQuery)