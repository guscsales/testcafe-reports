import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';

import style from './style.scss';

class Page extends PureComponent {
	render() {
		return (
			<>
				<Head title="Success" />
				<Layout>Exibir os testes de sucesso! :)</Layout>
			</>
		);
	}
}

export default Page;
