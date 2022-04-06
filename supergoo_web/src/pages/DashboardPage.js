import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import Rest from '../components/Rest';
import AppBox from '../layouts/AppBox';
import Styles from '../Styles';
import '../Styles.css';
import AppContext from '../AppContext';

export default function DashboardPage() {
	const { t } = useTranslation();
	const appContext = React.useContext(AppContext);
	const item = appContext.login;

	React.useEffect(() => {
		const apiKey = 'AIzaSyDnq4N1x2wSRHOFvtSMgpbjvMa3MFHQnsQ';
		const token = Rest.token;
		//const uri = `https://www.googleapis.com/drive/v3/about?key=${apiKey}&fields=*`;
		const uri = `https://www.googleapis.com/drive/v3/files?corpora=user&key=${apiKey}`;
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
			},
		};
		console.log(`uri: ${uri}`);
		console.log(`options: ${JSON.stringify(options, null, 2)}`);

		fetch(uri, options).then((res) => {
			console.log(`response: ${res.status}`);
			res.json().then((json) => {
				console.log(`json: ${JSON.stringify(json, null, 2)}`);
			});
		});

	}, []);

	return (
		<AppBox title={t('dashboardPage.title')} showMenu={true} showMoreMenu={true}>
			<img width={128} height={128} src={appContext.icon} alt={item.email} title={item.name} />
			{Styles.betweenVertical}

			<Typography variant="h6"><strong>{item.email}</strong></Typography>
			{Styles.betweenVertical}

			<table>
				<tbody>
					<tr>
						<td><span>{t('dashboardPage.role')}</span></td>
						<td><span>{item.role}</span></td>
					</tr>
					<tr>
						<td><span>{t('dashboardPage.name')}</span></td>
						<td><span>{item.name}</span></td>
					</tr>
					<tr>
						<td><span>{t('dashboardPage.locale')}</span></td>
						<td><span>{item.locale}</span></td>
					</tr>
					<tr>
						<td><span>{t('dashboardPage.signup')}</span></td>
						<td><span>{item.createdAt}</span></td>
					</tr>
				</tbody>
			</table>
		</AppBox>
	);
}
