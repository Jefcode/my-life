export default function classNames(...arr: string[]) {
	return arr.filter(Boolean).join(' ');
}
