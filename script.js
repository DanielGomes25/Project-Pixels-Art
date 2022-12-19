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
        creatDiv.style.borderRadius = '2%';
       
        
    };
};

//GERAR CORES

const generatColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;

};

//SALVAR CORES NO LOCALSTORAGE

const saveColors = () => {
    
    const getColor = document.getElementsByClassName('color');
    const arrayColors = [];
    for (let index = 0; index < getColor.length; index += 1) {
       arrayColors.push(getColor[index].style.backgroundColor);
        }
        localStorage.setItem('colorPalette', JSON.stringify(arrayColors))
}    


//PINTAR AS PALETAS
const paintPalet = () => {
    
    const getColor = document.getElementsByClassName('color');

    for (let index = 0; index < getColor.length; index += 1) {

        if (getColor[index] === getColor[0]) {
        getColor[index].style.backgroundColor = 'black';
        
        } else {
        getColor[index].style.backgroundColor = generatColors();
       
         }
         saveColors();
        }
}
//PEGAR AS CORES DO LOCALSTORAGE 

const getColorL = () => {
const getColor = document.getElementsByClassName('color')
const getLocal = JSON.parse(localStorage.getItem('colorPalette'))
for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].style.backgroundColor = getLocal[index];
}

}

//AJUSTAR BOTÃO


const clickG = () => {
    const getBtn = document.getElementById('button-random-color')
getBtn.addEventListener('click', paintPalet)

}

//CRIAR MATRIZ

const generateCells = () => {
const getBoard = document.getElementById('pixel-board');
    for (let index = 0; index < 5; index += 1) {
        const creatLine = document.createElement('div')
        creatLine.id = 'line';
        getBoard.appendChild(creatLine);

        for (let index2 = 0; index2 < 5; index2 += 1) {
            const pixel = document.createElement('div')
            pixel.className = 'pixel'
            creatLine.appendChild(pixel);
        }
    
    }
}

const selecionados = () => {
    const getColor = document.querySelectorAll('.color')
    for (let index = 0; index < getColor.length; index += 1) {
        getColor[0].classList.add('selected')
        getColor[index].addEventListener('click', (event) => {
            const selected = document.querySelector('.selected')
            if (selected){
                selected.classList.remove('selected');
                }
            event.target.classList.add('selected');
        })
    const getPixel = document.querySelectorAll('.pixel')
    for (let index = 0; index < getPixel.length; index += 1)
    getPixel[index].addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        const colorSelected = selected.style.backgroundColor;
        if (selected) {
            event.target.style.backgroundColor = colorSelected;
        }
    })

    }
}

window.onload = () => {
    generatDiv();
    generatColors();
    if (localStorage.getItem('colorPalette') === null) {
    paintPalet(); 
    } else {
    } getColorL();
    clickG();
   generateCells();
   selecionados();
   

}
    





