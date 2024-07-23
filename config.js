//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2349153264598";
global.sudo = process.env.SUDO || "2349153264598";
global.owner = process.env.OWNER_NUMBER || "2349153264598";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NkV1Yxa2VzQks0cEpFczIzbWh4dDIvdWFzS0FlZi96ZDdmQjA2by9YQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXVnWGhJK05KS1ZrUUV4TVdqNllCbVh0N29zVkJEM1dyWUlPeGxOMk1IZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTy9IQzJMVUNKbjZJODNtWU1ZbzA0VmFObVdsQmtNcVMxNEV0ZlJGZm1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEdmxmNHBsTklmZWdta0h1VHpJMGgwL1dBNzREM1I5MlNpdmpnTUN5NGp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHbW1OR0xKbjdPeXA2dGNlSzg1TUU3ckYwZElSdUhaNTF6OTV3SmtibDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE2MlZWRXJjamtEbnJHcWZQMi9nUnU4U1RDZHhXKzdXQjRpVEtzUE5kVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1FOG8xYkQ2Ym05QmdETkpsbldvL3pVN1ovdlo5bzFZQ0t5ZWowdkEyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWczZnorZWlKekRPcFdpS05uUFpYYi9FRGVRUjNnVGZ4SXY0bVI1NDV5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpCbGZaS1ZBcXdERkZVTkpmaW1hYWZDWWZ3NFp5REFjc01qQTdma3JNb3pxSHBFbHF6K0JkRDJDYjRKaGtLaGExZ0k0Q0s3TlB5UkNaT01jWTFqZUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJMcU9pNmJUVElqdThLMVprMDYvOVFJL1RYNVIzTzZxMHJiaC9WSlA4ZnVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2SXlfUWZvSlRKQ2lsckJVVzlWbGN3IiwicGhvbmVJZCI6IjQ0MDc2MzM2LTEzOGUtNDM5MC05MjdjLTQ0ODdkNWI2ZGE3YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WU10L29hc2RvSlluK3VoTzNmT0gvTW9ZTUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJYZ2tCQzVwN3lNeTluRUJCK1R1bXdwalAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNHQTNWSkgyIiwibWUiOnsiaWQiOiIyMzQ5MTUzMjY0NTk4OjQ1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWFgrNFlQRUlIbi83UUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNQndyeXdhTTcxTlNuS3JkOVQxZnNzMXNVczVaMnNwNXFRVzFUYTQ3NFVNPSIsImFjY291bnRTaWduYXR1cmUiOiJEV3EySkxLQUI4NHZnNi8wZkl4RjdaTDh2QURvWWc3ais5dEpURFRTa1FGSlVGTFNoc1V4WGlHSldBVUd1Z2kyaDFHSm9NRUlKUkdGQ2RtbmljUnpqZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQWRsSEpPS1hpWjRqSkVrSEk3bzNNdyt0czdRRGNpYVh1MUszNTQzRG9zNTgrZEpzZ1FSTGZycHZwd2dQTUpaM3NTTFJhS0E5eWFDQ0VndDRLNHZrQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUzMjY0NTk4OjQ1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRBY0s4c0dqTzlUVXB5cTNmVTlYN0xOYkZMT1dkcktlYWtGdFUydU8rRkQifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTc1ODYwNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFaXYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "bishop",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "bishop-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "bishop",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
