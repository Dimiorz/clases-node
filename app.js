
//const argv = require('yargs').argv;
const argv= require('./config/yargs.js').argv
const porHacer= require('./por-hacer/por-hacer.js');


let comando= argv._[0];

switch(comando){

    case 'crear':
        let tarea= porHacer.crear(argv.descripcion);
        console.log(tarea);
    break
    
    case 'listar':
        console.log('listar por ahcer');
    break

    case 'actualizar':
        console.log('actualizar por ahcer');
    break

    default:
        console.log('comando no reconodio');
}

 