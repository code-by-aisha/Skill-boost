# Skill Boost 🚀

A modern, responsive web application built with **Next.js** and **React** to help users discover, learn, and master new skills through structured courses and interactive content.

## Features ✨

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI Components** - Built with Radix UI for accessible, customizable components
- **Interactive Navigation** - Smooth navigation with theme switching capabilities
- **Course Catalog** - Browse and explore various skill courses
- **About & Contact Pages** - Learn more about the platform and get in touch
- **Testimonials** - Real feedback from users with interactive carousel
- **Skill Categories** - Organized skill progression pathways
- **Loading States** - Smooth loading animations for better UX

## Tech Stack 🛠️

- **Frontend Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React](https://react.dev/)
- **Component Library**: [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **TypeScript**: For type-safe development

## Project Structure 📁

```
skill-boost/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page with loading state
│   └── skills/            # Skills showcase page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── navigation.tsx     # Navigation component
│   └── theme-provider.tsx # Theme context provider
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── package.json           # Project dependencies
```

## Getting Started 🎯

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/skill-boost.git
cd skill-boost
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## Available Scripts 📝

- `pnpm dev` - Start the development server
- `pnpm build` - Build the project for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Key Components 🧩

### UI Components
- Buttons, Cards, Input fields
- Accordions, Alerts, Badges
- Modals, Dropdowns, Tooltips
- Tabs, Navigation menus
- Form components with validation
- Tables, Pagination
- Progress indicators

### Custom Hooks
- `use-mobile` - Detect mobile viewport
- `use-toast` - Toast notifications system

### Pages
- **Home** - Landing page with featured skills and testimonials
- **About** - Information about Skill Boost
- **Contact** - Contact form for inquiries
- **Courses** - Catalog of available courses
- **Skills** - Showcase of skill categories

## Styling & Theming 🎨

The project uses Tailwind CSS for styling with:
- Dark/Light mode support via theme provider
- Responsive design utilities
- Custom color schemes
- Smooth animations and transitions

## Responsive Breakpoints 📱

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations ⚡

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind
- Component-level code splitting
- Intersection Observer for animations

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development Guidelines 📋

- Use TypeScript for type safety
- Follow ESLint rules
- Create reusable components
- Keep components modular and focused
- Write meaningful commit messages
- Test components in different screen sizes

## Future Enhancements 🔮

- [ ] User authentication and profiles
- [ ] Progress tracking and achievements
- [ ] Video course content integration
- [ ] Quizzes and assessments
- [ ] Certificate generation
- [ ] Community forum
- [ ] Advanced search and filters
- [ ] Subscription/Premium features

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support & Feedback 💬

- 📧 Email: support@skillboost.com
- 🐛 Report bugs via GitHub Issues
- 💡 Suggest features via GitHub Discussions
- 📱 Connect on social media

## Acknowledgments 🙏

- Built with [Next.js](https://nextjs.org/)
- Components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by the Skill Boost Team**

Last Updated: December 2025
