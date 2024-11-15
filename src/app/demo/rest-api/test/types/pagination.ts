export type Pagination = {
	isFirstPage: boolean;
	isLastPage: boolean;
	currentPage: number;
	previousPage: number | null;
	nextPage: number | null;
	pageCount: number;
	totalCount: number;
};
