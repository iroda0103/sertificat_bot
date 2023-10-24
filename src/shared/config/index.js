const dotenv=require('dotenv')

dotenv.config()

module.exports={
    en:process.env.NODE_ENV,
    port:process.env.PORT,
    db:{
        port:process.env.DB_HOST,
        host:process.env.DB_PORT,
        user:process.env.DB_USER,
        name:process.env.DB_NAME,
        password:process.env.DB_PASSWORD
    },
    bot:{
        token:process.env.BOT_TOKEN
    }
}