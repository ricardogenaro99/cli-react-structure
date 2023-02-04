# REACT STRUCTURE

Create an application based on create-react-app with the option to choose between JS or TS, and thus be able to provide a basic folder and file structure to speed up the development of your project

## Install

```npm
npm install cli-react-structure -g
```

## Quick Overview

```sh
react-structure
# Project name: my-app
# React template: react
cd my-app
npm start
```

## Structure

```txt
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── app
    │   ├── components
    │   │   └── index.js
    │   ├── contexts
    │   │   └── index.js
    │   ├── hooks
    │   │   └── index.js
    │   ├── layouts
    │   │   └── index.js
    │   ├── pages
    │   │   └── index.js
    │   ├── routes
    │   │   ├── guards
    │   │   │   └── index.js
    │   │   └── index.js
    │   ├── utils
    │   │   └── index.js
    │   └── services
    │       └── index.js
    ├── assets
    │   └── index.js
    ├── environments
    │   └── index.js
    ├── .env
    ├── .env.development.local
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```
