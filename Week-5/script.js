// Proceed to Checkout //

$( document ).ready(function() {

    $("#pay").click(function(){
        $("#form, #pay").toggle();
    })

    $(function () {
        $('#same').on('click', function () {
            var text = $('#firstname');
            text.val(text.val() + ' after clicking');    
        });
    });
});