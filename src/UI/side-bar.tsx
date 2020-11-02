import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import MyLogo from '@/UI/Logo';
import MyIcon from '@/UI/Icon';
import ActiveLink from '@/UI/active-link';
import { ColorPalette } from '@/constants';

const useSideBarStyles = makeStyles({
	sideBar: {
		width: '19%',
		backgroundColor: ColorPalette.primary,
		color: ColorPalette.textOnDarkBackground,
		textAlign: 'center',
		margin: 'auto',
		fontSize: '1.2rem',
	},
	sideBarLink: {
		textDecoration: 'none',
		color: 'inherit',
	},
	sideBarLinkActive: {
		color: ColorPalette.secondary,
	},
});

const SideBar = () => {
	const sideBarStyles = useSideBarStyles();
	return (
		<Drawer
			variant='permanent'
			classes={{
				paper: sideBarStyles.sideBar,
			}}
		>
			<div style={{ lineHeight: '280px' }}>
				<MyLogo />
			</div>
			<div style={{ padding: '10px 0 20px 0' }}>
				<div style={{ padding: '6px' }}>
					<ActiveLink
						href='/'
						className={sideBarStyles.sideBarLink}
						activeClassName={sideBarStyles.sideBarLinkActive}
					>
						Home
					</ActiveLink>
				</div>
				<div style={{ padding: '6px' }}>
					<ActiveLink
						href='/about'
						className={sideBarStyles.sideBarLink}
						activeClassName={sideBarStyles.sideBarLinkActive}
					>
						About
					</ActiveLink>
				</div>
			</div>
			<div>
				<MyIcon type='facebook' />
				<MyIcon type='instagram' />
				<MyIcon type='github' />
				<MyIcon type='linkedin' />
				<MyIcon type='twitter' />
			</div>
		</Drawer>
	);
};

export default SideBar;
