const osModule = require('./osModule.js');
const networkModule = require('./networkModule.js');


console.log('Datos del sistema operativo:');
console.log(osModule);


console.log('Interfaces de red:');
console.log(networkModule.interfaces);


for (const [key, value] of Object.entries(osModule)) {
console.log(`${key}: ${value}`);
}
for (const [interfaceName, configs] of Object.entries(networkModule.interfaces)) {
console.log(`Interfaz: ${interfaceName}`);
for (const config of configs) {
console.log(` Familia: ${config.family}`);
console.log(` Dirección: ${config.address}`);
console.log(` Interno: ${config.internal}`);
}
}
