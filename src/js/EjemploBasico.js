
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/* fetch( jokeUrl ).then( resp => {
    console.log(resp);

    resp.json().then (({id , value}) => {  //El argumento es data pero lo desestructuramos ({})
        console.log( id )
        console.log( value )
    })
}) */
//Arriba y abajo es lo mismo solo que más corto abajo .\\. Evitamos promise hell
fetch ( jokeUrl )
    .then( resp => resp.json() )
    .then( ({ id, value})=>{
        console.log( id )
        console.log( value)
    } );

