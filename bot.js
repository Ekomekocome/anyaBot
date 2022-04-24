
  
const Client = require('node-telegram-bot-api');
const token = '5209758911:AAExLziFJ_kaBiZ_b5E609skMXTh-SvjQ2g'
const botname = '@anya_bot'
const client = new Client(token, {polling: true});
const axios = require('axios')
const translate = require('@vitalets/google-translate-api')

client.on('message', async(msg) => {
try{  
const chatid = msg.chat.id;
var body = msg.text
const pushname = msg.from.username
const args = body.split(' ')
const command = body.includes('@anya_bot') ? body.split('@anya_bot')[0] || body.split(' ')[0] : body
if (body.startsWith('/')){
  console.log(`[ COMMAND ] FROM [ ${pushname} ] ARGS [ ${args.length} ] COMMAND [ ${command} ]`)
} else {
console.log(`[ MESSAGE ] FROM [ ${pushname} ]`)
}

switch(command){
  case '/help':
  case '/menu':
  client.sendMessage(chatid, `Halooo @${pushname}`);
  break
  case '/translate':
    translate(`${body.slice(10)}`,{from: 'auto', to: `${body.slice(4)}`}).then(res => {
        client.sendMessage(chatid, res.text)
        })
    break
  default: 
    client.sendMessage(chatid, `Maaf @${pushname} command ${command} tidack ditemukan :/`);
  break
}
} catch(er){
  console.log('[ ERROR ] '+ er)
} 
});
function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}