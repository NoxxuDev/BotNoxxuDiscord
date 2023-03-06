module.exports = [{
  name: "sendpannel",
  code: `$deletecommand
  $setServerVar[PannelChannel;$channelID]
  $reactionCollector[$splitText[1];everyone;24d;📩;ticket;yes]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $textSplit[$sendMessage[{title: Pannel Des Tickets}{description:$getServerVar[PannelMessage]
  }{color:GREEN}{footer:Réagissez avec 📩 pour ouvrir un ticket.};yes]; ]
  `
}, {
  type: 'awaitedCommand',
  name: "ticket",
  code: `$newTicket[ticket-$random[0;9999];<@$authorID> - @everyone {title:Ticket}{description:$getServerVar[TicketMessage]}{color:GREEN}{footer:Admin, pour fermer ce ticket faites $getServerVar[prefix]close.};$getServerVar[TicketCat];no;]
  `
}, {
  name: "close",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $closeTicket[:x: | **J'ai rencontré une erreur.** Veuillez ressayer.]
  $dm[$authorID]
  $title[Ticket Fermé]
  $description[Vous avez fermé le ticket **avec succes.**]
  $addTimestamp
  $color[GREEN]`
}]