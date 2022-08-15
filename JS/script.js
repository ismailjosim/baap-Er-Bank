// step 01: Add Click event with the submit button.
document.getElementById('btn-submit').addEventListener('click', function () {

    // Step 02: get the email within the email input field.(use value to get tex from input)
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step 03: get the password within the password input field.(use value to get tex from input)
    const passField = document.querySelector('#user-password');
    const password = passField.value;

    // NOTE: DON'T VERIFY EMAIL PASSWORD ON THE CLIENT SIDE.
    // STEP 04: VERIFY email & Password.
    if (email === 'ismailjosim99@gmail.com' && password === '11223344') {
        window.location.href = 'dashboard.html';
    } else {
        console.log('User is not valid');
    }
});

