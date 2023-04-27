import createNav from "./navBar";
import pageLoad from "./initialPage";
import menu from "./menu";
import about from "./about";
import createFooter from "./footer";

const contentDiv = document.getElementById('content');

contentDiv.appendChild(createNav());
pageLoad();
contentDiv.appendChild(createFooter());




const homeBtn=document.getElementById('Home');
const aboutBtn=document.getElementById('About');
const menuBtn=document.getElementById('Menu');

document.addEventListener('click',(e)=>{
    const btnClicked = e.target.innerText;
    if(btnClicked==='Home'){
        contentDiv.innerHTML='';
        contentDiv.appendChild(createNav());
        pageLoad();
        contentDiv.appendChild(createFooter());
    }
    else if(btnClicked==='Menu'){
        contentDiv.innerHTML='';
        contentDiv.appendChild(createNav());
        menu();
        contentDiv.appendChild(createFooter());
    }
    else if(btnClicked==='About'){
        contentDiv.innerHTML='';
        contentDiv.appendChild(createNav());
        about();
        contentDiv.appendChild(createFooter());

    }
});

