import { createMuiTheme } from '@material-ui/core/styles';
import { ScreenBreakpoints } from '@/constants';

export const mainTheme = createMuiTheme({
	breakpoints: {
		values: { ...ScreenBreakpoints },
	},
});
