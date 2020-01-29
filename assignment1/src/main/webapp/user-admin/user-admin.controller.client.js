(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $updateBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    var id = 0;
    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");

        $createBtn =  $("#createBtn");
        $removeBtn = $(".wbdv-remove");
        $editBtn = $(".wbdv-edit");
        $updateBtn = $("#updateBtn");

        $tbody = $("#userTbl");
        $userRowTemplate = $(".wbdv-template");

        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $editBtn.click(findUserById);
        $updateBtn.click(updateUser);

    }
    function createUser() {
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();

        var user = new User(username, password, firstName, lastName, role, ''+id);
        userService.createUser(user);

        renderUser(user);
        id = id + 1;
    }
    function findAllUsers() {
        var allUsers = usersService.findAllUsers();
        renderUsers(allUsers);

    }
    function findUserById(event) {
        var id = $(event.target).prop('id');
        var user = userService.findUserById(id);
        $usernameFld.val(user.getUsername());
        $passwordFld.val(user.getPassword());
        $firstNameFld.val(user.getFirstName());
        $lastNameFld.val(user.getLastName());
        $roleFld.val(user.getRole());
        $updateBtn.prop('id', id+'r');


    }
    function deleteUser() {
        var id = $(event.target).prop('id');
        userService.deleteUser(id);
        var row = $("#user"+id);
        row.remove()
    }
    function selectUser() {
    }
    function updateUser() {
        var id = $(event.target).prop('id').charAt(0);
        if (id.localeCompare('') == 0) {
            return;
        }
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();
        var user = new User(username, password, firstName, lastName, role, id);
        userService.updateUser(id, user);
        var userRow = $("#user"+id)
        userRow.find(".wbdv-username").text(username);
        userRow.find(".wbdv-first-name").text(firstName);
        userRow.find(".wbdv-last-name").text(lastName);
        userRow.find(".wbdv-role").text(role);
        $(event.target).prop('id', '');
    }
    function renderUser(user) {
        var newRow = $userRowTemplate.clone();
        newRow.removeClass("wbdv-template").removeClass("wbdv-hidden");
        newRow.find(".wbdv-username").text(username);
        newRow.find(".wbdv-first-name").text(firstName);
        newRow.find(".wbdv-last-name").text(lastName);
        newRow.find(".wbdv-role").text(role);
        newRow.find(".wbdv-remove").click(deleteUser);
        newRow.find(".wbdv-edit").click(findUserById);
        newRow.prop('id', 'user' + id);
        newRow.find('.wbdv-edit').prop('id', '' + id);
        newRow.find('.wbdv-remove').prop('id', '' + id);
        $tbody.append(user);
    }
    function renderUsers(users) {
        for (i = 0; i < users.length; i++) {
            renderUser(users[i]);
        }

    }
})();
