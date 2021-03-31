import { obtenerChiste } from "./http-provider";


const body = document.body;
let btnOtro , btnBorrar,  olList;
let orden = 1;

const crearChistesHtml = () =>{

    const html = `
    <h1 class=" mt-5">Chistes</h1>
    <hr>

    <button id='crear' class='btn btn-primary mr-5'>Otro chiste</button>
    <button id='borrar' class='btn btn-primary ml-5'>Borrar chistes</button>

    <ol class="mt-2 list-group">

    </ol>
    `

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

}

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('#crear');
    btnBorrar = document.querySelector('#borrar');
    
    btnOtro.addEventListener('click',async ()=>{

        try{

            btnOtro.disabled = true;

            dibujarChiste( await obtenerChiste() )
            
            btnOtro.disabled = false;

            orden += 1


        }catch(err) {

            throw err;
        }
    })
    btnBorrar.addEventListener('click' , () => {

        borrarChistes()

    })

    
}

//Chiste { id , value}
const dibujarChiste = ( chiste ) =>{
    

    const olItem = document.createElement('li');
    olItem.innerHTML= `<b>${ orden} </b>: ${ chiste.value}  <img src=${chiste.icon_url} />`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

const borrarChistes = () =>{

    const items = document.querySelectorAll('li');

    items.forEach(element =>{

        element.remove();
        orden = 1
    });

    
    
     
}


export const init2 = () => {
    crearChistesHtml()
    eventos()
}