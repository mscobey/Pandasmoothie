const contentDiv = document.getElementById('content');

const newFlavor = (name,ingredients) =>{
    let flavor = document.createElement('div');
    let flavorDescription = '';
    flavor.id =name;
    for(let i=0;i<ingredients.length-1;i++){
        if(i==0){
            flavorDescription=ingredients[0].charAt(0).toUpperCase()+ingredients[0].slice(1)+',';
        }
        else if(i==ingredients.length-2){
            flavorDescription+=` and ${ingredients[i]} blended in ${ingredients[ingredients.length-1]}!`;
        }
        else{
            flavorDescription+=` ${ingredients[i]},`
        }
    }
    flavor.innerHTML=`<h3>${name}</h3><h5>${flavorDescription}</h5>`;

    return flavor;

}

const menu = () =>{
    let header1 = document.createElement('header');
    let body1 = document.createElement('div')
    header1.innerHTML = '<h1>Menu</h1>';
    body1.id='body';

    body1.appendChild(newFlavor('Bamboo Berry',['blueberries','bamboo shoots','bananas','raspberries','kefir']));
    body1.appendChild(newFlavor('Mango Madness',['mangos','bamboo shoots','bananas','pineapple','almond milk']));
    body1.appendChild(newFlavor('Panda Spots',['oreos','ice cream','fudge','whole milk']));

    contentDiv.appendChild(header1);
    contentDiv.appendChild(body1);
}

export default menu;