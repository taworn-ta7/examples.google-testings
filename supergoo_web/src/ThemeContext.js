import React from 'react';
import {
	createTheme,
	ThemeProvider,
} from '@mui/material/styles';
import {
	grey,
	brown,
	indigo,
	purple,
	red,
	deepOrange,
	orange,
	amber,
	yellow,
	lime,
	lightGreen,
	green,
	teal,
	cyan,
	lightBlue,
	blue,
} from '@mui/material/colors';

export const ThemeContext = React.createContext(null);

// ----------------------------------------------------------------------

const colorList = [
	grey,
	brown,
	indigo,
	purple,
	red,
	deepOrange,
	orange,
	amber,
	yellow,
	lime,
	lightGreen,
	green,
	teal,
	cyan,
	lightBlue,
	blue,
];

// ----------------------------------------------------------------------

export function ThemeManager({ children }) {
	const [themes,] = React.useState(colorList.map((color) =>
		createTheme({
			palette: {
				primary: { main: color[500], },
			},
		}),
	));
	const [theme, setTheme] = React.useState(themes[0]);
	const [index, setIndex] = React.useState(0);

	/// Change theme.
	const changeTheme = (newIndex) => {
		setIndex(newIndex);
		setTheme(themes[newIndex]);
	};

	const value = {
		themes,
		index,
		changeTheme,
	};

	return (
		<ThemeProvider theme={theme}>
			<ThemeContext.Provider value={value}>
				{children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default ThemeContext;
