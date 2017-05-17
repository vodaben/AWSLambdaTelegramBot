# AWSLambdaTelegramBot
This bot forwards message or event to Telegram Channel using Telegram Bot.

## Why?
There are tons of bots or scripts like this in the Github. Why I am developing this little bot coz. my B-O-S-S is annoyed by the notification set and the monitoring process cannot be more convenient with notification. Do give me some advice to improve this or fork/clone it if you are intersted.

## Prerequisite
- AWS Account
- AWS KMS Key
- Telegram Bot and Bot API Key

## Installation
1. Git clone the repository.
2. Make change to `index.js` if you want to customize the message/function.
3. Zip all files into ONE single ZIP file.
4. Create Lambda function using the ZIP file.
5. On `Environment variables` select `Enable encryption helpers`.
6. Enter following details in `Environment variables` and click `Encrypt` for each value
  - `channel`: The channel id/string (in `@channel_name` format) of the destination channel you want to receive the message.
  - `token`: The Bot API token. (Please check the document of BotFather from Telegram if you don't have one.)
7. Test the Lambda function or setup triggers.

## Remarks
I am working on something more convenient. This version is something just do `that` job only. I think it is easy enough for everyone to just change the core part and do whatever you want.

## Bugs
I am not a hacker so I produce tons bugs everytime I program. Let me know if you found something weird. Thanks!
