# React Starter

A simple React+Vite starter template with a pre-built header, footer, and landing page to help you quickly spin up new projects.

## Features

- 🏗 **Pre-built Layout**: Includes a header, footer, and a basic landing page.
- 🎨 **Styled Components**: Basic styling applied with CSS (can be easily customized).
- ⚡ **Fast Setup**: Fork the repo, install dependencies, and start coding!

## Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top right of this repo to create your own copy under your GitHub account.

### 2. Clone Your Fork

```sh
git clone https://github.com/elliot-jimeno/react-starter.git my-new-project
cd my-new-project
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Start the Development Server

```sh
npm run dev
```

The app will be available at `http://localhost:5173/`.

## Customization

### Changing the Project Name

Make sure to update the project name in `/index.html`:

```html
<title>My New Project</title>
```

### Updating Styles

Modify `src/App.css` and `src/index.css` to fit your needs.

### Replacing Content

- **Header/Footer**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`.
- **Landing Page**: Modify `src/pages/Landing.tsx`.

## Deployment

To build the project for production, run:

```sh
npm run build
```

This will create an optimized `dist/` folder that you can deploy to services like Vercel, Netlify, or GitHub Pages.

---

Happy coding! 🚀
