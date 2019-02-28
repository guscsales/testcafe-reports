import React from 'react';
import Document, { Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
