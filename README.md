# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a beautiful design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and dynamic content
- **Project Filtering**: Filter projects by category (Web Apps, Mobile, Design)
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading and smooth animations

## Sections

1. **Hero Section**: Introduction with profile image and call-to-action buttons
2. **About Me**: Personal information with animated statistics
3. **Experience**: Timeline of professional experience
4. **Projects**: Showcase of work with filtering capabilities
5. **Hobbies**: Personal interests and activities
6. **Contact**: Contact form and information

## Customization Guide

### 1. Personal Information

**Update the following in `index.html`:**

- Replace "Your Name" with your actual name (lines 16, 37, 51, 334)
- Update the hero subtitle and description (lines 38-39)
- Modify the about section content (lines 67-69)
- Update experience timeline with your work history (lines 95-145)
- Add your projects in the projects section (lines 170-220)
- Update hobbies to match your interests (lines 245-295)
- Replace contact information (lines 310-320)

### 2. Images

Add your images to the `assets/` folder:

- `profile-hero.jpg`: Your main profile photo (400x400px recommended)
- `profile-about.jpg`: Another photo for the about section
- `project1.jpg`, `project2.jpg`, `project3.jpg`: Project screenshots
- Use high-quality images for best results

### 3. Colors and Styling

**Main color variables in `style.css`:**

- Primary color: `#6366f1` (purple-blue)
- Accent color: `#fbbf24` (yellow)
- Background: `#f8fafc` (light gray)
- Text: `#333` (dark gray)

**To change colors:**
1. Find and replace the hex codes throughout `style.css`
2. Update gradient backgrounds in the hero section
3. Modify hover states and button colors

### 4. Content Customization

**Experience Section:**
```html
<div class="timeline-item">
    <div class="timeline-date">2023 - Present</div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p>Job description...</p>
        <div class="timeline-skills">
            <span>Skill 1</span>
            <span>Skill 2</span>
        </div>
    </div>
</div>
```

**Projects Section:**
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="assets/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-buttons">
                <a href="your-demo-link" class="btn-icon" title="Live Demo">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="your-github-link" class="btn-icon" title="Source Code">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
    </div>
</div>
```

### 5. Social Media Links

Update social media links in the hero section and footer:

```html
<div class="social-links">
    <a href="your-linkedin-url" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="your-github-url" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="your-twitter-url" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="your-instagram-url" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
</div>
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── profile-hero.jpg
│   ├── profile-about.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: For better compression and quality
3. **Lazy Loading**: Images load as needed
4. **Minify CSS/JS**: For production deployment

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed automatically
3. Get a custom domain if needed

### Vercel
1. Import your GitHub repository
2. Deploy with one click
3. Automatic deployments on code changes

## Customization Examples

### Adding a New Section

1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation menu
4. Add scroll animations in `script.js`

### Changing Animations

Modify animation properties in `style.css`:
```css
@keyframes yourAnimation {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Adding New Project Categories

1. Add new filter button in HTML
2. Update JavaScript filtering logic
3. Add corresponding data-category to project cards

## Support

If you need help customizing your portfolio:

1. Check the code comments for guidance
2. Refer to this README for common customizations
3. Test changes in a local environment first

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Happy coding! 🚀** 