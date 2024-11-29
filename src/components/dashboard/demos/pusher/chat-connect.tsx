"use client";

import { nanoid } from "nanoid";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import useStore from "@/stores/chat.store";
import { env, constants } from "@/configs/constants/pusher";

export default function ChatConnect() {
	const [loader, setLoader] = useState<boolean>(false);
	const { setUserUid } = useStore();

	const handleConnect = async () => {
		setLoader(true);

		const body = {
			channel: constants.CHANNEL,
			event: constants.USER_CONNECTED,
			uid: nanoid(),
		};

		const response: Response = await fetch(env.apiUrl, {
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

	return (
		<Button className={"m-auto"} onClick={handleConnect}>
			{loader && <Loader2 className="animate-spin" />}
			Connect to Chat
		</Button>
	);
}
