import classNames from '../utils/classNames';

interface PanelProps {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

const Panel = ({ children, className = '' }: PanelProps) => {
	return (
		<div className={classNames('bg-white rounded-2xl p-5', className)}>
			{children}
		</div>
	);
};

export default Panel;
