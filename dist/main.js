(()=>{"use strict";const e=e=>{let n=document.createElement("button");return n.id=e,n.innerHTML=`${e}`,n},n=()=>{const n=e("Home"),t=e("Menu"),d=e("About");let o=document.createElement("nav");return o.appendChild(n),o.appendChild(t),o.appendChild(d),o},t=document.getElementById("content"),d=()=>{let e=document.createElement("header"),n=document.createElement("div");e.innerHTML="<h1>Panda Smoothie</h1>",n.innerHTML='<h3><i>"Best smoothies this side of the Mississippi!"</i>-Fred</h3><img style="width:66%;height:66%;" src="smoothie.jpg">',n.id="body",t.appendChild(e),t.appendChild(n)},o=document.getElementById("content"),i=(e,n)=>{let t=document.createElement("div"),d="";t.id=e;for(let e=0;e<n.length-1;e++)0==e?d=n[0].charAt(0).toUpperCase()+n[0].slice(1)+",":e==n.length-2?d+=` and ${n[e]} blended in ${n[n.length-1]}!`:d+=` ${n[e]},`;return t.innerHTML=`<h3>${e}</h3><h5>${d}</h5>`,t},l=document.getElementById("content"),a=(document.getElementById("content"),()=>{let e=document.createElement("footer");return e.innerHTML="<br><h5 style='display:inline-block'>Panda Smoothie</h5> * <h5 style='display:inline-block' class='footerContact'>402-123-4567</h5> * <h5 style='display:inline-block' class='footerContact'>contact@pandasmoothie.com</h5>",e}),h=document.getElementById("content");h.appendChild(n()),d(),h.appendChild(a()),document.getElementById("Home"),document.getElementById("About"),document.getElementById("Menu"),document.addEventListener("click",(e=>{const t=e.target.innerText;"Home"===t?(h.innerHTML="",h.appendChild(n()),d(),h.appendChild(a())):"Menu"===t?(h.innerHTML="",h.appendChild(n()),(()=>{let e=document.createElement("header"),n=document.createElement("div");e.innerHTML="<h1>Menu</h1>",n.id="body",n.appendChild(i("Bamboo Berry",["blueberries","bamboo shoots","bananas","raspberries","kefir"])),n.appendChild(i("Mango Madness",["mangos","bamboo shoots","bananas","pineapple","almond milk"])),n.appendChild(i("Panda Spots",["oreos","ice cream","fudge","whole milk"])),o.appendChild(e),o.appendChild(n)})(),h.appendChild(a())):"About"===t&&(h.innerHTML="",h.appendChild(n()),(()=>{let e=document.createElement("header"),n=document.createElement("div");e.innerHTML="<h1>About</h1>",n.innerHTML="<h3>Founded in a basement in Bellevue</h3>",n.id="body",l.appendChild(e),l.appendChild(n)})(),h.appendChild(a()))}))})();