module.exports = [{
  name: "setpannelmessage",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas le permition d'éxécute cette commande.**]
  $argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[PannelMessage;$message]
  $title[Message du Pannel]
  $description[Le message du pannel des tickets est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[GREEN]`
}, {
  name: "setticketmessage",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas le permition d'éxécute cette commande.**]
  $argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[TicketMessage;$message]
  $title[Message du Ticket]
  $description[Le message des tickets est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[GREEN]`
}, {
  name: "setticketcat",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas le permition d'éxécute cette commande.**]
  $argsCheck[>1;:x: | Veuillez **indiquer une catégorie.**]
  $setServerVar[TicketCat;$message]
  $title[Catégorie du Ticket]
  $description[La catégorie des tickets est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[GREEN]`
}]