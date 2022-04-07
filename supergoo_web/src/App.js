import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeManager } from './ThemeContext';
import { DialogCallbackContext, DialogProvider } from './DialogContext';
import { AppProvider } from './AppContext';
import WaitForLoadSession from './pages/WaitForLoadSession';
import AuthenRequired from './pages/AuthenRequired';
import HomePage from './pages/HomePage';
import SignInGooglePage from './pages/signin/SignInGooglePage';
import ChangeIconPage from './pages/profile/ChangeIconPage';
import ChangeNamePage from './pages/profile/ChangeNamePage';
import DrivePage from './pages/DrivePage';
import KeepPage from './pages/KeepPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
	return (
		<CssBaseline>
			<ThemeManager>
				<DialogCallbackContext.Provider value={{ callback: null }}>
					<DialogProvider>
						<AppProvider>
							<WaitForLoadSession>
								<BrowserRouter>
									<Routes>
										<Route path="/" element={<HomePage />} />
										<Route path="signin">
											<Route path="google" element={<SignInGooglePage />} />
										</Route>
										<Route path="profile">
											<Route path="change-icon" element={<AuthenRequired><ChangeIconPage /></AuthenRequired>} />
											<Route path="change-name" element={<AuthenRequired><ChangeNamePage /></AuthenRequired>} />
										</Route>
										<Route path="drive" element={<AuthenRequired><DrivePage /></AuthenRequired>} />
										<Route path="keep" element={<AuthenRequired><KeepPage /></AuthenRequired>} />
										<Route path="settings" element={<AuthenRequired><SettingsPage /></AuthenRequired>} />
									</Routes>
								</BrowserRouter>
							</WaitForLoadSession>
						</AppProvider>
					</DialogProvider>
				</DialogCallbackContext.Provider>
			</ThemeManager>
		</CssBaseline>
	);
}
