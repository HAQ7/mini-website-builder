# Mini Website Builder

A modern, intuitive drag-and-drop website builder built with Next.js 15, React 19, and TypeScript. Create beautiful static websites with ease using pre-built components and a live preview interface.

## 🚀 Features

- **Drag & Drop Interface**: Intuitive section-based website building with Swapy library
- **Live Preview**: Real-time preview of your website as you build
- **Component Library**: Pre-built sections including headers, text blocks, images, and footers
- **Customizable Styling**: Color pickers and form controls for customizing each section
- **Export/Import**: Save and load your website configurations
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Beautiful Animations**: Smooth transitions powered by Motion (Framer Motion)
- **Modern UI**: Clean interface built with Radix UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, Lucide React icons
- **Animations**: Motion (Framer Motion)
- **Drag & Drop**: Swapy
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mini-website-builder.git
   cd mini-website-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Getting Started

1. **Home Page**: Visit the landing page to learn about the website builder
2. **Builder Interface**: Click "Get Started" to access the drag-and-drop builder
3. **Add Sections**: Use the sidebar to add different types of sections:
   - **Header**: Navigation with logo and links
   - **Text**: Title and content blocks
   - **Image**: Image sections with captions
   - **Footer**: Site footer with logo and text

### Building Your Website

1. **Add Sections**: Drag sections from the library sidebar to your preview area
2. **Customize Content**: Click on any section to edit its content, colors, and styling
3. **Rearrange**: Drag sections to reorder them
4. **Preview**: See your changes in real-time in the live preview
5. **Export**: Save your website configuration for later use

### Available Section Types

- **Header Section**: Logo, navigation links, customizable colors
- **Text Section**: Title and paragraph content with color customization
- **Image Section**: Image display with title and description
- **Footer Section**: Three-column footer with logo and text content

## 📁 Project Structure

```
mini-website-builder/
├── src/
│   ├── app/
│   │   ├── builder/           # Website builder interface
│   │   │   ├── components/    # Builder-specific components
│   │   │   │   ├── forms/     # Section editing forms
│   │   │   │   └── sections/  # Section components
│   │   │   ├── store/         # Context state management
│   │   │   ├── types/         # TypeScript interfaces
│   │   │   └── util/          # Helper utilities
│   │   ├── components/        # Shared components
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── backgrounds/       # Background components
│   │   └── ui/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── public/                    # Static assets
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Section Types

1. Create a new section component in `src/app/builder/components/sections/`
2. Add the corresponding form in `src/app/builder/components/forms/`
3. Update the TypeScript interfaces in `src/app/builder/types/sections.ts`
4. Register the new section in the library sidebar

### Styling

The project uses Tailwind CSS for styling. Customize the design by:
- Modifying the Tailwind configuration
- Updating component styles
- Adding new color schemes in the color picker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Swapy](https://swapy.tahazsh.com/) - Drag and drop library
- [Motion](https://motion.dev/) - Animation library for React

## 🐛 Issues & Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/mini-website-builder/issues) on GitHub.

---

**Built with ❤️ using Next.js and React**