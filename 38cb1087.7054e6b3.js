(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),i=(n(0),n(208)),a={id:"filter-apply-order",title:"Filter Apply Order"},l={id:"guides/xml-pointers/filter-apply-order",title:"Filter Apply Order",description:"After proto `1.3.3` and above, the order that you [apply](/docs/modules/mechanics/regions#applying) filters to regions affects their behavior.",source:"@site/docs/guides/xml-pointers/filter-apply-order.mdx",permalink:"/docs/guides/xml-pointers/filter-apply-order",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/guides/xml-pointers/filter-apply-order.mdx",sidebar:"Guides",previous:{title:"Defining Regions",permalink:"/docs/guides/xml-pointers/regions"},next:{title:"XML Conventions",permalink:"/docs/guides/xml-pointers/conventions"}},p=[],c={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"After proto ",Object(i.b)("inlineCode",{parentName:"p"},"1.3.3")," and above, the order that you ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/mechanics/regions#applying"}),"apply")," filters to regions affects their behavior.\nHere's an example."),Object(i.b)("p",null,"Let's start out with a basic filter that ",Object(i.b)("strong",{parentName:"p"},"denies")," everything ",Object(i.b)("strong",{parentName:"p"},"except")," TNT."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<filter name="only-tnt">\n    <block>tnt</block>\n</filter>\n')),Object(i.b)("p",null,"Now let's apply this filter to ",Object(i.b)("inlineCode",{parentName:"p"},"Region A"),", and also apply a filter to ",Object(i.b)("inlineCode",{parentName:"p"},"Region B")," that denies all blocks."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<apply block="only-tnt" region="region-a"/>\n\n<apply block="never" region="region-b"/>\n')),Object(i.b)("p",null,"However, there is one slight complication. ",Object(i.b)("inlineCode",{parentName:"p"},"Region B")," is inside of ",Object(i.b)("inlineCode",{parentName:"p"},"Region A"),".\nSo which filter will override the other? This is where the apply order comes in handy."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/tFkLV5O.png",alt:"Apply Order Image"}))),Object(i.b)("p",null,"The order that you put the ",Object(i.b)("inlineCode",{parentName:"p"},"<apply>"),"'s can change the outcome when something gets filtered.\nIn the previous example, the ",Object(i.b)("inlineCode",{parentName:"p"},"only-tnt")," filter would always override the ",Object(i.b)("inlineCode",{parentName:"p"},"never")," filter since it is above it.\nThe apply for ",Object(i.b)("inlineCode",{parentName:"p"},"region B")," won't get checked since it overlaps completely with ",Object(i.b)("inlineCode",{parentName:"p"},"region A")," and ",Object(i.b)("inlineCode",{parentName:"p"},"region A")," never returns abstain."),Object(i.b)("p",null,"If we changed the order of the filters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<apply block="never" region="region-b"/>\n<apply block="only-tnt" region="region-a"/>\n')),Object(i.b)("p",null,"Now you cannot place blocks in ",Object(i.b)("inlineCode",{parentName:"p"},"Region B"),", but outside of it in ",Object(i.b)("inlineCode",{parentName:"p"},"Region A")," you can only place TNT blocks."),Object(i.b)("p",null,"Although this may not be an issue for many maps such as a Blitz map or a TDM,\nthis is a crucial concept for many DTC/DTM/CTW maps that use the ",Object(i.b)("inlineCode",{parentName:"p"},"<void/>")," filter.\nUsually it's best to have the ",Object(i.b)("inlineCode",{parentName:"p"},"<void/>")," filter at the lowest priority (at the bottom of the list)."),Object(i.b)("p",null,"A map developer will be able to help you through this process to ensure that your map's regions and filters are properly working."))}s.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(m,l({ref:t},c,{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);