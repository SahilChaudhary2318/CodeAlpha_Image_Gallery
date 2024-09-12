# CodeAlpha_Image_Gallery

This project is an image gallery that allows users to view thumbnails of supercars and hypercars. Upon clicking a thumbnail, a full-size version of the image is displayed in a modal, with next/previous navigation buttons for easy image browsing.

Features:
Responsive Image Thumbnails: A gallery of car images displayed in a single line.
Full-Screen Modal: Clicking on a thumbnail opens a full-size image in a modal.
Image Navigation: Navigate between images using next/previous buttons and keyboard shortcuts (← and → keys).
Smooth Transitions: Hover effects on thumbnails and smooth transitions between images.
Responsive Design: Adaptable for different screen sizes, with breakpoints for smaller devices.

Technologies Used:
HTML: Structure of the gallery and modals.
CSS: Styling, hover effects, and layout of the gallery.
JavaScript: Modal functionality and image navigation.

Code Snippet:
Here's a snippet of the main HTML that makes the gallery basic structure:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <centre>
  <div class="gallery-section">
    <h3>Supercars</h3>
    <div class="gallery">
      <div class="thumbnail-container">
        <img src="https://image.cnbcfm.com/api/v1/image/102396732-trequarti_basso.?v=1423061058&w=1600&h=900" alt="Ferrari 488 GTB" class="thumbnail">
        <p>Ferrari 488 GTB</p>
      </div>
<div class="modal" id="imageModal">
  <span class="close" id="closeModal">&times;</span>
  <h2 id="modalHeading"></h2>
  <img class="modal-content" id="fullImage" src="" alt="">
  <p id="modalCaption"></p>
  <div class="modal-controls">
    <button id="prevModal">Prev</button>
    <button id="nextModal">Next</button>
  </div>
</div>
  <script src="script.js"></script>
</body>
</html>


How It Works:
The gallery displays image thumbnails horizontally in a flexible layout. Hovering over an image scales it up slightly.
Clicking a thumbnail opens a modal window, displaying the full-size image.
Next and Previous buttons, along with keyboard navigation (← and → keys), allow users to cycle through images.

Project Structure:
📁 image-gallery/
 ┣ 📄 index.html       # Main HTML file
 ┣ 📄 style.css        # Styles for the gallery and modal
 ┗ 📄 script.js        # JavaScript for modal functionality
 
Contributing:
Feel free to fork this repository and make contributions. Pull requests are welcome!
