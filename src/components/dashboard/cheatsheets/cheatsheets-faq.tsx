"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import useStore from "@/stores/vue.store";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function CheatsheetsFaq({ name }: { name: string }) {
	const { accordionGet } = useStore();
	const [fastFont, setFastFont] = useState(true);

	return (
		<div>
			<div className={"flex items-center justify-between rounded-lg border border-input p-3 shadow-sm"}>
				<div className={"flex flex-col gap-2"}>
					<Label htmlFor="fast-font">Fast Font</Label>
					<small>
						This font provides faster reading through facilitating the reading process by guiding the eyes through text
						with artificial fixation points.
					</small>
				</div>
				<Switch id="fast-font" checked={fastFont} onCheckedChange={() => setFastFont(!fastFont)} />
			</div>
			<Accordion type="single" className={`w-full ${fastFont ? "font-fast-sans" : ""}`} collapsible>
				{accordionGet(name).map(q => (
					<AccordionItem key={q.uid} value={q.uid}>
						<AccordionTrigger>{q.name}</AccordionTrigger>
						<AccordionContent>
							<ul className={"flex flex-wrap gap-4"}>
								{q.questions.map(a => (
									<li key={a.uid}>
										<Popover>
											<PopoverTrigger asChild>
												<Button variant="outline">{a.question}</Button>
											</PopoverTrigger>
											<PopoverContent>
												<p className={`max-w-96 text-sm ${fastFont ? "font-fast-sans" : ""}`}>{a.answer}</p>
											</PopoverContent>
										</Popover>
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
