"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ChatMessage } from "@/interfaces/dashboard/demos/chat-message";
import useStore from "@/stores/chat.store";

export default function ChatBubble({ message }: { message: ChatMessage }) {
	const { userUid } = useStore();

	return (
		<div
			className={`flex items-end gap-4 w-full h-full overflow-hidden ${message.userUid === userUid ? "flex-row-reverse self-end" : "flex-row self-start"}`}
		>
			<Avatar className={"size-9"}>
				<AvatarImage src={`https://api.dicebear.com/9.x/fun-emoji/png?scale=75&seed=${message.userUid}`} />
				<AvatarFallback></AvatarFallback>
			</Avatar>
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
