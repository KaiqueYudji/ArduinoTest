const SerialPort = require("serialport");
const Readline = require("@serialoprt/parser-readline"); 


const port = new SerialPort("COM3", {
    baudRate:9600,       
});

const parser = new Readline();
port.pipe(parser); 

parser.on("data", (line) => console.log(line));
