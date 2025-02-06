const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors()); // Enable CORS

const upload = multer(); // Middleware to handle FormData
let messages = '';
// User storage
const userPasswords = {};
let usernameNow = ''
// Function to register a new user
function registerUser(username, password) {
    if (!userPasswords[username]) {
        userPasswords[username] = { username, password };
        console.log(`User ${username} registered successfully.`)
        return { success: true, message: `User ${username} registered successfully.` };
    } else {
        return { success: false, message: 'Username already exists. Please choose a different username.' };
    }
}
function checkCredentials(username, password) {
  if(userPasswords[username].username === username &&userPasswords[username].password === password ){
    console.log('Login is true for user ' + username)
  
    return { success: true, message: `User ${username} Successfully Login.` };
  }
  else{
    return { success: false, message: `Username ${username} does not exists in our server , Recheck`}
  }
 // return userPasswords[username] && userPasswords[username].password === password;
}

// Route to handle user registration
app.post('/get1', upload.none(), (req, res) => {
    const { username3: username, password3: password } = req.body;
    console.log('User registration:', username, password);

    const result = registerUser(username, password);
    res.json('success');
});
app.post('/login', upload.none(),(req, res)  => {
  const { username3:username ,password3: password } = req.body;
  const isValid = checkCredentials(username, password);
  if (isValid) {
    usernameNow = username;
  }
  res.json(isValid)
  console.log('Active Usernames:', usernameNow);
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
