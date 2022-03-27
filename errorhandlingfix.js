const https = require('https');
const agent = new https.Agent({ keepAlive: true });
exports.sslChecker = (url,port) => {
	let options = {
		host: url,
		port: port,
		method: 'GET',
		agent
	};
	return new Promise((resolve, reject) => {

		const request = https.request(options, function (res) {
			let cert = res.connection.getPeerCertificate(true);
			let list = new Set();
			do {
				list.add(cert);
				cert = cert.issuerCertificate;
			} while (cert && typeof cert === 'object' && !list.has(cert));
			res.on('error', err => {
				console.log('res error',err)
				reject(err);
			});
			res.on('data', data => data);
			res.on('end', () => {
				resolve(list);
			});
		});
		request.on('error', err => {
			if(err.code == 'ENOTFOUND'){
				reject(new Error('Url not found'))
			}
			reject(err);
		});
		request.end();	
	});
};