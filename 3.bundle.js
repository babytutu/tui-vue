(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{111:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this.$createElement,s=this._self._c||t;return s("tui-layout",{attrs:{"is-scroll":!0}},[[this._v("\n    自定义头部\n  ")],this._v(" "),s("template",{slot:"content"},[this._v("\n    呵呵呵\n  ")])],2)};e._withStripped=!0;var r=a(0),n=Object(r.a)(null,e,[],!1,null,null,null);n.options.__file="src/demo/demo/layout.vue",s.default=n.exports},112:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this.$createElement,s=this._self._c||t;return s("tui-header",{attrs:{title:"标题示范"}},[s("div",{attrs:{slot:"left"},slot:"left"},[this._v("返回")]),this._v(" "),s("div",{attrs:{slot:"right"},slot:"right"},[this._v("主页")])])};e._withStripped=!0;var r=a(0),n=Object(r.a)(null,e,[],!1,null,null,null);n.options.__file="src/demo/demo/header.vue",s.default=n.exports},120:function(t,s,a){t.exports=a(183)},129:function(t,s,a){t.exports=a(172)},136:function(t,s,a){"use strict";a.r(s);var e=a(152),r=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var l=a(193),i=a(0),o=Object(i.a)(r.a,l.a,l.b,!1,null,null,null);o.options.__file="src/demo/demo/switch.vue",s.default=o.exports},145:function(t,s,a){"use strict";a.r(s);var e=a(162),r=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var l=a(211),i=a(0),o=Object(i.a)(r.a,l.a,l.b,!1,function(t){a(222)},"data-v-ea7f34ee",null);o.options.__file="src/demo/demo/index.vue",s.default=o.exports},152:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,s.default={data:function(){return{val1:!0,val2:!0,val3:!1,isDisabled:!0}}}},161:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e,r=(e=a(218))&&e.__esModule?e:{default:e},n={name:"qrcode",props:{size:{type:[Number,String],default:100},text:{type:String,required:!0,default:""},fileName:{type:String,default:"下载图片"}},data:function(){return{imageSrc:""}},mounted:function(){this.createQr()},watch:{text:function(t){this.text=t.toString(),this.createQr()}},methods:{createQr:function(){var t=Number(this.size),s=document.createElement("canvas"),a=(0,r.default)(this.text),e=s.getContext("2d"),n=a.modules,l=t/n.length,i=t/n.length;s.height=s.width=t,n.forEach(function(t,s){t.forEach(function(t,a){e.fillStyle=t?"#000000":"#FFFFFF";var r=Math.ceil((a+1)*l)-Math.floor(a*l),n=Math.ceil((s+1)*i)-Math.floor(s*i);e.fillRect(Math.round(a*l),Math.round(s*i),r,n)})}),this.imageSrc=s.toDataURL("image/png")},download:function(){var t=document.createElement("a");t.download=this.fileName,t.href=this.imageSrc,t.target="_blank",t.click()}}};s.default=n},162:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=r(a(55));function r(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{router:e.default.children,qrcodeUrl:window.location.href}},components:{qrcode:r(a(219)).default}};s.default=n},167:function(t,s){for(var a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return a.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return a.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},e=0;e<8;e++)a.EXP_TABLE[e]=1<<e;for(e=8;e<256;e++)a.EXP_TABLE[e]=a.EXP_TABLE[e-4]^a.EXP_TABLE[e-5]^a.EXP_TABLE[e-6]^a.EXP_TABLE[e-8];for(e=0;e<255;e++)a.LOG_TABLE[a.EXP_TABLE[e]]=e;t.exports=a},168:function(t,s,a){var e=a(167);function r(t,s){if(void 0==t.length)throw new Error(t.length+"/"+s);for(var a=0;a<t.length&&0==t[a];)a++;this.num=new Array(t.length-a+s);for(var e=0;e<t.length-a;e++)this.num[e]=t[e+a]}r.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var s=new Array(this.getLength()+t.getLength()-1),a=0;a<this.getLength();a++)for(var n=0;n<t.getLength();n++)s[a+n]^=e.gexp(e.glog(this.get(a))+e.glog(t.get(n)));return new r(s,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var s=e.glog(this.get(0))-e.glog(t.get(0)),a=new Array(this.getLength()),n=0;n<this.getLength();n++)a[n]=this.get(n);for(n=0;n<t.getLength();n++)a[n]^=e.gexp(e.glog(t.get(n))+s);return new r(a,0).mod(t)}},t.exports=r},169:function(t,s){t.exports={L:1,M:0,Q:3,H:2}},170:function(t,s){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},172:function(t,s,a){"use strict";a.r(s);var e=function(){this.$createElement;return this._self._c,this._m(0)};e._withStripped=!0;var r=a(0),n=Object(r.a)(null,e,[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("单行cell")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-cell")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"左边很多字左边很多字左边很多字左边很多字"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"right"')]),t._v(">")]),t._v("\n        右边\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-cell")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-cell")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":noborder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v("\n              "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"左边"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"right"')]),t._v(">")]),t._v("\n        右边\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-cell")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h2",[t._v("Props")]),t._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("标题内容")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("noborder")]),t._v(" "),a("td",[t._v("没有底线")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])])])])]),a("h2",[t._v("Slot")]),t._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("左边内容")])]),t._v(" "),a("tr",[a("td",[t._v("right")]),t._v(" "),a("td",[t._v("右边内容")])])])])])])}],!1,null,null,null);n.options.__file="src/pages/doc-mds/cell.md",s.default=n.exports},183:function(t,s,a){"use strict";a.r(s);var e=function(){this.$createElement;return this._self._c,this._m(0)};e._withStripped=!0;var r=a(0),n=Object(r.a)(null,e,[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("滚动Scroll")]),t._v(" "),a("p",[t._v("下拉刷新，上拉加载更多\n"),a("a",{attrs:{href:"https://github.com/ustbhuangyi/better-scroll"}},[t._v("better-scroll")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"list-warpper"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-scroll")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"scroll"')]),t._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"scroll"')]),t._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"items"')]),t._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@pullingDown")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"onPullingDown"')]),t._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@pullingUp")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"onPullingUp"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-cell")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"i in items"')]),t._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"i"')]),t._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"i"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-cell")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("tui-scroll")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("items")]),t._v(": [],\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("itemIndex")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n    }\n  },\n  created() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),a("span",{attrs:{class:"hljs-number"}},[t._v("7")]),t._v("; i++) {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".items.push(++"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".itemIndex)\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    "),a("span",{attrs:{class:"hljs-comment"}},[t._v("/**\n     * 上滑加载更多\n     */")]),t._v("\n    onPullingUp() {\n      "),a("span",{attrs:{class:"hljs-comment"}},[t._v("// 模拟更新数据")]),t._v("\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".itemIndex < "),a("span",{attrs:{class:"hljs-number"}},[t._v("10")]),t._v(") {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[t._v("-10")]),t._v("; i < "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i++) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".items.push(++"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".itemIndex)\n          }\n        } "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" {\n          "),a("span",{attrs:{class:"hljs-comment"}},[t._v("// 如果没有新数据")]),t._v("\n          "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.scroll.forceUpdate()\n        }\n      }, "),a("span",{attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(")\n    },\n    "),a("span",{attrs:{class:"hljs-comment"}},[t._v("/**\n     * 下拉刷新\n     */")]),t._v("\n    onPullingDown() {\n      "),a("span",{attrs:{class:"hljs-comment"}},[t._v("// 模拟更新数据")]),t._v("\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".itemIndex < "),a("span",{attrs:{class:"hljs-number"}},[t._v("20")]),t._v(") {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[t._v("-10")]),t._v("; i < "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i++) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".items.push(++"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".itemIndex)\n          }\n        } "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" {\n          "),a("span",{attrs:{class:"hljs-comment"}},[t._v("// 如果没有新数据")]),t._v("\n          "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.scroll.forceUpdate()\n        }\n      }, "),a("span",{attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(")\n    },\n  },\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"stylus"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("scoped")]),t._v(">")]),a("span",{attrs:{class:"undefined"}},[t._v("\n  .list-warpper{\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    background: #fff;\n    li{\n      height 88px\n      line-height 88px\n      text-align center\n      border-bottom 1px solid #ddd\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h2",[t._v("Props")]),t._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("数据")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("[]")])])])])]),a("h2",[t._v("Methods")]),t._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("pullingDown")]),t._v(" "),a("td",[t._v("下拉刷新方法，加载完成后，通过forceUpdate()方法告知组件")])]),t._v(" "),a("tr",[a("td",[t._v("onPullingUp")]),t._v(" "),a("td",[t._v("上拉加载更多，加载完成后，通过forceUpdate()方法告知组件")])])])])]),a("h2",[t._v("更多参数")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ustbhuangyi/better-scroll"}},[t._v("better-scroll")])])])}],!1,null,null,null);n.options.__file="src/pages/doc-mds/scroll.md",s.default=n.exports},193:function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return r});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("tui-cell",{attrs:{title:"可修改的开关"}},[a("tui-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.val1,callback:function(s){t.val1=s},expression:"val1"}})],1),t._v(" "),a("tui-cell",{attrs:{title:"开关状态"}},[a("template",{slot:"right"},[t._v(t._s(t.val1))])],2),t._v(" "),a("tui-cell",{attrs:{title:"启用状态下禁用的开关"}},[a("tui-switch",{attrs:{slot:"right",disabled:t.isDisabled},slot:"right",model:{value:t.val2,callback:function(s){t.val2=s},expression:"val2"}})],1),t._v(" "),a("tui-cell",{attrs:{title:"关闭状态下禁用的开关"}},[a("tui-switch",{attrs:{slot:"right",disabled:t.isDisabled},slot:"right",model:{value:t.val3,callback:function(s){t.val3=s},expression:"val3"}})],1)],1)},r=[];e._withStripped=!0},211:function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return r});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("tui-card",{attrs:{title:"手机扫码预览"}},[a("div",{staticClass:"qrcode"},[a("qrcode",{attrs:{text:t.qrcodeUrl}})],1)]),t._v(" "),t._l(t.router,function(s){return"demo-index"!==s.name?a("tui-cell",{key:s.name},[a("router-link",{attrs:{to:{name:s.name}}},[t._v(t._s(s.path))])],1):t._e()})],2)},r=[];e._withStripped=!0},212:function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return r});var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{attrs:{src:this.imageSrc,width:"100%",height:"100%"}}),this._v(" "),this._t("desc"),this._v(" "),s("div",{on:{click:this.download}},[this._t("default")],2)],2)},r=[];e._withStripped=!0},213:function(t,s,a){var e=a(170),r=a(168),n=a(167),l={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var s=t<<10;l.getBCHDigit(s)-l.getBCHDigit(l.G15)>=0;)s^=l.G15<<l.getBCHDigit(s)-l.getBCHDigit(l.G15);return(t<<10|s)^l.G15_MASK},getBCHTypeNumber:function(t){for(var s=t<<12;l.getBCHDigit(s)-l.getBCHDigit(l.G18)>=0;)s^=l.G18<<l.getBCHDigit(s)-l.getBCHDigit(l.G18);return t<<12|s},getBCHDigit:function(t){for(var s=0;0!=t;)s++,t>>>=1;return s},getPatternPosition:function(t){return l.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,s,a){switch(t){case 0:return(s+a)%2==0;case 1:return s%2==0;case 2:return a%3==0;case 3:return(s+a)%3==0;case 4:return(Math.floor(s/2)+Math.floor(a/3))%2==0;case 5:return s*a%2+s*a%3==0;case 6:return(s*a%2+s*a%3)%2==0;case 7:return(s*a%3+(s+a)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var s=new r([1],0),a=0;a<t;a++)s=s.multiply(new r([1,n.gexp(a)],0));return s},getLengthInBits:function(t,s){if(1<=s&&s<10)switch(t){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:case e.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(s<27)switch(t){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(s<41))throw new Error("type:"+s);switch(t){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var s=t.getModuleCount(),a=0,e=0;e<s;e++)for(var r=0;r<s;r++){for(var n=0,l=t.isDark(e,r),i=-1;i<=1;i++)if(!(e+i<0||s<=e+i))for(var o=-1;o<=1;o++)r+o<0||s<=r+o||0==i&&0==o||l==t.isDark(e+i,r+o)&&n++;n>5&&(a+=3+n-5)}for(e=0;e<s-1;e++)for(r=0;r<s-1;r++){var v=0;t.isDark(e,r)&&v++,t.isDark(e+1,r)&&v++,t.isDark(e,r+1)&&v++,t.isDark(e+1,r+1)&&v++,0!=v&&4!=v||(a+=3)}for(e=0;e<s;e++)for(r=0;r<s-6;r++)t.isDark(e,r)&&!t.isDark(e,r+1)&&t.isDark(e,r+2)&&t.isDark(e,r+3)&&t.isDark(e,r+4)&&!t.isDark(e,r+5)&&t.isDark(e,r+6)&&(a+=40);for(r=0;r<s;r++)for(e=0;e<s-6;e++)t.isDark(e,r)&&!t.isDark(e+1,r)&&t.isDark(e+2,r)&&t.isDark(e+3,r)&&t.isDark(e+4,r)&&!t.isDark(e+5,r)&&t.isDark(e+6,r)&&(a+=40);var u=0;for(r=0;r<s;r++)for(e=0;e<s;e++)t.isDark(e,r)&&u++;return a+Math.abs(100*u/s/s-50)/5*10}};t.exports=l},214:function(t,s){function a(){this.buffer=new Array,this.length=0}a.prototype={get:function(t){var s=Math.floor(t/8);return 1==(this.buffer[s]>>>7-t%8&1)},put:function(t,s){for(var a=0;a<s;a++)this.putBit(1==(t>>>s-a-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var s=Math.floor(this.length/8);this.buffer.length<=s&&this.buffer.push(0),t&&(this.buffer[s]|=128>>>this.length%8),this.length++}},t.exports=a},215:function(t,s,a){var e=a(169);function r(t,s){this.totalCount=t,this.dataCount=s}r.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r.getRSBlocks=function(t,s){var a=r.getRsBlockTable(t,s);if(void 0==a)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+s);for(var e=a.length/3,n=new Array,l=0;l<e;l++)for(var i=a[3*l+0],o=a[3*l+1],v=a[3*l+2],u=0;u<i;u++)n.push(new r(o,v));return n},r.getRsBlockTable=function(t,s){switch(s){case e.L:return r.RS_BLOCK_TABLE[4*(t-1)+0];case e.M:return r.RS_BLOCK_TABLE[4*(t-1)+1];case e.Q:return r.RS_BLOCK_TABLE[4*(t-1)+2];case e.H:return r.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=r},216:function(t,s,a){var e=a(170);function r(t){this.mode=e.MODE_8BIT_BYTE,this.data=t}r.prototype={getLength:function(t){return this.data.length},write:function(t){for(var s=0;s<this.data.length;s++)t.put(this.data.charCodeAt(s),8)}},t.exports=r},217:function(t,s,a){var e=a(216),r=a(215),n=a(214),l=a(213),i=a(168);function o(t,s){this.typeNumber=t,this.errorCorrectLevel=s,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var v=o.prototype;v.addData=function(t){var s=new e(t);this.dataList.push(s),this.dataCache=null},v.isDark=function(t,s){if(t<0||this.moduleCount<=t||s<0||this.moduleCount<=s)throw new Error(t+","+s);return this.modules[t][s]},v.getModuleCount=function(){return this.moduleCount},v.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var s=r.getRSBlocks(t,this.errorCorrectLevel),a=new n,e=0,i=0;i<s.length;i++)e+=s[i].dataCount;for(i=0;i<this.dataList.length;i++){var o=this.dataList[i];a.put(o.mode,4),a.put(o.getLength(),l.getLengthInBits(o.mode,t)),o.write(a)}if(a.getLengthInBits()<=8*e)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},v.makeImpl=function(t,s){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[a][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,s),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,s)},v.setupPositionProbePattern=function(t,s){for(var a=-1;a<=7;a++)if(!(t+a<=-1||this.moduleCount<=t+a))for(var e=-1;e<=7;e++)s+e<=-1||this.moduleCount<=s+e||(this.modules[t+a][s+e]=0<=a&&a<=6&&(0==e||6==e)||0<=e&&e<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=e&&e<=4)},v.getBestMaskPattern=function(){for(var t=0,s=0,a=0;a<8;a++){this.makeImpl(!0,a);var e=l.getLostPoint(this);(0==a||t>e)&&(t=e,s=a)}return s},v.createMovieClip=function(t,s,a){var e=t.createEmptyMovieClip(s,a);this.make();for(var r=0;r<this.modules.length;r++)for(var n=1*r,l=0;l<this.modules[r].length;l++){var i=1*l;this.modules[r][l]&&(e.beginFill(0,100),e.moveTo(i,n),e.lineTo(i+1,n),e.lineTo(i+1,n+1),e.lineTo(i,n+1),e.endFill())}return e},v.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var s=8;s<this.moduleCount-8;s++)null==this.modules[6][s]&&(this.modules[6][s]=s%2==0)},v.setupPositionAdjustPattern=function(){for(var t=l.getPatternPosition(this.typeNumber),s=0;s<t.length;s++)for(var a=0;a<t.length;a++){var e=t[s],r=t[a];if(null==this.modules[e][r])for(var n=-2;n<=2;n++)for(var i=-2;i<=2;i++)this.modules[e+n][r+i]=-2==n||2==n||-2==i||2==i||0==n&&0==i}},v.setupTypeNumber=function(t){for(var s=l.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var e=!t&&1==(s>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=e}for(a=0;a<18;a++)e=!t&&1==(s>>a&1),this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=e},v.setupTypeInfo=function(t,s){for(var a=this.errorCorrectLevel<<3|s,e=l.getBCHTypeInfo(a),r=0;r<15;r++){var n=!t&&1==(e>>r&1);r<6?this.modules[r][8]=n:r<8?this.modules[r+1][8]=n:this.modules[this.moduleCount-15+r][8]=n}for(r=0;r<15;r++)n=!t&&1==(e>>r&1),r<8?this.modules[8][this.moduleCount-r-1]=n:r<9?this.modules[8][15-r-1+1]=n:this.modules[8][15-r-1]=n;this.modules[this.moduleCount-8][8]=!t},v.mapData=function(t,s){for(var a=-1,e=this.moduleCount-1,r=7,n=0,i=this.moduleCount-1;i>0;i-=2)for(6==i&&i--;;){for(var o=0;o<2;o++)if(null==this.modules[e][i-o]){var v=!1;n<t.length&&(v=1==(t[n]>>>r&1)),l.getMask(s,e,i-o)&&(v=!v),this.modules[e][i-o]=v,-1==--r&&(n++,r=7)}if((e+=a)<0||this.moduleCount<=e){e-=a,a=-a;break}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,s,a){for(var e=r.getRSBlocks(t,s),i=new n,v=0;v<a.length;v++){var u=a[v];i.put(u.mode,4),i.put(u.getLength(),l.getLengthInBits(u.mode,t)),u.write(i)}var h=0;for(v=0;v<e.length;v++)h+=e[v].dataCount;if(i.getLengthInBits()>8*h)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*h+")");for(i.getLengthInBits()+4<=8*h&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*h||(i.put(o.PAD0,8),i.getLengthInBits()>=8*h));)i.put(o.PAD1,8);return o.createBytes(i,e)},o.createBytes=function(t,s){for(var a=0,e=0,r=0,n=new Array(s.length),o=new Array(s.length),v=0;v<s.length;v++){var u=s[v].dataCount,h=s[v].totalCount-u;e=Math.max(e,u),r=Math.max(r,h),n[v]=new Array(u);for(var _=0;_<n[v].length;_++)n[v][_]=255&t.buffer[_+a];a+=u;var c=l.getErrorCorrectPolynomial(h),d=new i(n[v],c.getLength()-1).mod(c);for(o[v]=new Array(c.getLength()-1),_=0;_<o[v].length;_++){var p=_+d.getLength()-o[v].length;o[v][_]=p>=0?d.get(p):0}}var f=0;for(_=0;_<s.length;_++)f+=s[_].totalCount;var g=new Array(f),m=0;for(_=0;_<e;_++)for(v=0;v<s.length;v++)_<n[v].length&&(g[m++]=n[v][_]);for(_=0;_<r;_++)for(v=0;v<s.length;v++)_<o[v].length&&(g[m++]=o[v][_]);return g},t.exports=o},218:function(t,s,a){var e=a(217),r=a(169),n=function(t,s){var a=new e((s=s||{}).typeNumber||-1,s.errorCorrectLevel||r.H);return a.addData(t),a.make(),a};n.ErrorCorrectLevel=r,t.exports=n},219:function(t,s,a){"use strict";a.r(s);var e=a(161),r=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var l=a(212),i=a(0),o=Object(i.a)(r.a,l.a,l.b,!1,null,null,null);o.options.__file="src/components/qrcode.vue",s.default=o.exports},221:function(t,s,a){},222:function(t,s,a){var e=a(221);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals),(0,a(26).default)("38382f66",e,!1,{})}}]);