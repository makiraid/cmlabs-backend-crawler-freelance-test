"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3968],{9902:function(e,t,s){var l=s(5893),a=s(7482),r=s(9583),i=s(7294),n=s(7516),o=s(4610);t.Z=e=>{let{isLoading:t,domain:s,domainData:c,analyzeDomain:d,setDomain:m}=e,[x,u]=(0,i.useState)(!1),h=(0,r.useRouter)(),p=(0,i.useMemo)(()=>/^[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,[]),g=(0,i.useMemo)(()=>/^(?!.*(?:https?:\/\/)).*$/,[]),f=(0,i.useMemo)(()=>/^(?!.*(?:www\.)).*$/,[]),j=!p.test(s)||!g.test(s)||!f.test(s),whoIsCheck=async e=>{try{let t=await fetch("".concat("https://whois.sequence.day"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}),s=await t.json();u(!s)}catch(e){console.error("there is an error when checking domain validity")}};return(0,l.jsxs)("div",{className:"flex flex-col gap-12 rounded-lg bg-neutral-70 p-5 sm:p-10",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[h.query.slug||c?(0,l.jsx)("h2",{className:"text-xl font-medium",children:"Analyze Your Domain"}):(0,l.jsx)("h1",{className:"text-xl font-medium",children:"Analyze Your Domain"}),(0,l.jsx)("p",{className:"text-neutral-30",children:"To analyze the domain you want to learn more about, simply type it into the below field. Get valuable data on the domain with just one click."})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)(a.II,{icon:n.t9K,theme:"dark",placeholder:"e.g: cmlabs.co",value:s,error:x,errorMessage:"The domain you entered doesn’t exist",onChange:e=>{let{value:t}=e.target;m(t),p.test(t)&&whoIsCheck(t)},onKeyDown:e=>{"Enter"===e.key&&d()}}),(0,l.jsxs)("ul",{className:"space-y-2",children:[(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)(o.FJM,{size:11,className:g.test(s)?"text-celestial-50":""}),"Must not contain https:// or http://"]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)(o.FJM,{size:11,className:f.test(s)?"text-celestial-50":""}),"Does not starts with www."]})]})]}),(0,l.jsx)("div",{className:"flex items-center gap-2 self-end",children:(0,l.jsx)(a.zx,{onClick:d,disabled:0===s.length||j||x,isLoading:t,children:t?"Analyzing...":"Analyze Domain"})})]})}},9032:function(e,t,s){s.d(t,{Z:function(){return N}});var l=s(5893),a=s(7482),r=s(7238),i=s(7060),n=s(2042),o=s(381),c=s.n(o),d=s(9583),m=s(7294),x=s(6501),u=s(7516),h=s(8138);let p={backgroundColor:"#21262E",height:"16px"};var ui_ProgressBar=e=>{let{percentage:t,color:s,isNumberShown:a=!1}=e;return(0,l.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[(0,l.jsx)("div",{style:p,className:"".concat(a?"w-[75%]":"w-full"),children:(0,l.jsx)("div",{style:{backgroundColor:s,width:"".concat(t,"%"),height:"16px",transition:"width 0.3s ease-in-out"}})}),a&&(0,l.jsxs)("span",{className:"mr-auto text-center text-xs mix-blend-difference",children:[t,"%"]})]})},g=s(3148),f=s(6495);g.kL.register(...g.zX);var site_explorer_BarChartWithLine=e=>{let{barData:t}=e;return(0,l.jsx)(f.$Q,{data:t,options:{interaction:{intersect:!1,mode:"index"},responsive:!0,maintainAspectRatio:!0,plugins:{tooltip:{},legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}})},j=s(3255);let Separator=()=>(0,l.jsx)("svg",{width:"2",height:"32",viewBox:"0 0 2 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M1 0V32",stroke:"#545961"})}),FilterDropdown=e=>{let{filterMenu:t,filterData:s,setFilterData:a}=e,[r,i]=(0,m.useState)(!1),n=(0,m.useRef)(null),o=(0,m.useRef)(null);(0,m.useEffect)(()=>{function handleClickOutside(e){o.current&&!o.current.contains(e.target)&&n.current&&!n.current.contains(e.target)&&i(!1)}return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[]);let addFilter=(e,t)=>{let l="keyword"===e||"url"===e||"domain"===e,r=s.filter(e=>"avg_competition"===e.key).length;3!==r&&a(s=>[...s,{id:Math.random().toString(36).substring(2),param:l?"contains":"≥",value:"",label:t,key:e}])};return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(j.z,{ref:n,icon:u.lOx,type:"outline",color:"white",onClick:()=>i(!r),children:"Filter"}),r&&(0,l.jsx)("ul",{ref:o,className:"absolute mt-1 whitespace-nowrap rounded-lg border border-neutral-40 bg-neutral-40 shadow-3xl",children:t.map((e,s)=>(0,l.jsx)("li",{className:"".concat(0===s?"rounded-t-lg":s===t.length-1?"rounded-b-lg":""," bg-neutral-50 px-4 py-3 \n  ").concat(s!==t.length-1?"border-b border-b-neutral-40":"","\n              cursor-pointer hover:text-celestial-50 "),onClick:()=>addFilter(e.key,e.label),children:e.label},e.key))})]})},FilterTypeDropdown=e=>{let{index:t,filter:s,filterData:r,scrollPosition:i,setFilterData:o}=e,[c,d]=(0,m.useState)(!1),[x,h]=(0,m.useState)(!1),[p,g]=(0,m.useState)(0),f=(0,m.useRef)(null),j=(0,m.useRef)(null),v=(0,m.useRef)(null),b=(0,m.useRef)(null),updateFilterValue=(e,t)=>{o(r.map(s=>s.id===e?{...s,value:t}:s))},updateFilterParam=(e,t)=>{let s=r.map(s=>s.id===e?{...s,param:t}:s);o(s),h(!1)},removeFilter=(e,t)=>{e.stopPropagation();let s=r.filter(e=>e.id!==t);o(s)};return(0,m.useEffect)(()=>{(()=>{let e=document.querySelector(".type-toggler");if(e){let t=e.getBoundingClientRect().left;g(t)}})()},[i]),(0,m.useEffect)(()=>{function handleClickOutside(e){j.current&&!j.current.contains(e.target)&&f.current&&!f.current.contains(e.target)&&d(!1),b.current&&!b.current.contains(e.target)&&v.current&&!v.current.contains(e.target)&&h(!1)}return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[]),"avg_competition"===s.key?(0,l.jsxs)("div",{children:[(0,l.jsxs)("button",{ref:f,onClick:()=>d(!c),className:"type-toggler flex min-w-[200px] items-center justify-between rounded border border-neutral-40 bg-neutral-50 px-[12px] py-[8px]",children:[(0,l.jsxs)("span",{children:["Competition"," ",(0,l.jsx)("span",{className:"capitalize text-neutral-30",children:"≥"!==s.param&&s.param})]}),(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)("button",{onClick:e=>removeFilter(e,s.id),children:(0,l.jsx)(u.czh,{className:"text-neutral-30 hover:text-white"})}),(0,l.jsx)(u.OrA,{className:"text-neutral-30"})]})]}),c&&(0,l.jsx)("div",{ref:j,children:(0,l.jsx)("ul",{className:"absolute mt-1 block flex-col gap-2 rounded bg-neutral-50 p-[8px] shadow-2xl",children:[{label:"High",value:"high"},{label:"Medium",value:"medium"},{label:"Low",value:"low"}].map((e,t)=>(0,l.jsx)("li",{onClick:()=>updateFilterParam(s.id,e.value),className:"cursor-pointer ".concat(t<2?"border-b border-b-neutral-40":""," p-[8px] hover:text-celestial-50 ").concat(e.value===s.param?"text-celestial-50":""),children:e.label},e.label))})})]}):(0,l.jsxs)("div",{children:[(0,l.jsxs)("button",{ref:f,onClick:()=>d(!c),className:"type-toggler flex min-w-[200px] max-w-[250px] items-center justify-between rounded border border-neutral-40 bg-neutral-50 px-[12px] py-[8px]",children:[(0,l.jsxs)("span",{className:"truncate",children:[s.label," ",s.param," ","string"==typeof s.value?'"'.concat(s.value,'"'):s.value]}),(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)("button",{onClick:e=>removeFilter(e,s.id),children:(0,l.jsx)(u.czh,{className:"text-neutral-30 hover:text-white"})}),(0,l.jsx)(u.OrA,{className:"text-neutral-30"})]})]}),c&&(0,l.jsxs)("div",{ref:j,className:"absolute mt-1 block flex-col gap-2 rounded bg-neutral-50 p-[8px] shadow-2xl",style:{left:p+208*t},children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"relative flex items-center gap-1",children:[(0,l.jsx)("span",{className:"text-neutral-30",children:s.label}),(0,l.jsxs)("button",{ref:v,className:"flex items-center",onClick:()=>h(!x),children:[(0,l.jsx)("span",{children:s.param}),(0,l.jsx)(u.OrA,{className:"text-neutral-30"})]}),x&&(0,l.jsx)("ul",{ref:b,className:"absolute top-0 z-10 mt-6 whitespace-nowrap rounded border border-neutral-40 bg-neutral-50 shadow-lg",children:"keyword"===s.key||"url"===s.key||"domain"===s.key?n.lK.map(e=>(0,l.jsx)("li",{onClick:()=>updateFilterParam(s.id,e.value),className:"cursor-pointer border-b border-b-neutral-40 px-[8px] py-[10px] hover:text-celestial-50",children:e.label},e.label)):n.fk.map(e=>(0,l.jsxs)("li",{onClick:()=>updateFilterParam(s.id,e.value),className:"cursor-pointer border-b border-b-neutral-40 px-[8px] py-[10px] hover:text-celestial-50",children:[e.label," (",e.value,")"]},e.label))})]}),(0,l.jsx)("button",{children:(0,l.jsx)(u.SW4,{className:"text-neutral-40 transition-colors hover:text-white",onClick:()=>updateFilterValue(s.key,"")})})]}),(0,l.jsx)(a.II,{placeholder:"Insert value",theme:"dark",value:s.value,onChange:e=>updateFilterValue(s.id,e.target.value)})]})]})};var site_explorer_Filter=e=>{let{activeTab:t,filterData:s,setFilterData:a}=e,r=(0,m.useRef)(null),[i,n]=(0,m.useState)(0);return(0,m.useEffect)(()=>{let checkOffset=()=>{if(r.current){let e=r.current.scrollLeft;n(e)}},e=r.current;if(e)return e.addEventListener("scroll",checkOffset),()=>e.removeEventListener("scroll",checkOffset)},[]),(0,l.jsxs)("div",{className:"flex w-full items-center gap-[8px]",children:[(0,l.jsx)(FilterDropdown,{filterData:s,filterMenu:0===t?[{key:"keyword",label:"Keyword"},{key:"avg_search_volume",label:"Avg. Searches"},{key:"sov",label:"Share of Voice"},{key:"avg_low_bid",label:"Low Range"},{key:"avg_high_bid",label:"High Range"},{key:"avg_competition",label:"Competition"}]:1===t?[{key:"url",label:"URL"},{key:"avg_search_volume",label:"Avg. Searches"},{key:"sov",label:"Share of Voice"},{key:"avg_low_bid",label:"Low Range"},{key:"avg_high_bid",label:"High Range"},{key:"avg_competition",label:"Competition"}]:[{key:"domain",label:"Domain"},{key:"pages",label:"Pages"},{key:"sov",label:"Share of Voice"},{key:"keywords",label:"Keywords"},{key:"avg_competition",label:"Competition"}],setFilterData:a}),(0,l.jsx)("div",{ref:r,className:"flex items-center gap-2 overflow-x-auto pb-1",children:s.map((e,t)=>(0,l.jsxs)(l.Fragment,{children:[0===t&&(0,l.jsx)(Separator,{}),(0,l.jsx)(FilterTypeDropdown,{index:t,filter:e,filterData:s,setFilterData:a,scrollPosition:i},e.key)]}))})]})};let v=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,b=m.memo(e=>{let{domainData:t,analyzedDomain:s,chartData:o,isCompleteButtonLoading:p,showFullData:g}=e,[f,j]=(0,m.useState)(0),[b,N]=(0,m.useState)(!1),[y,w]=(0,m.useState)(!1),[k,C]=(0,m.useState)(""),[_,R]=(0,m.useState)({name:"",email:"",domain:"",message:""}),[S,z]=(0,m.useState)(!1),[F,E]=(0,m.useState)(null),[P,D]=(0,m.useState)(n.Vn);(0,m.useEffect)(()=>{D(0===f?n.Vn:1===f?n.QO:n.Cc)},[f]);let T=(0,d.useRouter)(),L=(0,i.Cl)(),A=(0,i.Cl)(),B=(0,i.Cl)(),handleRequestFormChange=e=>{let{value:t,name:s}=e.target;R(e=>({...e,[s]:t}))},competitionBadge=e=>{let t="blue",s="Low";return(e>=.7?(t="red",s="High"):e>=.4&&(t="yellow",s="Medium"),e>=0)?(0,l.jsx)(a.Ct,{color:t,type:"outline",size:"tiny",borderRadius:4,children:s}):null},O=[L.accessor("keyword",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Keyword",(0,l.jsx)(a.u,{className:"text-justify",content:"The keywords captured by the site",id:"keyword-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"from Google"})]}),cell:e=>{let{row:t}=e;return(0,l.jsx)(a.u,{content:t.original.keyword,id:t.original.keyword+"keyword",children:(0,l.jsx)("div",{className:"w-80 truncate",children:t.original.keyword})})}}),L.accessor("avg_search_volume",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Avg. Searches",(0,l.jsx)(a.u,{className:"text-justify",content:"The average search volumes of the keywords in a month",id:"avg-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"last month"})]}),cell:e=>{let{row:t}=e;return t.original.avg_search_volume.replace(/\B(?=(\d{3})+(?!\d))/g,",")}}),L.accessor("avg_low_bid",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Low Range",(0,l.jsx)(a.u,{className:"text-justify",content:"Sets the minimum benchmark for CPC bids in ads",id:"low-bid-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"CPC / Bid"})]}),cell:e=>{let{row:t}=e;return"$"+t.original.avg_low_bid.toFixed(2)}}),L.accessor("avg_high_bid",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["High Range",(0,l.jsx)(a.u,{className:"text-justify",content:"Sets the upper limit for CPC bids in ads",id:"high-bid-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"CPC / Bid"})]}),cell:e=>{let{row:t}=e;return"$"+t.original.avg_high_bid.toFixed(2)}}),L.accessor("avg_competition",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Competition"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"The keyword competition index indicates how hard to rank for a specific keyword",id:"competition-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"Index (0.1 - 1.0)"})]}),cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{className:"flex max-w-[100px] justify-center",children:competitionBadge(t.original.avg_competition)})}}),L.accessor("sov",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Share of Voice"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"The brand's visibility compared to competitors for specific keywords",id:"sov-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"on Google SERP"})]}),cell:e=>{let{row:t}=e;return Number(t.original.search_volume)>0?(0,l.jsx)(a.u,{content:t.original.sov+"%",id:t.original.keyword,children:(0,l.jsx)(ui_ProgressBar,{isNumberShown:!0,percentage:Number(t.original.sov),color:"white"})}):"-"}})],I=[A.accessor("url",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["URL",(0,l.jsx)(a.u,{className:"text-justify",content:"The URLs captured by the site",id:"url-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"from Google"})]}),cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{className:"w-80 truncate",children:(0,l.jsx)(a.u,{content:t.original.url,id:t.original.url+"url",clickable:!0,children:"..."+t.original.url.split(s).pop()})})}}),L.accessor("avg_search_volume",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Avg. Searches",(0,l.jsx)(a.u,{className:"text-justify",content:"The average search volumes of the keywords in a month",id:"avg-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"last month"})]}),cell:e=>{let{row:t}=e;return t.original.avg_search_volume.replace(/\B(?=(\d{3})+(?!\d))/g,",")}}),L.accessor("avg_low_bid",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Low Range",(0,l.jsx)(a.u,{className:"text-justify",content:"Sets the minimum benchmark for CPC bids in ads",id:"low-bid-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"CPC / Bid"})]}),cell:e=>{let{row:t}=e;return"$"+t.original.avg_low_bid.toFixed(2)}}),L.accessor("avg_high_bid",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["High Range",(0,l.jsx)(a.u,{className:"text-justify",content:"Sets the upper limit for CPC bids in ads",id:"high-bid-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"CPC / Bid"})]}),cell:e=>{let{row:t}=e;return"$"+t.original.avg_high_bid.toFixed(2)}}),L.accessor("avg_competition",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Competition"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"The keyword competition index indicates how hard to rank for a specific keyword",id:"competition-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"Index (0.1 - 1.0)"})]}),cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{className:"flex max-w-[100px] justify-center",children:competitionBadge(t.original.avg_competition)})}}),A.accessor("sov",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Share of Voice"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"The brand's visibility compared to competitors for specific keywords",id:"sov-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"on Google SERP"})]}),cell:e=>{let{row:t}=e;return Number(t.original.search_volume)>0?(0,l.jsx)(a.u,{content:t.original.sov+"%",id:t.original.url,children:(0,l.jsx)(ui_ProgressBar,{isNumberShown:!0,percentage:Number(t.original.sov),color:"white"})}):"-"}})],M=[B.accessor("domain",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Search Competitor"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"List of competitors' domains in Google",id:"search-competitor-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"from Google"})]}),cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{className:"w-64 truncate",children:t.original.domain})}}),B.accessor("pages",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Pages",(0,l.jsx)(a.u,{className:"text-justify",content:"The number of pages the competitor domain has",id:"pages-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"Quantity"})]})}),B.accessor("keywords",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Keywords",(0,l.jsx)(a.u,{className:"text-justify",content:"The number of keywords the competitor domain targets.",id:"pages-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"Quantity"})]})}),B.accessor("avg_competition",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Competition"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"The average keyword competition index of the search competitor domain.",id:"competition-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"Index (0.1 - 1.0)"})]}),cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{className:"flex max-w-[100px] justify-center",children:competitionBadge(t.original.avg_competition)})}}),B.accessor("sov",{header:()=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Share of Voice"," ",(0,l.jsx)(a.u,{className:"text-justify",content:"The brand's visibility compared to competitors for all targeted keywords",id:"sov-tooltip",children:(0,l.jsx)(h.RNg,{size:15})})]}),(0,l.jsx)("span",{className:"text-sm font-normal text-neutral-30",children:"on Google SERP"})]}),cell:e=>{let{row:t}=e;return Number(t.original.search_volume)>0?(0,l.jsx)(a.u,{content:t.original.sov+"%",id:t.original.domain,children:(0,l.jsx)(ui_ProgressBar,{isNumberShown:!0,percentage:Number(t.original.sov),color:"white"})}):"-"}})],q=F?0===f?F.topKeyword:1===f?F.topPage:F.topCompetitor:0===f?t.topKeyword:1===f?t.topPage:t.topCompetitor,V=0===f?O:1===f?I:M,copyToClipboard=async()=>{try{let e="https://sequence.day"+T.asPath.substring(0,14)+"/"+s.replaceAll(".","-");await navigator.clipboard.writeText(e),x.Am.success("URL copied to clipboard")}catch(e){x.Am.error("Failed to copy URL to clipboard:")}},K=Number(t.summaryDomain.sov)/Number(t.summaryDomain.search_volume)*100,handleExport=async()=>{try{z(!0);let e=await fetch("".concat("https://api-site-explorer.sequence.day","/send-excel?domain=").concat(s,"&email=").concat(k));if(e.ok)x.Am.success("Email sent successfully");else{let{message:t}=await e.json();x.Am.error(t);return}}catch(e){console.error("There is an error when fetching data",e)}finally{z(!1),N(!1),C("")}},handleSendRequest=async()=>{try{z(!0);let e=await fetch("".concat("https://api-site-explorer.sequence.day","/send-email-request-private"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(e.ok)x.Am.success("Request sent successfully");else{let{message:t}=await e.json();x.Am.error(t);return}}catch(e){console.error("There is an error when fetching data",e)}finally{z(!1),w(!1),R({name:"",domain:"",email:"",message:""})}},$=m.memo(e=>{let{data:t,columns:s}=e;return(0,l.jsx)(a.wQ,{data:t,columns:s})});$.displayName="MemoizedDataTable";let H=(0,m.useCallback)((e,t,s,l)=>{let a=e[l];if(a)switch(t){case"startsWith":return a.startsWith(s);case"endsWith":return a.endsWith(s);case"contains":return a.includes(s);case"notContains":return!a.includes(s);case"is":return a===s;case"isNot":return a!==s;case"≥":return Number(a)>=Number(s);case">":return Number(a)>Number(s);case"<":return Number(a)<Number(s);case"≤":return Number(a)<=Number(s);case"=":return Number(a)===Number(s);case"high":return Number(a)>=.7&&1>=Number(a);case"medium":return Number(a)>=.4&&.7>Number(a);case"low":return Number(a)>=0&&.4>Number(a);default:return!0}},[]);return(0,m.useEffect)(()=>{0===f?E({...t,topKeyword:t.topKeyword.filter(e=>{if(0===P.length)return!0;let t=P.map(t=>H(e,t.param,t.value,t.key));return t.some(e=>e)})}):1===f?E({...t,topPage:t.topPage.filter(e=>{if(0===P.length)return!0;let t=P.map(t=>H(e,t.param,t.value,t.key));return t.some(e=>e)})}):E({...t,topCompetitor:t.topCompetitor.filter(e=>{if(0===P.length)return!0;let t=P.map(t=>H(e,t.param,t.value,t.key));return t.some(e=>e)})})},[f,P,t,H]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col gap-6 rounded-lg bg-neutral-70 p-5 sm:p-10",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("h1",{className:"text-[22px]  font-medium text-neutral-10",children:["Site Explorer Results for ",s]}),(0,l.jsx)("div",{className:"flex items-center gap-2",children:t&&(50===t.topPage.length||50===t.topCompetitor.length||50===t.topKeyword.length)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{disabled:p,className:"underline",onClick:g,children:"Show Complete Data"}),(0,l.jsx)(a.u,{className:"!w-80 text-justify",content:"Due to the size of the data, loading all information initially may cause delays; hence, we've limited the initial data. To access the complete dataset, please click 'Show Complete Data'",id:"full-data",children:(0,l.jsx)(h.RNg,{size:15})})]})})]}),(0,l.jsxs)("div",{className:"flex justify-between gap-2 max-sm:flex-col sm:items-center",children:[(0,l.jsx)("div",{className:"flex flex-col gap-2",children:(0,l.jsxs)("p",{className:"text-neutral-30",children:["Last update :"," ",c()(t.updated_at).format("DD MMM YYYY HH:mm A")]})}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(a.zx,{type:"outline",color:"white",onClick:()=>w(!0),children:"Keep my domain's data private"}),(0,l.jsx)(a.zx,{icon:u.LhG,type:"outline",color:"white",onClick:copyToClipboard,children:"Share URL"}),(0,l.jsx)(a.zx,{type:"outline",color:"white",onClick:()=>N(!0),children:"Export *.csv"})]})]}),(0,l.jsxs)("div",{className:"flex gap-4 overflow-x-auto",children:[(0,l.jsxs)("div",{className:"flex flex-1 flex-col rounded-lg bg-[#2E3642] px-4 py-3",children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:"Competition"}),(0,l.jsxs)("ul",{className:"flex flex-1 flex-col justify-center gap-3",children:[(0,l.jsxs)("li",{className:"flex items-center justify-between",children:[(0,l.jsx)(a.Ct,{color:"blue",type:"outline",size:"tiny",borderRadius:4,children:"Low"}),(0,r.t)(t.summaryDomain.competitions.low)]}),(0,l.jsxs)("li",{className:"flex items-center justify-between",children:[(0,l.jsx)(a.Ct,{color:"yellow",type:"outline",size:"tiny",borderRadius:4,children:"Medium"}),(0,r.t)(t.summaryDomain.competitions.medium)]}),(0,l.jsxs)("li",{className:"flex items-center justify-between",children:[(0,l.jsx)(a.Ct,{color:"red",type:"outline",size:"tiny",borderRadius:4,children:"High"})," ",(0,r.t)(t.summaryDomain.competitions.high)]})]})]}),(0,l.jsxs)("div",{className:"flex flex-1 flex-col rounded-lg bg-[#2E3642] px-4 py-3",children:[(0,l.jsx)("h2",{className:" text-lg font-bold",children:"CPC"}),(0,l.jsxs)("ul",{className:"flex flex-1 flex-col justify-center gap-3",children:[(0,l.jsxs)("li",{className:"flex items-center justify-between",children:["Low Range Average:",(0,l.jsxs)("span",{className:"font-bold",children:["$",t.summaryDomain.avg_low_bid.toFixed(2)]})]}),(0,l.jsxs)("li",{className:"flex items-center justify-between",children:["High Range Average:",(0,l.jsxs)("span",{className:"font-bold",children:["$",t.summaryDomain.avg_high_bid.toFixed(2)]})]})]})]}),(0,l.jsxs)("div",{className:"max-w-xs flex-1  rounded-lg bg-[#2E3642] px-4 py-3",children:[(0,l.jsx)("h2",{className:" text-lg font-bold",children:"Search Volume"}),(0,l.jsx)(site_explorer_BarChartWithLine,{barData:o})]}),(0,l.jsxs)("div",{className:"flex flex-1 flex-col rounded-lg bg-[#2E3642] px-4 py-3",children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:"Share of Voice"}),(0,l.jsxs)("div",{className:"flex flex-1 flex-col justify-center",children:[(0,l.jsx)(ui_ProgressBar,{percentage:K,color:"white"}),(0,l.jsxs)("div",{className:"mt-3 flex justify-between",children:[(0,l.jsxs)("span",{className:"text-neutral-30",children:[K.toFixed(2),"% of total SoV"]}),(0,l.jsx)("span",{className:"font-bold",children:null==t?void 0:t.summaryDomain.sov.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})]})]})]}),(0,l.jsx)("ul",{className:"flex items-center border-b border-b-neutral-40 text-base text-neutral-40",children:["Keyword","Page","Search Competitors"].map((e,t)=>(0,l.jsx)("li",{className:"cursor-pointer px-4 pb-2 ".concat(f===t&&"border-b border-b-celestial-50 font-bold text-celestial-50"),onClick:()=>{j(t)},children:e},e))}),(0,l.jsx)("div",{className:"flex justify-between",children:(0,l.jsx)(site_explorer_Filter,{activeTab:f,filterData:P,setFilterData:D})}),(0,l.jsx)("div",{className:"overflow-x-auto ",children:(0,l.jsx)($,{data:q,columns:V})}),(0,l.jsx)(a.u_,{isOpen:y,onClose:()=>w(!1),children:(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,l.jsx)("div",{className:"space-y-2",children:(0,l.jsx)("h2",{className:"text-xl font-bold",children:"Keep my domain's data private"})}),(0,l.jsx)(a.II,{label:"Name",name:"name",placeholder:"Enter your name",theme:"dark",value:_.name,onChange:handleRequestFormChange}),(0,l.jsx)(a.II,{label:"Email address",type:"email",name:"email",placeholder:"Enter your email",theme:"dark",value:_.email,onChange:handleRequestFormChange}),(0,l.jsx)(a.II,{name:"domain",label:"Domain",placeholder:"Enter your domain",theme:"dark",value:_.domain,onChange:handleRequestFormChange}),(0,l.jsx)(a.gx,{name:"message",label:"Message",placeholder:"Why do you want this domain to be removed?",theme:"dark",value:_.message,onChange:handleRequestFormChange}),(0,l.jsxs)("div",{className:"ml-auto space-x-2",children:[!S&&(0,l.jsx)(a.zx,{type:"transparent",color:"white",onClick:()=>w(!1),children:"Cancel"}),(0,l.jsx)(a.zx,{onClick:handleSendRequest,disabled:0===_.message.length||0===_.domain.length||0===_.name.length||0===_.email.length,children:"Send Request"})]})]})}),(0,l.jsx)(a.u_,{isOpen:b,onClose:()=>N(!1),children:(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("h2",{className:"text-xl font-bold",children:"Export *.csv"}),(0,l.jsx)("p",{children:"Export this result into .csv format and send it to your email."})]}),(0,l.jsx)(a.II,{label:"Email address",type:"email",placeholder:"Enter your email",theme:"dark",value:k,onChange:e=>C(e.target.value)}),(0,l.jsxs)("div",{className:"ml-auto space-x-2",children:[!S&&(0,l.jsx)(a.zx,{type:"transparent",color:"white",onClick:()=>N(!1),children:"Cancel"}),(0,l.jsx)(a.zx,{disabled:0===k.length||!v.test(k),isLoading:S,onClick:handleExport,children:"Export and send"})]})]})})]})})});var N=b},3958:function(e,t,s){var l=s(5893),a=s(7516);t.Z=()=>(0,l.jsxs)("div",{className:"mb-10 flex items-start gap-2 rounded-lg bg-neutral-70 px-4 py-3 text-neutral-30 ",children:[(0,l.jsx)("div",{className:"self-start",children:(0,l.jsx)(a.I2T,{className:"text-celestial-50",size:16})}),(0,l.jsx)("div",{children:"This tool is still in its minimum viable product (MVP) stage and we're dedicated to continuously improving it. We'd love to hear your suggestion for future enhancement. Your feedback is critical to our mission of providing the best keyword research experience possible."})]})}}]);