$(document).ready(function() {
    $('#modal-change-personal').click(
        function() {
            $('fname-modal').text('ooo');



        }
    );

    $('#download-cv').click(function(e) {
        e.preventDefault();
        window.location.href = 'simple.pdf';
    });

});