// Portfolio Content Configuration
// Edit this file to update your portfolio content without touching HTML/CSS

const portfolioContent = {
    // Personal Information
    personal: {
        name: "Pedro Lourenço",
        title: "Software Developer",
        description: "Building robust and scalable software solutions with clean, efficient code",
        profileImage: "profile.png",
        cvFile: "cv.pdf",
        cvDownloadName: "Pedro_Lourenco_CV.pdf"
    },

    // Typing Animation Texts
    typingTexts: [
        "Software Developer",
        "Frontend Developer",
        "Problem Solver"
    ],

    // Social Media Links
    social: {
        linkedin: "https://www.linkedin.com/in/pedro-louren%C3%A7o-8a980232b/"
    },

    // About Section
    about: {
        paragraphs: [
            "I'm an aspiring web developer passionate about creating responsive and accessible websites. I love exploring new ways to turn problems into clean, functional, and intuitive interfaces.",
            "While building my foundation in frontend technologies, I strive to develop digital experiences that provide a good user experience, always looking to expand my knowledge and improve my craft."
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
