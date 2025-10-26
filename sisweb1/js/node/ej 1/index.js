const http = require('http');
const fs = require('fs');
const os = require('os');

const port = 3000;
const config = JSON.parse(fs.readFileSync('conf.json', 'utf8'));

console.log('version node:', process.version);
console.log('CPU:', os.cpus()[0].model)

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);

    setInterval(() => {
        console.log('INFO-------------------------------------')
        //console.log(os.cpus())
        //console.log('memoria RAM libre:', os.freemem(), 'bytes')
        //console.log('tiempo activo del sistema:', os.uptime(), 's')
        //console.log('tiempo de node.js exec:', process.uptime(), 's')

        if (config.show_cpu){
            //console.log(os.cpus()) ?? no se si es esto, creo que no es lo que buscas
            console.log('uso CPU:', process.cpuUsage()) // o esto, no se la verdad hahah
        }
        if (config.show_memory){
            console.log('memoria RAM libre:', os.freemem(), 'bytes');
            console.log('memoria RAM usada:', os.totalmem() - os.freemem(), 'bytes');
        }
        if (config.show_system_uptime){
            console.log('tiempo activo del sistema:', os.uptime(), 's');
        }
        if (config.show_node_uptime){
            console.log('tiempo de node.js exec:', process.uptime(), 's');
        }
        console.log('-----------------------------------------')
    }, config.interval);
});