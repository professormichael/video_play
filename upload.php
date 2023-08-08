<?php
if ($_FILES["uploadedFile"]["error"] == UPLOAD_ERR_OK) {
    $tempFilePath = $_FILES["uploadedFile"]["tmp_name"];
    $targetDirectory = "uploads/";
    $targetFilePath = $targetDirectory . basename($_FILES["uploadedFile"]["name"]);

    if (move_uploaded_file($tempFilePath, $targetFilePath)) {
        // File uploaded successfully
        echo "File uploaded and moved to 'uploads/' directory.";
    } else {
        echo "Error moving file.";
    }
} else {
    echo "Error uploading file.";
}
?>
