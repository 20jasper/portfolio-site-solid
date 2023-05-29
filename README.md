# portfolio site solid
Jacob Asper's web development portfolio—now in solid!

## motivations
[My original portfolio](https://github.com/20jasper/portfolio-site) built in pure HTML, CSS, and JavaScript became a bit cumbersome to work with once there were enough projects to warrant pagination. Not only did I need to move all the projects back after I finished a new one, I needed to create a new form in Netlify for each page. 

Migrating to [Solid](https://www.solidjs.com/) will solve these problems with little overhead, and I'm interested in trying out another JavaScript framework anyways!

## scripts

- `build` build for production
- `start` start dev server
- `start:prod` build and start prod server
- `lint` check for eslint or astro errors/warnings
- `lint:fix` fix any autofixable eslint warnings
- `lint:ci` like `lint`, but errors on any eslint warnings
- `verify-types` check for typescript errors
- `test` run tests

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.