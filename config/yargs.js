
const argv= require('yargs')
            .command('crear','crear un elemento por hacer',{
                descripcion:{
                    demand: true,
                    alias:'d',
                    desc:'describe la tarea que se va a realizar'
                }
            })
            .command('actualizar','actualiza un elemente por hacer',{
                actualizar:{
                    demand:true,
                    alias :'d',
                    desc: 'describe la tarea por hacer'
                },
                completado:{
                    default: true,
                    alias:'c',
                    desc:'marca como completado o pendiente la tarea'
                }
                
            })
            .help() 
            .argv;

module.exports ={
    argv
}