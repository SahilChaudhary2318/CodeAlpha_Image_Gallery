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
      <div class="thumbnail-container">
        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/14054/huracan-evo-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" alt="Lamborghini Huracán" class="thumbnail">
        <p>Lamborghini Huracán</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://imgd.aeplcdn.com/664x374/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154380.jpg?wm=0&q=80" alt="Porsche 911 Carrera" class="thumbnail">
        <p>Porsche 911 Carrera</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://thechicicon.com/wp-content/uploads/2021/03/mclaren-720s-spider-by-mso.jpg" alt="McLaren 720S" class="thumbnail">
        <p>McLaren 720S</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.topgear.com/sites/default/files/cars-car/image/2019/07/aston_martin_db11_amr_china_grey_23945.jpg" alt="Aston Martin DB11" class="thumbnail">
        <p>Aston Martin DB11</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://uploads.audi-mediacenter.com/system/production/media/70272/images/3c92d2acbf6ab5f85be8006f854786f0f0ff36be/A1813681_web_2880.jpg?1698341967" alt="Audi R8" class="thumbnail">
        <p>Audi R8</p>
      </div>
    </div>
  </div>
  <div class="gallery-section">
    <h3>Hypercars</h3>
    <div class="gallery">
      <div class="thumbnail-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/1200px-Bugatti_Chiron_1.jpg" alt="Bugatti Chiron" class="thumbnail">
        <p>Bugatti Chiron</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.carscoops.com/wp-content/uploads/2023/11/2023-Koenigsegg-Jesko.jpg" alt="Koenigsegg Jesko" class="thumbnail">
        <p>Koenigsegg Jesko</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://news.dupontregistry.com/wp-content/uploads/2023/07/venom-f5_moon-white-2-1140x570.jpg" alt="Hennessey Venom F5" class="thumbnail">
        <p>Hennessey Venom F5</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.electrive.com/media/2021/06/rimac-nevera-2021-02-min-1400x700.png.webp" alt="Rimac C_Two" class="thumbnail">
        <p>Rimac C_Two</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/2019_SSC_Tuatara_at_Pebble_Beach_Press_Conference.jpg" alt="SSC Tuatara" class="thumbnail">
        <p>SSC Tuatara</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.carrozzieri-italiani.com/wp-content/uploads/devel-sixteen-in-dubai-webp-immagine-WEBP-1280-%C3%97-720-pixel-Riscalata-83.png" alt="Devel Sixteen" class="thumbnail">
        <p>Devel Sixteen</p>
      </div>
    </div>
  </div>
  <div class="gallery-section">
    <h3>Track Cars</h3>
    <div class="gallery"> 
      <div class="thumbnail-container">
        <img src="https://www.theglobeandmail.com/resizer/v2/FKQRKJ56XVAAVKTBZMA6F4KYOE.jpg?auth=a4bafd4b1a398111a0511ae5c9324a81d0eb9ca2966f1315531976ed3202617a&width=1200&quality=80" alt="Porsche 992 911 GT3RS" class="thumbnail">
        <p>Porsche 911 GT3RS</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://static.autox.com/uploads/2020/06/Lotus-Exige-Sport-410-20th-Anniversary-Edition-Chrome-Orange-Front-Quarter.jpg" alt="Lotus Exige" class="thumbnail">
        <p>Lotus Exige</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://cdn.motor1.com/images/mgl/Y9zbJ/s1/2010-ariel-atom-500.webp" alt="Ariel Atom" class="thumbnail">
        <p>Ariel Atom</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://mclaren.scene7.com/is/image/mclaren/720S_GT3_Header-8:crop-16x9?wid=1920&hei=1080" alt="McLaren 720S GT3" class="thumbnail">
        <p>McLaren 720S GT3</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/RadicalRXCV8.jpg/1200px-RadicalRXCV8.jpg" alt="Radical SRX" class="thumbnail">
        <p>Radical SRX</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://cdn-4.motorsport.com/images/amp/Yv89RdL0/s6/bmw-m4-gt3-1.jpg" alt="BMW M4 GT3" class="thumbnail">
        <p>BMW M4 GT3</p>
      </div>
    </div>
  </div>
  <div class="gallery-section">
    <h3>Electric Cars</h3>
    <div class="gallery">
      <div class="thumbnail-container">
        <img src="https://www.topgear.com/sites/default/files/2021/10/Porsche_Taycan_4S_CT_front_static.jpg" alt="Porsche Taycan Cross Turismo" class="thumbnail">
        <p>Porsche Taycan Cross Turismo</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/2021_Tesla_Model_S_exterior_1200x768.jpeg?size=1200:675" alt="Tesla Model S" class="thumbnail">
        <p>Tesla Model S</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210210010954_Audi_e_tron_GT_quattro_2022_front.jpg" alt="Audi e-tron GT" class="thumbnail">
        <p>Audi e-tron GT</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://v2charge.com/wp-content/uploads/2024/04/tesla-model-3-performance-valencia.jpg" alt="Tesla Model 3" class="thumbnail">
        <p>Tesla Model 3</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://dmassets.hyundai.com/is/image/hyundaiautoever/hyundai-ioniq-5-n-debut-goodwood-2023-studio-exterior-01:Content%20Banner%20Mobile?wid=767&hei=668" alt="Hyundai IONIQ 5" class="thumbnail">
        <p>Hyundai IONIQ 5</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://media.ed.edmunds-media.com/chevrolet/bolt-euv/2023/oem/2023_chevrolet_bolt-euv_4dr-hatchback_premier_fq_oem_1_1600.jpg" alt="Chevrolet Bolt EUV" class="thumbnail">
        <p>Chevrolet Bolt EUV</p>
      </div>
    </div>
  </div>
  <div class="gallery-section">
    <h3>SUVs</h3>
    <div class="gallery">
      <div class="thumbnail-container">
        <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/51529/x5-m-exterior-left-front-three-quarter-2.jpeg?q=80" alt="BMW X5 M" class="thumbnail">
        <p>BMW X5 M</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.cnet.com/a/img/resize/69ad415912f3b755f32a5adf105494322a19f169/hub/2020/10/07/8aa56ed8-69ff-4b50-ae8e-b4cf7dde2189/2020-mercedes-amg-g63-001.jpg?auto=webp&width=768" alt="Mercedes-AMG G63" class="thumbnail">
        <p>Mercedes-AMG G63</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.europeanprestige.co.uk/blobs/stock/320/images/a58e420b-1f9d-4a6e-8c0a-c60362dd77e8/hi4a9477.jpg?width=2000&height=1333" alt="Porsche Cayenne Turbo GT" class="thumbnail">
        <p>Porsche Cayenne Turbo GT</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230905025640_Audi%20Q8%20facelift.jpg" alt="Audi Q8" class="thumbnail">
        <p>Audi Q8</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.cnet.com/a/img/resize/50a2b0406834f3b07d90495e3fac989d6bf51af3/hub/2016/04/28/5a91e8fc-14bc-4c22-abe4-b990073328d2/2016-tesla-model-s-19-of-43.jpg?auto=webp&width=768" alt="Tesla Model X" class="thumbnail">
        <p>Tesla Model X</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://bringatrailer.com/wp-content/uploads/2022/11/2006_hummer_h3_2006_hummer_h3_f7a22c99-8221-48e4-8814-5d72afa328f5-02yhss-79070-08029.jpg" alt="Hummer H3" class="thumbnail">
        <p>Hummer H3</p>
      </div>
    </div>
  </div>
  <div class="gallery-section">
    <h3>Sedans</h3>
    <div class="gallery">
      <div class="thumbnail-container">
        <img src="https://w0.peakpx.com/wallpaper/723/715/HD-wallpaper-bmw-m5-cs-2021.jpg" alt="BMW M5 CS" class="thumbnail">
        <p>BMW M5 CS</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://cdni.autocarindia.com/ExtraImages/20200618115022_mercedes-amg-e63-2020-front.jpg" alt="Mercedes-AMG E63" class="thumbnail">
        <p>Mercedes-AMG E63</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/1_5.png?size=690:388" alt="Audi RS 7" class="thumbnail">
        <p>Audi RS 7</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/2025/sedans/ct5-v/overview/01-images/my25-ct5-v-mov-feature-story-blackwing.jpg?imwidth=960" alt="Cadillac CT5-V Blackwing" class="thumbnail">
        <p>Cadillac CT5-V Blackwing</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://vehicle-images.dealerinspire.com/ba03-110004845/JTHGYLGF3P5002680/0faf8fda8ab1ece9f6e012311fc1cd44.jpg" alt="Lexus LS" class="thumbnail">
        <p>Lexus LS</p>
      </div>
      <div class="thumbnail-container">
        <img src="https://cdni.autocarindia.com/ExtraImages/20211130054210_600517.jpg" alt="Genesis G90" class="thumbnail">
        <p>Genesis G90</p>
      </div>
    </div>
  </div>
</centre> 
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
