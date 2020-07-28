(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n(1),r=n(9),l=(n(0),n(208)),b={id:"broadcasts",title:"Broadcasts"},c={id:"modules/information/broadcasts",title:"Broadcasts",description:"The broadcast module allows you to broadcast a message to all players at any given point in the match.",source:"@site/docs/modules/information/broadcasts.mdx",permalink:"/docs/modules/information/broadcasts",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/information/broadcasts.mdx",sidebar:"Modules",previous:{title:"Main Map Element",permalink:"/docs/modules/general/main"},next:{title:"Rules",permalink:"/docs/modules/information/rules"}},s=[],i={rightToc:s};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The broadcast module allows you to broadcast a message to all players at any given point in the match.\nInside the broadcast tag you may specify either a ",Object(l.b)("inlineCode",{parentName:"p"},"<alert>")," or a ",Object(l.b)("inlineCode",{parentName:"p"},"<tip>")," message tag with an ",Object(l.b)("inlineCode",{parentName:"p"},'after=""')," attribute. This attribute is required and specifies how long after the match is started the broadcast is shown. ",Object(l.b)("br",null),"\nThe text in broadcasts can be formatted by using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/misc/formatting"}),"formatting codes"),"."),Object(l.b)("span",{className:"badge badge--warning"},"Note!")," This module should **only** be used to to show important information that is **specific** and **unique** to the map. It should not be used to for generic OCN related messages.",Object(l.b)("div",{className:"table-container"},Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Broadcasts Element"),Object(l.b)("th",null,"Description"),Object(l.b)("th",null,"Value/Children"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"<broadcasts> </broadcasts>")),Object(l.b)("td",null,"An element containing all the defined broadcast messages."),Object(l.b)("td",null)),Object(l.b)("tr",null,Object(l.b)("th",null,"Sub-Elements"),Object(l.b)("th",null),Object(l.b)("th",null)),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"<tip> </tip>")),Object(l.b)("td",null,"This will display a [Tip] message"),Object(l.b)("td",null,Object(l.b)("span",{className:"badge badge--primary"},"Formatted Text"))),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"<alert> </alert>")),Object(l.b)("td",null,"This will display an [Alert] message"),Object(l.b)("td",null,Object(l.b)("span",{className:"badge badge--primary"},"Formatted Text")))))),Object(l.b)("h5",{id:"message-tag-attributes"},"Message Tag Attributes"),Object(l.b)("div",{className:"table-container"},Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Attribute"),Object(l.b)("th",null,"Description"),Object(l.b)("th",null,"Value"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"after")),Object(l.b)("td",null,Object(l.b)("span",{className:"badge badge--danger"},"Required"),"Duration to wait after the match starts to show the message."),Object(l.b)("td",null,Object(l.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period"))),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"every")),Object(l.b)("td",null,"After the message is shown repeat it with this duration between messages."),Object(l.b)("td",null,Object(l.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period"))),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"count")),Object(l.b)("td",null,"Amount of times the message is repeated.",Object(l.b)("br",null),Object(l.b)("i",null,"Infinite repetition can be specified by using ",Object(l.b)("label",null,"oo")," as the duration.")),Object(l.b)("td",null,Object(l.b)("span",{className:"badge badge--primary"},"Number"))),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"filter")),Object(l.b)("td",null,Object(l.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter if the broadcast message is sent after the duration has passed, or if it's skipped."),Object(l.b)("td",null,Object(l.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")))))),Object(l.b)("h5",{id:"message-tag-sub-elements"},"Message Tag Sub-elements"),Object(l.b)("div",{className:"table-container"},Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Element"),Object(l.b)("th",null,"Description"),Object(l.b)("th",null,"Value"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("label",null,"<filter>")),Object(l.b)("td",null,Object(l.b)("span",{className:"badge badge--secondary",title:"Can be this sub-element or an attribute."},"Property"),"Filter if the broadcast message is sent after the duration has passed, or if it's skipped."),Object(l.b)("td",null,Object(l.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters")))))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Examples")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<broadcasts>\n    <tip after="30s">A [Tip] displayed 30 seconds into the match</tip>\n    <alert after="5m">An [Alert] displayed after 5 minutes</alert>\n    <tip after="10m" count="3">Repeated [Tip] at 10m, 20m, and 30m</tip>\n    <tip after="99s" count="oo">Repeated every 99 seconds, forever</tip>\n    <tip after="20m" every="1m">Displayed at 20m and every minute after that</tip>\n    <tip after="30m" every="10m" count="3">At 30m, 40m, and 50m</tip>\n</broadcasts>\n')))}o.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,p=u["".concat(b,".").concat(m)]||u[m]||d[m]||l;return n?r.a.createElement(p,c({ref:t},i,{components:n})):r.a.createElement(p,c({ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);