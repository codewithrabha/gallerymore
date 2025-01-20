# Reveal More Image Gallery

A lightweight, responsive image gallery with a "See More" feature. This gallery automatically handles image overflow by displaying a counter for additional images.

## 🎯 Features

- Responsive grid layout
- Configurable maximum image display
- "See More" counter for overflow images
- Smooth image loading
- Mobile-friendly design
- No external dependencies

## 🖼️ Preview

The gallery displays images in a 3x2 grid with:
- Maximum configurable visible images
- Automatic "See More" counter
- Consistent image sizing
- Shadow effects
- Rounded corners

## 🚀 Quick Start

1. Include the HTML structure:
```html
<div class="container">
    <div class="custom_gallery" data-max-images="6">
        <img src="/path/to/image1.jpg" class="custom_gallery_item">
        <img src="/path/to/image2.jpg" class="custom_gallery_item">
        <!-- Add more images as needed -->
    </div>
</div>
```

2. Set the maximum images attribute:
```html
data-max-images="6"  <!-- Adjust this number as needed -->
```

## ⚙️ Configuration

### HTML Structure
- `.container`: Main wrapper for centering
- `.custom_gallery`: Gallery grid container
- `.custom_gallery_item`: Individual image items
- `.extra-element`: "See More" counter element

### CSS Classes
```css
.container          /* Main container */
.custom_gallery     /* Gallery grid */
.custom_gallery_item /* Image items */
.extra-element      /* See more counter */
```

### JavaScript Features
- Automatic image counting
- Dynamic "See More" counter
- Configurable maximum images
- Responsive grid layout

## 🎨 Customization

### Grid Layout
```css
.custom_gallery {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px 200px;
    gap: 10px;
}
```

### Image Styling
```css
.custom_gallery_item {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}
```

## 📱 Responsive Design

The gallery is fully responsive and works across all device sizes:
- Desktop: 3x2 grid
- Tablet & Mobile: Responsive layout

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Rabha**
- GitHub: [@codewithrabha](https://github.com/codewithrabha)

## 💡 Usage Tips

1. Ensure all images are of similar dimensions for best results
2. Optimize images for web use
3. Use appropriate image formats (JPG, PNG, WebP)
4. Adjust `data-max-images` based on your needs

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
