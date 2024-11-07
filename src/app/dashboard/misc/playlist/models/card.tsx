export type Card = {
	uid: string;
	description: string;
	title: string;
	ctaText: string;
	ctaLink: string;
	src: string;
	content: () => JSX.Element;
};
