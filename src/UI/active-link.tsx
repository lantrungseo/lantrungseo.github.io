import React from 'react';
import { useRouter } from 'next/router';

type IActiveLinkProps = React.HTMLProps<HTMLInputElement> & {
	activeClassName?: string;
};

const ActiveLink = ({ activeClassName, ...props }: IActiveLinkProps) => {
	const router = useRouter();
	const processedClassNames = (router.pathname !== props.href || !activeClassName
		? props.className
		: `${props.className} ${activeClassName}`
	)?.trim();

	return React.createElement('a', { ...props, className: processedClassNames });
};

export default ActiveLink;

ActiveLink.defaultProps = {
	activeClassName: '',
};
