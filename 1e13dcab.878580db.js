(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{107:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,b=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return a?r.a.createElement(b,c(c({ref:t},s),{},{components:a})):r.a.createElement(b,c({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";var n=a(107),r=a(0),o=a.n(r),i=a(55),c=a.n(i);t.a=function(e){var t=e.roles,a=Object(r.useMemo)((function(){return t.filter((function(e){return!!e})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).sort()}),[t]);return o.a.createElement("div",{className:c.a.roleContainer},o.a.createElement("span",{className:c.a.roleLabel},"Roles:"),a.map((function(e){return o.a.createElement("span",{key:e,className:Object(n.a)("badge badge--primary",c.a.role)},e)})))}},112:function(e,t,a){"use strict";var n=a(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createElement("path",{d:"M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z"});t.a=function(e){var t=e.title,a=e.titleId,c=o(e,["title","titleId"]);return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":a},c),t?n.createElement("title",{id:a},t):null,i)}},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n,r=a(3),o=a(7),i=(a(0),a(108)),c=a(109),m=a(112),s={id:"team_management",title:"Team Management",sidebar_label:"Team Management"},l={unversionedId:"handbook/team_management",id:"handbook/team_management",isDocsHomePage:!1,title:"Team Management",description:"Create a Team",source:"@site/docs/handbook/team_management.md",slug:"/handbook/team_management",permalink:"/Tutor-Management-System/docs/handbook/team_management",editUrl:"https://github.com/Dudrie/Tutor-Management-System/edit/main/docs/docs/handbook/team_management.md",version:"current",sidebar_label:"Team Management",sidebar:"handbook",previous:{title:"Student Management",permalink:"/Tutor-Management-System/docs/handbook/student_management"},next:{title:"Substitutes",permalink:"/Tutor-Management-System/docs/handbook/substitutes"}},d=[{value:"Create a Team",id:"create-a-team",children:[]},{value:"Change Team of Student",id:"change-team-of-student",children:[]},{value:"Edit &amp; Delete a Team",id:"edit--delete-a-team",children:[]}],u=(n="IconInText",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.a)("div",e)}),p={toc:d};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)(c.a,{roles:["tutor"],mdxType:"Roles"}),Object(i.a)("h2",{id:"create-a-team"},"Create a Team"),Object(i.a)("p",null,'To create a team click on the "+ New" button in the upper right. A form opens up which lets you select students which should form a team. You can only select students that do ',Object(i.a)("em",{parentName:"p"},"not")," already have a team."),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Empty teams")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},'You can create empty teams by not selecting any student in the list and clicking on the "Save" button.'))),Object(i.a)("h2",{id:"change-team-of-student"},"Change Team of Student"),Object(i.a)("p",null,"If you want to move a student from one team to another you have to remove him/her from the old team first. Afterwards you can add the student to the other team."),Object(i.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Better way")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"A better and easier way to achieve this would be to just edit the student via the ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"./student_management"}),Object(i.a)("em",{parentName:"a"},"Student Management page"))," and adjust his/her team."))),Object(i.a)("h2",{id:"edit--delete-a-team"},"Edit & Delete a Team"),Object(i.a)("p",null,"To edit or delete a team click on the menu icon ",Object(i.a)(u,{icon:m.a,mdxType:"IconInText"}),' on the right of a team. Select either the "Edit" or the "Delete" option. By selecting "Edit" a dialog opens up with the same form as the one used to create a team. By selecting "Delete" you will be prompted if you really want to delete the team.'),Object(i.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Deleting a team with students will leave the students without a team. Remember to assign them to new teams if necessary."))))}b.isMDXComponent=!0}}]);