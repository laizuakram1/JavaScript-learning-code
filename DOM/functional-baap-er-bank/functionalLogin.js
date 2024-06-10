//login event
document.getElementById('login-btn').addEventListener('click', function(){
    //user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    //user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail === 'baap@gmail.com' && userPassword === 'secrets'){
        location.href = "functionalBank.html";
    }
    else{
        alert('tumi amar children na')
    }


})