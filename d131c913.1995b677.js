(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return j})),a.d(t,"metadata",(function(){return h})),a.d(t,"toc",(function(){return g})),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),i=a(0),l=a.n(i),o=a(108),c=a(119),s=a(107),b=a(93),d=a.n(b),m=37,p=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,o=e.groupId,b=e.className,u=Object(c.a)(),O=u.tabGroupChoices,j=u.setTabGroupChoices,h=Object(i.useState)(n),g=h[0],N=h[1],f=i.Children.toArray(e.children);if(null!=o){var y=O[o];null!=y&&y!==g&&r.some((function(e){return e.value===y}))&&N(y)}var v=function(e){N(e),null!=o&&j(o,e)},C=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},b)},r.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",d.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(i.cloneElement)(f.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var O=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)},j={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},h={unversionedId:"setup/configuration",id:"setup/configuration",isDocsHomePage:!1,title:"Configuration",description:"Structure of Directory",source:"@site/docs/setup/configuration.md",slug:"/setup/configuration",permalink:"/Tutor-Management-System/docs/setup/configuration",editUrl:"https://github.com/Dudrie/Tutor-Management-System/edit/main/docs/docs/setup/configuration.md",version:"current",sidebar_label:"Configuration",sidebar:"setup",previous:{title:"Installation",permalink:"/Tutor-Management-System/docs/setup/installation"},next:{title:"Update",permalink:"/Tutor-Management-System/docs/setup/update"}},g=[{value:"Structure of Directory",id:"structure-of-directory",children:[]},{value:"Options",id:"options",children:[{value:"<code>ApplicationConfiguration</code>",id:"applicationconfiguration",children:[]},{value:"<code>DatabaseConfiguration</code>",id:"databaseconfiguration",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Pug Templates",id:"pug-templates",children:[{value:"Attendance Template",id:"attendance-template",children:[]},{value:"Credentials Template",id:"credentials-template",children:[]},{value:"Mail Template",id:"mail-template",children:[]},{value:"Scheinexam Results Template",id:"scheinexam-results-template",children:[]},{value:"Scheinstatus Results Template",id:"scheinstatus-results-template",children:[]}]}],N={toc:g};function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},N,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"structure-of-directory"},"Structure of Directory"),Object(o.a)("p",null,"Within the ",Object(o.a)("inlineCode",{parentName:"p"},"tms/config/")," directory containing the configuration files the following items have to be present:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"production.yml"),": YAML file containing the general configuration for the server."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"templates/"),": Directory containing the ",Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://pugjs.org/"}),"Pug")," template files (see below).")),Object(o.a)("p",null,"Those files are provided through a docker volume. See the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"installation"}),"installation guide")," for more information."),Object(o.a)("p",null,"Every ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Dudrie/Tutor-Management-System/releases"}),"release")," contains either a link to the current sample configuration or a sample configuration itself. If it contains the later the server configuration might need an update according to the ",Object(o.a)("em",{parentName:"p"},"Configuration")," section of the release."),Object(o.a)("h2",{id:"options"},"Options"),Object(o.a)("p",null,"The configuration object is of type ",Object(o.a)("inlineCode",{parentName:"p"},"ApplicationConfiguration"),"."),Object(o.a)("h3",{id:"applicationconfiguration"},Object(o.a)("inlineCode",{parentName:"h3"},"ApplicationConfiguration")),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required / Default"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"database")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Required")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"DatabaseConfiguration")," - Configuration of the database. See below for more information.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"sessionTimeout")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("em",{parentName:"td"},"Default: 120")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"Number")," - The time of inactivity in ",Object(o.a)("strong",{parentName:"td"},"minutes")," after which the session of the user times out and he/she must log in again.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"prefix")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("em",{parentName:"td"},"(optional, no default)")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Prefix of the root path the application is hosted on. If the application is hosted on the root path this setting must be omitted. Otherwise it has to be set to the prefix (ie. for the path ",Object(o.a)("inlineCode",{parentName:"td"},"https://example.org/foo")," this setting has to be set to ",Object(o.a)("inlineCode",{parentName:"td"},"foo"),")")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"handbookUrl")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("em",{parentName:"td"},"(optional, no default)")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - URL to the handbook of the TMS. You should only have to change this if you want to provide your own version of the handbook.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"defaultSettings")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("em",{parentName:"td"},'(optional, defaults see "Settings" page)')),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings to initialize parts of the server with. Those settings can also be configured through the client later on. See ",Object(o.a)("a",Object(n.a)({parentName:"td"},{href:"../handbook/settings"}),"Settings")," for more information.")))),Object(o.a)("h3",{id:"databaseconfiguration"},Object(o.a)("inlineCode",{parentName:"h3"},"DatabaseConfiguration")),Object(o.a)("p",null,"The following table contains the options available for the database configuration, a short description and their default value (if they are optional)."),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required / Default"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"databaseURL")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Required")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - The URL which resolves to the database and the desired collection. Must be a MongoDB URL. ",Object(o.a)("em",{parentName:"td"},"Please note: Databases other than MongoDB might work if they are compatible to mongoose. However they are not tested and officially supported."))),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"maxRetries")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("em",{parentName:"td"},"Default: 2")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"Number")," - Configures how often the server tries to establish a connection to the database while ",Object(o.a)("strong",{parentName:"td"},"starting")," the server. If there is no connection after the maximum amount of retries the server is stopped with an error code. ",Object(o.a)("em",{parentName:"td"},"Please note: Any try to connect can take up to 30s."))),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"config")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("em",{parentName:"td"},"Default: ",Object(o.a)("inlineCode",{parentName:"em"},"{useNewUrlParser: true, useUnifiedTopology: true}"))),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"ConnectionOptions")," - The ",Object(o.a)("inlineCode",{parentName:"td"},"auth")," property will not be respected. To set authentication details one must use the corresponding ",Object(o.a)("a",Object(n.a)({parentName:"td"},{href:"#environment-variables"}),"environment variables")," Further configuration options provided to the MongoDB connection. For more information see the ",Object(o.a)("a",Object(n.a)({parentName:"td"},{href:"https://mongoosejs.com/docs/connections.html"}),"mongoose documentation"),".")))),Object(o.a)("h2",{id:"environment-variables"},"Environment Variables"),Object(o.a)("p",null,"All of the following environment variables are ",Object(o.a)("strong",{parentName:"p"},"required")," unless stated otherwise."),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"TMS_MONGODB_USER")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Username to log into the mongoDB.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"TMS_MONGODB_PW")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Password to log into the mongoDB.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"TMS_SECRET")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Secret to encrypt sensitive fields in the documents in the DB (ie names of users, ...). This secret should be created like a ",Object(o.a)("em",{parentName:"td"},"secure password")," (no easy to guess words, ...).")))),Object(o.a)("h2",{id:"pug-templates"},"Pug Templates"),Object(o.a)("p",null,"The Tutor-Management-System can generate various PDFs. These can be configured using the following templates. The templates must be inside an ",Object(o.a)("inlineCode",{parentName:"p"},"templates/")," folder inside the ",Object(o.a)("inlineCode",{parentName:"p"},"config/")," folder. All templates use the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://pugjs.org/api/getting-started.html"}),"pug template engine")," and variables which will get substituted by the corresponding value on PDF generation. Every template section contains a description on it's usage, the variables used inside and an example. Please note that the templates do NOT need a ",Object(o.a)("inlineCode",{parentName:"p"},"html"),", ",Object(o.a)("inlineCode",{parentName:"p"},"body")," or ",Object(o.a)("inlineCode",{parentName:"p"},"head")," because they will be inserted into a body during PDF generation."),Object(o.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Please note that ",Object(o.a)("strong",{parentName:"p"},"all template files")," must be present at the start of the server."))),Object(o.a)("h3",{id:"attendance-template"},"Attendance Template"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Filename: ",Object(o.a)("inlineCode",{parentName:"strong"},"attendance.pug"))),Object(o.a)("p",null,"This template gets used on the creation of a PDF containing a list of students of a tutorial. On this list students can leave their signature if they are present."),Object(o.a)(u,{defaultValue:"desc",values:[{label:"Description",value:"desc"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.a)(O,{value:"desc",mdxType:"TabItem"},Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"tutorialSlot")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - The slot of the tutorial which belongs to the sheet.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"date")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"DateTime")," - Date to which the attendance list belongs. Takes in the format after a comma. For more information on the available functions see the ",Object(o.a)("a",Object(n.a)({parentName:"td"},{href:"https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html"}),"luxon documentation"))),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"tutorName")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Name of the tutor in the format ",Object(o.a)("inlineCode",{parentName:"td"},"<lastname>, <firstname>"),".")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"students")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"{ name: string }[]")," - Array containing objects of which each holds the name of one student."))))),Object(o.a)(O,{value:"example",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-pug"}),"h3(style='text-align: center') Anwesenheitsliste\n\ndiv(style='display: flex; width: 100%')\n  span Tutorium #{tutorialSlot}\n  span(style='margin-left: auto; float: right') Datum: #{date.toFormat('dd.MM.yyyy')}\n\ndiv(style='margin-bottom: 16px')\n  span Tutor: #{tutorName}\n\ntable\n  thead\n    tr\n      th Name\n      th Unterschrift\n\n  tbody\n    each student in students\n      tr\n        td #{student.name}\n        td\n")))),Object(o.a)("h3",{id:"credentials-template"},"Credentials Template"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Filename: ",Object(o.a)("inlineCode",{parentName:"strong"},"credentials.pug"))),Object(o.a)(u,{defaultValue:"desc",values:[{label:"Description",value:"desc"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.a)(O,{value:"desc",mdxType:"TabItem"},Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"credentials")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"{ name: string; username: string; password: string }[]")," - Array containing objects which hold information about the user."))))),Object(o.a)(O,{value:"example",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-pug"}),"h3(style='text-align: center') Zugangsdaten\n\ntable\n  style(scoped).\n    td {\n      padding: 0.5em 1em;\n      font-family: \"Courier New\", Courier, monospace;\n      line-height: 200%;\n    }\n  \n  thead\n    tr\n      th Name\n      th Nutzername\n      th Password\n\n  tbody\n    each user in users\n      tr\n        td #{user.name}\n        td #{user.username}\n        if !!user.password\n          td #{user.password}\n        else\n          td Kein tmp. Passwort\n")))),Object(o.a)("h3",{id:"mail-template"},"Mail Template"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Filename: ",Object(o.a)("inlineCode",{parentName:"strong"},"mail.pug"))),Object(o.a)(u,{defaultValue:"desc",values:[{label:"Description",value:"desc"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.a)(O,{value:"desc",mdxType:"TabItem"},Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"name")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Name of the user which gets the email.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"username")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Username of the user which gets the email.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"password")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"String")," - Password of the user which gets the email."))))),Object(o.a)(O,{value:"example",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-pug"}),"| Hallo #{name},\n|\n| hier sind deine Zugangsdaten zum Tutor-Management-System:\n|\n| Nutzername: #{username}\n| Passwort: #{password}\n|\n| Mit freundlichen Gr\xfc\xdfen\n| TMS Admin\n")))),Object(o.a)("h3",{id:"scheinexam-results-template"},"Scheinexam Results Template"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Filename: ",Object(o.a)("inlineCode",{parentName:"strong"},"scheinexam.pug"))),Object(o.a)(u,{defaultValue:"desc",values:[{label:"Description",value:"desc"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.a)(O,{value:"desc",mdxType:"TabItem"},Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"scheinExamNo")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"Number")," - Number of the Scheinexam of this PDF.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"statuses")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"{ matriculationNo: string; state: PassedState }[]")," - Array containing the statuses of each student (with matriculation number) for the exam of the generated PDF. ",Object(o.a)("inlineCode",{parentName:"td"},"PassedState"),' can be one of the following values: "passed", "notPassed", "notAttended"'))))),Object(o.a)(O,{value:"example",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-pug"}),'h3(style=\'text-align: center\') Scheinklausur Nr. #{scheinExamNo}\n\ntable\n  style(scoped).\n    td {\n      padding: 0.5em 1em;\n      font-family: "Courier New", Courier, monospace;\n      line-height: 200%;\n    }\n  \n  thead\n    tr\n      th Matrikelnummer\n      th Bestanden / Nicht bestanden\n\n  tbody\n    each status in statuses\n      tr\n        td #{status.matriculationNo}\n        if status.state === "passed"\n          td Bestanden\n        else if status.state === "notPassed"\n          td Nicht bestanden\n        else\n          td Abwesend\n')))),Object(o.a)("h3",{id:"scheinstatus-results-template"},"Scheinstatus Results Template"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Filename: ",Object(o.a)("inlineCode",{parentName:"strong"},"scheinstatus.pug"))),Object(o.a)(u,{defaultValue:"desc",values:[{label:"Description",value:"desc"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.a)(O,{value:"desc",mdxType:"TabItem"},Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"statuses")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.a)("inlineCode",{parentName:"td"},"{ matriculationNo: string; state: PassedState }[]"),' - Array containing the Schein statuses of each student (with matriculation number). PassedState can be one of the following values: "passed", "notPassed"'))))),Object(o.a)(O,{value:"example",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-pug"}),'h3(style=\'text-align: center\') Scheinliste\n\ntable\n  style(scoped).\n    td {\n      padding: 0.5em 1em;\n      font-family: "Courier New", Courier, monospace;\n      line-height: 200%;\n    }\n  \n  thead\n    tr\n      th Matrikelnummer\n      th Bestanden / Nicht bestanden\n\n  tbody\n    each status in statuses\n      tr\n        td #{status.matriculationNo}\n        if status.state === "passed"\n          td Bestanden\n        else\n          td Nicht bestanden\n')))))}f.isMDXComponent=!0},107:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,u=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return a?r.a.createElement(u,o(o({ref:t},s),{},{components:a})):r.a.createElement(u,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},119:function(e,t,a){"use strict";var n=a(0),r=a(120);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r}}]);