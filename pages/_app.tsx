import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MUI_STYLESHEETS_ID } from '@/constants';
import { mainTheme } from '@/UI/themes';
import '../styles/globals.css';

class CustomizedApp extends App {
	componentDidMount() {
		const muiStyleSheets = document.getElementById(MUI_STYLESHEETS_ID);
		muiStyleSheets?.parentElement?.removeChild(muiStyleSheets);
	}
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={mainTheme}>
				<CssBaseline />
				<Component {...pageProps} />;
			</ThemeProvider>
		);
	}
}

export default CustomizedApp;
