# Startup Next.js Template

A modern, feature-rich Next.js starter template designed for SaaS, service providers, and digital agencies. Built with the latest technologies and best practices.

## ✨ Features

- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🎨 Dark Mode Support** - Built-in theme switching with next-themes
- **📝 Blog System** - Complete blog with categories, tags, and related posts
- **🎯 Portfolio Showcase** - Display your projects and portfolio items
- **💼 Services & Features** - Highlight your offerings with detailed sections
- **📞 Contact Forms** - Integrated contact and quote request forms
- **🗣️ Testimonials** - Showcase client reviews and testimonials
- **💳 Pricing Plans** - Display pricing tiers with comparison
- **👥 User Authentication** - Sign in and sign up pages included
- **📧 Email Integration** - Email functionality with Nodemailer
- **⚡ Performance Optimized** - Fast page loads with Next.js optimization
- **✅ Type Safe** - Full TypeScript support with Zod validation
- **🔍 SEO Friendly** - Optimized for search engines

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) - React framework for production
- **Runtime:** [React 19](https://react.dev/) - UI library
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Theme Switching:** [next-themes](https://github.com/pacocoursey/next-themes) - Dark/Light mode
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Validation:** [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Email:** [Nodemailer](https://nodemailer.com/) - Email delivery
- **Linting:** [ESLint](https://eslint.org/) - Code quality

## 📋 Requirements

- Node.js >= 20
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd startup-nextjs-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   # Email configuration (if using contact forms)
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_email
   SMTP_PASS=your_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Create optimized production build
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router and pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog listing and details
│   ├── contact/           # Contact form page
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Services listing
│   ├── pricing/           # Pricing page
│   ├── signin/            # Sign in page
│   ├── signup/            # Sign up page
│   └── actions/           # Server actions for forms
│
├── components/            # Reusable React components
│   ├── Common/            # Shared components (Header, Footer, etc.)
│   ├── Hero/              # Hero section
│   ├── Features/          # Features section
│   ├── Services/          # Services section
│   ├── Blog/              # Blog components
│   ├── Portfolio/         # Portfolio components
│   ├── Testimonials/      # Testimonials section
│   ├── Pricing/           # Pricing section
│   ├── Contact/           # Contact form components
│   ├── Footer/            # Footer component
│   ├── Header/            # Navigation header
│   └── hooks/             # Custom React hooks
│
├── lib/                   # Utility functions and helpers
│   └── validations.ts     # Zod validation schemas
│
├── styles/                # Global styles
│   └── index.css          # CSS with Tailwind directives
│
├── types/                 # TypeScript type definitions
│   ├── blog.ts           # Blog types
│   ├── feature.ts        # Feature types
│   ├── service.ts        # Service types
│   ├── portfolio.ts      # Portfolio types
│   └── ...               # Other type definitions
│
└── public/                # Static assets
    └── images/           # Image files organized by section
```

## 🎨 Customization

### Theme Configuration

Dark mode is handled by `next-themes`. Customize theme settings in the `providers.tsx` file.

### Styling

Modify Tailwind configuration in `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Content Management

Update component data files like:
- `components/Blog/blogData.tsx` - Blog posts
- `components/Portfolio/portfolioData.tsx` - Portfolio items
- `components/Features/featuresData.tsx` - Features list
- `components/Services/servicesData.tsx` - Services list
- `components/Header/menuData.tsx` - Navigation menu

### Forms & Validation

- Quote forms are handled in `components/QuoteForm.tsx`
- Contact forms are in `components/Contact/ContactForm.tsx`
- Validation schemas are in `lib/validations.ts`

## 📧 Email Configuration

To enable email functionality for forms:

1. Set up your SMTP credentials in `.env.local`
2. The contact form action is in `src/app/actions/submitQuote.ts`
3. Configure Nodemailer settings with your email provider

## 🔐 Security

- All form submissions use server actions for secure processing
- Input validation with Zod schemas
- Environment variables for sensitive data
- TypeScript for type safety

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open a GitHub issue or contact the development team.

---

**Happy coding!** 🚀

Made with ❤️ using Next.js and Tailwind CSS
