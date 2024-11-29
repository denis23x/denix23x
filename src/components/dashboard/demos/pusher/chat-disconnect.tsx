"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import useStore from "@/stores/chat.store";
import { env, constants } from "@/configs/constants/pusher";

export default function ChatDisconnect() {
	const [loader, setLoader] = useState<boolean>(false);
	const { userUid, setUserUid } = useStore();

	const handleDisconnect = async () => {
		setLoader(true);

		const body = {
			channel: constants.CHANNEL,
			event: constants.USER_DISCONNECTED,
			uid: userUid,
		};

		const response: Response = await fetch(env.apiUrl, {
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

	return (
		<Button onClick={handleDisconnect}>
			{loader && <Loader2 className="animate-spin" />}
			Disconnect
		</Button>
	);
}
