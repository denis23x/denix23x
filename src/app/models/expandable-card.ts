export type ExpandableCard = {
	uid: string;
	description: string;
	title: string;
	link: string;
	src: string;
	blurDataURL: string;
	content: () => JSX.Element;
};
