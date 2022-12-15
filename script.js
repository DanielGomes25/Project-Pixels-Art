window.onload = () => {

//GERAR DIVS

const generatDiv = () => {
    const getPalete = document.getElementById('color-palette');

    getPalete.style.display = 'flex';
    getPalete.style.justifyContent = 'center';
    getPalete.style.gap = '40px';

    for (let index = 0; index < 4; index += 1) {
        
        const creatDiv = document.createElement('div')
        getPalete.appendChild(creatDiv);
        
        creatDiv.className = 'color';
        creatDiv.style.border = '1px solid black';
        creatDiv.style.padding = '50px';
        creatDiv.style.width = '40px';
       
        
    };

};

generatDiv();

//GERAR CORES

const generatColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;

};

generatColors();

//PINTAR AS PALETAS
const paintPalet = () => {
    
    const getColor = document.getElementsByClassName('color');

    for (let index = 0; index < getColor.length; index += 1) {

        getColor[index].style.backgroundColor = generatColors();

    }



}

paintPalet();


}




