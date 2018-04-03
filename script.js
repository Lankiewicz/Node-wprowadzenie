var os = require('os');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
	var hours =  Math.floor(uptime / 3600);
	var minutes =  Math.floor((uptime - hours * 3600) / 60);
	var seconds = Math.floor (uptime - hours * 3600 - minutes * 60);
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
	console.log('Uptime: ~', hours, 'h', minutes, 'm', seconds, 's');
}

getOSinfo();