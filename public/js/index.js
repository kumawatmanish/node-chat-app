var socket = io();
                socket.on('connect' , function ()  {
                    console.log('Connected to Server');

                });

                socket.on('disconnect', function () {
                    console.log('Disconnected from Server');
                });

                socket.on('newMessage', function (message) {
                    console.log(`Got a Message from ${message.from}`);
                    console.log(`Meassage - ${message.text}`);

                    var li = jQuery('<li></li>');
                    li.text(`${message.from}: ${message.text}`);
                    jQuery('#messages').append(li);
                });
                
                jQuery('#message-form').on('submit', function (e) {
                    e.preventDefault();
                    socket.emit('createMessage', {
                        from: "User",
                        text: jQuery('[name=message]').val()
                    }, function () {

                    });
                });

                var locationButton = jQuery('#send-location');
                locationButton.on('click' , function () {
                    if(!navigator.geolocation) {
                          return alert("Geolocation not supported by Browser"); 
                    }
                    navigator.geolocation.getCurrentPosition(function (position) { 
                        console.log(position);
                    });
                }, function (e) {
                    console.log(e)
                          alert("Unable to fetch location");
                });