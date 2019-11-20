const qrcode = require('qrcode');
const config = require('../src/config');

const token = config.application.token || config.application.name;
const action = 'detected';
(config.bingo.slot.variations || []).map(async (v) => {
    const encoded = JSON.stringify({token, action, payload: {value: v.value}});
    const fpath = `./qrcodes/${v.value}.png`;
    await qrcode.toFile(fpath, encoded);
    console.log(`File ${fpath} generated`)
});

