(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{329:function(s,t,n){"use strict";n.r(t);var a=n(33),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"配置缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置缓存"}},[s._v("#")]),s._v(" 配置缓存")]),s._v(" "),n("p",[s._v("缓存的配置在配置文件中：")]),s._v(" "),n("blockquote",[n("p",[s._v("路径为：\\app\\config.php")])]),s._v(" "),n("p",[n("strong",[n("em",[s._v("配置详解")])])]),s._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置缓存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'cache'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//缓存驱动 默认为file 可选redis memcached file")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'diver'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'file'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//缓存超时时间")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'exp_time'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//redis配置 驱动为redis时生效")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'redis'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//redis服务器地址")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'host'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'127.0.0.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//redis端口")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'port'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'6379'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//memcached配置 驱动为memcached时生效")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'memcached'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//memcached服务器地址")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'host'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'127.0.0.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//memcached端口")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'port'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'11211'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);