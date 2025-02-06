const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Allow CORS (cross-origin requests)
app.use(cors());

// Folder path (replace with the correct folder where your videos are located)
const folderPath = "uploads"; // Update this with your folder path

// Define video file extensions
const videoExtensions = [".mp4", ".mkv", ".avi", ".mov", ".flv", ".wmv"];

// Function to get all video files recursively with both src and title
function getVideoFiles(dir) {
    let videoFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively get files from subdirectories
            videoFiles = videoFiles.concat(getVideoFiles(filePath));
        } else if (videoExtensions.includes(path.extname(file).toLowerCase())) {
            // Extract title (file name without extension)
            const title = path.basename(file, path.extname(file));
            // Push an object containing both src (file path) and title
            videoFiles.push({
                src: filePath,
                title: title
            });
        }
    });

    return videoFiles;
}

// Define API endpoint to get all video files
app.get("/videos", (req, res) => {
    try {
        const videos = getVideoFiles(folderPath);
        console.log(videos);  // Log the video file objects to verify the data
        res.json(videos);
    } catch (error) {
        console.error('Error reading video files:', error);
        res.status(500).json({ error: "Failed to fetch videos" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
