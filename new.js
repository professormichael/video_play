const express = require('express'); 
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());
let user = '';
let userTitle = '';
let descriptionInfo = {};
let srcV = '';

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const username = user;
        if (!username) {
            console.error("Error: Username and title are missing!");
            return cb(new Error('Username and title are required'), null);
        }

        // Create folder structure: /uploads/{username}/{title}/
        const userTitleDir = path.join(uploadDir, username);
        if (!fs.existsSync(userTitleDir)) fs.mkdirSync(userTitleDir, { recursive: true });
        srcV  = userTitleDir;
        cb(null, userTitleDir);
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        srcV = path.join(srcV, userTitle)
        srcV = path.join(srcV, ext) ;
        console.log(srcV)
        cb(null,  userTitle+ext);
    }
});

// Multer upload setup (fixes req.body issue)
const upload = multer({ storage: storage });
app.post('/l',  upload.none() ,(req, res) => {
    //console.log(req.body.title1, req.body.videodescription1);

    user = req.body.username1;
    userTitle = req.body.title1;
    videoDescription = req.body.videodescription1;

    // Ensure user object exists in descriptionInfo
    if (!descriptionInfo[user]) {
        descriptionInfo[user] = { user, titles: [] };
    }

    // Ensure 'titles' array exists
    if (!Array.isArray(descriptionInfo[user].titles)) {
        descriptionInfo[user].titles = [];
    }

    // Add title to the titles array (avoid duplicates)
    if (!descriptionInfo[user].titles.includes(userTitle)) {
        descriptionInfo[user].titles.push(userTitle);
    }
    const uploadDir = path.join(__dirname, 'uploads');
    const userTitleDir = path.join(uploadDir, user);
    srcV  = userTitleDir;
    srcV = path.join(srcV, userTitle)
    srcV = srcV + '.mp4';
    
    // Store the video description under the title
    descriptionInfo[user][userTitle] = [videoDescription, srcV];
    console.log(descriptionInfo);
    console.log(srcV)
    res.json({ message: "Data stored successfully", data: descriptionInfo[user] });

        
})
// Route to handle video upload with username & title
app.post('/upload', upload.fields([{ name: 'video' }]), (req, res) => {
    
    if (!req.files || !req.files['video'] || !req.body.username || !req.body.title) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const videoFile = req.files['video'][0];
    //srcV = videoFile.path;
  
    res.json({ 
        success: true, 
        message: 'Video uploaded successfully', 
        filePath: videoFile.path 
    });
});
function checkCredentials(username){
    if(descriptionInfo[username].user === username){
        console.log('Login is true for user ' + username)
      
        return { success: true };
      }
}
app.post('/h', upload.none(),(req, res) =>{
    const username = req.body.username;
    if(checkCredentials(username) === true){
        console.log('This is working')
    }
    res.json(descriptionInfo)
})


// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
