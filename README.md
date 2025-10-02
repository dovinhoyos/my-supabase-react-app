# 🚀 Supabase React Authentication App

A modern, full-featured authentication system built with React and Supabase. This application demonstrates how to implement secure user authentication while maintaining a clean and intuitive user interface.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## ✨ Features

- 🔐 Secure authentication system
- 👤 User profile management
- 📝 Sign up and login functionality
- 🎨 Clean and modern UI
- ⚡ Powered by Vite for lightning-fast development
- 🔄 Real-time data synchronization with Supabase

## 🛠️ Technologies Used

- **Frontend:** React + Vite
- **Authentication & Backend:** Supabase
- **Styling:** CSS
- **Development:** ESLint for code quality

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/dovinhoyos/my-supabase-react-app.git
   cd my-supabase-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages/routes
├── supabase/      # Supabase client configuration
└── assets/        # Static assets
```

## 🔧 Configuration

The application uses Vite as the build tool and includes ESLint for code quality. You can modify the configuration in:
- `vite.config.js` for build settings
- `eslint.config.js` for linting rules

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
