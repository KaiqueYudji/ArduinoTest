{
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

let x = true;
let i = 0;

let response =[];

//alterei a porta com3 para com4
const port = new SerialPort("COM4", {
    baudRate: 9600,
});


const parser = new Readline("\n");


function SerialPrint(arg) {
    
    setTimeout(() => port.write(arg),1000);
     MudarValor();
}

function MudarValor(){
    
   
    return setTimeout(() => {

        let comands = ['Maria', 'Serial','Teste'];
        x = true;
        

        while(x === true){
            
            x = false;
            
            if( i === comands.length){
                response.shift()
                console.log(response)
                port.close();
                break;
            }
            
            setTimeout(SerialPrint, 2000, comands[i]);
            i++;
            
        }
 
    
    }, 3000);
}

port.pipe(parser);
parser.on("data", (line) => {console.log(line); let line1 = line.substr(0,line.indexOf("\r")); response.push(line1);})

setTimeout(SerialPrint, 4000, 'Tes');

}