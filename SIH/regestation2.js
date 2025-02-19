document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById("name").value;
    const fathersName = document.getElementById("fathersName").value;
    const mothersName = document.getElementById("mothersName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;

    // Generate a unique 10-digit number and password
    const uniqueNumber = generateUniqueNumber();
    const newPassword = generatePassword();

    // Alert the unique number and new password to the user
    alert(`Your unique 10-digit number is: ${uniqueNumber}\nYour new password is: ${newPassword}`);

    // Optionally, you could display the result on the page as well
    // document.getElementById("resultContainer").innerHTML = `Your unique 10-digit number is: ${uniqueNumber}<br>Your new password is: ${newPassword}`;
});

// Function to generate a unique 10-digit number
function generateUniqueNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000); // Generates a random 10-digit number
}

// Function to generate a random password
function generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}
