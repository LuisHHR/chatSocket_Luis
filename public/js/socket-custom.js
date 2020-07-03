var socket = io();
        
        socket.on('connect', function(){
            console.log('Conectando al servidor');
        });


        //Escuchar
        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');
        });

        //Enviar información
        socket.emit('enviarMensaje',{
            usuario: 'Luis Hector',
            mensaje: 'Hola Mundo'
        }, function(resp){
            console.log('Respuesta server', resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor', mensaje)
        });