"use client";

import type { ChatMessage } from "@/interfaces/dashboard/demos/chat-message";
import useStore from "@/stores/chat.store";
import ChatAvatar from "@/components/dashboard/demos/pusher/chat-avatar";

export default function ChatBubble({ message }: { message: ChatMessage }) {
	const { userUid } = useStore();

	return (
		<div
			className={`flex items-end gap-4 w-full h-full overflow-hidden ${message.userUid === userUid ? "flex-row-reverse self-end" : "flex-row self-start"}`}
		>
			<ChatAvatar uid={message.userUid} />
			<div
				className={`relative flex flex-col gap-2 py-2 px-4 rounded-3xl max-w-sm overflow-hidden ${message.userUid === userUid ? "bg-slate-200 dark:bg-slate-800 rounded-br-none" : "bg-sky-100 dark:bg-sky-900 rounded-bl-none"}`}
			>
				<p
					className={`text-base text-foreground text-ellipsis overflow-hidden ${message.userUid === userUid ? "text-right" : "text-left"}`}
				>
					{message.message}
				</p>
				<time className={"text-xs text-muted-foreground"}>{message.createdAt}</time>
			</div>
		</div>
	);
}
