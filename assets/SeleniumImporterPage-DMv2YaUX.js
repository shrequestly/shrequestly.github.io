import{r as n,a as F,j as s,i as k,c as L,s as K}from"./index-CsnTFzul.js";const G=()=>{const[O,E]=n.useTransition(),[i,P]=n.useState(""),[y,u]=n.useState({inProgress:!1,success:!1,error:null}),[_,d]=n.useState({inProgress:!1,success:!1,error:null}),[x,h]=n.useState({inProgress:!1,success:!1,error:null}),[j,S]=n.useState({inProgress:!1,success:!1,error:null}),[f,R]=n.useState(!1),[m,N]=n.useState(!1),[g,p]=n.useState("");n.useEffect(()=>{const r=new URLSearchParams(window.location.search).get("apiKey");r&&P(r),E(()=>{try{F()}catch(t){console.error(t)}})},[]);const T=["Checking if Requestly Extension is Installed","Fetching your Requestly Rules","Clearing Extension Storage","Saving Rules to Extension Storage"],v=()=>{N(!0)},a=e=>{window.postMessage({type:"RQ_IMPORT",message:e},"*"),I(e)},I=e=>{p(e),setTimeout(()=>{p("")},3e3)},w=()=>(u({inProgress:!0,success:!1,error:null}),a("STEP_1_IN_PROGRESS"),new Promise((e,r)=>{if(k())a("STEP_1_SUCCESS"),u({inProgress:!1,success:!0,error:null}),e();else{a("STEP_1_FAIL");const t=new Error("Requestly Extension is not installed");u({inProgress:!1,success:!1,error:t}),r(t)}})),A=e=>(d({inProgress:!0,success:!1,error:null}),a("STEP_2_IN_PROGRESS"),new Promise((r,t)=>{fetch("https://api2.requestly.io/v1/rules",{method:"GET",headers:{"x-api-key":e}}).then(o=>o.json()).then(o=>{if(o?.success)a("STEP_2_SUCCESS"),d({inProgress:!1,success:!0,error:null}),r(o.data);else throw new Error("Failed to fetch rules")}).catch(o=>{a("STEP_2_FAIL"),d({inProgress:!1,success:!1,error:o}),t(o)})})),b=()=>(h({inProgress:!0,success:!1,error:null}),a("STEP_3_IN_PROGRESS"),new Promise((e,r)=>{L().then(()=>{a("STEP_3_SUCCESS"),h({inProgress:!1,success:!0,error:null}),e()}).catch(t=>{a("STEP_3_FAIL"),h({inProgress:!1,success:!1,error:t}),r(new Error("Failed to clear extension storage"))})})),C=e=>(S({inProgress:!0,success:!1,error:null}),a("STEP_4_IN_PROGRESS"),new Promise((r,t)=>{const o=e.reduce((l,c)=>(c&&c.id&&(l[c.id]=c),l),{});K(o).then(()=>{a("STEP_4_SUCCESS"),S({inProgress:!1,success:!0,error:null}),r()}).catch(l=>{a("STEP_4_FAIL"),S({inProgress:!1,success:!1,error:l}),t(new Error("Failed to save rules to extension storage"))})})),q=()=>{if(!i){p("API key is required");return}v(),w().then(()=>A(i)).then(e=>b().then(()=>e)).then(e=>C(e)).then(()=>{R(!0),a("ALL_STEPS_DONE")}).catch(e=>{console.error("Error in process:",e)})};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"main-content",children:[s.jsx("h1",{className:"heading",children:"Requestly for Selenium"}),s.jsxs("div",{className:"api-key-input-container",children:[s.jsx("label",{htmlFor:"apiKey",className:"api-key-label",children:"API Key"}),s.jsx("input",{type:"password",id:"apiKey",value:i,onChange:e=>P(e.target.value),placeholder:"Enter your API Key",className:"api-key-input"})]}),s.jsx("button",{onClick:q,disabled:m,className:`action-button ${m?"disabled":""}`,children:"Load Requestly Rules"}),s.jsxs("div",{id:"steps",children:[T.map((e,r)=>{const t=r===0?y:r===1?_:r===2?x:j;return s.jsxs("div",{className:`step ${t.inProgress?"in-progress":""} ${t.error?"error":""}`,children:[s.jsx("div",{className:"step-icon-placeholder",children:t.inProgress?"⏳":t.error?"⚠️":t.success||f&&r===3?"✅":"🕒"}),s.jsx("span",{className:"icon step-icon",children:r===0?"🔌":r===1?"🔍":r===2?"🗑️":"💾"}),s.jsx("span",{className:"text-lg",children:e}),t.error&&s.jsx("p",{className:"error-message",children:t.error.message})]},r)}),f&&s.jsx("div",{className:"all-done-message",children:"✅ All done!"})]}),g&&s.jsx("div",{className:"toast",children:g})]}),s.jsxs("footer",{className:"footer",children:[s.jsx("p",{children:"© 2024 RQ Labs, Inc."}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"/",children:"Go to Main App"})," | ",s.jsx("a",{href:"https://requestly.com/privacy/",children:"Privacy Policy"})," |"," ",s.jsx("a",{href:"https://requestly.com/terms/",children:"Disclaimer"})]})]})]})};export{G as default};