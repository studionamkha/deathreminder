# deathreminder

A life expectancy quiz that culminates in a countdown timer with number of months, days, hours, minutes expected to live with a camera

first change - from agamurian balalals
second change - katya was here

---

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

---

## Deployment

on every push on main, github actions will run

```bash
npm run build
```

and put result into gh-pages branch, which is server at [`studionamkha.github.io/deathreminder`](https://studionamkha.github.io/deathreminder)

## this is github actions setup, file is avalible at .github/workflows
