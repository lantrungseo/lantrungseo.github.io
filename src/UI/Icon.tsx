import React from 'react';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import styles from '@/UI/UI.module.css';

interface IIconProps {
	type?: string;
	clickURL?: string;
	clickAction?: () => void;
}

interface IIconContextProps {
	href?: string;
	action?: () => void;
	children?: React.ReactNode;
}

const IconContext = ({ href, action, children }: IIconContextProps) => {
	if (href) {
		return <Link href={href}>{children}</Link>;
	} else if (action) {
		return <IconButton onClick={action}>{children}</IconButton>;
	} else {
		return <>{children}</>;
	}
};

const Icon = ({ type, clickAction, clickURL }: IIconProps) => {
	const { svgURL, height } = React.useMemo<{ svgURL: string; height: number }>(() => {
		const result = { svgURL: '', height: 20 };
		switch (type) {
			case 'facebook': {
				result.svgURL = '/icons/facebook.svg';
				result.height = 23.3;
				break;
			}
			case 'twitter': {
				result.svgURL = '/icons/twitter.svg';
				break;
			}
			case 'github': {
				result.svgURL = '/icons/github.svg';
				break;
			}
			case 'linkedin': {
				result.svgURL = '/icons/linkedin.svg';
				result.height = 24;
				break;
			}
			case 'instagram': {
				result.svgURL = '/icons/instagram.png';
				break;
			}
			case 'social-medias': {
				result.svgURL = '/icons/social-med.svg';
				result.height = 27;
				break;
			}
		}
		return result;
	}, [type]);
	return (
		<IconContext href={clickURL} action={clickAction}>
			<img src={svgURL} height={height} className={styles.lantrungseoIcon} alt='my-icons' />
		</IconContext>
	);
};

export default Icon;
