(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{442:function(s,t,a){"use strict";a.r(t);var n=a(33),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"写入配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入配置"}},[s._v("#")]),s._v(" 写入配置")]),s._v(" "),a("p",[s._v("写入配置支持"),a("strong",[s._v("运行时")]),s._v("写入。")]),s._v(" "),a("blockquote",[a("p",[s._v("使用"),a("em",[s._v("运行时")]),s._v("配置更改，有"),a("em",[s._v("效率")]),s._v("和"),a("em",[s._v("安全")]),s._v("的考虑；除非特殊情况，一般不建议对系统配置项进行修改")])]),s._v(" "),a("p",[a("strong",[s._v("运行时")]),s._v("配置项的更改，需要使用"),a("strong",[s._v("AOP 切面")]),s._v("。")]),s._v(" "),a("p",[s._v("系统内置了"),a("code",[s._v("config_init")]),s._v("标记，并将全部配置项作为参数传入，开发者可读取该标记的参数并更改。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("\\app\\aop.php")]),s._v("中定义该标记需要处理的类")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'config_init'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'set_skin'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("然后增加"),a("code",[s._v("\\app\\aop\\set_skin.php")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("aop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("set_skin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$parms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$parms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'skin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("此处参数"),a("code",[s._v("$parms")]),s._v("为引用传递")]),s._v(" "),a("p",[s._v("接下来即可在程序中调用"),a("code",[s._v("skin")]),s._v("配置")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$skin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'skin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$skin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("输出：default")])])}),[],!1,null,null,null);t.default=e.exports}}]);