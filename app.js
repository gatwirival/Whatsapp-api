//set it up in our app.js 
const express = require('express');
const fs = require('fs');
const createError = require('http-errors');
const morgan = require('morgan');
const { Client } = require('whatsapp-web.js');
require('dotenv').config();

const app = express();

const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({
  puppeteer: { headless: false }, // Make headless true or remove to run browser in background
  session: sessionCfg,
});

client.initialize();

client.on('qr', qr => {
  // NOTE: This event will not be fired if a session is specified.
  console.log('QR RECEIVED', qr);
  app.get('/getqr', (req, res, next) => {
    res.send({ qr });
  });
});

client.on('authenticated', session => {
  console.log('AUTHENTICATED', session);
  sessionCfg = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
    if (err) {
      console.error(err);
    }
  });
});

client.on('auth_failure', msg => {
  // Fired if session restore was unsuccessfull
  console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
  console.log('READY');
});
// Run `npm i qrcode-terminal` before this

const qrcode = require('qrcode-terminal')

client.on('qr', qr => {
  // NOTE: This event will not be fired if a session is specified.
  console.log('QR RECEIVED', qr);
  qrcode.generate(qr, { small: true }); 
  app.get('/getqr', (req, res, next) => {
    res.send({ qr });
  });
});

app.post('/sendmessage', async (req, res, next) => {
  try {
    // Magic happens here
  } catch (error) {
    next(error)
  }
})

app.post('/sendmessage', async (req, res, next) => {
  try {
    const { number, message } = req.body; // Get the body
    const msg = await client.sendMessage(`${number}@c.us`, message); // Send the message
    res.send({ msg }); // Send the response
  } catch (error) {
    next(error);
  }
});

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://fast.com');
  await init(browser, page, observer, options);
})().catch(observer.error.bind(observer));

const PORT = process.env.PORT || 3000

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});