function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/users';
    var self = this;
    var allUsers = [];

    function createUser(user) {
        allUsers.push(user)
    }
    function findAllUsers() {  }
    function findUserById(userId) {
        for (i = 0; i < allUsers.length; i++) {
            var user = allUsers[i];
            if (user.id.localeCompare(userId) == 0) {
                return user;
            }
        }
        return undefined;
    }
    function updateUser(userId, user) {
        for (i = 0; i < allUsers.length; i++) {
            var oldUser = allUsers[i];
            if (oldUser.id.localeCompare(userId) == 0) {
                allUsers[i] = user;
            }
        }
    }
    function deleteUser(userId) {
        for (i = 0; i < allUsers.length; i++) {
            var user = allUsers[i];
            if (user.id.localeCompare(userId) == 0) {
                allUsers.splice(i)
            }
        }
    }

}
