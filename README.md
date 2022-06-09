# Whatsapp-api

### Express server setup 
```bash
npm i -g express-draft
exp .
```
### Install Whatsapp Web library
`npm i whatsapp-web.js`

#### qrcode-terminal to show the QR Code in the terminal.
`npm i qrcode-terminal` 

### Run locally
 - clone the repo 
 - add .env file to add your api keys from rapid
 
 ### `npm install`
 
 - Install the dependencies in the local node_modules folder.

- In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

### `npm run dev`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## NB

> Installing `whatsapp-web.js` package will also download Chromium because of Puppeteer.Our code does not contain chromium due to its large size so to run it locally rerun the command above