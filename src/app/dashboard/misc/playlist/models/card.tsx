export type Card = {
	uid: string;
	description: string;
	title: string;
	link: string;
	src: string;
	blurDataURL: string;
	content: () => JSX.Element;
};
