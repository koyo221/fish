(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(e,n,t){var content=t(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(73).default)("7482e8c8",content,!0,{sourceMap:!1})},252:function(e,n,t){"use strict";t(249)},253:function(e,n,t){var r=t(72)(!1);r.push([e.i,"\n.nowrap[data-v-677584dc] {\n  white-space: nowrap;\n}\n.wrap[data-v-677584dc] {\n  white-space: wrap;\n}\n.message[data-v-677584dc] {\n  margin-left: 4px;\n}\n",""]),e.exports=r},254:function(e,n,t){"use strict";t.r(n);var r=t(12),c=(t(18),t(74),t(58),t(1).a.extend({data:function(){return{fish:"><>",message:"",moving:!1,clicked:!1}},methods:{onClick:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.clicked){n.next=2;break}return n.abrupt("return");case 2:return e.clicked=!0,e.message="hi",n.next=6,e.sleep(2e3);case 6:return e.message="hope you have a good day",n.next=9,e.sleep(2e3);case 9:e.moving=!0,e.message="",e.$emit("onFishClick");case 12:case"end":return n.stop()}}),n)})))()},sleep:function(e){return new Promise((function(n){return setTimeout(n,e)}))}}})),o=(t(252),t(42)),component=Object(o.a)(c,(function(){var e=this,n=e._self._c;e._self._setupProxy;return n("button",[n("p",{class:e.moving?"nowrap":"wrap",on:{click:function(n){return e.onClick()}}},[e._v("\n    "+e._s(e.fish)+"\n    "),e.message?n("span",{staticClass:"message"},[e._v(e._s(e.message))]):e._e()])])}),[],!1,null,"677584dc",null);n.default=component.exports}}]);