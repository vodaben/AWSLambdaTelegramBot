const AWS = require('aws-sdk');
const kms = new AWS.KMS();
const TelegramBot = require('node-telegram-bot-api');
var g_token, g_channel;

// Decrypt using AWS KMS
// Return a promise
let decrypt = (ciphertext) => {
    return new Promise((resolve, reject) => {
        kms.decrypt({ CiphertextBlob: new Buffer(ciphertext, 'base64') },
        (err, data) => {
            if(err) reject(Error(err));
            else resolve(data.Plaintext.toString('utf8'));
        });
    });
};

// Receive a notification (EVENT) and send a message to a channel
exports.handler = (event, context, callback) => {
    decrypt(process.env.token).then((token)=>{
        g_token = token;
        return decrypt(process.env.channel);
    }).then((channel) => {
        g_channel = channel;
        let bot = new TelegramBot(g_token);

        for(let i = 0; i < event.Records.length; i++){
            let record = event.Records[i];
            if(record.Sns && record.Sns.Message){
                let content = JSON.parse(record.Sns.Message);
                bot.sendMessage(g_channel, "[" + content.AlarmName + "]\n" + content.OldStateValue + " => " + content.NewStateValue);
            }
        }
    }).catch((err)=>{
        console.log("Error: ", err);
    });
};
