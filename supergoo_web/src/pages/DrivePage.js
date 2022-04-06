import React from 'react';
import { useTranslation } from 'react-i18next';
import {
} from '@mui/material';
import {
} from '@mui/icons-material';
import AppBox from '../layouts/AppBox';
import AppContext from '../AppContext';

export default function SettingsPage() {
	const { t } = useTranslation();
	const appContext = React.useContext(AppContext);
	const item = appContext.login;

	React.useEffect(() => {
		const apiKey = 'AIzaSyDnq4N1x2wSRHOFvtSMgpbjvMa3MFHQnsQ';
		const uri = `https://www.googleapis.com/drive/v3/about?key=${apiKey}&fields=*`;
		//const uri = `https://www.googleapis.com/drive/v3/files?corpora=user&key=${apiKey}`;
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${item.accessToken}`,
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
		<AppBox title={t('drivePage.title')} showMenu={true}>
		</AppBox>
	);
}
