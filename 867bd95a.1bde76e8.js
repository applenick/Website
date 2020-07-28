(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return i}));var b=l(1),n=l(9),a=(l(0),l(208)),c={id:"main",title:"Main Map Element"},r={id:"modules/general/main",title:"Main Map Element",description:"Every map XML file must contain the base `<map>` module. It contains modules that specify the map name, version, objective, authors, contributors and all other map settings. The objective is the text that players see when they join the match, and so it's important for this to be very clear, concise, and informative.",source:"@site/docs/modules/general/main.mdx",permalink:"/docs/modules/general/main",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/general/main.mdx",sidebar:"Modules",next:{title:"Broadcasts",permalink:"/docs/modules/information/broadcasts"}},u=[],o={rightToc:u};function i(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Every map XML file must contain the base ",Object(a.b)("inlineCode",{parentName:"p"},"<map>")," module. It contains modules that specify the map name, version, objective, authors, contributors and all other map settings. The objective is the text that players see when they join the match, and so it's important for this to be very clear, concise, and informative."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},'proto=""')," attribute specifies what PGM version the XML file was created for. If this value is higher than the version of PGM that is running, the map won't load. If it's lower, the map will load but the XML may be interpreted in an outdated way. Mapmakers should always use the latest supported XML version, and this may be required of new maps that are to be added to any map compilation projects, such as ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://mcresourcepile.github.io"}),"ResourcePile"),"."),Object(a.b)("p",null,"The maps version should follow the versioning schema ",Object(a.b)("inlineCode",{parentName:"p"},"major.minor.patch"),"."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Map Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<map> </map>")),Object(a.b)("td",null,"The main map node containing all the modules used in this match."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"XML Modules")))))),Object(a.b)("h5",{id:"map-attributes"},"Map Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"proto")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The maps XML protocol version."),Object(a.b)("td",null,Object(a.b)("label",null,"1.4.0")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"game")),Object(a.b)("td",null,"A custom title for this match's gamemode."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"internal")),Object(a.b)("td",null,"Prevent compass teleports above Y 255"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"))))),Object(a.b)("h5",{id:"map-sub-elements"},"Map Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<name>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The name of the map."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<slug>")),Object(a.b)("td",null,"The map's slug, usually auto generated from the maps name. This should only be used when a map is renamed to retain the map's ratings, etc.",Object(a.b)("br",null),"Valid slugs are lowercase and only contain the characters:"," ",Object(a.b)("label",null,"a-z 0-9 _")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Auto Generated"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<version>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The map's ",Object(a.b)("a",{href:"http://semver.org"},"semantic version")," string."),Object(a.b)("td",null,Object(a.b)("label",null,"1.0.0")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<objective>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The map's objective, shown at the start of the match."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<authors>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The authors of the map, at least one author is required."),Object(a.b)("td",null,Object(a.b)("label",null,"<author>")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<contributors>")),Object(a.b)("td",null,"Contributors to the map."),Object(a.b)("td",null,Object(a.b)("label",null,"<contributor>")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<phase>")),Object(a.b)("td",null,"Phase of this map. Only maps with phase:`production` and edition:`standard` show up on the website."),Object(a.b)("td",null,Object(a.b)("label",null,"development"),Object(a.b)("label",null,"production")),Object(a.b)("td",null,Object(a.b)("label",null,"production"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<edition>")),Object(a.b)("td",null,"Edition of this map, describes which servers it is run on."),Object(a.b)("td",null,Object(a.b)("label",null,"standard"),Object(a.b)("label",null,"ranked"),Object(a.b)("label",null,"tournament")),Object(a.b)("td",null,Object(a.b)("label",null,"standard"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<gamemode>")),Object(a.b)("td",null,Object(a.b)("a",{className:"left-ref-link",href:"#gamemode"},Object(a.b)("i",{className:"fa fa-chevron-down"})),"The gamemode(s) of this map, if this is not specified the map will set the gamemode(s) to whatever modules are used."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Gamemode ID")),Object(a.b)("td",null))))),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0"?>\n<map proto="1.4.0">\n<name>Map Name</name>\n<version>1.0.0</version>\n<objective>Short description about the maps objective.</objective>\n\n\x3c!-- Map authors & contributors. --\x3e\n\n\x3c!-- Map modules, i.e. objectives, regions, spawns. --\x3e\n\n</map>\n')),Object(a.b)("h4",{id:"authors--contributors"},"Authors & Contributors"),Object(a.b)("p",null,"The authors and contributers elements provide information about who created and helped create the map. There can be multiple authors and contributors to a map. The contribution attribute should be used to specify what their contribution to the map was."),Object(a.b)("p",null,"A players name should ",Object(a.b)("strong",{parentName:"p"},"not")," be used to credit them, instead their UUID should be used. A UUID is a unique user identifier that is used to keep track of players even if they change their name. You can check player UUID's at ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"http://mcuuid.net"}),"mcuuid.net"),". If an author or contributor is defined without a UUID that player will not get any mapmaker perks on the map."),Object(a.b)("h5",{id:"author-or-contributor-sub-elements"},"Author or Contributor Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<author>")),Object(a.b)("td",null,"A major author of the map, used in",Object(a.b)("label",null,"<authors>"),Object(a.b)("br",null)),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<contributor>")),Object(a.b)("td",null,"A contributor to the map, used in",Object(a.b)("label",null,"<contributors>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")))))),Object(a.b)("h5",{id:"author--contributor-attributes"},"Author & Contributor Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"contribution")),Object(a.b)("td",null,"The contribution this author or contributor made to the map."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"uuid")),Object(a.b)("td",null,"UUID used to identify a player."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")))))),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Major map authors. --\x3e\n<authors>\n    <author>aPerson</author>\n    <author uuid="ef4ea031-998f-4ec9-b7b6-1bdd428bcef8" contribution="Clarification of element usage, etc."/> \x3c!-- Plastix --\x3e\n    <author uuid="260004f0-996b-4539-ba21-df4ee6336b63"/> \x3c!-- Elliott_ --\x3e\n</authors>\n\n\x3c!-- People that contributed in some way to the map. --\x3e\n<contributors>\n    \x3c!-- Credit a person that doesn\'t have a minecraft account --\x3e\n    <contributor contribution="A contribution">aHelper</contributor>\n    <contributor uuid="3fbec7dd-0a5f-40bf-9d11-885a54507112" contribution="Some Help"/> \x3c!-- Cubist --\x3e\n</contributors>\n')),Object(a.b)("h4",{id:"map-gamemode"},"Map Gamemode"),Object(a.b)("p",null,"The gamemode element is used to specify the gamemode(s) of the map.\nThis mainly affects how the map is categorized and displayed.\nIf no ",Object(a.b)("inlineCode",{parentName:"p"},"<gamemode>"),' tags are specified the map will set the gamemode(s) to whatever modules are used.\nThis means that a map that uses destroyables and flags would be listed as a "DTM & CTF" unless specified otherwise.'),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<gamemode> </gamemode>")),Object(a.b)("td",null,"The gamemode(s) of this map."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Gamemode ID")))))),Object(a.b)("h5",{id:"gamemode-ids"},"Gamemode ID's"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"ID"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"ID"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"tdm")),Object(a.b)("td",null,"Team Deathmatch"),Object(a.b)("td",null,Object(a.b)("label",null,"ctw")),Object(a.b)("td",null,"Capture the Wool")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"ctf")),Object(a.b)("td",null,"Capture the Flag"),Object(a.b)("td",null,Object(a.b)("label",null,"dtc")),Object(a.b)("td",null,"Destroy the Core")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"dtm")),Object(a.b)("td",null,"Destroy the Monument"),Object(a.b)("td",null,Object(a.b)("label",null,"ad")),Object(a.b)("td",null,"Attack/Defend")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"koth")),Object(a.b)("td",null,"King of the Hill"),Object(a.b)("td",null,Object(a.b)("label",null,"blitz")),Object(a.b)("td",null,"Blitz")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"rage")),Object(a.b)("td",null,"Rage"),Object(a.b)("td",null,Object(a.b)("label",null,"scorebox")),Object(a.b)("td",null,"Scorebox")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"arcade")),Object(a.b)("td",null,"Arcade"),Object(a.b)("td",null,Object(a.b)("label",null,"gs")),Object(a.b)("td",null,"Ghost Squadron")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"ffa")),Object(a.b)("td",null,"Free-for-All"),Object(a.b)("td",null,Object(a.b)("label",null,"mixed")),Object(a.b)("td",null,"Mixed Gamemodes"))))),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- A FFA map with scoreboxes --\x3e\n<gamemode>ffa</gamemode>\n<gamemode>scorebox</gamemode>\n")))}i.isMDXComponent=!0},208:function(e,t,l){"use strict";l.d(t,"a",(function(){return s})),l.d(t,"b",(function(){return O}));var b=l(0),n=l.n(b);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},a=Object.keys(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},s=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,a=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=i(l),j=b,O=s["".concat(c,".").concat(j)]||s[j]||d[j]||a;return l?n.a.createElement(O,r({ref:t},o,{components:l})):n.a.createElement(O,r({ref:t},o))}));function O(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=l.length,c=new Array(a);c[0]=j;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var o=2;o<a;o++)c[o]=l[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"}}]);