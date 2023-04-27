
const createButton = (btnId) =>{
    let newButton = document.createElement('button');
    newButton.id=btnId;
    newButton.innerHTML=`${btnId}`;
    return newButton;
}

const createNav = () =>{
    const homeBtn = createButton('Home');
    const menuBtn = createButton('Menu');
    const aboutBtn = createButton('About');

    
    let navBar = document.createElement('nav');
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(aboutBtn);

    return(navBar);

}

export default createNav;