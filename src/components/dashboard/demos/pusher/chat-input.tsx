"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, SendHorizontal } from "lucide-react";
import { toast } from "sonner";
import useStore from "@/stores/chat.store";
import { nanoid } from "nanoid";
import type { ChatMessage } from "@/interfaces/dashboard/demos/chat-message";
import { env, constants } from "@/configs/constants/pusher";

export default function ChatInput() {
	const { userUid } = useStore();

	const formSchema = z.object({
		message: z.string().min(2),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		if (userUid) {
			const body: ChatMessage = {
				uid: nanoid(),
				userUid,
				message: values.message,
				createdAt: new Date().toString(),
			};

			const response: Response = await fetch(env.apiUrl, {
				method: "POST",
				body: JSON.stringify({
					channel: constants.CHANNEL,
					event: constants.MESSAGE_ADDED,
					...body,
				}),
			});

			if (!response.ok) {
				toast.error("Failed to push data");
			} else {
				form.reset();
			}
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={"flex items-center gap-4 p-4 border-t border-input bg-background relative"}
			>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className={"flex-1"}>
							<FormControl>
								<Input
									className={"bg-sidebar w-full"}
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder={"Write a message.."}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button
					className={"size-9 shadow-none"}
					variant={"outline"}
					size={"icon"}
					aria-label={"Placeholder"}
					type={"submit"}
					disabled={form.formState.disabled || form.formState.isSubmitting}
				>
					{form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : <SendHorizontal />}
				</Button>
			</form>
		</Form>
	);
}
