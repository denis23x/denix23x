export type Pagination = {
	totalItems: number;
	totalPages: number;
	currentPage: number;
	pageSize: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
};

export const pagination = (list: (Book | Review | User)[], page: number, size: number): Pagination => {
	return {
		totalItems: list.length,
		totalPages: Math.ceil(list.length / size),
		currentPage: page,
		pageSize: size,
		hasNextPage: page < Math.ceil(list.length / size),
		hasPreviousPage: page > 1,
	};
};
