const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloud_name, api_key, api_secret } = require("../../config");

// Configure Cloudinary
cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
});
// Create a Cloudinary storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Folder to store uploaded files
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file formats
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Generate a unique public ID for each file
  }
});

// Multer instance with Cloudinary storage
const upload = multer({ dest: 'uploads/' })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/upload', upload.single('avatar'), async (req, res) => {
    if (req.file) {
        try {
          // Upload to Cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
          console.log("Uploaded file to Cloudinary:", result);
          res.status(200).send({
            message: 'File uploaded successfully',
            url: result.secure_url, // Secure URL of the uploaded file
            public_id: result.public_id // Public ID of the uploaded file
          });
        } catch (error) {
          console.error("Error uploading to Cloudinary:", error);
          res.status(500).send({
            message: 'Error uploading file',
            error: error.message
          });
        }
      } else {
        res.status(400).send({ message: 'No file uploaded' });
      }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 