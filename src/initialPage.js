const contentDiv = document.getElementById('content');

const pageLoad = () =>{
    let header1 = document.createElement('header');
    let body1 = document.createElement('div')
    header1.innerHTML = '<h1>Panda Smoothie</h1>';
    body1.innerHTML='<h3><i>"Best smoothies this side of the Mississippi!"</i>-Fred</h3><img style="width:66%;height:66%;" src="smoothie.jpg">';
    body1.id='body';
    contentDiv.appendChild(header1);
    contentDiv.appendChild(body1);
}

export default pageLoad;