$( document ).ready(function() {
    // Registartiom Event 
    $("#reg").click(function(){
        var email = $('#emailreg').val();
        var password = $('#password_save').val();
        var regdata={
            "email":email,
            "password":password
        };
        localStorage.setItem('Regestration_data', JSON.stringify(regdata));
      });

      $("#switch_login").click(function(){
        $(".regerstration").css("display", "none");
        $(".loginform").css("display", "unset");
      });
      
      $("#switch_reg").click(function(){
        $(".regerstration").css("display", "unset");
        $(".loginform").css("display", "none");
      });
      $("#Sign_in").click(function(){
        var emailsign = $('#emailsign').val();
        var passwordsign = $('#password_sign').val();
        var retrievedObject = localStorage.getItem('Regestration_data');
        var logindata = JSON.parse(retrievedObject);
        console.log(typeof logindata);
        if(emailsign==logindata.email && passwordsign==logindata.password )
        {
            $(".welcome").css("display", "unset");
            $(".regerstration").css("display", "none");
            $(".loginform").css("display", "none");
        }  
      });
});