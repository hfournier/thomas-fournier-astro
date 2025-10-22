# Thomas Fournier - Actor Portfolio

A modern, responsive portfolio website built with Astro showcasing Thomas Fournier's work as an actor, singer, director and storyteller.

## 🚀 Features

- Responsive image gallery with modal dialogs
- YouTube video integration
- Smooth scrolling and animations
- Custom font loading (Montserrat and Josefin Sans)
- Optimized image loading with blur-up technique
- SEO and social media meta tags
- Contact information and résumé download

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Netlify](https://netlify.com) - Hosting and deployment
- [astro-icon](https://github.com/natemoo-re/astro-icon) - Icon integration
- [@astro-community/astro-embed-youtube](https://github.com/astro-community/astro-embed-youtube) - YouTube embeds

## 📁 Project Structure

```text
/
├── public/
│   ├── fonts/             # Web fonts
│   └── favicon.svg
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # Astro components
│   ├── content/         # Gallery content schema
│   ├── layouts/         # Base layout
│   ├── pages/           # Routes
│   └── styles/          # Global styles and fonts
└── package.json
```

## 🔧 Development

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:4321` |
| `pnpm build`   | Build production site to `./dist/`          |
| `pnpm preview` | Preview production build locally            |

## 📝 License

MIT © [HenriFournier.dev](https://henrifournier.dev)
