const server = require('./server');
const PORT = process.env.PORT || 3000;

server.listen(PORT, success => console.log(`Server running on 127.0.0.1:${PORT}!`));