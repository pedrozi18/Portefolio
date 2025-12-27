# Modern Portfolio Website 🚀

A stunning, responsive portfolio website built with HTML, CSS, and JavaScript. Features a modern dark mode design with darker green and beige accents and glassmorphism effects.

## ✨ Features

- **Modern Dark Mode Design** - Sleek dark theme with darker green (#2d5016) and beige (#d4c5a9) accents
- **Glassmorphism Effects** - Beautiful frosted glass effects on cards and sections
- **Sticky Navigation** - Fixed navbar with smooth scroll and active link highlighting
- **Hero Section** - Eye-catching introduction with typing effect animation
- **Animated Typing Text** - Dynamic text that cycles through multiple roles
- **Image Glow Effect** - Pulsing green glow around profile image
- **Skills Section** - Showcase your technologies with animated progress bars
- **Project Grid** - Display your work with hover animations and overlay effects
- **Contact Form** - Functional contact section with glassmorphism styling
- **Smooth Animations** - CSS transitions and scroll-based animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **Social Links** - Connect via GitHub, LinkedIn, and Twitter
- **SEO Optimized** - Proper meta tags and semantic HTML5

## 🎨 Design Features

- **Color Scheme**: Deep navy background (#0a0e27) with darker green (#2d5016) and beige (#d4c5a9) accents
- **Typography**: Clean, modern sans-serif fonts
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Effects**: Smooth transitions, hover animations, and scroll effects
- **Icons**: Font Awesome icons for a professional look

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 992px)
- ✅ Mobile (320px - 767px)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/pedrozi18/Portefolio.git
   cd Portefolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8080
   # Then visit http://localhost:8080
   ```

3. **Customize**
   - Edit `index.html` to add your personal information
   - Update colors in `styles.css` (see CSS variables at top)
   - Modify typing text in `script.js`

## 📂 Project Structure

```
Portefolio/
├── index.html      # Main HTML file
├── styles.css      # All styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🎯 Sections

1. **Navigation** - Sticky navbar with smooth scroll
2. **Hero** - Introduction with typing effect and profile image
3. **About** - Brief description about yourself
4. **Skills** - Your technical skills with progress bars
5. **Projects** - Portfolio of your work with hover effects
6. **Contact** - Contact form and information
7. **Footer** - Copyright and back-to-top link

## 🛠️ Customization Guide

### Update Personal Information
Edit `index.html`:
- Line 34: Change "Your Name"
- Lines 53-56: Update social media links
- Lines 95-172: Update skills
- Lines 179-293: Update projects
- Lines 329-353: Update contact information

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --neon-blue: #2d5016;        /* Dark green primary accent */
    --beige-accent: #d4c5a9;     /* Beige secondary accent */
    --bg-primary: #0a0e27;       /* Main background */
    --bg-secondary: #151932;     /* Section backgrounds */
}
```

### Modify Typing Text
Edit `script.js` around line 6:
```javascript
const typingTexts = [
    "Your Title 1",
    "Your Title 2",
    "Your Title 3"
];
```

## 🌐 GitHub Pages Deployment

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select branch: `main` or `copilot/create-responsive-portfolio`
4. Select folder: `/ (root)`
5. Click "Save"
6. Your site will be live at: `https://yourusername.github.io/Portefolio/`

## 🎨 Screenshots

### Desktop View
- **Hero Section**: Modern introduction with neon blue accents
- **Skills Section**: Glassmorphism cards with progress bars
- **Projects**: Grid layout with hover effects
- **Contact**: Form with glassmorphism styling

### Mobile View
- Hamburger menu navigation
- Stacked layout for easy scrolling
- Touch-friendly buttons and forms

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icon library

## ⚡ Performance

- Lightweight and fast loading
- No external dependencies (except Font Awesome CDN)
- Optimized CSS animations
- Minimal JavaScript for maximum performance

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips

- Replace placeholder images with your own photos
- Update project links to your actual repositories
- Add real social media URLs
- Consider adding a favicon
- Integrate with a form service (like Formspree) for the contact form

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Made with ❤️ using HTML, CSS, and JavaScript**