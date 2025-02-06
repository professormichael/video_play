async function clicklo() {
    console.log('clicked');
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    // Create a FormData object
    const formData = new FormData();
    alert(username);
    alert(password);
    formData.append('username3', username);
    formData.append('password3', password);

    try {
        // Send a POST request to the server
        const response = await fetch('https://hypnotic-beneficial-starfish.glitch.me/get1', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if(result === 'success'){
            window.location.href = 'animae_signin.html'
        }    
    } catch (error) {
        console.log('Error:', error);
        }

    // Update button state
    document.getElementById('button').innerHTML = 'Loading...';
}

const password1 = document.getElementById('password');
function check_pass() {
    const password_check = document.getElementById('password_check');
    if (password1.value.length < 4) {
        password_check.innerText = 'Your Password Is Weak';
        password_check.style.color = 'red';
    } else if (password1.value.length > 4 && password1.value.length < 8) {
        password_check.innerText = 'Your Password Is Medium';
        password_check.style.color = 'yellow';
    } else if (password1.value.length >= 8) {
        password_check.innerText = 'Your Password Is Unique';
        password_check.style.color = 'blue';
    }
}

const confirm_password = document.getElementById('confirm_password');
function confirm_password1() {
    const password_confirm = document.getElementById('password_confirm');
    if (password1.value === confirm_password.value) {
        password_confirm.innerText = 'Confirmed Password';
        password_confirm.style.color = 'blue';
    } else {
        password_confirm.innerText = 'Wrong Password';
        password_confirm.style.color = 'red';
    }
}

// Add event listeners for real-time validation
password1.addEventListener('input', check_pass);
confirm_password.addEventListener('input', confirm_password1);
