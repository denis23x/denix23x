"use client";

import { useEffect, useRef, useState } from "react";
import Pusher, { type Channel } from "pusher-js";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import useStore from "@/stores/chat.store";
import type { ChatMessage } from "@/interfaces/dashboard/demos/chat-message";
import type { ChatUser } from "@/interfaces/dashboard/demos/chat-user";
import { env, constants } from "@/configs/constants/pusher";
import ChatAvatar from "./chat-avatar";
import ChatConnect from "./chat-connect";
import ChatDisconnect from "./chat-disconnect";
import ChatBubble from "./chat-bubble";
import ChatBackground from "./chat-background";
import ChatInput from "./chat-input";

const pusher: Pusher = new Pusher(env.appKey, {
	cluster: env.cluster,
	// httpHost: "localhost",
	// httpPort: 3000
	forceTLS: true,
});

export default function Chat() {
	const chatRef = useRef(null);
	const { userUid, setUserUid } = useStore();
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [users, setUsers] = useState<ChatUser[]>([]);

	useEffect(() => {
		if (userUid) {
			const sendBeacon = () => {
				const body = JSON.stringify({
					channel: constants.CHANNEL,
					event: constants.USER_DISCONNECTED,
					uid: userUid,
				});

				navigator.sendBeacon(env.apiUrl, body);

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
		setTimeout(() => {
			if (chatRef.current) {
				const div: HTMLDivElement = chatRef.current;

				div.scrollTop = div.scrollHeight;
			}
		});
	}, [messages]);

	useEffect(() => {
		fetch(env.apiUrl)
			.then(r => r.json())
			.then(r => {
				setUsers(r.data.users);
				setMessages(r.data.messages);
			});

		const channel: Channel = pusher.subscribe("pusher");

		channel.bind(constants.USER_CONNECTED, (user: ChatUser) => {
			setUsers(users => [...users, user]);
		});

		channel.bind(constants.USER_DISCONNECTED, (user: ChatUser) => {
			setUsers(users => users.filter(u => u.uid !== user.uid));
		});

		channel.bind(constants.MESSAGE_ADDED, (message: ChatMessage) => {
			setMessages(messages => [...messages, message]);
		});

		return () => {
			channel.unbind_all();
		};
	}, []);

	const handleReset = async () => {
		const response: Response = await fetch(env.apiUrl, {
			method: "DELETE",
		});

		if (!response.ok) {
			toast.error("Failed to reset");
		}
	};

	return (
		<div className={"border border-input rounded-xl overflow-hidden relative"}>
			<div className={"flex items-center justify-between gap-4 p-4 bg-sidebar border-b border-input"}>
				<ul className={"flex gap-4 min-h-9"}>
					{users.reverse().map((user: ChatUser) => (
						<li key={user.uid}>
							<ChatAvatar uid={user.uid} />
						</li>
					))}
				</ul>
				{userUid && (
					<div className={"flex items-center gap-4"}>
						<Button variant={"destructive"} onClick={handleReset}>
							Reset
						</Button>
						<ChatDisconnect />
					</div>
				)}
			</div>
			<div className={"flex flex-col relative"}>
				<ul className={"relative z-10 h-72 overflow-auto flex flex-col gap-4 p-4"} ref={chatRef}>
					{messages.map((message: ChatMessage) => (
						<li className={"block"} key={message.uid}>
							<ChatBubble message={message} />
						</li>
					))}
				</ul>
				<ChatBackground />
				<ChatInput />
			</div>
			{!userUid && (
				<div className={"flex absolute size-full inset-0 p-4 bg-background/80 z-10"}>
					<ChatConnect />
				</div>
			)}
		</div>
	);
}
