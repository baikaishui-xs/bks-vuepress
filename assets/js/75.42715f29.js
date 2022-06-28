(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{637:function(n,t,e){"use strict";e.r(t);var i=e(15),s=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("特性：\n1、功能和 Git 基本一样，区别是 Git 是本地仓库，GitHub 是公共仓库（远程仓库）")]),n._v(" "),e("p",[n._v("原理：先在 本地仓库 中进行开发，当功能开发完成后再推送到 公共仓库，其它开发人员就可以从公共仓库中下载你推送的代码了，这样就可以实现多人协作开发了")]),n._v(" "),e("p",[n._v("GitHub 网站加载缓慢的解决方法：\n在 IP 查询工具中输入 www.github.com，把解析的 IP 地址复制到 hosts 文件中\n如：20.205.243.166 www.github.com")]),n._v(" "),e("p",[n._v("多人协作开发流程：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("技术经理 在自己的计算机中创建本地仓库\n技术经理 在github中创建远程仓库\n技术经理 将本地仓库推送到远程仓库\n开发人员 克隆远程仓库到本地进行开发\n开发人员 将本地仓库中开发的内容推送到远程仓库\n技术经理 将远程仓库中的最新内容拉去到本地\n\n特性：开发人员的克隆操作只需要操作一次就可以了，后续的开发中无需克隆\n")])])]),e("p",[n._v("使用步骤：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("提示：在钥匙串访问中删除 GitHub账号 来实现切换或退出 GitHub账号 的操作\n\n技术经理：\n    \n    （1）git init：创建本地仓库\n\n    （2）git add index.html：将文件添加到暂存区中（该文件的状态变为 被管理的文件）\n\n    （3）git commit -m 第一次提交： 将暂存区的文件提交到 Git 仓库中\n\n    （4）在 GitHub 网站登录账号，并创建一个远程仓库（Repositories New)\n        Owner（仓库所有者）\n        Repository name（仓库名称）\n        Description（仓库描述信息）\n\n        Public（创建公共仓库）\n        Private（创建私有仓库）\n\n        Initialize this repository with（初始化）\n            Add a README file（创建仓库 描述文件 md格式的）\n\n        创建后：\n            HTTPS 形式 里的是远程仓库的地址\n                格式：协议://仓库域名/仓库所有者/仓库名字\n                如：https://github.com/hunmingwu/Demon-GitHub.git\n\n    （5）将本地仓库推送到远程仓库\n        原理：通过远程仓库地址向仓库中推送内容\n\n        命令：\n            git push 远程仓库地址 推送的分支名称（将本地仓库推送到远程仓库）\n            如：git push https://github.com/hunmingwu/Demon-GitHub.git master\n            提示：*[new branch] master -> master（向远程仓库中推送了新的分支，把本地仓库中的 master 推送到了 远程仓库中的 master \n\n        优化：\n            解决：每次将本地仓库推送到远程仓库时，都要输入远程仓库地址，而远程仓库地址非常的长，我们可以给它取个短的别名，内部会自动解析成远程仓库地址\n\n            git remote add 远程仓库地址别名 远程仓库地址（为远程仓库地址起一个别名）\n            如：git remote add origin https://github.com/hunmingwu/Demon-GitHub.git\n            下次提交地址时，只需要输入 git push origin 即可\n\n        优化：\n            作用：使用该命令后下次提交地址，只需要输入 git push 就可以将本地仓库提交到 记录的远程仓库中了\n            git push -u 远程仓库地址别名 分支名称（记录远程仓库地址 和 分支名称）\n\n    （6）邀请开发人员成为合作者\n        远程仓库 → Settings → Manage access → Invite a collaborator → 添加 GipHub 账号 → 复制 Copy invite link 里的邀请链接给 开发人员\n\n    （7）当开发人员提交本地仓库到远程仓库后，技术经理需要把最新的远程仓库，拉取到本地仓库中\n        命令：git pull 远程仓库地址 分支名称（拉取远程仓库中最新的版本）\n        如：git pull origin master\n\n开发人员：\n    \n    （1）克隆远程仓库到本地仓库\n        命令：git clone 远程仓库地址\n\n    （2）将本地仓库推送到远程仓库\n        提示：\n            1、技术经理 需要邀请 开发人员 为合作者，开发人员才可以向远程仓库中提交本地仓库。登录开发人员的 GitHub 账号，将技术经理给的 邀请链接 粘贴到地址栏，点击接受邀请即可\n            2、远程仓库地址的别名也会被克隆到本地仓库，使用 git push origin 还是可以将本地仓库推送到远程仓库中\n\n    （3）当远程仓库的版本发送变化时，只需要拉取远程仓库中最新的版本 即可，无需再次克隆\n        注意：如果远程仓库中的版本高于本地仓库中的版本，本地仓库是不能推送的，必须先拉取远程仓库中的内容到本地，才可以推送\n")])])]),e("p",[n._v("合作者开发冲突的问题：\n问题：两个人修改了同一个文件的同一个地方，就会产生冲突，只有先向远程仓库中推送的人，才可以推送成功\n解决方法：\n1、将远程仓库的最新版本拉取到本地仓库中\n提示：CONFLICT: Merge conflict in index.html（当前这个文件发送了冲突）\n2、打开冲突的文件\n提示：<<<<<<< >>>>>>>，内的内容就是冲突的区域，======= 是分割线，用来区分冲突的代码\n如：\n我是 index.html 文件\n<<<<<<< HEAD\n11111111111111111 我是程序员B做出的修改\n=======\n11111111111111111 我是程序员A做出的修改\n>>>>>>> cf5ece87f20885167373188c8f8ac35af7d13395\n22222222222222222\n33333333333333333\n我是程序员B添加的内容")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("            修改后：\n                我是 index.html 文件\n                11111111111111111 我是程序员B做出的修改\n                22222222222222222\n                33333333333333333\n                我是程序员B添加的内容\n    3、保留正确的代码，将冲突文件保存到暂存区中，在保存到本地文件，然后在推送到远程仓库,即可解决\n")])])]),e("p",[n._v("非合作者开发冲突的问题：\n非合作者也可以推送本地仓库，但是需要仓库所有者审核，审核通过后仓库所有者就可以把非合作者的仓库合并到远程仓库中了")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("使用步骤：\n    非合作者：\n        1、点击远程仓库中的 Fork 选项（复制当前仓库到自己的 GitHub 账号中）\n        2、将这个远程仓库克隆到本地仓库中\n        3、开发完成后将本地仓库推送到远程仓库中\n        4、在远程仓库中点击 Pull requests → New pull request → Create pull request\n        5、填写主题、在 Write 中填写 描述信息，在页面的代码块中也可以查看修改的内容\n        6、点击 Create pull request\n\n    仓库所有者：\n        1、在远程仓库中的 Pull requests 选项中就会多出一个非合作者 推送的仓库\n        2、点击进非合作者推送的仓库，选择 Commits 就可以看到非合作者 修改的信息\n        3、点击 Files changed 就可以看到非合作者 修改的内容\n        4、检查后发现没有问题，选择 Conversation，往下拉 点击 Merge pull request，填写一些提交信息，就可以将非合作者 推送的仓库 合并到仓库所有者的仓库中\n")])])]),e("p",[n._v("ssh 协议：\n作用：实现免登录操作\n原理： 用户验证通过密钥实现，密钥是成对出现的分为 公钥 和 私钥，通过验证公钥和私钥的配对情况，决定验证是否通过。公钥相当于门锁，私钥相当于钥匙，如果他们是配对的，那就验证通过")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("https 协议：推送仓库时用户 必须 提供用户名和密码\nssh 协议：推送仓库时用户 不需要 提供用户名和密码\n\n使用步骤：\n    1、生成密钥：ssh-keygen\n        会提示你输入些信息，全部回车常用默认值即可\n    2、打开提示的密钥目录\n        id_rsa（私钥）\n        id_rsa.pub（公  钥）\n    3、打开 id_rsa.pub 文件，将里面的代码复制 → GitHub 网站头像 → Settings → SSH and GPG keys → New SSH key → 粘贴到 Key 中点击完成即可\n    4、GitHub 网站头像 → Your repositories（我的仓库）→ Clone or download → 复制SSH地址\n    -- 第五步一般不需要了\n    5、命令行输入：git remote add origin_ssh git@github.com:hunmingwu/git-demo.git（为这个 SSH 地址起个别名），以后就可以使用这个别名推送仓库了\n")])])]),e("p",[n._v("为远程仓库添加详细说明\n如：https://github.com/jquery/jquery ，中的 README.md 就是远程仓库的详细说明")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("使用步骤：在项目的根目录创建 README.md 文件，这个文件会自动显示在远程仓库的下面")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);