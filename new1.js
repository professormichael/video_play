const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Serve the uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

let user = '';
let userTitle = '';
let descriptionInfo = {};
let srcV = '';

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const username = user;
        if (!username) {
            return cb(new Error('Username is required'), null);
        }

        const userDir = path.join(uploadDir, username);
        if (!fs.existsSync(userDir)) fs.mkdirSync(userDir, { recursive: true });

        srcV = userDir;
        cb(null, userDir);
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        srcV = path.join(srcV, userTitle + ext);
        console.log(srcV);
        cb(null, userTitle + ext);
    }
});

const upload = multer({ storage: storage });

// Route to store video metadata
app.post('/l', upload.none(), (req, res) => {
    user = req.body.username1;
    userTitle = req.body.title1;
    const videoDescription = req.body.videodescription1;

    if (!user || !userTitle) {
        return res.status(400).json({ message: "Username and title are required" });
    }

    if (!descriptionInfo[user]) {
        descriptionInfo[user] = { user, titles: [] };
    }

    if (!descriptionInfo[user].titles.includes(userTitle)) {
        descriptionInfo[user].titles.push(userTitle);
    }

    const videoPath = path.join('/uploads', user, userTitle + '.mp4');
    descriptionInfo[user][userTitle] = [videoDescription, videoPath];

    console.log(descriptionInfo);
    res.json({ message: "Data stored successfully", data: descriptionInfo[user] });
});

// Route to handle video upload
app.post('/upload', upload.fields([{ name: 'video' }]), (req, res) => {
    if (!req.files || !req.files['video'] || !req.body.username || !req.body.title) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const videoFile = req.files['video'][0];

    res.json({
        success: true,
        message: 'Video uploaded successfully',
        filePath: videoFile.path
    });
});

// Route to fetch all videos for a username
app.post('/get-videos', upload.none(), (req, res) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).json({ success: false, message: 'Username is required' });
    }

    const userDir = path.join(uploadDir, username);
    if (!fs.existsSync(userDir)) {
        return res.json({ success: true, videos: [] }); // No videos found
    }

    // Get all video files in the folder
    const videoFiles = fs.readdirSync(userDir).filter(file =>
        
        file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.avi')
        
    );
    
    const videoPaths = videoFiles.map(file => `/uploads/${username}/${file}`);
    console.log(videoFiles +'this is')
    res.json({ success: true, videos: videoPaths , videoName:videoFiles});
});

// Route to check user credentials (kept from your code)
app.post('/h', upload.none(), (req, res) => {
    const username = req.body.username;
    if (descriptionInfo[username] && descriptionInfo[username].user === username) {
        console.log('Login is true for user ' + username);
    }
    res.json(descriptionInfo);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
