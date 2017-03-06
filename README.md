# jekyll-react-webpack-demo

Based and inspired on [Using Webpack and React with Jekyll](https://medium.com/@allizadrozny/using-webpack-and-react-with-jekyll-cfe137f8a2cc#.8argb573b) by Ali Zadrozny.

Demo project contains boilerplate code/files for Jekyll + React + Webpack.

By the way, this repository aims at the same goal but target **specifically** to use [jekyll-assets](https://github.com/jekyll/jekyll-assets) version `0.2.1` as it didn't remove out ERB feature (newer versions cut this feature out), and improved with bunch of commands to help in development.

# Concept

Use Jekyll to generate static website. React to generate resulting bundle.js file which will be used in Jekyll project, which in turn built by Webpack.

# How to Development

We need to let both webpack and Jekyll watch the files and automatically build.

## Webpack Watch

Go to project's directory on terminal, then execute command depending on the following cases

1. `development build` - `npm run watch-webpack`
2. `production build` - `npm run watch-webpack-prod`

## Jekyll Watch/Serve

Go to project's directory on terminal in separate terminal session (still let previous one runs). Then execute,

`npm run dev`

Depend on whether you have run `watch-webpack` or `watch-webpack-prod`, jekyll will pack things up based on that whether it's development or production build.

This will serve your website on `http://localhost:4001` and whenever files are update, it will automatically build for you then you can refresh on browser to reflect changes.

# Commands

There are following commands that you can use

* `npm run watch-webpack` - start watching files for webpack for development build
* `npm run watch-webpack-prod` - start watching files for webpack for production build
* `npm run dev` - start serving built website on `http://localhost:4001` and watch files at the same time
* `npm run build` - build website (included with option `--future` of jekyll) at `output` directory.

# License

This project is under MIT license.
See [LICENSE](https://github.com/haxpor/jekyll-react-webpack-demo/blob/master/LICENSE).