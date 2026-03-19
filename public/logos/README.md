# Logos Directory

Upload your project logos in this directory! NextJS will automatically serve files placed here.

### How to add a new project:

1. Copy and paste your project logo image into this directory (e.g., `my-new-project.png` or `my-new-project.svg`). Make sure it looks good against bold backgrounds!
2. Open `src/data/projects.ts` in your code editor.
3. Add a new `{ ... }` block to the bottom of the `heroProjects` list. Example:
```ts
{ 
    id: "new-startup", 
    name: "New Startup", 
    logoUrl: "/logos/my-new-project.png", // Must match your uploaded filename
    theme: cardThemes.indigo, // Choose your favorite highly vibrant theme!
},
```
4. Save the file! A new colored card will automatically appear in your Hero carousel.
