'use strict';

const { createServer: createServerHttp } = require('http');
const app = require('express')();
const next = require('next');

app.get('/health-check', (req, res) =>
	res.status(200).json({
		status: 'OK'
	})
);

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
	const port = process.env.PORT || '3002';
	const server = createServerHttp(app);

	server.listen(port);
	server.on('error', error => {
		throw error;
	});
	logger.info('Server HTTP is UP');

	app.get('*', (req, res) => handle(req, res));
});
