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
import { nanoid } from "nanoid";

const pusher: Pusher = new Pusher("4033f77ec34c54548123", {
	cluster: "mt1",
});

export default function Chat() {
	const chatRef = useRef(null);
	const { userUid, setUserUid } = useStore();
	const [loader, setLoader] = useState<boolean>(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [users, setUsers] = useState<ChatUser[]>([]);

	useEffect(() => {
		if (userUid) {
			const sendBeacon = () => {
				const body = JSON.stringify({
					channel: "pusher",
					event: "user:disconnected",
					uid: userUid,
				});

				navigator.sendBeacon("/api/v1/websocket", body);

				// Flush

				setUserUid(null);
			};

			window.addEventListener("pagehide", sendBeacon);

			return () => {
				sendBeacon();

				window.removeEventListener("pagehide", sendBeacon);
			};
		}
	}, [userUid]);

	useEffect(() => {
		fetch("/api/v1/websocket")
			.then(r => r.json())
			.then(d => {
				const { users, messages } = d.data;

				setUsers(users);
				setMessages(messages);

				// Scroll to the bottom

				if (chatRef.current) {
					const div: HTMLDivElement = chatRef.current;

					div.scrollTop = div.scrollHeight;
				}
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
		setLoader(true);

		const body = {
			channel: "pusher",
			event: "user:connected",
			uid: nanoid(),
		};

		const response: Response = await fetch("/api/v1/websocket", {
			method: "POST",
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			toast.error("Failed to connect");
		} else {
			toast.error("You have been connected to chat");

			setUserUid(body.uid);
		}

		setLoader(false);
	};

	const handleDisconnect = async () => {
		setLoader(true);

		const body = {
			channel: "pusher",
			event: "user:disconnected",
			uid: userUid,
		};

		const response: Response = await fetch("/api/v1/websocket", {
			method: "POST",
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			toast.error("Failed to disconnect");
		} else {
			toast.error("You have been disconnected");

			setUserUid(null);
		}

		setLoader(false);
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
		<div className={"border border-input rounded-xl relative overflow-hidden"}>
			<div className={"flex items-center justify-between gap-4 p-4 bg-sidebar border-b border-input"}>
				<ul className={"flex gap-4 min-h-9"}>
					{users.reverse().map((user: ChatUser) => (
						<li key={user.uid}>
							<Avatar className={"size-9"}>
								<AvatarImage src={`https://api.dicebear.com/9.x/fun-emoji/png?scale=75&seed=${user.uid}`} />
								<AvatarFallback></AvatarFallback>
							</Avatar>
						</li>
					))}
				</ul>
				{userUid && (
					<div className={"flex items-center gap-4"}>
						<Button variant={"destructive"} onClick={handleReset}>
							Reset
						</Button>
						<Button onClick={handleDisconnect}>
							{loader && <Loader2 className="animate-spin" />}
							Disconnect
						</Button>
					</div>
				)}
			</div>
			<div className={"flex flex-col"}>
				<div className={"relative h-72 overflow-auto"} ref={chatRef}>
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
			{!userUid && (
				<div className={"flex absolute size-full inset-0 p-4 bg-background/80 z-10"}>
					<Button className={"m-auto"} onClick={handleConnect}>
						{loader && <Loader2 className="animate-spin" />}
						Connect to Chat
					</Button>
				</div>
			)}
		</div>
	);
}
