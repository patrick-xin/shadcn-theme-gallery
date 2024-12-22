# Shadcn Theme Gallery - User Guide

Welcome to the Shadcn Theme Gallery! This website helps you find and use beautiful color themes for your shadcn/ui projects.

## Getting Started

This gallery provides ready-to-use color schemes that work with shadcn/ui components. Each theme includes both light and dark mode variants.

## How to Use a Theme

1. **Browse Themes**
   - Look through the available themes in the gallery
   - Each theme shows color previews for both light and dark modes
   - Click different themes to see how they look in the preview section

2. **Test Dark/Light Mode**
   - Use the mode toggle (sun/moon icon) to preview themes in:
     - Light mode
     - Dark mode
     - System mode (matches your system preferences)

3. **Apply a Theme to Your Project**
   - Find a theme you like
   - Click the "Copy code" button
   - A dialog will show the theme's CSS code
   - Click the copy button in the dialog
   - Paste the code into your project's `globals.css` file
   - That's it! The theme will apply to your shadcn/ui components

## For Projects Using shadcn/ui CLI

If you installed shadcn/ui using the CLI, you already have a `globals.css` file. Simply:

1. Open your `app/globals.css` or similar CSS file
2. Find the existing shadcn theme variables (starting with `@layer base`)
3. Replace them with the new theme code you copied

## For New Projects

1. Install shadcn/ui following their documentation
2. Copy the theme code from this gallery
3. Paste it into your global CSS file
4. The theme will automatically apply to all shadcn components

## Need Help?

- Make sure you've installed shadcn/ui properly
- The theme code should be placed in your global CSS file
- The CSS variables must be at the `:root` level
- Dark mode requires the `dark` class to be present on your `html` tag

That's all you need to know! Just browse, copy, and paste to give your shadcn/ui project a fresh new look.
