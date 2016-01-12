'use strict'

// This Library Helps consolidate the System Information collection into a simple collection

//Key Library Imports
var os = require('os')
var v8 = require('v8')

//Pull all System info into single JSON
//May look at splitting these later to improve performance
var nodeInfoInventory = {
    "os": {
        "EOL": os.EOL,
        "arch": os.arch(),
        "numCPUs": os.cpus().length,
        "cpus": os.cpus(),
        "endianness": os.endianness(),
        "freemem": os.freemem(),
        "homedir": os.homedir(),
        "hostname": os.hostname(),
        "load avg": os.loadavg(),
        "network interfaces": os.networkInterfaces(),
        "platform": os.platform(),
        "release": os.release(),
        "tmp dir": os.tmpdir(),
        "total memory": os.totalmem(),
        "type": os.type(),
        "uptime": (os.uptime() / 60 / 60) + " Hours "
    },
    
    "v8": {
        "Heap Statistics": v8.getHeapStatistics()
    },
    
    "globals": {
        "__dirname": __dirname,
        "__filename": __filename,
    },
    
    "module": {
        "filename": module.filename,
        "id": module.id,
        "loaded": module.loaded//,
        //"parent": module.parent
    },
    
    "process": {
        "arch": process.arch,
        "cwd": process.cwd(),
        "argv": process.argv.toString(),
        "execArgv": process.execArgv.toString(),
        "config": process.config,
        "env": process.env,
        "memory Usage": process.memoryUsage(),
        "pid": process.pid,
        "platform": process.platform,
        "release": process.release,
        "title": process.title,
        "uptime": process.uptime(),
        "versions": process.versions
    }
}

/*This Function will send the Full consolidated Information in JSON Format*/
function getNodeInfo() {
	return JSON.stringify(nodeInfoInventory)
}
module.exports.getNodeInfo = exports.getNodeInfo = getNodeInfo;
