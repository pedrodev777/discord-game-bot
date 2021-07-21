module.exports = client => {
  client.on('messageCreate', message => {
    const prefix = client.env.prefix;
    
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.trim().slice(prefix).split(' ');
    const command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command);
    
    if (cmd) {
      cmd.code(client, message, args);
    }
  });
};