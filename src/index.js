import { init } from './js/usuarios-page';
import { init2 } from './js/chistes.page';
import {init3} from './js/archivos-page'
import * as CRUD from './js/crud-provider'; //Coge toda las exportaciones del link
// y CRUD adquiere todas las propiedades
//Se puede poner try / catch

CRUD.getUsuario ( 1 ).then( console.log )

CRUD.crearUsuario({   //Mandamos la data al end.point (base de datos) para que nos devuelva info
    name: 'Fernando',
    job: 'Carpintero'
}).then( console.log)

CRUD.actualizarUsuario( 1, {
    name: 'Melissa',
    job: 'Developer'
}).then ( console.log )

CRUD.borrarUsuario ( 1 ).then ( console.log )


init()
init2()
init3()