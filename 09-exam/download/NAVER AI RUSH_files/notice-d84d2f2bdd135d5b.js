(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5421],{5012:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/airush/notice",function(){return n(7094)}])},8685:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var s=n(5893),i=n(4184),c=n.n(i),a=n(8895),o=n(2302),l=n(7294),r=n(9755),d=n.n(r),h=n(2809),m=n(1664),u=n.n(m),p=n(4959),x=n(1163);function j(){let e=(0,l.useContext)(h.J),t=(0,x.useRouter)(),n=Math.ceil(e.notice.totalSize/8);return(0,s.jsx)("div",{className:"content",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("h3",{className:"content_title mo_hide",children:"NOTICE"}),0!==e.notice.notices.length?(0,s.jsxs)("div",{className:"notice_wrap",children:[(0,s.jsx)("ul",{className:"notice_list",children:e.notice.notices.map(t=>(0,s.jsx)("li",{className:"notice_item",children:(0,s.jsxs)(u(),{href:"".concat((0,p.wQ)(e.host).notice,"/").concat(t.id),className:"item_inner",children:[(0,s.jsx)("div",{className:"item_main_info",children:(0,s.jsxs)("strong",{className:"item_main_text",children:[t.title,t.isNew&&(0,s.jsx)("span",{className:"new"})]})}),(0,s.jsx)("p",{className:"date_info",children:t.date})]})},t.id))}),n>1&&(0,s.jsxs)("div",{className:"pagination",children:[(0,s.jsx)("button",{className:"btn btn_prev",type:"button",disabled:1===e.notice.curPage,onClick:()=>{t.push("".concat((0,p.wQ)(e.host).notice,"?page=").concat(e.notice.curPage-1))},children:(0,s.jsx)("span",{className:"blind",children:"이전 페이지로 이동"})}),(0,s.jsx)("ul",{className:"page_list",children:(()=>{let t=Math.floor(2.5),s=e.notice.curPage;e.notice.curPage<=t?s=1+t:e.notice.curPage>=n-t&&(s=n-t);let i=Math.max(s-t,1);return Array.from({length:Math.min(s+t,n)-i+1},(e,t)=>t+i).map(t=>({number:t,isCurrentPage:t===e.notice.curPage}))})().map((t,n)=>(0,s.jsx)("li",{className:"page_item",children:(0,s.jsx)(u(),{href:"".concat((0,p.wQ)(e.host).notice,"?page=").concat(t.number),className:c()("item_link",t.isCurrentPage&&"active"),children:t.number})},n))}),(0,s.jsx)("button",{className:"btn btn_next",type:"button",disabled:n===e.notice.curPage,onClick:()=>{t.push("".concat((0,p.wQ)(e.host).notice,"?page=").concat(e.notice.curPage+1))},children:(0,s.jsx)("span",{className:"blind",children:"다음 페이지로 이동"})})]})]}):(0,s.jsx)("div",{className:"notice_wrap nodata",children:(0,s.jsx)("p",{className:"info_text",children:"게시물이 없습니다."})})]})})}let _=[{name:"All",code:"ALL"},{name:"Startup",code:"StartUp"},{name:"Student",code:"Student"}];function N(){let[e,t]=(0,l.useState)([]),[n,i]=(0,l.useState)("ALL"),a=(0,l.useContext)(h.J);(0,l.useEffect)(()=>{if(location.hash){let e=location.hash.split("#")[1];t([e]);let n=document.querySelector('li[data-id="'.concat(e,'"]'));if(n){let e=n.getBoundingClientRect().top;window.scrollTo({top:e})}}},[]);let o=(0,l.useMemo)(()=>{var e;return null===(e=a.faqs.filter(e=>"ALL"===n||e.category===n))||void 0===e?void 0:e.reduce((e,t)=>[...e,...t.contents],[])},[n,a.faqs]);return(0,s.jsx)("div",{className:"content",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("h3",{className:"content_title mo_hide",children:"FAQ"}),(0,s.jsx)("div",{className:"tab_btn_wrap",children:_.map(e=>(0,s.jsx)("button",{className:c()("btn btn_tab",n===e.code&&"active"),type:"button",onClick:()=>{i(e.code),t([])},children:e.name},e.code))}),(0,s.jsx)("ul",{className:"accordion_list",children:o.map(n=>{var i;return(0,s.jsxs)("li",{"data-id":n.id,className:c()("accordion_item",e.includes(n.id)&&"on"),children:[(0,s.jsxs)("button",{className:"item_header",type:"button",onClick:()=>t(e=>e.includes(n.id)?e.filter(e=>e!==n.id):[...e,n.id]),children:[(0,s.jsx)("strong",{className:"item_title",children:n.title}),(0,s.jsx)("i",{className:"ico_arrow_down_round",children:(0,s.jsx)("span",{className:"blind",children:"열기"})}),(0,s.jsx)("i",{className:"ico_arrow_up_round",children:(0,s.jsx)("span",{className:"blind",children:"닫기"})})]}),(0,s.jsx)("div",{className:"item_body",children:(0,s.jsx)("p",{className:"info_text",dangerouslySetInnerHTML:{__html:null===(i=n.content)||void 0===i?void 0:i.replaceAll("\n","<br>")}})})]},n.id)})}),(0,s.jsxs)("p",{className:"notice_text",children:["추가 프로그램 문의는"," ",(0,s.jsx)("a",{href:"https://www.ncloud.com/support/question/sales?parentCode=SALES_SUPPORT&code=SALES_SUPPORT_003",target:"_blank",className:"text_link",children:"NAVER AI RUSH 고객센터"}),"로 문의 부탁드립니다."]})]})})}function f(e){let{isNotice:t}=e,n=(0,l.useContext)(h.J),i=0===n.notice.totalSize?[{name:"FAQ",path:(0,p.wQ)(n.host).faq,selected:!t},{name:"NOTICE",path:(0,p.wQ)(n.host).notice,selected:t}]:[{name:"NOTICE",path:(0,p.wQ)(n.host).notice,selected:t},{name:"FAQ",path:(0,p.wQ)(n.host).faq,selected:!t}];return(0,s.jsx)("div",{className:"lnb_area",children:(0,s.jsx)("ul",{className:"lnb_list",children:i.map(e=>(0,s.jsx)("li",{className:"lnb_item",children:(0,s.jsx)(u(),{href:e.path,className:c()("lnb_link",e.selected&&"selected"),children:e.name})},e.name))})})}var w=n(6152);function g(e){let{isNotice:t}=e,n=(0,l.useContext)(h.J);return(0,w.Z)(n.isMobileDevice),(0,l.useEffect)(()=>{let e=d()(".header"),t=d()(".wrap.menu_cont"),n=d()(".wrap.menu_cont .container");function s(){let s=innerWidth,i=d()(window).scrollTop()||0,c=d()(window).innerHeight()||0,a=e.innerHeight()||0,o=d()(document).innerHeight()||0,l=parseInt(n.css("padding-top"));s<=767&&i>a+l&&c<o?t.addClass("scroll"):t.removeClass("scroll")}return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"wrap menu_cont",children:[(0,s.jsx)(o.Z,{}),(0,s.jsxs)("div",{className:c()("container",t&&"type_notice"),children:[(0,s.jsx)(f,{isNotice:t}),t?(0,s.jsx)(j,{}):(0,s.jsx)(N,{})]}),(0,s.jsx)(a.Z,{})]})})}},2809:function(e,t,n){"use strict";n.d(t,{J:function(){return i},Z:function(){return c}});var s=n(5893);let i=n(7294).createContext({isMobileDevice:!1,host:"",notice:{notices:[],totalSize:1,curPage:1},faqs:[]});function c(e){let{children:t,rootProps:n}=e;return(0,s.jsx)(i.Provider,{value:n,children:t})}},7094:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return u},default:function(){return p}});var s=n(5893),i=n(1822),c=n.n(i),a=n(9008),o=n.n(a),l=n(491),r=n(8685),d=n(5797),h=n(2809),m=n(8554),u=!0;function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("title",{children:"NAVER AI RUSH"}),(0,s.jsx)("meta",{property:"description",content:"네이버 AI 파트너 프로그램"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"https://mkt-cdn.pstatic.net/mkt/favicon.ico",type:"image/x-icon"}),(0,s.jsx)("link",{rel:"icon",href:"https://mkt-cdn.pstatic.net/mkt/favicon.ico",type:"image/x-icon"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"NAVER AI RUSH"}),(0,s.jsx)("meta",{property:"og:description",content:"NAVER AI의 기술과 경험, 노하우를 나누는 성장 프로그램"}),(0,s.jsx)("meta",{property:"og:image",content:"https://mkt-cdn.pstatic.net/mkt/2024/05/airush/assets/og.png"})]}),(0,s.jsx)(h.Z,{rootProps:e,children:(0,s.jsx)(d.Z,{host:e.host,isMobileDevice:e.isMobileDevice,children:(0,s.jsx)(r.Z,{isNotice:!0})})}),(0,s.jsx)(m.Z,{sti:""}),(0,s.jsx)(c(),{id:l.Z.__hash,children:l.Z})]})}}},function(e){e.O(0,[571,1966,5504,2888,9774,179],function(){return e(e.s=5012)}),_N_E=e.O()}]);