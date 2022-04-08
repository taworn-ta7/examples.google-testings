import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	Box,
	List,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import {
} from '@mui/icons-material';
import AppBox from '../layouts/AppBox';
import Constants from '../Constants';
import AppContext from '../AppContext';

export default function DrivePage() {
	const { t } = useTranslation();
	const appContext = React.useContext(AppContext);
	const [items, setItems] = React.useState([]);

	/// Handle item click.
	const handleItemClick = (event, item) => {
		event.preventDefault();
		console.log(`clicked: ${item.id} ${item.name}`);
	};

	/// Render items.
	const renderItems = () => {
		const elements = items.map((item, key) =>
			<ListItemButton key={key} onClick={(event) => handleItemClick(event, item)}>
				<ListItemText primary={item.name} secondary={item.mimeType} />
			</ListItemButton>
		);
		return (
			<Box sx={{ width: 1 }}>
				<List>{elements}</List>
			</Box>
		);
	};

	/// On start.
	React.useEffect(() => {
		const uri = `https://www.googleapis.com/drive/v3/files?key=${Constants.googleApiKey}&corpora=user`;
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${appContext.login.accessToken}`,
				Accept: 'application/json',
			},
		};
		console.log(`uri: ${uri}`);
		console.log(`options: ${JSON.stringify(options, null, 2)}`);

		fetch(uri, options).then((res) => {
			console.log(`response: ${res.status}`);
			res.json().then((json) => {
				console.log(`json: ${JSON.stringify(json, null, 2)}`);
				if (!json.error)
					setItems(json.files);
			});
		});
	}, [appContext]);

	return (
		<AppBox title={t('drivePage.title')} showMenu={true}>
			{renderItems()}
		</AppBox>
	);
}
