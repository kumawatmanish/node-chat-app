var socket = io();
                socket.on('connect' , function ()  {
                    console.log('Connected to Server');

                   /* socket.emit('createMessage', {
                        from: 'kumawat@example.com',
                        text: 'Should work.'
                    });*/
                });

                socket.on('disconnect', function () {
                    console.log('Disconnected from Server');
                });

                socket.on('newEmail', function (email) {
                    console.log('New Email', email);
                });

                socket.on('newMessage', function (message) {
                    console.log(`Got a Message from ${message.from}`);
                    console.log(`Meassage - ${message.text}`);
                });
