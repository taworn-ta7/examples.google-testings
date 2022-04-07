import React from 'react';
import { useTranslation } from 'react-i18next';
import {
} from '@mui/material';
import {
} from '@mui/icons-material';
import AppBox from '../layouts/AppBox';
import Constants from '../Constants';
import AppContext from '../AppContext';

export default function KeepPage() {
	const { t } = useTranslation();
	const appContext = React.useContext(AppContext);
	const item = appContext.login;

	React.useEffect(() => {
		//const uri = `https://keep.googleapis.com/$discovery/rest?version=v1`;
		const uri = `https://keep.googleapis.com/v1/notes?key=${Constants.googleApiKey}`;
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
	}, [item]);

	return (
		<AppBox title={t('keepPage.title')} showMenu={true}>
		</AppBox>
	);
}
