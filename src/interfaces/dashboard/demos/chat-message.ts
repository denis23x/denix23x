export interface ChatMessage {
	uid: string;
	message: string;
	userUid: string;
	createdAt: string;
	updatedAt?: string;
}
