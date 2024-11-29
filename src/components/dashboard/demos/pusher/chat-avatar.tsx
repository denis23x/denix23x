"use client";

import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatAvatar({ uid }: { uid: string }) {
	const avatar = createAvatar(funEmoji, {
		seed: uid,
		scale: 75,
	});

	return (
		<Avatar className={"size-9"}>
			<AvatarImage src={avatar.toDataUri()} />
			<AvatarFallback></AvatarFallback>
		</Avatar>
	);
}
