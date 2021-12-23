
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

let x = true;

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
        let increment = 0;
        let oi = increment++;
        console.log('opa'+oi)
        x = true;

        function incrementar(){
            console.log('oi')
            return increment++;
        }

        while(x === true){
            x = false;
            console.log(comands[increment]);
            console.log('início: '+increment);
            
            setTimeout(SerialPrint, 4000, comands[increment]);
            
           
             if(comands[increment] ==='Teste'){
              x = false;
             }
        
            
            
        }
    
    }, 5000);
}

///Loop through
port.pipe(parser);
parser.on("data", (line) => console.log(line))

setTimeout(SerialPrint, 4000, 'Teste');


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







