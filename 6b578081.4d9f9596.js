(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,b=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";var n=a(107),r=a(0),i=a.n(r),o=a(55),s=a.n(o);t.a=function(e){var t=e.roles,a=Object(r.useMemo)((function(){return t.filter((function(e){return!!e})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).sort()}),[t]);return i.a.createElement("div",{className:s.a.roleContainer},i.a.createElement("span",{className:s.a.roleLabel},"Roles:"),a.map((function(e){return i.a.createElement("span",{key:e,className:Object(n.a)("badge badge--primary",s.a.role)},e)})))}},110:function(e,t,a){"use strict";var n=a(107),r=a(0),i=a.n(r),o=a(56),s=a.n(o);t.a=function(e){var t=e.icon,a=e.small;return i.a.createElement("span",{className:Object(n.a)(s.a.wrapper,a&&s.a["wrapper-small"])},i.a.createElement(t,null))}},112:function(e,t,a){"use strict";var n=a(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createElement("path",{d:"M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z"});t.a=function(e){var t=e.title,a=e.titleId,s=i(e,["title","titleId"]);return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":a},s),t?n.createElement("title",{id:a},t):null,o)}},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/student_form-f3d85ecd7e9690af665422bf318c55ab.png"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(108)),o=a(109),s=a(110),c=a(112),l={id:"student_management",title:"Student Management",sidebar_label:"Student Management"},d={unversionedId:"handbook/student_management",id:"handbook/student_management",isDocsHomePage:!1,title:"Student Management",description:"Student Overview",source:"@site/docs/handbook/student_management.md",slug:"/handbook/student_management",permalink:"/Tutor-Management-System/docs/handbook/student_management",editUrl:"https://github.com/Dudrie/Tutor-Management-System/edit/main/docs/docs/handbook/student_management.md",version:"current",sidebar_label:"Student Management",sidebar:"handbook",previous:{title:"Navigate inside the App",permalink:"/Tutor-Management-System/docs/handbook/navigation"},next:{title:"Team Management",permalink:"/Tutor-Management-System/docs/handbook/team_management"}},u=[{value:"Student Overview",id:"student-overview",children:[]},{value:"Create Students",id:"create-students",children:[]},{value:"Information about a Student",id:"information-about-a-student",children:[]},{value:"Edit Students",id:"edit-students",children:[]},{value:"Delete Students",id:"delete-students",children:[]},{value:"Send E-Mail",id:"send-e-mail",children:[]}],m={toc:u};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(i.a)(o.a,{roles:["tutor"],mdxType:"Roles"}),Object(i.a)("h2",{id:"student-overview"},"Student Overview"),Object(i.a)("p",null,'The Student Overview page shows all students in your tutorial.\nYou can see which students are in which team and who would have achieved the "Schein" right now.\nFurthermore, this is the page where you can create students and edit their information.'),Object(i.a)("h2",{id:"create-students"},"Create Students"),Object(i.a)("p",null,'To create new students in your tutorial click the "+ New" button on the upper right. It opens up the following form:'),Object(i.a)("p",null,Object(i.a)("img",{alt:"Form to create/edit students",src:a(163).default})),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Firstname")," (required): The firstname of the student.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Lastname")," (required): The last name of the student.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Status")," (required): The status of the student. There are three statuses available:"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ACTIVE"),": The student is still activly participating in the course."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"INACTIVE"),": The student is not participating anymore (ie has aborted the course)."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"HAS SCHEIN"),": The student is participating in the course but already has a valid Schein from an earlier term."))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Team")," (required): The team of the student.\nThe TMS automatically selects the first team with a free slot (slot counts are configured by the admin). If no such team could be selected the ",Object(i.a)("em",{parentName:"p"},"New team")," option gets selected.\nYou can manually select one of three options:"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("em",{parentName:"li"},"No team"),": The student gets not assigned to any team."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("em",{parentName:"li"},"New team"),": A new team is created and the student assigned to it."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("em",{parentName:"li"},"Team #XX"),": The student gets assigned to the selected team."))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Matriculation number")," (semi-required): The matriculation number of the student. Gets used to map the results to the students later for the corresponding office at the university."),Object(i.a)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"If a student does not have a matriculation number assigned he/she can still earn points but their results will ",Object(i.a)("strong",{parentName:"p"},"not")," be printed on the final overview sheet and can ",Object(i.a)("strong",{parentName:"p"},"not")," be reported to the office.")))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Ilias name")," (semi-required): The display name of the student for the ilias system. Used to map online test results to the students in the system."),Object(i.a)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"If a student does not have an ilias name assigned his/her test results will not be imported into the TMS. Those tests will count as ",Object(i.a)("strong",{parentName:"p"},"not passed")," for the related students.")))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"E-Mail")," (optional): An e-mail adress of the student. Can be used for communication between the tutor and the student if one does not want to use the ilias mailing system.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Course of studies")," (optional): The course of studies of the student. The value of this field is currently unused but will be used for statistical purposes in the future.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Save button"),": Creates the new student. Afterwards the form gets resetted (but not closed) and a new student can be created.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Abort button"),": Closes the form without saving the information."))),Object(i.a)("h2",{id:"information-about-a-student"},"Information about a Student"),Object(i.a)("p",null,'To access more information about a specific student click on the "Information" button of that student. The ',Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"./student_info"}),Object(i.a)("em",{parentName:"a"},"Student info page"))," of that student will be opened."),Object(i.a)("h2",{id:"edit-students"},"Edit Students"),Object(i.a)("p",null,"To edit a student click the menu button ",Object(i.a)(s.a,{icon:c.a,mdxType:"IconInText"}),' on it\'s bar and choose "Edit". The form that opens up is the same one as for the process of creating a student (',Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#create-students"}),"see above"),")."),Object(i.a)("h2",{id:"delete-students"},"Delete Students"),Object(i.a)("p",null,"To delete a student click the menu button ",Object(i.a)(s.a,{icon:c.a,mdxType:"IconInText"}),' on it\'s bar and choose "Delete". A confirmation dialog opens up if you really want to delete the student.'),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"No restore possible")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Deleting a student is ",Object(i.a)("strong",{parentName:"p"},"permanent"),"! Deleted students can ",Object(i.a)("strong",{parentName:"p"},"NOT")," be restored."))),Object(i.a)("h2",{id:"send-e-mail"},"Send E-Mail"),Object(i.a)("p",null,"To send an email to a student click the menu button ",Object(i.a)(s.a,{icon:c.a,mdxType:"IconInText"}),' on it\'s bar and choose "E-Mail". This will open up a new e-mail to the student in your default e-mail program.'),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"If the student does not have an e-mail saved in the system this option will be disabled."))))}p.isMDXComponent=!0}}]);