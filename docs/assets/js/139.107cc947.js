(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{459:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传"}},[t._v("#")]),t._v(" 上传")]),t._v(" "),a("p",[t._v("HeePHP 具有上传文件功能，使用上传函数能轻松的调用上传功能并对上传的文件格式、文件大小进行验证")]),t._v(" "),a("h3",{attrs:{id:"单文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单文件上传"}},[t._v("#")]),t._v(" 单文件上传")]),t._v(" "),a("p",[t._v("调用函数 uploadfile()")]),t._v(" "),a("p",[t._v("参数列表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fname")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("表单域的名称")])]),t._v(" "),a("tr",[a("td",[t._v("allowedExts")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("允许上传的文件扩展名字符串数组")])]),t._v(" "),a("tr",[a("td",[t._v("allowfilesize")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("允许上传的文件大小，单位字节")])]),t._v(" "),a("tr",[a("td",[t._v("dir")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("上传到的目录")])]),t._v(" "),a("tr",[a("td",[t._v("nametype")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("md5")]),t._v(" "),a("td",[t._v("新生成文件名的规则：md5,timespan,guid")])])])]),t._v(" "),a("p",[t._v("返回值："),a("br"),t._v(" "),a("code",[t._v("return ['name'=>文件名,'ext'=>扩展名,'dir'=>相对路径,'fullpath'=>保存的绝对路径]")])]),t._v(" "),a("p",[t._v("代码参考：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当天的文件存入一个目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'\\upload\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Ymd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上传文件使用guid保存文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploadfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'file1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'gif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'guid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果发生错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'msg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"多文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多文件上传"}},[t._v("#")]),t._v(" 多文件上传")]),t._v(" "),a("p",[t._v("调用函数 mulit_uploadfile()")]),t._v(" "),a("p",[t._v("参数列表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fname")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("表单域的名称")])]),t._v(" "),a("tr",[a("td",[t._v("allowedExts")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("允许上传的文件扩展名字符串数组")])]),t._v(" "),a("tr",[a("td",[t._v("allowfilesize")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("允许上传的文件大小，单位字节")])]),t._v(" "),a("tr",[a("td",[t._v("dir")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("上传到的目录")])]),t._v(" "),a("tr",[a("td",[t._v("nametype")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("md5")]),t._v(" "),a("td",[t._v("新生成文件名的规则：md5,timespan,guid")])])])]),t._v(" "),a("p",[t._v("返回值："),a("br"),t._v(" "),a("code",[t._v("return ['success' => 成功的列表, 'fail' => 失败的列表];")]),t._v("\n代码参考：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当天的文件存入一个目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'\\upload\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Ymd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上传文件使用guid保存文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$re")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mulit_uploadfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'file1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'gif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'guid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);