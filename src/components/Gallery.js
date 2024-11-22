import React, { useEffect, useState } from "react";
import axios from "axios"; // HTTP client for API requests

// Gallery Component
const Gallery = () => {
  const [photos, setPhotos] = useState([]); // State to store photos
  const [error, setError] = useState(null); // State for error handling

  // Fetch photos from Unsplash API
  const fetchPhotos = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/photos", {
        params: { per_page: 10 }, // Number of photos to fetch
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      });

      // Update state with fetched photos
      setPhotos(response.data);
    } catch (err) {
      console.error("Error fetching photos:", err);
      setError("Failed to fetch photos. Please try again later.");
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Render photos or error message
  return (
    <div>
      <h1>Photo Gallery</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ width: "200px" }}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p style={{ textAlign: "center" }}>{photo.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
