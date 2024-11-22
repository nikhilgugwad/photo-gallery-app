import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./Gallery.css"; // Import CSS file

const Gallery = () => {
  const [photos, setPhotos] = useState([]); // Store fetched photos
  const [page, setPage] = useState(1); // Track current page for API
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Fetch photos from Unsplash API
  const fetchPhotos = useCallback(async () => {
    setLoading(true); // Set loading to true
    setError(null); // Reset errors
    try {
      const response = await axios.get("https://api.unsplash.com/photos", {
        params: { per_page: 10, page }, // Include current page in params
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      });

      // Append new photos to the existing ones
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (err) {
      console.error("Error fetching photos:", err);
      setError("Failed to load photos. Please try again.");
    } finally {
      setLoading(false); // Set loading to false
    }
  }, [page]);

  // Load initial photos on component mount
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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Photo Gallery</h1>

      {/* Error Message */}
      {error && (
        <div style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
          <p>{error}</p>
          <button
            onClick={() => fetchPhotos()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="gallery-container" role="region" aria-label="Photo Gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card" tabIndex="0">
            <img
              src={photo.urls.small}
              alt={photo.alt_description || "Photo from unsplash"}
              loading="lazy" // Lazy load images for performance
            />
            <p>{photo.user.name}</p>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
};

export default Gallery;
