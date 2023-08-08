document.addEventListener("DOMContentLoaded", () => {
    const uploadButton = document.getElementById("uploadButton");
    const fileInput = document.getElementById("fileInput");

    uploadButton.addEventListener("click", () => {
        const formData = new FormData();
        formData.append("uploadedFile", fileInput.files[0]);

        fetch("upload.php", {
            method: "POST",
            body: formData
        }).then(response => response.text())
          .then(result => {
              console.log(result);
          })
          .catch(error => {
              console.error("Error:", error);
          });
    });
});
