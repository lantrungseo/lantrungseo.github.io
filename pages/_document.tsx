import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { MUI_STYLESHEETS_ID } from '@/constants';

class CustomizedDocument extends Document {
	static async getInitialProps(context: DocumentContext) {
		const sheets = new ServerStyleSheets();
		context.renderPage = pageRendererFactory(sheets)(context.renderPage);
		const initialProps = await Document.getInitialProps(context);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{sheets.getStyleElement({ id: MUI_STYLESHEETS_ID })}
				</>
			),
		};
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='stylesheet'
						href={`https://fonts.googleapis.com/css?family=Roboto:300,400,500,700
            &display=swap`}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomizedDocument;

const pageRendererFactory = (sheets: ServerStyleSheets) => (
	formerPageRenderer: DocumentContext['renderPage']
) => () =>
	formerPageRenderer({
		enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
	});
