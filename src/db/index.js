const path = require('path')

exports.messageData = {
  en: {
    startMessage: (name) => {
      return `Hello, welcome to ${name}! 👋🎉`;
    },
    selectionMessage: "Which of the following would you like the certificate to look like? 📜🎨",
    editMessage: ` You can prepare a certificate for yourself through this bot.
    Please customize the following certificate: 🖊️📄`,
    language: 'en',
    returnButtonsMessage: "Select the desired part ✅",
    textMessage: "Enter a new value ✏️",
    startLanguage: "Select the desired language 🌐",
    lastMessage: "Thank you for using our service! 😊",
    successDelete: "The process was successful. 🤩🤩",
    nextOrStopMessage: "You can continue changing the texts or end the process ⏭️🛑"
  },
  uz: {
    startMessage: (name) => {
      return `Assalomu Aleykum, ${name} xush kelibsiz! 👋🎉`;
    },
    selectionMessage: "Quyidagilardan qaysi sertificat ko'rishida bo'lishini xohlaysiz? 📜🎨",
    editMessage: `Bu bot orqali o’zingizga sertifikat tayyorlab olishingiz mumkin.
    Marhamat quyidagi sertifikatni o’zingizga moslab o’zgartiring: 🖊️📄`,
    language: 'uz',
    returnButtonsMessage: "Kerakli qismni tanlang ✅",
    textMessage: "Yangi qiymatni kiriting ✏️",
    startLanguage: "Kerakli tilni tanlang 🌐",
    lastMessage: "Xizmatimizdan foydalanilganiz uchun tashakkur! 😊🙏",
    successDelete: "Jarayon muvaffaqiyatli amalga oshirildi. 🤩🤩",
    nextOrStopMessage: "Matnlarni o'zgartirishni davom etishingiz yoki jarayonni tugatishingiz mumkin ⏭️🛑"
  },
  ru: {
    startMessage: (name) => {
      return `Здравствуйте, добро пожаловать в ${name}! 👋🎉`;
    },
    selectionMessage: "Каким из следующего вы бы хотели, чтобы сертификат выглядел? 📜🎨",
    editMessage: `Вы можете подготовить себе сертификат через этого бота.
    Пожалуйста, настройте следующий сертификат: 🖊️📄`,
    language: 'ru',
    returnButtonsMessage: "Выберите нужную часть ✅",
    textMessage: "Введите новое значение ✏️",
    startLanguage: "Выберите желаемый язык 🌐",
    lastMessage: "Спасибо за использование нашего сервиса! 😊🙏",
    successDelete: "Процесс прошел успешно. 🤩🤩",
    nextOrStopMessage: "Вы можете продолжить изменение текстов или завершить процесс. ⏭️🛑"
  }
}

exports.defaultVariables = {
  type: null,
  til: 'en',
  multipleColors: false
}

exports.variables = {
  sertificat_name: "CERTIFICATE",
  appreciation: "OF APPRECIATION",
  presetented_to: "PROUDLY PRESENTED TO",
  name: "Jonathon Smith",
  text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit nobis, fugit delectus aliquam aperiam, et atque distinctio quibusdam quas, commodi id. Doloremque iste voluptatum qui eveniet consequatur dicta illo.",
  director: "director",
  director_name: "Richard Smith",
  degree: 1,
  assistant: "Assistend",
  assistant_name: "Nixon Smith",
  photo: path.join(__dirname, 'photo', 'Green.png'),
  // photo:"./photo/Red.png",
  colors: ['#00ACBA']
}