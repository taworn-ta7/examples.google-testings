import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	FormControl,
	Button,
} from '@mui/material';
import {
	Google as GoogleIcon,
} from '@mui/icons-material';
import AppBox from '../layouts/AppBox';
import Constants from '../Constants';

export default function StartPage() {
	const { t } = useTranslation();

	return (
		<AppBox title={t('startPage.title')} showMainIcon={true}>
			<form>
				<FormControl fullWidth sx={{ m: 1 }}>
					{/* login */}
					<Button
						style={{ textTransform: 'none' }}
						color="primary" variant="outlined"
						startIcon={<GoogleIcon />}
						onClick={() => { window.location.href = Constants.googleSignIn(); }}
					>
						{t('startPage.ok')}
					</Button>
				</FormControl>
			</form>
		</AppBox>
	);
}
