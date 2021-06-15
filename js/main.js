$('#sev').animate({ width: '100%' }, 2000)
$('#sev').animate({ height: '100vh' }, 2000, function() {
    $("#sev h2").fadeIn(1500, function() {
        $('#sev >p').fadeIn(1500, function() {
            $('.col-md-4').fadeToggle(1500);
        })
    });
});