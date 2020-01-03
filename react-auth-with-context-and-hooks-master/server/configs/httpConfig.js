import http from 'http';

export default app => {
	http.createServer(app).listen(process.env.PORT, () => {
		console.log(`Listening on http://localhost:${process.env.PORT}`);
	});
};
