const { Client } = require('whatsapp-web.js');
const { prefix } = require('./lib/setting.js');
const { menu, allcmd } = require('./lib/base.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs')

const tesse = new Client();

tesse.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small : true});
});

tesse.on('ready', () => {
    console.log('Client is ready!');
});


tesse.on('message', async msg => {
    console.log('MESSAGE RECIEVED', msg);
    if (msg.body == `${prefix}ping`) {
        msg.reply('pong');
    } else if (msg.body == `${prefix}menu`) {
        msg.reply(menu);
    } else if (msg.body == `${prefix}allcmd`) {
        msg.reply(allcmd);
    } else if (msg.body == `${prefix}allcmd`) {
        msg.reply("hallo")
    };
});

tesse.initialize();