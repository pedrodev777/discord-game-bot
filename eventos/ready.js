module.exports = client => {
  client.on('ready', () => {
    console.log(`Client is ready!`);
  });
};