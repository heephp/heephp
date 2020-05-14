(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{376:function(v,_,t){"use strict";t.r(_);var d=t(33),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"系统函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统函数"}},[v._v("#")]),v._v(" 系统函数")]),v._v(" "),t("p",[v._v("系统定义的函数,可调用")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("函数名")]),v._v(" "),t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("返回值")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("request")]),v._v(" "),t("td",[v._v("name[,value]")]),v._v(" "),t("td",[v._v("string|array")]),v._v(" "),t("td",[v._v("获取设置 get,post,session,server")])]),v._v(" "),t("tr",[t("td",[v._v("cache")]),v._v(" "),t("td",[v._v("name[,value]")]),v._v(" "),t("td",[v._v("string|array")]),v._v(" "),t("td",[v._v("获取设置缓存")])]),v._v(" "),t("tr",[t("td",[v._v("uploadfile")]),v._v(" "),t("td",[v._v("参考上传文件")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("上传文件")])]),v._v(" "),t("tr",[t("td",[v._v("guid")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("生成 Guid")])]),v._v(" "),t("tr",[t("td",[v._v("escapeString")]),v._v(" "),t("td",[v._v("string|array")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("过滤字符串中的 sql")])]),v._v(" "),t("tr",[t("td",[v._v("safe_replace")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("将 url 或 html 中的字符替换")])]),v._v(" "),t("tr",[t("td",[v._v("randChar")]),v._v(" "),t("td",[v._v("num[,format]")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("随机生成指定位数字符串")])]),v._v(" "),t("tr",[t("td",[v._v("vercode")]),v._v(" "),t("td",[v._v("参见验证码")]),v._v(" "),t("td",[v._v("image")]),v._v(" "),t("td",[v._v("生成验证码")])]),v._v(" "),t("tr",[t("td",[v._v("checkvcode")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[v._v("验证验证码是否正确")])]),v._v(" "),t("tr",[t("td",[v._v("sendmail")]),v._v(" "),t("td",[v._v("参见发送邮件")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("发送邮件")])]),v._v(" "),t("tr",[t("td",[v._v("url")]),v._v(" "),t("td",[v._v("string[,parms,suffix]")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("根据参数生成 url")])]),v._v(" "),t("tr",[t("td",[v._v("config")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("string|array")]),v._v(" "),t("td",[v._v("获取配置信息")])]),v._v(" "),t("tr",[t("td",[v._v("db")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("返回实例化的数据库对象")])]),v._v(" "),t("tr",[t("td",[v._v("table")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("heephp\\orm\\orm")]),v._v(" "),t("td",[v._v("返回实例化的ORM对象 ,参数为表名")])]),v._v(" "),t("tr",[t("td",[v._v("model")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("heephp\\model")]),v._v(" "),t("td",[v._v("表名，返回模型")])]),v._v(" "),t("tr",[t("td",[v._v("lang")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("传入 tag 输出语言包对应值")])]),v._v(" "),t("tr",[t("td",[v._v("aop")]),v._v(" "),t("td",[v._v("tag[,parms]")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("aop 标签定义")])]),v._v(" "),t("tr",[t("td",[v._v("import")]),v._v(" "),t("td",[v._v("file[,var]")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("视图中包含文件，可选传入变量列表")])]),v._v(" "),t("tr",[t("td",[v._v("widget")]),v._v(" "),t("td",[v._v("path,parms")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("视图调用任意控制器方法为widget小部件")])]),v._v(" "),t("tr",[t("td",[v._v("transfer_time")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("根据传入的值返回‘刚刚’‘小时之前’..")])]),v._v(" "),t("tr",[t("td",[v._v("sstr")]),v._v(" "),t("td",[v._v("str,max")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("从开始截取指定数量字符串")])]),v._v(" "),t("tr",[t("td",[v._v("htmlencode")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("编码的 html")])]),v._v(" "),t("tr",[t("td",[v._v("htmldecode")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("解码 html")])]),v._v(" "),t("tr",[t("td",[v._v("imgToBase64")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("string")]),v._v(" "),t("td",[v._v("将图片路径指定图片转换为base64字符串")])]),v._v(" "),t("tr",[t("td",[v._v("foreach_dir")]),v._v(" "),t("td",[v._v("string,callback")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("遍历指定的路径，并调用回调函数，回调两个参数为：当前文件名，当前路径")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);