var s=({code:t,debug:n=!1,performance:i=!1})=>{var e;typeof window>"u"||(e=window==null?void 0:window.react_gtm_ts)!=null&&e.init||(window.react_gtm_ts={debug:n,performance:i},i?(document.addEventListener("scroll",()=>{o(t)}),document.addEventListener("mousemove",()=>{o(t)}),document.addEventListener("touchstart",()=>{o(t)})):o(t))},o=t=>{var r;if(typeof window>"u"||(r=window==null?void 0:window.react_gtm_ts)!=null&&r.init)return;window.react_gtm_ts.init=!0;let n=document.createElement("script"),i=`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${t}');`;n.innerHTML=i;let e=document.createElement("noscript"),d=`<iframe src="https://www.googletagmanager.com/ns.html?id=${t}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`;e.innerHTML=d,document.head.insertBefore(n,document.head.childNodes[0]),document.body.insertBefore(e,document.body.childNodes[0]),window.react_gtm_ts.debug&&console.log(`\u{1F7E2} react-gtm-ts - init - ${t}`)};var a=({event:t,...n})=>{var i,e;typeof((i=window==null?void 0:window.dataLayer)==null?void 0:i.push)<"u"?(window.dataLayer.push({event:t,...n}),(e=window==null?void 0:window.react_gtm_ts)!=null&&e.debug&&console.log("\u{1F7E2} react-gtm-ts - action - ",{event:t,...n})):console.error("\u{1F6D1} react-gtm-ts - Add ReactTagManager.init passing GTM code in app or _app (nextjs), see more in the documentation https://github.com/jr-duarte/react-gtm-ts")};var c={init:s,action:a};export{c as ReactTagManager};
