class Users {
constructor () {
   this.users = [];
}
addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
}
removeUser (id) {
     var user = this.getUser(id);
     if(user) {
     this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
}
getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
}
getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
}
}

module.exports = {Users};
/*var user = new Users();
user.addUser(1, 'neha', 'friends');
user.addUser(2, 'Manish', 'friends');
//var res = user.removeUser(2);
//var res = user.getUserList('friends');
var res = user.getUser(2);

console.log(res);*/
