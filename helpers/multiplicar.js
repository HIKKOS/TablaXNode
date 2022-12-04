const fs = require('fs');
const colors = require('colors');
const crearTabla = async( number, displayList, limite) =>{
    try{
        let text = '';
        let salida =
        `tabla del ${number}\n=================\n`.magenta
        text = `tabla del ${number}\n=================\n`
        for (let i = 1; i <= limite; i++) {
            salida += `${number}`+ 'x'.magenta +`${i} = ` + ` ${number * i}\n`.cyan;
            text += `${number}`+ 'x' +`${i} = ` + ` ${number * i}\n`;
        }       
        fs.writeFileSync(`./output/tabla del ${number}.txt`, text);
        
        if (displayList) {
            console.log(salida);
        }
        return(`tabla del ${number}.txt`)        
    } catch(err) {
        throw(err);
    }
}
module.exports = {
    crearTabla
}