import React from 'react';
import { ScreenBreakpoints } from '@/constants';
import styles from '@/UI/UI.module.css';

const Logo = () => {
	return (
		<img
			className={`${styles.lantrungseoLogo}`}
			src='/lantrungseo.jpg'
			alt='lantrungseo-logo'
			srcSet={`
        /logos/lantrungseo_90.jpg 90w,
        /logos/lantrungseo_300.jpg 300w,
        /logos/lantrungseo_500.jpg 500w,
        /logos/lantrungseo.jpg 1996w
      `}
			sizes={`
        (min-width: ${ScreenBreakpoints.xl}) 14rem,
        (min-width: ${ScreenBreakpoints.md}px) 10.6rem,
        (min-width: ${ScreenBreakpoints.xs}px) 4rem,
        124rem
      `}
		/>
	);
};

export default Logo;
