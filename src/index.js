const { Telegraf } = require('telegraf')
const config = require('./shared/config');
let { messageData, defaultVariables, variables } = require('./db')
const {
  returnButtonsMenu,
  ejsRenderFile,
  messagePart,
  afterDeleteBtn,
  languageBtn,
  colorBtnMenu } = require('./service')

const bot = new Telegraf(config.bot.token)



bot.start(async (ctx) => {
  ctx.reply(messageData[`${defaultVariables.til}`].startMessage(ctx.chat.first_name))
  languageBtn(messageData, defaultVariables)(ctx)

});

bot.action('uz', async (ctx) => {
  defaultVariables['til'] = 'uz'
  await returnButtonsMenu(messageData, defaultVariables)(ctx)

});

bot.action('ru', async (ctx) => {
  defaultVariables['til'] = 'ru'
  await returnButtonsMenu(messageData, defaultVariables)(ctx)

});

bot.action('en', async (ctx) => {
  defaultVariables['til'] = 'en'
  await returnButtonsMenu(messageData, defaultVariables)(ctx)

});

bot.action('btn-1', (ctx) => {
  defaultVariables['type'] = 'sertificat_name'
  messagePart(messageData, defaultVariables)(ctx)

});

bot.action('btn-2', (ctx) => {
  defaultVariables['type'] = 'appreciation'
  messagePart(messageData, defaultVariables)(ctx)

});

bot.action('btn-3', (ctx) => {
  defaultVariables['type'] = 'presetented_to'
  messagePart(messageData, defaultVariables)(ctx)

});

bot.action('btn-4', (ctx) => {
  defaultVariables['type'] = 'name'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('btn-5', (ctx) => {
  defaultVariables['type'] = 'text'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('btn-6', (ctx) => {
  defaultVariables['type'] = 'director'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('btn-7', (ctx) => {
  defaultVariables['type'] = 'director_name'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('btn-8', (ctx) => {
  defaultVariables['type'] = 'degree'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('btn-9', (ctx) => {
  defaultVariables['type'] = 'assistant'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('btn-10', (ctx) => {
  defaultVariables['type'] = 'assistant_name'
  messagePart(messageData, defaultVariables)(ctx)
});

bot.action('colors', (ctx) => {
  defaultVariables['type'] = 'colors'
  colorBtnMenu(messageData, defaultVariables)(ctx)
});

bot.action(['aqua', 'green', 'red', 'orange'], (ctx) => {
  const color = ctx.callbackQuery.data;
  if (defaultVariables.multipleColors) {
    if (!variables.colors.includes(color)) {
      variables.colors.push(color);
    }

    ctx.reply('Success')
  } else {
    variables.colors = [color];
    afterDeleteBtn(messageData, defaultVariables)(ctx);
  }
});

bot.action('delete', (ctx) => {
  variables[defaultVariables.type] = ''
  afterDeleteBtn(messageData, defaultVariables)(ctx)
});

bot.on('message', async (ctx) => {
  variables[defaultVariables.type] = ctx.message.text;
  await afterDeleteBtn(messageData, defaultVariables)(ctx)
})

bot.action('next', async (ctx) => {

  await returnButtonsMenu(messageData, defaultVariables)(ctx)
});

bot.action('stop', async (ctx) => {
  defaultVariables = require('./db').defaultVariables
  variables = require('./db').variables

  const images = await ejsRenderFile(variables)

  console.log('The image was created successfully!')
  ctx.reply(messageData[defaultVariables.til].lastMessage);

  images.forEach(async image => {
    await ctx.replyWithPhoto(
      { source: `./src/photo/${image.imageName}.png` }
    );
  });

});

bot.action('multiple', async (ctx) => {
  defaultVariables.multipleColors = true
  ctx.reply(messageData[defaultVariables.til].nextOrStopMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: '🔵 Aqua', callback_data: 'aqua' },
        { text: '🟢 Green', callback_data: 'green' },
        { text: '🟡 Orange', callback_data: 'orange' },
        { text: '🔴 Red', callback_data: 'red' }
        ], [
          { text: "🛑 ", callback_data: 'stop' },
          { text: " ⏭", callback_data: 'next' }

        ]
      ],
    },

  });

});

bot.launch();

console.log('Bot ishlayapti');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


