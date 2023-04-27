const contentDiv = document.getElementById('content');

const about = () =>{
    let header1 = document.createElement('header');
    let body1 = document.createElement('div')
    header1.innerHTML = '<h1>About</h1>';
    body1.innerHTML='<h3>Founded in a basement in Bellevue</h3>';
    body1.id='body';

    contentDiv.appendChild(header1);
    contentDiv.appendChild(body1);
}

export default about;