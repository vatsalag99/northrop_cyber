// toggle password visibility
var ds = this._time;
var us = this._time;
var line = "";
$('#password').togglePassword();
document.getElementById('password').onkeydown = function(e) {
    var new_downstamp = new Date().getTime();
    if (ds) {
        line += (new_downstamp - ds+ ", ");
        if (us) {
            line += (new_downstamp - us + ", ");
        }
    }
    ds = new_downstamp;
    if(e.keyCode == 13) {
        document.getElementById('password').value = '';
        $.post("vjpi/", {data: line}, function(result){
            $("user").html(result);
        });
    }
};
document.getElementById('password').onkeyup = function(e) {
    us = new Date().getTime();
    line += (us - ds+ ", ");
};
$('#password + .glyphicon').on('click', function() {
  $(this).toggleClass('glyphicon-eye-close').toggleClass('glyphicon-eye-open'); // toggle our classes for the eye icon
  //$('#password').togglePassword(); // activate the hideShowPassword plugin
});
