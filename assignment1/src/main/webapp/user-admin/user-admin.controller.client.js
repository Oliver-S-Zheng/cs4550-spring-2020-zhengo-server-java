(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");

        $createBtn =  $("#createBtn");
        $removeBtn = $(".wbdv-remove");

        $tbody = $("#userTbl");
        $userRowTemplate = $(".wbdv-template");

        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);

    }
    function createUser() {
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();

        var user = new User(username, password, firstName, lastName, role);
        userService.createUser(user);
        var newRow = $userRowTemplate.clone();
        newRow.removeClass("wbdv-template").removeClass("wbdv-hidden");
        newRow.find(".wbdv-username").text(username);
        newRow.find(".wbdv-first-name").text(firstName);
        newRow.find(".wbdv-last-name").text(lastName);
        newRow.find(".wbdv-role").text(role);
        newRow.find(".wbdv-remove").click(deleteUser)
        newRow.prop('id', 'testid');
        renderUser(newRow);

    }
    function findAllUsers() {
        var allUsers = usersService.findAllUsers();
        renderUsers(allUsers);

    }
    function findUserById() {
        var id;
        userService.findUserById(id);

    }
    function deleteUser() {
        var id = 'testid';
        userService.deleteUser(id);
        var row = $("#"+id);
        row.remove()
    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUser(user) {

        $tbody.append(user);
    }
    function renderUsers(users) {

    }
})();
