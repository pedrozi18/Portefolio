// Portfolio Content Configuration
// Edit this file to update your portfolio content without touching HTML/CSS

const portfolioContent = {
    // Personal Information
    personal: {
        name: "Pedro Lourenço",
        title: "Software Developer",
        description: "Crafting beautiful, functional, and user-friendly web experiences",
        profileImage: "https://via.placeholder.com/400",
        cvFile: "cv.pdf",
        cvDownloadName: "Pedro_Lourenco_CV.pdf"
    },

    // Typing Animation Texts
    typingTexts: [
        "Software Developer",
        "Frontend Developer",
        "UI/UX Enthusiast",
        "Problem Solver"
    ],

    // Social Media Links
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    },

    // About Section
    about: {
        paragraphs: [
            "I'm a passionate web developer with expertise in creating modern, responsive, and user-friendly websites. I love turning complex problems into simple, beautiful, and intuitive designs.",
            "With a strong foundation in frontend technologies and a keen eye for design, I strive to create digital experiences that not only look great but also provide exceptional user experience."
        ]
    },

    // Skills
    skills: [
        {
            name: "Java",
            icon: "fab fa-java",
            level: 90
        },
        {
            name: "C++",
            icon: "fas fa-code",
            level: 85
        },
        {
            name: "Python",
            icon: "fab fa-python",
            level: 95
        }
    ],

    // Featured Video (YouTube)
    featuredVideo: {
        // To add your YouTube video:
        // 1. Go to your YouTube video
        // 2. Click "Share" button
        // 3. Copy the video ID (the part after "watch?v=" or "youtu.be/")
        // 4. Paste it below
        // Example: If URL is "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        // Then videoId is "dQw4w9WgXcQ"
        youtubeVideoId: "", // Leave empty for now, add your video ID here later
        title: "My Featured Video",
        description: "Add your video description here"
    },

    // Contact Information
    contact: {
        email: "your.email@example.com",
        location: "Your City, Country",
        phone: "+1 (123) 456-7890",
        subtitle: "Have a project in mind or want to collaborate? Feel free to reach out!"
    },

    // Footer
    footer: {
        year: new Date().getFullYear(),
        text: "Portfolio. All rights reserved."
    }
};
