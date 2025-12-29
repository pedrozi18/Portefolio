# Content Update Guide 📝

This guide explains how to easily update your portfolio content by editing the `content.js` file.

## Why This Approach?

By separating content from structure, you can:
- ✅ Update text, images, and links without touching HTML/CSS
- ✅ Avoid accidentally breaking the layout
- ✅ Make changes faster and more confidently
- ✅ Keep your code organized and maintainable

## How to Update Your Portfolio

### 1. Personal Information

Open `content.js` and find the `personal` section:

```javascript
personal: {
    name: "Pedro Lourenço",              // Your name
    title: "Software Developer",          // Your main title
    description: "Crafting beautiful...", // Hero description
    profileImage: "https://...",          // Your profile photo URL
    cvFile: "cv.pdf",                     // Path to your CV
    cvDownloadName: "Pedro_Lourenco_CV.pdf" // Download filename
}
```

**Example:**
```javascript
personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    description: "Building amazing web applications",
    profileImage: "images/my-photo.jpg",
    cvFile: "my-resume.pdf",
    cvDownloadName: "YourName_Resume.pdf"
}
```

### 2. Typing Animation

Update the texts that cycle in the hero section:

```javascript
typingTexts: [
    "Software Developer",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
]
```

**Tips:**
- Keep texts relatively short (2-3 words)
- Use 3-5 different texts
- Order them by importance

### 3. Social Media Links

Update your social media profiles:

```javascript
social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle"
}
```

### 4. About Section

Update your bio paragraphs:

```javascript
about: {
    paragraphs: [
        "First paragraph about you...",
        "Second paragraph about your skills..."
    ]
}
```

**Tips:**
- Keep it concise (2-3 paragraphs)
- Focus on your strengths
- Include your passion and goals

### 5. Skills

Add, remove, or update your skills:

```javascript
skills: [
    {
        name: "HTML5",                    // Skill name
        icon: "fab fa-html5",            // Font Awesome icon class
        level: 95                         // Proficiency level (0-100)
    },
    // Add more skills...
]
```

**Finding Icons:**
- Visit: https://fontawesome.com/icons
- Search for your skill
- Copy the icon class (e.g., `fab fa-react`)

**Example - Adding a New Skill:**
```javascript
{
    name: "TypeScript",
    icon: "fab fa-js-square",  // Use similar icon if specific one doesn't exist
    level: 80
}
```

### 6. Featured Video

Add your own video file to the portfolio:

```javascript
featuredVideo: {
    videoFile: "portfolio-video.mp4",      // Your video filename
    title: "My Featured Video",
    description: "Description of your video",
    posterImage: "video-thumbnail.jpg"     // Optional thumbnail image
}
```

**How to add your video:**
1. Upload your video file (MP4, WebM, or OGG format) to the root directory of your repository
2. Name it something descriptive (e.g., `portfolio-video.mp4`, `my-showcase.mp4`)
3. Update the `videoFile` value in `content.js` with your filename
4. (Optional) Add a poster/thumbnail image for before the video plays

**Example:**
```javascript
featuredVideo: {
    videoFile: "my-portfolio-showcase.mp4",
    title: "My Portfolio Showcase",
    description: "Watch my latest project demonstration",
    posterImage: "showcase-thumbnail.jpg"
}
```

**Tips:**
- Recommended video format: MP4 (H.264) - best browser compatibility
- Keep file size reasonable (under 50MB for faster loading)
- Recommended resolution: 1080p (1920x1080) or 720p (1280x720)
- The video player is responsive and supports all standard video controls
- Leave `videoFile` empty (`""`) to show placeholder text
- Leave empty (`""`) if you don't have a video yet
- The video will be responsive and work on all devices

### 7. Contact Information

Update your contact details:

```javascript
contact: {
    email: "your.email@example.com",
    location: "Your City, Country",
    phone: "+1 (123) 456-7890",
    subtitle: "Have a project in mind? Let's talk!"
}
```

### 8. Footer

The footer year updates automatically, but you can change the text:

```javascript
footer: {
    year: new Date().getFullYear(),  // Auto-updates
    text: "Portfolio. All rights reserved."
}
```

## Quick Update Workflow

1. **Edit `content.js`** with your changes
2. **Save the file**
3. **Test locally:** Open `index.html` in your browser
4. **Commit changes:** 
   ```bash
   git add content.js
   git commit -m "Update portfolio content"
   git push
   ```
5. **Deploy:** GitHub Pages will automatically update (1-2 minutes)

## Common Mistakes to Avoid

❌ **Missing commas:** Each item except the last needs a comma
```javascript
// Wrong:
name: "John"
title: "Developer"

// Correct:
name: "John",
title: "Developer"
```

❌ **Broken quotes:** Use matching quotes
```javascript
// Wrong:
name: "John'

// Correct:
name: "John"
```

❌ **Invalid URLs:** Make sure links start with http:// or https://
```javascript
// Wrong:
github: "github.com/user"

// Correct:
github: "https://github.com/user"
```

## Testing Your Changes

Before deploying:

1. Open `index.html` in your browser
2. Check each section loads correctly
3. Test all links work
4. View on mobile (resize browser window)
5. Check browser console for errors (F12 → Console tab)

## Need Help?

If something breaks:
1. Check the browser console for errors
2. Verify all commas and quotes are correct
3. Make sure `content.js` is loaded before `script.js`
4. Compare your syntax with the original examples

## Advanced: Adding New Sections

To add completely new sections (like testimonials, blog, etc.):

1. Add data to `content.js`
2. Add HTML structure in `index.html`
3. Add loading function in `script.js`
4. Call function in `loadPortfolioContent()`

---

**Pro Tip:** Keep a backup of `content.js` before making major changes!
