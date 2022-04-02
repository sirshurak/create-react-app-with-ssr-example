<h1 align="center">Welcome to create-react-app-with-ssr-example 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Create React App with SSR example

This project show how to implement SSR with a simple React App project.

## Do yourself

If you already have a project, I can help you. Just follow the above steps.

### Separate React backend from frontend

Create a file `index.ssr.jsx` on `src` folder.
This file will contain your [StaticRouter](https://reactrouter.com/docs/en/v6/guides/ssr).

### Create your ambient for serve React

You can create a `express` server and then import your `React` string rendered by `react-dom/server`.

## Building

### Eject react-scripts

You will need to eject react-scripts because we will use webpack to generate server rendering build and it's easiest to create jest tests.

```sh
yarn eject
```

### Create webpack for each ambient

First, create a webpack to deal with `index.ssr.jsx` as an entry, because you will need basically everything `react-scripts` does to render a React App.
You can just copy the ejected `config/webpack.config.js` or import into your new webpack file.
Then, change the entry of the webpack to `index.ssr.jsx`.

# Commands

## Install

```sh
yarn install
```

## Usage

```sh
yarn start
```

### SSR

```sh
yarn server
```

## Run tests

```sh
yarn test
```

## Author

👤 **Vinicius Tonelli**

* Github: [@sirshurak](https://github.com/sirshurak)
* LinkedIn: [@vinicius-tonelli-de-oliveira-845a7a180](https://linkedin.com/in/vinicius-tonelli-de-oliveira-845a7a180)

## Show your support

Give a ⭐️ if this project helped you!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_