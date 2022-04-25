const Client = require('node-telegram-bot-api')
const token = '5209758911:AAExLziFJ_kaBiZ_b5E609skMXTh-SvjQ2g'
const anya = new Client(token, {polling: true});
const axios = require('axios')
const translate = require('@vitalets/google-translate-api')

anya.on('message', async(msg) => {
    try{  
        const chatId = msg.chat.id
        const pushname = msg.from.username
        const body = msg.text
        const args = body.split(" ")
        const command = body.includes(' ') ? body.split(" ")[0] || body.split(" ")[0] : body
        if (body.startsWith('/')){
            console.log(`[ COMMAND ] FROM [ ${pushname} ] COMMAND [ ${command} ]`)
          } else {
          console.log(`[ MESSAGE ] FROM [ ${pushname} ]`)
          }




switch(command){
    case '/help':
    case '/menu':
    case '/start':
        asw = `halo ${pushname}
        /menu - menu
        /trid - translate jepang ke indo
        /trjp - transalate indo ke jepang
        `
        anya.sendMessage(chatId, asw)
        break
        case '/trid':
            texttr = body.slice(5)
            translate(texttr, {from: 'ja', to: 'id'}).then(res => {
                anya.sendMessage(chatId, res.text)
                })
            break
        case '/trjp':
            yor = body.slice(5)
            translate(yor, {from: 'id', to: 'ja'}).then(res => {
                anya.sendMessage(chatId, res.text)
                })
            break
    default:
        anya.sendMessage(chatId, "fitur itu tidak ada")

}
} catch(er){
    console.log('[ ERROR ] '+ er)
  } 
})
