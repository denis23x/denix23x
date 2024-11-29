"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatBubble from "@/components/dashboard/demos/websocket/chat-bubble";
import ChatBackground from "@/components/dashboard/demos/websocket/chat-background";
import ChatInput from "@/components/dashboard/demos/websocket/chat-input";
import { useEffect, useRef, useState } from "react";
import Pusher, { type Channel } from "pusher-js";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import useStore from "@/stores/chat.store";
import type { ChatMessage } from "@/interfaces/dashboard/demos/chat-message";
import type { ChatUser } from "@/interfaces/dashboard/demos/chat-user";

const pusher: Pusher = new Pusher("4033f77ec34c54548123", {
	cluster: "mt1",
});

export default function Chat() {
	// 	// // Scroll to the bottom
	// 	//
	// 	// if (scrollRef.current) {
	// 	// 	const div: HTMLDivElement = scrollRef.current;
	// 	//
	// 	// 	div.scrollTop = div.scrollHeight;
	// 	// }

	const scrollRef = useRef(null);

	const { userUid } = useStore();

	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [isConnectedLoader, setIsConnectedLoader] = useState<boolean>(false);

	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [users, setUsers] = useState<ChatUser[]>([]);

	useEffect(() => {
		if (isConnected) {
			toast.error("You have been connected to chat");

			window.addEventListener("beforeunload", handleDisconnect);

			return () => {
				window.removeEventListener("beforeunload", handleDisconnect);

				handleDisconnect();
			};
		}
	}, [isConnected]);

	useEffect(() => {
		fetch("/api/v1/websocket")
			.then(r => r.json())
			.then(d => {
				const { users, messages } = d.data;

				setUsers(users);
				setMessages(messages);
			});

		const channel: Channel = pusher.subscribe("pusher");

		channel.bind("user:connected", (user: ChatUser) => {
			setUsers(users => [...users, user]);
		});

		channel.bind("user:disconnected", (user: ChatUser) => {
			setUsers(users => users.filter(u => u.uid !== user.uid));
		});

		channel.bind("message:added", (message: ChatMessage) => {
			setMessages(messages => [...messages, message]);
		});

		channel.bind("message:deleted", (message: ChatMessage) => {
			setMessages(messages => messages.filter(m => m.uid !== message.uid));
		});

		return () => {
			channel.unbind_all();
		};
	}, []);

	const handleConnect = async () => {
		setIsConnectedLoader(true);

		const body = JSON.stringify({
			channel: "pusher",
			event: "user:connected",
			uid: userUid,
		});

		const response: Response = await fetch("/api/v1/websocket", {
			method: "POST",
			body,
		});

		if (!response.ok) {
			toast.error("Failed to connect");
		} else {
			setIsConnected(true);
		}

		setIsConnectedLoader(false);
	};

	const handleDisconnect = () => {
		const body = JSON.stringify({
			channel: "pusher",
			event: "user:disconnected",
			uid: userUid,
		});

		navigator.sendBeacon("/api/v1/websocket", body);

		// Notify

		toast.error("You have been disconnected");
	};

	const handleReset = async () => {
		const response: Response = await fetch("/api/v1/websocket", {
			method: "DELETE",
		});

		if (!response.ok) {
			toast.error("Failed to reset");
		}
	};

	return (
		<div className={"border border-input rounded-xl overflow-hidden relative"}>
			<div className={"flex items-center justify-between gap-4 p-4 bg-sidebar border-b border-input"}>
				<Button variant={"destructive"} onClick={handleReset}>
					Reset
				</Button>
				{/*<Button variant={"destructive"} onClick={handleDisconnect}>*/}
				{/*	Disconnect*/}
				{/*</Button>*/}
				<span className={""}>Users in room ({users.length})</span>
				<ul className={"flex gap-4"}>
					{users.reverse().map((user: ChatUser) => (
						<li key={user.uid}>
							<Avatar>
								<AvatarImage src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?scale=60&seed=${user.uid}`} />
								<AvatarFallback></AvatarFallback>
							</Avatar>
						</li>
					))}
				</ul>
			</div>
			<div className={"flex flex-col"}>
				<div className={"relative h-72 overflow-auto"} ref={scrollRef}>
					<ul className={"relative z-10 flex flex-col gap-4 p-4"}>
						{messages.map((message: ChatMessage) => (
							<li className={"block"} key={message.uid}>
								<ChatBubble message={message} />
							</li>
						))}
					</ul>
					<ChatBackground />
				</div>
				<ChatInput />
			</div>
			{!isConnected && (
				<div className={"flex absolute size-full inset-0 p-4 bg-background/80 z-10"}>
					<Button className={"m-auto"} onClick={handleConnect}>
						{isConnectedLoader && <Loader2 className="animate-spin" />}
						Connect to Chat
					</Button>
				</div>
			)}
		</div>
	);
}
