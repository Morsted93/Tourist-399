import { Telegraf, Markup } from 'telegraf'

const token = '7776084796:AAHcJUp3xBV6y4J5bjNGjvvjC6dh4TTnl9w'
const webAppUrl = 'https://tourist39-f551d.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  )
})

bot.launch()
