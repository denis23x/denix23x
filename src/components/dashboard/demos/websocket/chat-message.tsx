"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
	message: {
		uid: string;
		message: string;
		createdAt: string;
		user: {
			uid: string;
		};
	};
}

export default function ChatMessage({ message }: ChatMessageProps) {
	const userId = "1";

	return (
		<div
			className={`flex items-end gap-4 w-full h-full overflow-hidden ${message.user.uid === userId ? "flex-row-reverse self-end" : "flex-row self-start"}`}
		>
			<Avatar>
				<AvatarImage src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?scale=60&seed=${message.user.uid}`} />
				<AvatarFallback></AvatarFallback>
			</Avatar>
			<div
				className={`relative flex flex-col gap-2 py-2 px-4 rounded-3xl max-w-sm overflow-hidden ${message.user.uid === userId ? "bg-slate-200 dark:bg-slate-800 rounded-br-none" : "bg-sky-100 dark:bg-sky-900 rounded-bl-none"}`}
			>
				<p
					className={`text-base text-foreground text-ellipsis overflow-hidden ${message.user.uid === userId ? "text-right" : "text-left"}`}
				>
					{message.message}
				</p>
				<time className={"text-xs text-muted-foreground"}>{message.createdAt}</time>
			</div>
		</div>
	);
}
