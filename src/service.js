const nodeHtmlToImage = require('node-html-to-image')
const ejs = require('ejs');
const path = require('path')


exports.returnButtonsMenu = function (messageData, defaultVariables) {
    return async function (ctx) {

        await ctx.replyWithPhoto(
            { source: "./photo.jpg" }
        );

        ctx.reply(messageData[defaultVariables.til].returnButtonsMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '1', callback_data: 'btn-1' },
                    { text: '2', callback_data: 'btn-2' },
                    { text: '3', callback_data: 'btn-3' },
                    { text: '4', callback_data: 'btn-4' },
                    { text: '5', callback_data: 'btn-5' }
                    ],
                    [{ text: '6', callback_data: 'btn-6' },
                    { text: '7', callback_data: 'btn-7' },
                    { text: '8', callback_data: 'btn-8' },
                    { text: '9', callback_data: 'btn-9' },
                    { text: '10', callback_data: 'btn-10' }
                    ],
                    [{ text: 'Colors 🎨', callback_data: 'colors' }],

                ],
            },
        });
    }

}

exports.ejsRenderFile = async function (data) {
    const { colors, ...otherData } = data;

    const images = await Promise.all(colors.map(async color => {
        const imageName = `certificate_${Date.now().toString().slice(-4)}${Math.random(10)}`;
        const html = await ejs.renderFile(path.join(__dirname, './example.ejs'), { ...otherData, color }, { async: true });
        console.log(html);
        const image = await nodeHtmlToImage({
            output: `./src/photo/${imageName}.png`,
            html
        });

        console.log(imageName);
        return { image, imageName };
    }));

    return images;
}

exports.messagePart = function (messageData, defaultVariables) {
    return function (ctx) {
        ctx.reply(messageData[defaultVariables.til].textMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Back', callback_data: 'next' },
                    { text: 'Delete', callback_data: 'delete' }]
                ],
            },

        });
    }

}

exports.afterDeleteBtn = function (messageData, defaultVariables) {
    return async function (ctx) {
        await ctx.reply(messageData[defaultVariables.til].successDelete);

        await ctx.reply(messageData[defaultVariables.til].nextOrStopMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Next', callback_data: 'next' }, { text: 'Stop', callback_data: 'stop' }]
                ],
            },

        });
    }
}

exports.languageBtn = function (messageData, defaultVariables) {
    return function (ctx) {
        ctx.reply(messageData[defaultVariables.til].startLanguage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Uzbek', callback_data: 'uz' }],
                    [{ text: 'Russian', callback_data: 'ru' }],
                    [{ text: 'English', callback_data: 'en' }],
                ],
            },

        });
    }
}

exports.colorBtnMenu = function (messageData, defaultVariables) {
    return async function (ctx) {
        await ctx.reply(messageData[defaultVariables.til].successDelete);

        await ctx.reply(messageData[defaultVariables.til].nextOrStopMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔵 Aqua', callback_data: 'aqua' },
                    { text: '🟢 Green', callback_data: 'green' },
                    { text: '🟡 Orange', callback_data: 'orange' },
                    { text: '🔴 Red', callback_data: 'red' }
                    ], [
                        { text: "🛑 ", callback_data: 'stop' },
                        { text: 'Multiple Color 🎨', callback_data: 'multiple' },
                        { text: " ⏭", callback_data: 'next' }

                    ]
                ],
            },

        });
    }
}

