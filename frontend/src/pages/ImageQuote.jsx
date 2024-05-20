import React, { useEffect, useState } from 'react';
import axios from "axios";


function ImageQuote() {
    // let [Imagequotes, setImageQuotes] = useState([]);
    // useEffect(function () {

    //     async function getImageQuote() {

    //         const res = await axios.get("http://localhost:8080/allimagequote");
    //         console.log(res);
    //         setImageQuotes(res.data);
    //     }
    //     getImageQuote();
    // }, [])
    const [files, setFiles] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
  
    const handleChange = (event) => {
      setFiles(event.target.files);
    };
  
    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append('image', files[i]);
        }
        const response = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const uploadedUrls = response.data.imageUrls; // Assuming server returns an array of image URLs
        setImageUrls(uploadedUrls);
      } catch (error) {
        console.error('Error uploading images:', error);
      }
    };
  
    return (
      <div>
        <h2>Upload Images</h2>
        <input type="file" onChange={handleChange} multiple />
        <button onClick={handleSubmit}>Upload</button>
        {imageUrls.length > 0 && (
          <div>
            <h2>Uploaded Images</h2>
            {imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Uploaded ${index}`} style={{ maxWidth: '100%', marginRight: '10px' }} />
            ))}
          </div>
        )}
      </div>
    );
  };

  export default ImageQuote