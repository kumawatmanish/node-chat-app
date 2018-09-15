var socket = io();
                socket.on('connect' , function ()  {
                    console.log('Connected to Server');

                });

                socket.on('disconnect', function () {
                    console.log('Disconnected from Server');
                });

                socket.on('newMessage', function (message) {
                    var formatedTime = moment(message.createdAt).format('h:mm a'); 
                    var template = jQuery('#message-template').html();
                    var html = Mustache.render(template, {
                        text: message.text,
                        from: message.from,
                        createdAt: formatedTime
                    });
                    jQuery('#messages').append(html);
                });
                
                jQuery('#message-form').on('submit', function (e) {
                    e.preventDefault();
                    socket.emit('createMessage', {
                        from: "User",
                        text: jQuery('[name=message]').val()
                    }, function () {
                        jQuery('[name=message]').val('')
                    });
                });

                var locationButton = jQuery('#send-location');
                locationButton.on('click' , function () {
                    if(!navigator.geolocation) {
                          return alert("Geolocation not supported by Browser"); 
                    }
                    navigator.geolocation.getCurrentPosition(function (position) { 
                          socket.emit('createLocationMessage', {
                              longitude: 576.21,
                              latitude: 75.45
                          });
                    });
                }, function () {
                          alert("Unable to fetch location");
                });