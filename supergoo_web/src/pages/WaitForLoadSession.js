import React from 'react';
import { useTranslation } from 'react-i18next';
import AppBoxMini from '../layouts/AppBoxMini';
import AppContext from '../AppContext';

export default function WaitForLoadSession({ children }) {
	const { t } = useTranslation();
	const appContext = React.useContext(AppContext);

	if (!appContext.state || appContext.state === 'loading') {
		return (
			<AppBoxMini title={t('waitForLoadSession.title')} />
		);
	}

	return children;
}
