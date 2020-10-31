(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(48),o=n.n(i);t.a=function({icon:e}){return r.a.createElement("span",{className:o.a.wrapper},r.a.createElement(e,null))}},136:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/student_form-f3d85ecd7e9690af665422bf318c55ab.png"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return f}));var a=n(2),r=n(6),i=n(0),o=n(91),s=n(108);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=i.createElement("path",{d:"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"});var d=function(e){var t=e.title,n=e.titleId,a=l(e,["title","titleId"]);return i.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,b)},u=n(93),m={id:"student_management",title:"Student Management",sidebar_label:"Student Management"},p={unversionedId:"handbook/student_management",id:"handbook/student_management",isDocsHomePage:!1,title:"Student Management",description:"Student Overview",source:"@site/docs\\handbook\\student_management.md",slug:"/handbook/student_management",permalink:"/Tutor-Management-System/docs/handbook/student_management",editUrl:"https://github.com/Dudrie/Tutor-Management-System/edit/main/docs/docs/handbook/student_management.md",version:"current",sidebar_label:"Student Management",sidebar:"handbook",previous:{title:"Dashboard",permalink:"/Tutor-Management-System/docs/handbook/dashboard"},next:{title:"Team Management",permalink:"/Tutor-Management-System/docs/handbook/team_management"}},h=[{value:"Student Overview",id:"student-overview",children:[]},{value:"Create Students",id:"create-students",children:[]},{value:"Edit Students",id:"edit-students",children:[]},{value:"Deleting Students",id:"deleting-students",children:[]}],O={rightToc:h};function f(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},O,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)(u.a,{roles:["tutor"],mdxType:"Roles"}),Object(o.b)("h2",{id:"student-overview"},"Student Overview"),Object(o.b)("p",null,'The Student Overview page shows all students in your tutorial.\nYou can see which students are in which team and who would have achieved the "Schein" right now.\nFurthermore, this is the page where you can create students and edit their information.\nA click on the "Information" button on a student\'s bar leads to a page with more information about the selected student.'),Object(o.b)("h2",{id:"create-students"},"Create Students"),Object(o.b)("p",null,'To create new students in your tutorial click the "+ New" button on the upper right. It opens up the following form:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Form to create/edit students",src:n(136).default})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Firstname")," (required): The firstname of the student.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Lastname")," (required): The last name of the student.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Status")," (required): The status of the student. There are three statuses available:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ACTIVE"),": The student is still activly participating in the course."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"INACTIVE"),": The student is not participating anymore (ie has aborted the course)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"HAS SCHEIN"),": The student is participating in the course but already has a valid Schein from an earlier term."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Team")," (required): The team of the student.\nThe TMS automatically selects the first team with a free slot (slot counts are configured by the admin). If no such team could be selected the ",Object(o.b)("em",{parentName:"p"},"New team")," option gets selected.\nYou can manually select one of three options:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"No team"),": The student gets not assigned to any team."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"New team"),": A new team is created and the student assigned to it."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Team #XX"),": The student gets assigned to the selected team."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Matriculation number")," (semi-required): The matriculation number of the student. Gets used to map the results to the students later for the corresponding office at the university."),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If a student does not have a matriculation number assigned he/she can still earn points but their results will ",Object(o.b)("strong",{parentName:"p"},"not")," be printed on the final overview sheet and can ",Object(o.b)("strong",{parentName:"p"},"not")," be reported to the office.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Ilias name")," (semi-required): The display name of the student for the ilias system. Used to map online test results to the students in the system."),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If a student does not have an ilias name assigned his/her test results will not be imported into the TMS. Those tests will count as ",Object(o.b)("strong",{parentName:"p"},"not passed")," for the related students.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"E-Mail")," (optional): An e-mail adress of the student. Can be used for communication between the tutor and the student if one does not want to use the ilias mailing system.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Course of studies")," (optional): The course of studies of the student. The value of this field is currently unused but will be used for statistical purposes in the future.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Save button"),": Creates the new student. Afterwards the form gets resetted (but not closed) and a new student can be created.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Abort button"),": Closes the form without saving the information."))),Object(o.b)("h2",{id:"edit-students"},"Edit Students"),Object(o.b)("p",null,"To edit a student click the menu button ",Object(o.b)(s.a,{icon:d,mdxType:"IconInText"}),' on it\'s bar and choose "Edit". The form that opens up is the same one as for the process of creating a student (',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#create-students"}),"see above"),")."),Object(o.b)("h2",{id:"deleting-students"},"Deleting Students"),Object(o.b)("p",null,"To delete a student click the menu button ",Object(o.b)(s.a,{icon:d,mdxType:"IconInText"}),' on it\'s bar and choose "Delete". A confirmation dialog opens up if you really want to delete the student.'),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"No restore possible")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Deleting a student is ",Object(o.b)("strong",{parentName:"p"},"permanent"),"! Deleted students can ",Object(o.b)("strong",{parentName:"p"},"NOT")," be restored."))))}f.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,p=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(p,s(s({ref:t},l),{},{components:n})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,n){"use strict";var a=n(92),r=n(0),i=n.n(r),o=n(47),s=n.n(o);t.a=function({roles:e}){const t=Object(r.useMemo)((()=>e.filter((e=>!!e)).map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).sort()),[e]);return i.a.createElement("div",{className:s.a.roleContainer},i.a.createElement("span",{className:s.a.roleLabel},"Roles:"),t.map((e=>i.a.createElement("span",{key:e,className:Object(a.a)("badge badge--primary",s.a.role)},e))))}}}]);