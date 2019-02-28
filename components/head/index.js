import React from 'react';
import propTypes from 'prop-types';
import { default as NextHead } from 'next/head';

const Head = ({ title }) => (
	<NextHead>
		<title>{title} - Testcafe Reports</title>
	</NextHead>
);

Head.propTypes = {
	title: propTypes.string
};

export default Head;
