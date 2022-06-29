"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9740],{21191:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"using-action-parameters",title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b"},i=void 0,s={unversionedId:"tutorials/actions/using-action-parameters",id:"tutorials/actions/using-action-parameters",title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/ja/docs/next/tutorials/actions/using-action-parameters",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/using-action-parameters.md",tags:[],version:"current",frontMatter:{id:"using-action-parameters",title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",permalink:"/go-mobile/ja/docs/next/tutorials/actions/adding-actions-template"},next:{title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/next/tutorials/relations/many-to-one-relations"}},l={},c=[{value:"\u2488 \u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u2489 \u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u248a \u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u248b \u248b \u248b \u248b \u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3",id:"----\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u248c On Mobile App Action \u30e1\u30bd\u30c3\u30c9",id:"-on-mobile-app-action-\u30e1\u30bd\u30c3\u30c9",level:2},{value:"\u248d \u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b",id:"-\u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"addAction",id:"addaction",level:3},{value:"editAction",id:"editaction",level:3},{value:"deleteAction",id:"deleteaction",level:3},{value:"sendEmail",id:"sendemail",level:3},{value:"\u248e \u248e \u248e \u248e \u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b",id:"----\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b",level:2},{value:"\u248f Where to go from here?",id:"-where-to-go-from-here",level:2}],p={toc:c};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Define action parameters to edit the content of your app.")),(0,o.kt)("p",null,"In the tutorial on defining actions, we discovered how to execute 4D code from an iOS app by defining actions from the actions section."),(0,o.kt)("p",null,"In this tutorial, we're going to go further and create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u898f\u30bf\u30b9\u30af\u3092",(0,o.kt)("strong",{parentName:"li"},"\u8ffd\u52a0"),"\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u65e2\u5b58\u30bf\u30b9\u30af\u3092",(0,o.kt)("strong",{parentName:"li"},"\u7de8\u96c6"),"\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u65e2\u5b58\u30bf\u30b9\u30af\u3092",(0,o.kt)("strong",{parentName:"li"},"\u524a\u9664"),"\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30bf\u30b9\u30af\u306b\u95a2\u9023\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092",(0,o.kt)("strong",{parentName:"li"},"\u30e1\u30fc\u30eb\u3067\u9001\u4fe1"),"\u3059\u308b")),(0,o.kt)("p",null,"To begin, let's first download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project")," based on our existing Tasks iOS app:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Download")),(0,o.kt)("h2",{id:"-\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3"},"\u2488 \u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3"),(0,o.kt)("p",null,"Let's begin simple. Open the Tasks mobile project and go directly to the ",(0,o.kt)("strong",{parentName:"p"},"Actions section"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Action section",src:n(12193).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"It's quite empty for the moment... Here is what we want: ",(0,o.kt)("strong",{parentName:"p"},"create a new task from the iOS app"),"."),(0,o.kt)("p",null,"For this, let's create an action using a preset ",(0,o.kt)("strong",{parentName:"p"},"Add")," action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306e\u4e0b\u5074\u306b\u3042\u308b",(0,o.kt)("strong",{parentName:"li"},"\uff0b\u30dc\u30bf\u30f3"),"\u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30ec\u30b3\u30fc\u30c9\u8ffd\u52a0"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Task"),"\u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add action creation",src:n(40663).Z,width:"2164",height:"2046"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"addTasks"')," \u3068\u3044\u3046\u540d\u79f0\u3067",(0,o.kt)("em",{parentName:"li"},'"Add..."')," \u3068\u3044\u3046\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e9\u30d9\u30eb\u30bf\u30a4\u30c8\u30eb\u304c\u8a2d\u5b9a\u3055\u308c\u305f",(0,o.kt)("strong",{parentName:"li"},"\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3"),"\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a",(0,o.kt)("strong",{parentName:"li"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"),"\u304a\u3088\u3073",(0,o.kt)("strong",{parentName:"li"},"\u30d7\u30ed\u30d1\u30c6\u30a3"),"\u304c",(0,o.kt)("strong",{parentName:"li"},"\u30a2\u30af\u30b7\u30e7\u30f3\u5f15\u6570"),"\u30a8\u30ea\u30a2\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add action parameters",src:n(10259).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"At this point, all ",(0,o.kt)("strong",{parentName:"p"},"Add action parameters")," are created automatically and ready to use."),(0,o.kt)("h2",{id:"-\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3"},"\u2489 \u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3"),(0,o.kt)("p",null,"Now let's create an action that will allow you to ",(0,o.kt)("strong",{parentName:"p"},"edit your app content"),"."),(0,o.kt)("p",null,"For this, we'll create an action using a preset ",(0,o.kt)("strong",{parentName:"p"},"Edit")," action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306e\u4e0b\u5074\u306b\u3042\u308b",(0,o.kt)("strong",{parentName:"li"},"\uff0b\u30dc\u30bf\u30f3"),"\u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30ec\u30b3\u30fc\u30c9\u7de8\u96c6"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"Task\u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit action creation",src:n(73435).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"At this point, you will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"editTasks"')," \u3068\u3044\u3046\u540d\u79f0\u3067",(0,o.kt)("em",{parentName:"li"},'"Edit..."')," \u3068\u3044\u3046\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e9\u30d9\u30eb\u30bf\u30a4\u30c8\u30eb\u304c\u8a2d\u5b9a\u3055\u308c\u305f",(0,o.kt)("strong",{parentName:"li"},"\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3"),"\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a",(0,o.kt)("strong",{parentName:"li"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"),"\u304a\u3088\u3073",(0,o.kt)("strong",{parentName:"li"},"\u30d7\u30ed\u30d1\u30c6\u30a3"),"\u304c",(0,o.kt)("strong",{parentName:"li"},"\u30a2\u30af\u30b7\u30e7\u30f3\u5f15\u6570"),"\u30a8\u30ea\u30a2\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit action parameters",src:n(53470).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Don't worry, we'll handle the 4D code for these actions later. :-)"),(0,o.kt)("h2",{id:"-\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3"},"\u248a \u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3"),(0,o.kt)("p",null,"The preset ",(0,o.kt)("strong",{parentName:"p"},"Delete")," action creation process is nearly the same as the Edit action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306e\u4e0b\u5074\u306b\u3042\u308b",(0,o.kt)("strong",{parentName:"li"},"\uff0b\u30dc\u30bf\u30f3"),"\u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30ec\u30b3\u30fc\u30c9\u524a\u9664"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"Task\u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete action creation",src:n(31991).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"At this point, you will see a ",(0,o.kt)("strong",{parentName:"p"},"new action")," named ",(0,o.kt)("em",{parentName:"p"},'"deleteTasks"')," with ",(0,o.kt)("em",{parentName:"p"},'"Remove"')," as the default label."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3",src:n(13702).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"You don't need to worry about parameters or properties for this type of action."),(0,o.kt)("h2",{id:"----\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3"},"\u248b \u248b \u248b \u248b \u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3"),(0,o.kt)("p",null,"Now we want to ",(0,o.kt)("strong",{parentName:"p"},"send a comment")," to a ",(0,o.kt)("strong",{parentName:"p"},"specific email")," depending on a specific task. To do so, click on the + button and create a new action named ",(0,o.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete action creation",src:n(36615).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Now let's create three parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uff0b\u30dc\u30bf\u30f3\u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\uff0c\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u30ea\u30b9\u30c8\u304b\u3089",(0,o.kt)("strong",{parentName:"li"},"Title"),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u9001\u4fe1\u3059\u308b\u30e1\u30fc\u30eb\u306b\u30bf\u30b9\u30af\u540d\u3092\u542b\u3081\u308b\u305f\u3081\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\uff0b\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\uff0c",(0,o.kt)("strong",{parentName:"li"},"Comment"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u300c\u30c6\u30ad\u30b9\u30c8\u300d\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u540c\u3058\u8981\u9818\u3067",(0,o.kt)("strong",{parentName:"li"},"email"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u8ffd\u52a0\u3057\uff0c\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u300c\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,"Your Actions section should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Send comment action creation",src:n(10064).Z,width:"2164",height:"2046"})),(0,o.kt)("h2",{id:"-on-mobile-app-action-\u30e1\u30bd\u30c3\u30c9"},"\u248c On Mobile App Action \u30e1\u30bd\u30c3\u30c9"),(0,o.kt)("p",null,"Click on the Create button to create the ",(0,o.kt)("em",{parentName:"p"},"On Mobile App Action")," database method."),(0,o.kt)("p",null,"All of your actions will automatically be included in this database method."),(0,o.kt)("p",null,"The only thing you need to do is add a reference to your method(s) for the scenario(s) your want to handle."),(0,o.kt)("p",null,"Here's the final ",(0,o.kt)("em",{parentName:"p"},"On Mobile App Action")," database method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // Insert here the code for the action "Add\u2026\n\n        "\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // Insert here the code for the action "Edit\u2026\n\n        "\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // Insert here the code for the action "Remove"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // Insert here the code for the action "Send Comment"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // Unknown action\n\nEnd case \n\n$0:=$result\n\n')),(0,o.kt)("h2",{id:"-\u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b"},"\u248d \u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("h3",{id:"addaction"},"addAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  //\u65b0\u898f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u53c2\u7167\u3092\u4f5c\u6210\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  //\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4fdd\u5b58\n\n\n    $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n    $out.dataSynchro:=True  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u30ea\u30ed\u30fc\u30c9\u3092\u8981\u6c42\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"editaction"},"editAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n        $out.dataSynchro:=True  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ea\u30ed\u30fc\u30c9\u3092\u8981\u6c42\n        $out.statusText:="Task edited"\n\n    Else \n\n        $out:=$status  // \u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n\n    End if \n\nElse \n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n\nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n        $out.dataSynchro:=True  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ea\u30ed\u30fc\u30c9\u3092\u8981\u6c42\n        $out.statusText:="Task deleted"\n\n    Else \n\n        $out:=$status  // \u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n\n    End if \n\nElse \n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n\nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"sendemail"},"sendEmail"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\n\nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("p",null,"Don't forget to add your own values for the ",(0,o.kt)("strong",{parentName:"p"},"sendEmail")," action."),(0,o.kt)("h2",{id:"----\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b"},"\u248e \u248e \u248e \u248e \u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b"),(0,o.kt)("p",null,"It's time to build your app!"),(0,o.kt)("p",null,"Now, if you click on the Action button in the navigation bar, you'll be able to ",(0,o.kt)("strong",{parentName:"p"},"create a new task"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new task",src:n(37429).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Holding and maintaining pressure on your new task cell in the List Form, will show that an ",(0,o.kt)("strong",{parentName:"p"},"Edit...")," action is available in the action list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit task",src:n(10721).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Send a comment using the ",(0,o.kt)("strong",{parentName:"p"},"Send comment")," action."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Send task comment",src:n(30282).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"And finally you can delete an entity using the ",(0,o.kt)("strong",{parentName:"p"},"Delete...")," action."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete task",src:n(92827).Z,width:"1701",height:"992"})),(0,o.kt)("h2",{id:"-where-to-go-from-here"},"\u248f Where to go from here?"),(0,o.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 Your Tasks iOS app is now complete and you can now modify your app data direclty from your device and sychronize it with your server!"),(0,o.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"Download completed project")))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37429:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},92827:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},10721:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},30282:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},12193:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},40663:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},10259:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},31991:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},13702:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},73435:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},53470:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},36615:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},10064:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);