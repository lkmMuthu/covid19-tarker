$(document).ready(function () {
    $('#table').DataTable();
});

$(document).ready(function () {
    setTimeout(function () {
        $("#test").fadeOut();
    }, 2000);



    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('activeSideBar');
            $('.nav-dashboard').toggleClass('active-nav-dashboard');
             $('#posts').toggleClass('toggle-table-style');
        });
    }
    );
});
