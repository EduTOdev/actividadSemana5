const os = require("os");
const date = require("date-and-time")
const now = new Date();
const formattedDate = date.format(now,'YYYY/MM/DD HH:mm:ss');

const systemdate = formattedDate.slice(0, 10);
const time = formattedDate.slice(11);
const hostname = os.hostname();
const kernel = os.version();
const uptime = os.uptime() / 60;
const freemem = os.freemem();
const totalmem = os.totalmem();
const usedmem = totalmem - freemem;
const percentagemem = (freemem / totalmem) * 100;
const cpu = os.cpus();
const model = cpu[0].model;


const datosPC = {
    date: systemdate,
    time: time,
    hostname: hostname,
    kernel: kernel,
    uptime: `${uptime} mins`,
    mem: `${usedmem / 1024 / 1024 / 1024} / ${totalmem / 1024 / 1024 / 1024} GB (${percentagemem}%)`,
    cpu: model
}

console.table(datosPC);

//Me acabo de dar cuenta que no le agregue que hiciera el json pero ahorita lo agrego voy a ir a cenar