
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

let x = true;
let i =0;

const port = new SerialPort("COM3", {
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
                break
            }
            
            setTimeout(SerialPrint, 2000, comands[i]);
            i++;
            
            
         console.log(comands.length)
             
        
        }
    
    }, 3000);

    
}

///Loop through
port.pipe(parser);
parser.on("data", (line) => console.log(line))

setTimeout(SerialPrint, 4000, 'Tes');


/* 
do{
    x = false;
    console.log(comands[i]);
    
    setTimeout(SerialPrint, 4000, comands[i]);
     
     if(comands[i] ==='Teste'){
      x = false;
     }

    i++;
    
  
}while( x === true) */







