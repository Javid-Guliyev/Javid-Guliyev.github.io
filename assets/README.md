# Assets Folder Structure

This folder contains all the static assets for the personal website.

## 📁 Folder Structure

```
assets/
├── images/
│   ├── me.jpeg              # Your profile image
│   └── blogs/               # Blog post images
│       ├── ai-banking.jpg   # Sample blog image
│       ├── aerial-cv.jpg    # Sample blog image
│       └── teaching-ai.jpg  # Sample blog image
├── data/
│   └── blogs.json           # Blog posts data
├── resume.pdf               # Your resume PDF for download
└── README.md                # This documentation file
```

## 🖼️ Images

### Profile Image
- **Location**: `assets/images/me.jpeg`
- **Usage**: Displayed in the hero section
- **Recommended size**: 300x300px or larger (square aspect ratio)
- **Format**: JPEG, PNG, or WebP

### Blog Images
- **Location**: `assets/images/blogs/`
- **Usage**: Featured images for blog posts
- **Recommended size**: 600x400px (3:2 aspect ratio)
- **Format**: JPEG, PNG, or WebP

## 📄 Resume

### Resume PDF
- **Location**: `assets/resume.pdf`
- **Usage**: Downloadable resume file linked from the hero section
- **Format**: PDF
- **Note**: Replace the placeholder file with your actual resume

## 📝 Blog Data

### blogs.json Structure
```json
{
    "blogs": [
        {
            "id": 1,
            "title": "Blog Post Title",
            "excerpt": "Short description of the blog post",
            "content": "Full blog post content...",
            "date": "2025-01-15",
            "readTime": "5 min read",
            "tags": ["Tag1", "Tag2", "Tag3"],
            "image": "assets/images/blogs/image.jpg",
            "featured": true
        }
    ]
}
```

### Field Descriptions
- **id**: Unique identifier for the blog post
- **title**: Blog post title
- **excerpt**: Short description shown on the blog cards
- **content**: Full blog post content (for future modal/page implementation)
- **date**: Publication date in YYYY-MM-DD format
- **readTime**: Estimated reading time
- **tags**: Array of tags for categorization
- **image**: Path to the blog post featured image
- **featured**: Boolean to mark as featured post

## 🔧 Usage

### Adding a New Blog Post
1. Add a new blog object to the `blogs` array in `blogs.json`
2. Add the featured image to `assets/images/blogs/`
3. The website will automatically load and display the new blog post

### Hiding the Blog Section
- If `blogs.json` is empty or doesn't exist, the blog section and navigation will be automatically hidden
- This allows you to easily enable/disable the blog functionality

### Image Optimization Tips
- Compress images for web to improve loading times
- Use appropriate formats (WebP for modern browsers, JPEG/PNG as fallback)
- Consider using responsive images for different screen sizes

## 📱 Responsive Considerations
- Blog cards automatically adjust to different screen sizes
- Images should be optimized for various device pixel densities
- Consider providing multiple image sizes for better performance 