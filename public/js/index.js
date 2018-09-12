var socket = io();
                socket.on('connect' , function ()  {
                    console.log('Connected to Server');

                    socket.emit('createMessage', {
                        to: 'kumawat@example.com',
                        text: 'Come soon.'
                    });
                });

                socket.on('disconnect', function () {
                    console.log('Disconnected from Server');
                });

                socket.on('newEmail', function (email) {
                    console.log('New Email', email);
                });

                socket.on('newMessage', function (message) {
                    console.log(`Get message from ${message.from}`);
                    console.log(`Meassage - ${message.text}`);
                });
