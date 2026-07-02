const fs = require('fs');
const PNG = require('pngjs').PNG;
const jsQR = require('jsqr');

const buffer = fs.readFileSync('paypal_pure.png');
const png = PNG.sync.read(buffer);
const code = jsQR(png.data, png.width, png.height);
if (code) {
  console.log("FOUND URL: " + code.data);
} else {
  console.log("NOT FOUND");
}
