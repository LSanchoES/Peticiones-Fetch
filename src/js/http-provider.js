
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = '' //Introducir preset de settings de clodinary
const cloudUrl =''//introducir url upload de clodinary


const obtenerChiste = async()=> {

    try{
        
            const resp = await fetch( jokeUrl );
        
            if ( !resp.ok ) throw( 'No se pudo realizar la petición');

            const { icon_url, id, value } = await resp.json()

            return {icon_url, id, value };

    }catch (err){

        throw err;

/*         return{   Esto es otra opción
            id: 'No se encontró ningún chiste en este momento'
        } */
    }

}

const obtenerUsuarios =  async () => {

    const resp = await fetch( urlUsuarios );
    const {data:usuarios} = await resp.json(); //desestructuramos solo con las llaves XD
    //con los dos puntos le damos el nombre que queramos a data
    return usuarios;
}

//tipo file uno a la vez
const subirImagen = async (archivoSubir)=>{

    const formData = new FormData(); //Crea un formulario HTML como objeto
    formData.append('upload_preset' , cloudPreset);
    
    formData.append('file' , archivoSubir );

    try{

        const resp  = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (resp.ok){
            const cloudResp = await resp.json();
            //console.log(cloudResp)
            return  cloudResp.secure_url;
        }else{
            throw await resp.json();  
        }

    }catch( err ){
        throw err;
    }

}



export{
    obtenerChiste, 
    obtenerUsuarios,
    subirImagen
}