module.exports = [{
  type: 'joinCommand',
  channel : "$randomChannelID",
  code: `$dm
  $getServerVar[DMmessage]`
}, {
  name: "setdmmessage",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[DMmessage;$message]
  $title[Message de Bienvenue en MP]
  $description[Le message de bienvenu en MP est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[GREEN]
  `
}]