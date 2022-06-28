(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{634:function(t,n,e){"use strict";e.r(n);var i=e(15),g=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("知识点： Git 命令")]),t._v(" "),e("p",[t._v("master    // 默认开发分支\norigin    // 默认远程版本库\nHead      // 默认开发分支\nHead^     // Head 的父提交")]),t._v(" "),e("p",[t._v("创建版本库\ngit clone "),e("url",[t._v("                  // 克隆远程版本库\ngit init                         // 初始化本地版本库")])],1),t._v(" "),e("p",[t._v("修改和提交\ngit status                       // 查看状态\ngit diff                         // 查看变更内容\ngit add .                        // 跟踪指定的文件\ngit mv "),e("old",[e("new",[t._v("               // 文件改名\ngit rm "),e("file",[t._v("                    // 删除文件\ngit rm --cached "),e("file",[t._v('           // 停止跟踪文件但不删除\ngit commit -m "commit message"   // 提交所有更新过的文件\ngit commit --amend               // 修改最后一次提交')])],1)],1)],1)],1),t._v(" "),e("p",[t._v("查看提交历史\ngit log                          // 查看提交是\ngit log -p "),e("file",[t._v("                // 查看指定文件的提交历史\ngit blame "),e("file",[t._v("                 // 以列表方式查看指定文件的提交历史")])],1)],1),t._v(" "),e("p",[t._v("撤销（回滚）\ngit reset --hard HEAD            // 撤销工作目录中所有未提交文件的修改内容\ngit checkout HEAD "),e("file",[t._v("         // 撤销指定的未提交文件的修改内容\ngit revert "),e("commit",[t._v("              // 撤销指定的提交")])],1)],1),t._v(" "),e("p",[t._v("分支与标签\ngit branch                       // 显示所有本地分支\ngit checkout <branch/tag>        // 切换到指定分支或标签\ngit branch "),e("new-branch",[t._v("          // 创建新分支\ngit branch -d "),e("branch",[t._v("           // 删除本地分支\ngit tag                          // 列出所有本地标签\ngit tag "),e("tagname",[t._v("                // 基于最新提交创建标签\ngit tag -d "),e("tagname",[t._v("             // 删除标签")])],1)],1)],1)],1),t._v(" "),e("p",[t._v("合并与衍合\ngit merge "),e("branch",[t._v("               // 合并指定分支到当前分支\ngit rebase "),e("branch",[t._v("              // 衍合指定分支到当前分支")])],1)],1),t._v(" "),e("p",[t._v("远程操作\ngit remote -v                    // 查看远程版本库信息\ngit remote show "),e("remote",[t._v("         // 查看指定远程版本库信息\ngit remote add "),e("remote",[e("url",[t._v("    // 添加远程版本库\ngit fetch "),e("remote",[t._v("               // 从远程库获取代码\ngit pull "),e("remote",[e("branch",[t._v("       // 下载代码及快速合并\ngit push "),e("remote",[e("branch",[t._v("       // 上载代码及快速合并\ngit push "),e("remote",[t._v(" :<branch/tag-name>  // 删除远程分支或标签\ngit push --tags                  // 上传所有标签")])],1)],1)],1)],1)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);n.default=g.exports}}]);