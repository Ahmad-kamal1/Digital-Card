# Digital Business Card with QR Code

A modern, interactive digital business card with QR code functionality that links to an editable bio form.

## 🌟 Features

- **Professional Business Card Design**
  - Profile picture with rounded styling
  - Employee name, ID, and job title
  - Complete address and contact information
  - Visually appealing layout with icons

- **QR Code Integration**
  - Dynamic QR code generation using qrcode.js
  - QR code links to bio information form
  - "Scan QR Code" button for easy access

- **Interactive Bio Form**
  - Modal-based form for editing bio details
  - Pre-filled with card holder information
  - Form submission updates card information
  - Responsive design for all devices

- **Fully Responsive**
  - Adapts to mobile, tablet, and desktop screens
  - Touch-friendly interface

## 🛠️ Tech Stack

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Interactivity and form handling
- **QRCode.js** - QR code generation library
- **Font Awesome** - Icons for visual elements

## 📁 Project Structure

```
business-card/
│
├── index.html              # Main HTML file with all code
├── README.md               # This documentation file
│
├── (Embedded in HTML)
├── CSS Styles              # All styles embedded in <style> tag
├── JavaScript              # All scripts embedded in <script> tag
├── External Libraries      # CDN links for Font Awesome & QRCode.js
│
└── Features:
    ├── Profile card display
    ├── QR code generator
    └── Bio form modal
```

## 🚀 How to Use

### Method 1: Direct File Opening
1. Download the `index.html` file
2. Open it directly in any modern web browser
3. The card will load with all functionality

### Method 2: QR Code Testing
1. Open the HTML file in a browser
2. Click the "Scan QR Code" button OR
3. Use a QR scanner app on your phone to scan the displayed QR code
4. The bio form will open automatically

### Method 3: Editing the Card
1. Open `index.html` in a code editor
2. Modify the following sections:
   - Profile information in the card-header div
   - Address and contact details
   - Form fields in the modal section
   - Styling in the CSS section

## 🔧 Customization

### Changing Profile Information
Edit the following sections in the HTML:

```html
<!-- Profile Picture -->
<img src="YOUR_IMAGE_URL" alt="Profile Picture" class="profile-pic">

<!-- Name and Title -->
<h1>Your Name Here</h1>
<h3>Your Job Title</h3>
<div class="id-number">ID: YOUR-ID-HERE</div>

<!-- Address -->
<p>Your Address Line 1<br>Your Address Line 2<br>Your Country</p>
```

### Modifying Form Fields
Edit the form section to add/remove fields:

```html
<div class="form-group">
    <label for="fieldName">Field Label</label>
    <input type="text" id="fieldName" name="fieldName" value="Default Value">
</div>
```

### Changing Colors
Modify the CSS variables in the style section:

```css
/* Primary Colors */
background: linear-gradient(to right, #2c3e50, #4a6491);

/* Secondary Colors */
background: linear-gradient(135deg, #6e8efb, #a777e3);
```

## 📱 Responsive Breakpoints

- **Desktop**: 992px and above
- **Tablet**: 768px - 991px
- **Mobile**: Below 768px

## 🔗 QR Code Implementation

The QR code is generated using QRCode.js and contains a URL pointing to the same page with a hash parameter:

```javascript
// QR code points to current URL with #bio-form
const qrCode = new QRCode(qrContainer, {
    text: window.location.href + '#bio-form',
    width: 220,
    height: 220,
    colorDark: "#2c3e50",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
```

## 📋 Form Functionality

The bio form includes:
- Validation for required fields
- Real-time card updates on submission
- Modal display/hide functionality
- Pre-filled data from the card

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Opera 47+

## 🎨 Design Features

- **Modern gradient backgrounds**
- **Card hover effects** with elevation
- **Smooth animations** and transitions
- **Consistent color scheme**
- **Clean, readable typography**
- **Interactive elements** with visual feedback

## 🔄 Updating for Production

To use this in production:

1. **Replace the form submission** with actual backend API calls
2. **Use actual image hosting** for profile pictures
3. **Implement proper form validation** server-side
4. **Add authentication** if needed for bio updates
5. **Use HTTPS** for QR code URLs

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Note**: This is a frontend-only implementation. For production use, you'll need to implement backend functionality for form submissions and data persistence.