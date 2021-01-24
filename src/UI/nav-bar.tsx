import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ActiveLink from '@/UI/active-link';
import { ColorPalette } from '@/constants';
import UIStyles from '@/UI/UI.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface INavBarProps {
	position?: 'absolute' | 'fixed';
	left?: string;
	top?: string;
	right?: string;
	bottom?: string;
	variant: 'light' | 'dark';
	height?: string;
}

const NavBar = ({ variant, ...navBarPos }: INavBarProps) => {
	const useNavBarStyles = getNavBarStyleHook(navBarPos, variant);
	const navBarStyles = useNavBarStyles();
	const isNavBarMobile = useMediaQuery('(max-width: 690px)');
	return (
		<div
			className={`${navBarStyles.navBar} ${
				isNavBarMobile ? '' : UIStyles.lantrungseoNavBarBrowser
			}`}
		>
			<ActiveLink
				href='/'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Link
			</ActiveLink>
			<ActiveLink
				href='/clean'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Do
			</ActiveLink>
			<ActiveLink
				href='/'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Link
			</ActiveLink>
			<ActiveLink
				href='/clean'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Do
			</ActiveLink>
			<ActiveLink
				href='/'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Link
			</ActiveLink>
			<ActiveLink
				href='/clean'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Do
			</ActiveLink>
			<ActiveLink
				href='/'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Link
			</ActiveLink>
			<ActiveLink
				href='/clean'
				className={`${navBarStyles.navBarLink} ${UIStyles.lantrungseoNavBarLink}`}
				activeClassName={navBarStyles.navBarLinkActive}
			>
				Do
			</ActiveLink>
		</div>
	);
};

export default NavBar;

function getNavBarStyleHook(
	navBarPos: Omit<INavBarProps, 'variant'>,
	variant: INavBarProps['variant']
) {
	return makeStyles({
		navBar: {
			...navBarPos,
			width: '100%',
			background: variant === 'dark' ? ColorPalette.primary : 'transparent',
			display: 'flex',
			alignItems: 'center',
			'&::-webkit-scrollbar-thumb': {
				backgroundColor: variant === 'light' ? ColorPalette.text : ColorPalette.textLight,
			},
		},
		navBarLink: {
			color: variant === 'light' ? ColorPalette.text : ColorPalette.textLight,
		},
		navBarLinkActive: {
			color: variant === 'light' ? ColorPalette.textActive : ColorPalette.secondary,
		},
	});
}
