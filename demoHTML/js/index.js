// toggle password visibility

$('#password').togglePassword();
document.getElementById('password').onkeydown = function(e) {
    if(e.keyCode == 13) {
        document.getElementById('password').value = '';
    }
};
$('#password + .glyphicon').on('click', function() {
  $(this).toggleClass('glyphicon-eye-close').toggleClass('glyphicon-eye-open'); // toggle our classes for the eye icon
  //$('#password').togglePassword(); // activate the hideShowPassword plugin
});
