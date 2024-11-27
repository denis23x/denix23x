"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatMessage from "@/components/dashboard/demos/websocket/chat-message";
import ChatBackground from "@/components/dashboard/demos/websocket/chat-background";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Chat() {
	const scrollRef = useRef(null);

	useEffect(() => {
		if (scrollRef.current) {
			const div: HTMLDivElement = scrollRef.current;

			div.scrollTop = div.scrollHeight; // Scroll to bottom
		}
	}, []);

	const users = [
		{
			id: 1,
			name: "denis",
		},
		{
			id: 2,
			name: "vasya",
		},
	];

	const messages = [
		{
			uid: "1",
			user: {
				uid: "1",
			},
			message: "Hi",
			createdAt: "6:16 PM",
		},
		{
			uid: "2",
			user: {
				uid: "2",
			},
			message:
				"How are you? extraboldextraboldextraboldextraboldextraboldextraboldextraboldextraboldextraboldextrabold",
			createdAt: "6:18 PM",
		},
	];

	return (
		<div className={"border border-input rounded-xl overflow-hidden"}>
			<div className={"flex items-center justify-between gap-4 p-4 bg-sidebar border-b border-input"}>
				<span className={""}>Users in room ({users.length})</span>
				<ul className={"flex gap-4"}>
					{users.reverse().map(user => (
						<li key={user.id}>
							<div className={"flex items-center gap-4"}>
								<Avatar>
									<AvatarImage src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?scale=60&seed=${user.name}`} />
									<AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
								</Avatar>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className={"flex flex-col"}>
				<div className={"relative max-h-96 overflow-auto"} ref={scrollRef}>
					<ul className={"relative z-10 flex flex-col gap-4 p-4"}>
						{messages.reverse().map(message => (
							<li className={"block"} key={message.uid}>
								<ChatMessage message={message} />
							</li>
						))}
					</ul>
					<ChatBackground />
				</div>
				<form className={"flex items-center gap-4 p-4 border-t border-input"}>
					<fieldset className={"grid gap-2 flex-1"}>
						<Input className={"bg-sidebar"} type={"text"} id={"placeholder-input"} />
					</fieldset>
					<fieldset className={"grid gap-2"}>
						<Button
							className={"size-9 shadow-none"}
							variant={"outline"}
							size={"icon"}
							aria-label={"Placeholder"}
							type={"submit"}
						>
							<SendHorizontal />
						</Button>
					</fieldset>
				</form>
			</div>
		</div>
	);
}
