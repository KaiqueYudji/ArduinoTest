import { useState } from 'react'

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const[validate,setValidate] = useState(false);

const port = new SerialPort("COM3", {
    baudRate: 9600,
});

const parser = new Readline("\n");



function SerialPrint(arg) {
    port.write(arg);
      setValidate(true);
}
console.log(x)

///Loop through
port.pipe(parser);
parser.on("data", (line) => console.log(line))

//Ctrl+c derruba o looping

let comands = ['Maria', 'Serial','Teste'];

let i = 0;

do{
    setValidate(false);
    console.log(comands[i]);
    
    setTimeout(SerialPrint, 4000, comands[i])
     
     if(comands[i] ==='Teste'){
      x = false;
     }

    i++;
    
}while( x === true)




///////////////////////// resposta do arduino que está cmg no terminal a baixo ////////////////////////

