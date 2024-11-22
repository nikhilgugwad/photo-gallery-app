import React, { useEffect, useState, useCallback } from "react";
import axios from "axios"; // HTTP client for API requests

// Gallery Component
const Gallery = () => {
  const [photos, setPhotos] = useState([]); // State to store photos
  const [page, setPage] = useState(1); // Track current page for API
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // State for error handling

  // Fetch photos from Unsplash API
  const fetchPhotos = useCallback(async () => {
    setLoading(true); // Set loading to true
    setError(null); // Reset errors
    try {
      const response = await axios.get("https://api.unsplash.com/photos", {
        params: { per_page: 10, page }, // Number of photos to fetch, including current page in params
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      });

      // Append new photos to the existing ones
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (err) {
      console.error("Error fetching photos:", err);
      setError("Failed to fetch photos. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false
    }
  }, [page]);

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // Infinite scroll: Trigger fetch when user scrolls to the bottom
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [handleScroll]);

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
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
};

export default Gallery;
