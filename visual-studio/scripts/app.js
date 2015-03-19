$(document).ready(function() {
    $('#add').click(function(e) {
        $('#result').text(Calculator.add(+$('#left').val(), (+$('#right').val())));

        e.preventDefault();
    });
});