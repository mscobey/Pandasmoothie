const contentDiv = document.getElementById('content');


const createFooter = () =>{
    let footer = document.createElement('footer');

    footer.innerHTML="<br><h5 style='display:inline-block'>Panda Smoothie</h5> * <h5 style='display:inline-block' class='footerContact'>402-123-4567</h5> * <h5 style='display:inline-block' class='footerContact'>contact@pandasmoothie.com</h5>";

    return(footer);

}

export default createFooter;