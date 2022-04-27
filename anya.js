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

          const quotedMessage = msg.reply_to_message || {}
          const isQuoted = msg.hasOwnProperty("reply_to_message")


switch(command){
    case '/help':
    case '/menu':
    case '/start':
        asw = `halo ${pushname}, menu anyaBot sebagai berikut
        /menu - menu
        /tr - tr (kode bahasa) (reply pesannya)
        `
        anya.sendMessage(chatId, asw)
        break
            case '/tr':
                if (!isQuoted) return anya.sendMessage(chatId, `silahkan reply command`)
                lalu = msg.reply_to_message.text
                yor = body.slice(4)
                translate(lalu, {from: 'auto', to: yor}).then(res => {
                    anya.sendMessage(chatId, res.text)
                    })
                break
    default:
        if (body.startsWith('/')){
        anya.sendMessage(chatId, "fitur itu tidak ada")
        }
}
} catch(e){
    console.log('[ ERROR ] '+ e)
  } 
})
