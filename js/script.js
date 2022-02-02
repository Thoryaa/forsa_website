$(document).ready(function() {

    $("#search-key").on('keyup', function() {
        var word = $('#key-search').val().toLowerCase();
        $(".company-name").filter(function() {


            $(this).toggle($(this).text().toLowerCase().indexOf(word) > -1);




        });


    });

});