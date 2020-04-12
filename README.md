# Next-Template

This is a template repository for new Next.js projects. It includes some opinionated defaults that I'm sick of recreating every time I start a new project:

- Styled-Components with a `theme.js` file that follows the [System UI Theme Specification](https://github.com/system-ui/theme-specification)
- A `<GlobalStyle />` component based heavily on Andy Bell's Modern CSS Reset and included on all pages via a custom `_app.js`
- EditorConfig set to 2 spaces
- ESLint with `eslint-config-airbnb`, `eslint-plugin-react`, and `eslint-plugin-prettier`
- A `.prettierrc` file with a few custom settings

Original Next.js README follows below...

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
