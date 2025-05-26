# Kivyaa Jewels Website

A modern, elegant website for Kivyaa Jewels, featuring a beautiful pastel color scheme and responsive design.

## Features

- Responsive design that works on all devices
- Modern, elegant UI with pastel color scheme
- Product filtering system
- Instagram feed integration
- Launch countdown timer
- Email subscription form
- Smooth scrolling navigation

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kivyaa-jewels.git
cd kivyaa-jewels
```

2. Create the required directories:
```bash
mkdir images
mkdir images/products
mkdir images/instagram
```

3. Add your images:
- Place hero background image as `images/hero-bg.jpg`
- Add product images to `images/products/`
- Add Instagram post images to `images/instagram/`

4. Open `index.html` in your browser to view the website.

## Development

### File Structure
```
kivyaa-jewels/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── hero-bg.jpg
│   ├── products/
│   └── instagram/
└── README.md
```

### Customization

1. Colors: Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #f8b4bc;
    --secondary-color: #b4d6d3;
    --accent-color: #d4a5a5;
    /* ... */
}
```

2. Products: Update the products array in `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: 'Product Name',
        category: 'category',
        price: 0,
        material: 'material',
        image: 'images/products/image.jpg'
    },
    // Add more products
];
```

3. Launch Date: Update the launch date in `script.js`:
```javascript
const launchDate = new Date('2025-01-01T00:00:00').getTime();
```

## Integration

### Instagram Feed
To integrate with Instagram:
1. Create an Instagram Basic Display API app
2. Get your access token
3. Update the `initializeInstagramFeed()` function in `script.js`

### Email Subscription
To handle email subscriptions:
1. Set up a backend service (e.g., Mailchimp)
2. Update the form submission logic in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact:
- Email: hello@kivyaajewels.co.in
- Instagram: @kivyaajewels 