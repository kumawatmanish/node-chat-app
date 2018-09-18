var socket = io();

function scrollToBottom () {
    var messages = jQuery('#messages'); 
    var newMessage = jQuery('li:last-child');

    var scrollTop = messages.prop('scrollTop');
    var clientHeight = messages.prop('clientHeight');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();
    if(scrollTop + clientHeight + newMessageHeight + lastMessageHeight >= scrollHeight) {
        messages.scrollTop(scrollHeight);
    }

};
                    socket.on('connect' , function ()  {
                    var params = jQuery.deparam(window.location.search);

                    socket.emit('join', params, function (err) {
                        if(err){
                            alert(err);
                            window.location.href = '/';
                        }else{
                            console.log('No error');
                        }
                    });
                });

                socket.on('disconnect', function () {
                    console.log('Disconnected from Server');
                });

                socket.on('updateUserList', function (users) {
                    var ol = jQuery('<ol></ol>');
                    users.forEach(function (user) {
                        ol.append(jQuery('<li></li>').text(user));
                    });
                    jQuery('#users').html(ol);
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
                    scrollToBottom();
                });
                
                jQuery('#message-form').on('submit', function (e) {
                    e.preventDefault();
                    socket.emit('createMessage', {
                        //from: "User",
                        text: jQuery('[name=message]').val()
                    }, function () {
                        jQuery('[name=message]').val('')
                    });
                });

                /*var locationButton = jQuery('#send-location');
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
                });*/