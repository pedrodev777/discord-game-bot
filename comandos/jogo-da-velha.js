const { 
  MessageEmbed,
  MessageAttachment,
  MessageActionRow,
  MessageButton
} = require ('discord.js');

const {
  loadImage,
  createCanvas
} = require ('canvas');

module.exports = {
  code,
  name:'jogo-da-velha',
  aliases :['jdv','velha']
};

function code(client, message, args) {
  const embed = new MessageEmbed()
  
}