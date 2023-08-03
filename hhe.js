 function onclick1(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm-password').value;
    localStorage.setItem('username',JSON.stringify(username) );
    localStorage.setItem('email',JSON.stringify(email) );
    localStorage.setItem('password',JSON.stringify(password) );
    let title_name ="Welcome " + username +"(Home"
    localStorage.setItem('confirm_password',JSON.stringify(confirm_password) );
    console.log(localStorage.getItem('password'));
    localStorage.setItem('titlename', JSON.stringify(title_name));
    console.log("euueu");

     document.title = localStorage.getItem('titlename');
     body1 = document.body.innerHTML;
     console.log(body1);
     console.log(document.querySelector("style"));
     localStorage.setItem('body', JSON.stringify(body1));

     window.location.href='Superdev_hOME.html';



  }