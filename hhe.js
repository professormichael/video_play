function setCookie(name, value, expirationDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; secure; samesite=strict;';
    document.cookie = name + '=' + cookieValue;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict;';
}

function onclick1() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm-password').value;
    const error1 = document.getElementById('errorMessage');
    const error2 = document.getElementById('errorMessagea');
    const error3 = document.getElementById('errorMessageb');
    const error4 = document.getElementById('errorMessagec');
    let key1 = '';
    // Set title and cookies
    const title_name = 'Welcome ' + username + '(Home';
    setCookie('titlename', title_name, 1);

    // Initialize array to store usernames
    let usernames = JSON.parse(localStorage.getItem('usernames')) || [];

    // Check if username or email already exists
    if (usernames.includes(username)) {
        error1.innerText = 'Username already exists.';
    } else {
        error1.innerText = '';
        usernames.push(username);
        localStorage.setItem('usernames', JSON.stringify(usernames));
    }

    if (usernames.includes(email)) {
        error2.innerText = 'Email already exists.';
    } else {
        error2.innerText = '';
        usernames.push(email);
        localStorage.setItem('usernames', JSON.stringify(usernames));
    }

    if (usernames.includes(password)) {
        error2.innerText = '';
    } else {
        error2.innerText = '';
        usernames.push(password);
        localStorage.setItem('usernames', JSON.stringify(usernames));
    }

    // Validate password and confirm_password
    error3.innerText = password.length < 7 ? 'Password is too short.' : '';
    error4.innerText = confirm_password !== password ? 'Passwords do not match.' : '';

    // Check if any error messages are set
    if (!error1.innerText && !error2.innerText && !error3.innerText && !error4.innerText) {

        key1 = 'signed up'
        localStorage.setItem('key1', JSON.stringify(key1))
    }
    if(JSON.parse(localStorage.getItem('key1')) === 'signed up'){
        alert('Sign Up Successful');
        window.location.href = 'sign in.html';
    }
}
window.onload( function(){
  document.getElementById('username').value = ""
  document.getElementById('email').value = ""
  document.getElementById('password').value = ""
  document.getElementById('confirm-password').value = ""
})