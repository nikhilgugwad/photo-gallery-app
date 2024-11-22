# Photo Gallery

A responsive photo gallery application built using React.js and the Unsplash API. The app implements infinite scrolling, accessibility features, hover effects, and lazy loading for optimal performance.

## **Live Site**

The application is live at: [https://exquisite-kashata-c14515.netlify.app/](https://your-app-name.netlify.app)

## **Features**
- **Photo Gallery Layout**: Display photos in a grid format with photographer details.
- **Infinite Scroll**: Load more images as the user scrolls down.
- **Responsive Design**: Adapts to different screen sizes.
- **Error Handling**: Shows error messages for failed API requests.
- **Loading Indicator**: Displays a spinner while images are loading.
- **Hover Effects**: Adds interactivity with zoom and shadow effects on photos.
- **Accessibility**: Includes alt attributes, ARIA roles, and keyboard navigation.
- **Performance Optimization**: Lazy-loads images for better performance.

## **Technologies Used**
- **React.js**: Frontend framework.
- **Unsplash API**: For fetching high-quality photos.
- **CSS**: For styling (without CSS frameworks).
- **Netlify**: Deployment platform.

## **Getting Started**

### **Prerequisites**
- Node.js and npm installed.
- An Unsplash API key. Get one by registering at [Unsplash Developers](https://unsplash.com/developers).

### **Steps to Install and Run the Project Locally**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nikhilgugwad/photo-gallery-app.git
   cd photo-gallery-app



2.  **Install dependencies**:
    
    ```bash
    npm install
    
    ```
    
3.  **Create a `.env` file**: In the project root, create a `.env` file and add your Unsplash API key:
    
    ```env
    REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    
    ```
    
4.  **Run the application**:
    
    ```bash
    npm start
    
    ```
    
5.  Open [http://localhost:3000](http://localhost:3000/) in your browser to view the app.

## **Advanced Features and Optimizations**

### **1. Lazy Loading of Images**

-   Images are lazy-loaded using the `loading="lazy"` attribute in the `<img>` tag. This ensures that only images visible in the viewport are downloaded, reducing initial load time and improving performance for users on slow connections.

### **2. Hover Effects**

-   Subtle hover effects such as zoom and shadow are implemented for interactivity. These effects are designed using pure CSS for lightweight and fast rendering.

### **3. Error Handling**

-   Graceful error messages are displayed if the Unsplash API request fails due to network issues or invalid API keys. This ensures a better user experience.

### **4. Responsive Design**

-   The gallery adjusts its layout based on screen size using CSS Grid and media queries. The design supports 1-2 columns on small screens and 3-4 columns on larger screens.

### **5. Accessibility**

-   All images include descriptive `alt` attributes for screen readers, and ARIA roles are added for dynamic content to ensure compliance with accessibility standards.

## **Deployment**

### **Netlify Deployment**

The project is deployed on Netlify. Steps to redeploy:

1.  Run `npm run build` to generate the production build.
2.  Drag and drop the `build` folder to the deployment section on Netlify or connect your GitHub repository for continuous deployment.