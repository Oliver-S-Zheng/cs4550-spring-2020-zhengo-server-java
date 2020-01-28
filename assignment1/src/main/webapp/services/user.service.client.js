function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/users';
    var self = this;
    function createUser(user) {  }
    function findAllUsers() {  }
    function findUserById(userId) { }
    function updateUser(userId, user) {}
    function deleteUser(userId) { }
}
