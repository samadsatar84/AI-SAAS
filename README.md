# AI SaaS Dashboard

A premium, production-ready AI SaaS dashboard website built with React, Vite, Tailwind CSS, and modern animations.

## 🚀 Features

- **Landing Page** - Hero section, features showcase, stats, testimonials, pricing, and FAQ
- **Authentication** - Login, Register, and Forgot Password pages with social auth buttons
- **Dashboard** - Analytics overview with charts and metrics using Recharts
- **AI Tools** - Interactive AI tool cards for content generation, image creation, code generation, and more
- **Billing & Subscription** - Subscription management, payment methods, and billing history
- **Settings** - Profile, security, notification, and appearance settings with theme toggle
- **Admin Panel** - User management, system activity logs, and revenue analytics
- **Dark/Light Theme** - Full theme support with persistent storage
- **Responsive Design** - Mobile-first approach with full responsive layout
- **Modern UI** - Glassmorphism cards, gradient buttons, smooth animations with Framer Motion
- **Smooth Animations** - Page transitions, hover effects, and interactive elements

## 📁 Project Structure

```
src/
├── assets/                 # Images and static files
├── components/
│   ├── common/            # Reusable components (Button, Card, Modal, etc.)
│   ├── landing/           # Landing page components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   ├── ai-tools/          # AI tools components
│   ├── billing/           # Billing components
│   ├── settings/          # Settings components
│   └── admin/             # Admin panel components
├── context/               # React Context (Theme, Auth)
├── hooks/                 # Custom hooks
├── layouts/               # Layout components
├── pages/                 # Page components
├── services/              # API services
├── utils/                 # Helper functions and data
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🛠 Tech Stack

- **React.js** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Recharts** - Chart library
- **React Router DOM** - Routing
- **Context API** - State management

## 📦 Installation

1. **Navigate to project directory:**
```bash
cd "AI Saas"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

## 🔐 Authentication

The app includes mock authentication. You can login with any credentials:
- Email: `admin@aisaas.com`
- Password: Any password

User session is stored in localStorage.

## 📱 Available Routes

- `/` - Landing page
- `/login` - Login page
- `/register` - Register page
- `/forgot-password` - Forgot password page
- `/dashboard` - Main dashboard (protected)
- `/ai-tools` - AI tools page (protected)
- `/billing` - Billing & subscription (protected)
- `/settings` - Settings page (protected)
- `/admin` - Admin panel (protected)

## 🎨 Design Features

- **Dark Modern Theme** - Premium dark interface with cyan/blue accents
- **Light Theme** - Full light mode support with theme toggle
- **Glassmorphism** - Frosted glass effect cards
- **Gradient Buttons** - Modern gradient button styles
- **Smooth Animations** - Framer Motion animations for transitions
- **Custom Scrollbar** - Styled scrollbars matching the theme
- **Responsive Layout** - Mobile, tablet, and desktop support
- **Sidebar Navigation** - Collapsible sidebar for mobile
- **Top Navbar** - Search, notifications, and profile menu

## 🚀 Deployment

The project is ready for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## 📝 Key Components

### Common Components
- `Button` - Customizable button with variants
- `Card` - Reusable card with glass effect
- `Modal` - Animated modal dialog
- `Input` - Styled input field
- `Table` - Data table with custom rendering
- `StatCard` - Metric display card
- `Badge` - Status badge
- `Sidebar` - Navigation sidebar
- `Navbar` - Top navigation bar
- `ThemeToggle` - Dark/light mode toggle
- `FAQAccordion` - Accordion component

### Pages
- Landing Page with hero, features, stats, testimonials, pricing, FAQ, and footer
- Login/Register/Forgot Password pages
- Dashboard with charts and metrics
- AI Tools with interactive tool cards
- Billing with subscription management
- Settings with various preferences
- Admin Panel with user management and analytics

## 💡 Customization

### Change Primary Color
Edit `tailwind.config.js` and modify the color values in the `extend` section.

### Update Branding
- Replace "AI SaaS" text with your app name
- Update company logos in `utils/data.js`
- Modify footer content

### Add New Pages
1. Create page component in `pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Sidebar.jsx`

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please refer to the inline code comments and documentation.

---

**Built with ❤️ for modern SaaS applications**
