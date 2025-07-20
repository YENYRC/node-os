const os = require('os');

const nombre = os.type();
const version = os.release();
const arquitectura = os.arch();
const cpus = os.cpus();
const memoriaTotal = os.totalmem();
const memoriaLibre = os.freemem();

module.exports = {
nombre,
version,
arquitectura,
cpus,
memoriaTotal,
memoriaLibre
};