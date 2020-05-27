const { Telegraf } = require('telegraf')
const bot = new Telegraf('1153485957:AAEtF7b3hH0Yi4_lQsiykjJaxEObLIUKbMA')

bot.start((ctx) => {
    ctx.reply('hola maricón');
})

bot.help((ctx) => {
    ctx.reply('que ayuda quieres maricón?');
})



bot.command(['sensei','Sensei','SENSEI'], (ctx)  =>  {
    ctx.reply('Ohhhh  el sensei esta aquí?');
})


bot.hears('hola', (ctx) => ctx.reply('Hola guapo...'))
bot.hears('peluca', (ctx) => ctx.reply('Los pros pelucas son lo máximo'))




bot.on('sticker', (ctx) => ctx.reply('espero que cuando le hagan un sticker con tu verga no llores'))
bot.on('voice', (ctx) => ctx.reply('que mierda estas enviando?'))





bot.hears(['sensei','Sensei','Gonzalo','@GonzaloAndresTrader','gonzalo'], (ctx) => {
    // resend existing file by file_id
    ctx.replyWithPhoto('https://i.ibb.co/4WsjH9y/sticker.png')
    ctx.reply('Ahi tienes cagón 👍')
    ctx.reply('Migueliado...')

    ;})


    bot.hears(['Migueliado','Migueliada','migueliado','migueliada'], (ctx) => {
        // resend existing file by file_id
        ctx.replyWithPhoto('https://i.ibb.co/gzszHFR/Shared-Screenshot.jpg')
        ctx.reply('Ahi tienes maricon 👍')
        ctx.reply('Migueliado por weon!')
        ctx.replyWithSticker('123123jkbhj6b')
    
        ;})









    bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))



bot.launch() 