(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{424:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据验证"}},[t._v("#")]),t._v(" 数据验证")]),t._v(" "),a("p",[a("strong",[a("em",[t._v("HeePHP 验证规则使用字符串拼接")])])]),t._v(" "),a("p",[a("strong",[a("em",[t._v("不进行配置，则不进行数据验证")])])]),t._v(" "),a("p",[t._v("HeePHP 使用自动数据验证，需要配置 4 个模型变量：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("变量名")]),t._v(" "),a("th",[t._v("规则")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("insert_validata")]),t._v(" "),a("td",[t._v("字段 1|规则 1+规则 2+规则 3+...")]),t._v(" "),a("td",[t._v("插入数据时验证规则")])]),t._v(" "),a("tr",[a("td",[t._v("update_validata")]),t._v(" "),a("td",[t._v("字段 1|规则 1+规则 2+规则 3+...")]),t._v(" "),a("td",[t._v("更新数据时验证规则")])]),t._v(" "),a("tr",[a("td",[t._v("insert_message_validata")]),t._v(" "),a("td",[t._v("字段 1|规则 1+规则 2+规则 3+...")]),t._v(" "),a("td",[t._v("插入数据时验证规则错误消息")])]),t._v(" "),a("tr",[a("td",[t._v("update_message_validata")]),t._v(" "),a("td",[t._v("字段 1|规则 1+规则 2+规则 3+...")]),t._v(" "),a("td",[t._v("更新数据时验证规则错误消息")])])])]),t._v(" "),a("p",[a("strong",[t._v("配置验证规则")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新数据时的验证规则：title字段必须输入，context字段必须输入")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$update_validata")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"title|must;context|must;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新数据时验证错误的提示消息：title为标题，规则为必填；context为内容，规则为不能为空")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$update_message_validata")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"标题|必填;内容|不能为空;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插入数据时：username为必填、唯一、字母数字下划线组合且最小为6位")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$insert_validata")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'username|must+unique+alphaNumDash=6;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插入数据时验证失败时的提示消息，对应上一行验证规则")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$insert_message_validata")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'用户名|必填+已存在该用户名+字母数字下划线最少6位;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新数据时：nickname为必填字母数字下划线组合最少6位最多18位 ，email为必填且是一个email地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$update_validata")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"nickname|must+alphaNumDash=6,18;email|must+email;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新数据验证错误时的提示，对应上一行验证规则")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$update_message_validata")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"昵称|必填+字母数字下划线最少6位最多18位;email|不能为空+必须输入电子邮箱;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("单独验证：")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从post中获取数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'post.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建验证并传入要验证的数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$validata")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("validata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断验证是否通过")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$validata")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("must")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$validata")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alphaNumDash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置验证错误信息")]),t._v("\n        validata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'密码不能为空，请输入6位以上字母数字下划线组合！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'field'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'验证错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示验证错误消息")]),t._v("\n        validata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showerror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//终止")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"验证规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证规则"}},[t._v("#")]),t._v(" 验证规则")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("验证规则")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("must")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("必填")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("[min=int.min,max=int.max]")]),t._v(" "),a("td",[t._v("整数")])]),t._v(" "),a("tr",[a("td",[t._v("double")]),t._v(" "),a("td",[t._v("[wei=0]")]),t._v(" "),a("td",[t._v("小数，小数位数")])]),t._v(" "),a("tr",[a("td",[t._v("alphaNumDashChinese")]),t._v(" "),a("td",[t._v("[min=1,max=int.max]")]),t._v(" "),a("td",[t._v("字母数字中文下划线")])]),t._v(" "),a("tr",[a("td",[t._v("alphaNumDash")]),t._v(" "),a("td",[t._v("[min=1,max=0]")]),t._v(" "),a("td",[t._v("字母数字下划线")])]),t._v(" "),a("tr",[a("td",[t._v("alphaNum")]),t._v(" "),a("td",[t._v("[min=1,max=0]")]),t._v(" "),a("td",[t._v("字母数字")])]),t._v(" "),a("tr",[a("td",[t._v("alpha")]),t._v(" "),a("td",[t._v("[min=1,max=0]")]),t._v(" "),a("td",[t._v("字母")])]),t._v(" "),a("tr",[a("td",[t._v("mobile")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("手机号")])]),t._v(" "),a("tr",[a("td",[t._v("tel")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("电话")])]),t._v(" "),a("tr",[a("td",[t._v("postcode")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("邮编")])]),t._v(" "),a("tr",[a("td",[t._v("email")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("电子邮箱")])]),t._v(" "),a("tr",[a("td",[t._v("qq")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("QQ 号码")])]),t._v(" "),a("tr",[a("td",[t._v("equal")]),t._v(" "),a("td",[t._v("[value]")]),t._v(" "),a("td",[t._v("相等，传字段（验证规则）或值（独立验证）")])]),t._v(" "),a("tr",[a("td",[t._v("notequal")]),t._v(" "),a("td",[t._v("[value]")]),t._v(" "),a("td",[t._v("不相等，传字段（验证规则）或值（独立验证）")])]),t._v(" "),a("tr",[a("td",[t._v("idcard")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("身份张")])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("网址http://或https://开头")])]),t._v(" "),a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("ip 地址")])]),t._v(" "),a("tr",[a("td",[t._v("chinese")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("中文")])]),t._v(" "),a("tr",[a("td",[t._v("unique")]),t._v(" "),a("td",[t._v("空")]),t._v(" "),a("td",[t._v("数据库字段值唯一")])]),t._v(" "),a("tr",[a("td",[t._v("regex")]),t._v(" "),a("td",[t._v("[正则]")]),t._v(" "),a("td",[t._v("自定义正则")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);