import{r as o,l as s,o as c,j as u}from"./index-DgKUXsba.js";const d=({animationName:t,animationData:e,...l})=>{const r=o.useRef();return o.useEffect(()=>{try{s.destroy(t),s.loadAnimation({name:t,container:r.current,animationData:e,renderer:"svg",loop:!0,autoplay:!0})}catch(n){c.log("Failed to load animation",t,n)}},[t,e]),u.jsx("div",{...l,ref:r})};export{d as L};