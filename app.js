const { crearTabla } =  require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();
crearTabla(argv.b, argv.l,argv.h)
    .then( archivo => console.log(archivo.america, 'creado'.rainbow))
    .catch(err => console.log(err))
