module.exports = [{
  name: "setleavechannel",
  code: `$onlyIf[$mentionedChannels[1]!=;:x: | Veuillez **indiquer le salon des messages d'au-revoir.**]
  $setServerVar[Leavechannel;$mentionedChannels[1]]
  $title[Salon Des Messages D'Aurevoir']
  $description[**Le salon des messages d'au-revoir est désormais :** <#$mentionedChannels[1]>]
  $addTimestamp
  $color[GREEN]
  $footer[Changé par $username]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  `
}, {
  name: "setleavemessage",
  code: `$argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[Leavemessage;$message]
  $title[Message d'au-revoir']
  $description[**Le message d'au-revoir' est désormais :**
  
  \`\`\`$message\`\`\`]
  $footer[Changé par $username]
  $addTimestamp
  $color[GREEN]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "setleavecolor",
  code: `$argsCheck[>1;:x: | Veuillez **indiquer une couleur (en HEX).**]
  $setServerVar[Leavecolor;$message]
  $title[Couleur d'au-revoir']
  $description[**La couleur d'au-revoir est désormais :**
  
  \`\`\`$message\`\`\`]
  $footer[Changé par $username]
  $addTimestamp
  $color[GREEN]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}]