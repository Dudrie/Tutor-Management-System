(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(94)),i=n(95),c={id:"team_management",title:"Team Management",sidebar_label:"Team Management"},u={unversionedId:"handbook/team_management",id:"handbook/team_management",isDocsHomePage:!1,title:"Team Management",description:"SECTION_TITLE",source:"@site/docs\\handbook\\team_management.md",slug:"/handbook/team_management",permalink:"/Tutor-Management-System/docs/handbook/team_management",editUrl:"https://github.com/Dudrie/Tutor-Management-System/edit/add-documentation/docs/docs/handbook/team_management.md",version:"current",sidebar_label:"Team Management",sidebar:"handbook",previous:{title:"Student Management",permalink:"/Tutor-Management-System/docs/handbook/student_management"},next:{title:"Substitutes",permalink:"/Tutor-Management-System/docs/handbook/substitutes"}},m=[{value:"SECTION_TITLE",id:"section_title",children:[]}],s={rightToc:m};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{roles:["admin"],mdxType:"Roles"}),Object(o.b)("h2",{id:"section_title"},"SECTION_TITLE"),Object(o.b)("p",null,"\ud83d\udee0 WORK IN PROGRESS"))}l.isMDXComponent=!0},93:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},m),{},{components:n})):a.a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";var r=n(93),a=n(0),o=n.n(a),i=n(47),c=n.n(i);t.a=function({roles:e}){const t=Object(a.useMemo)((()=>e.filter((e=>!!e)).map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).sort()),[e]);return o.a.createElement("div",{className:c.a.roleContainer},o.a.createElement("span",{className:c.a.roleLabel},"Roles:"),t.map((e=>o.a.createElement("span",{key:e,className:Object(r.a)("badge badge--primary",c.a.role)},e))))}}}]);