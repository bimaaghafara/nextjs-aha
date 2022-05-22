# Nextjs Aha
An app that you can search user from home page, and show them in search page. This app also can show you tags list data in tags page and followers / following list in some page (when screen >= 1440px).
* Auto caching requests (using react-query)
* Skeletons loader when waiting for api response.
* Infinite load some list data (using react query)

## Installing
```
npm install / yarn install
```

## How to run
```
npm run dev / yarn dev
```

## Built With
User Interface
* [React @18.1.0](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [Nextjs @12.1.6](https://github.com/vercel/next.js) - The React Framework that gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
* [TypeScript @4.6.4](https://github.com/microsoft/TypeScript) - A language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
* [MUI / Material - UI @5.7.0](https://github.com/mui/material-ui) - A comprehensive library of React components that features implementation of Google's Material Design system.

REST API
* [Axios @0.27.2](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [React-query @3.39.0](https://github.com/tannerlinsley/react-query) - Hooks for fetching, caching, deduping multiple requests, performance optimizations, infinite query, ... and updating asynchronous data in React app, all without touching any "global state".
