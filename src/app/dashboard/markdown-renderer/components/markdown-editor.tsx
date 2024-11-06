"use client";

import { Button } from "@/components/ui/button";
import {
	Bold,
	Code,
	Columns2,
	Fullscreen,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Image,
	Italic,
	Link,
	List,
	ListOrdered,
	ListTodo,
	MessageCircle,
	Minus,
	PanelLeftOpen,
	PanelRightOpen,
	Quote,
	Strikethrough,
	Table,
} from "lucide-react";
import React from "react";
import useStore from "@/app/dashboard/markdown-renderer/store";
import MDEditor, {
	bold,
	checkedListCommand,
	code,
	codeEdit,
	codeLive,
	codePreview,
	comment,
	divider,
	fullscreen,
	hr,
	ICommand,
	image,
	italic,
	link,
	orderedListCommand,
	quote,
	strikethrough,
	table,
	title1,
	title2,
	title3,
	title4,
	title5,
	title6,
	unorderedListCommand,
} from "@uiw/react-md-editor/nohighlight";

export default function MarkdownEditor() {
	const { input, setInput } = useStore();

	const xBold: ICommand = {
		...bold,
		icon: <Bold />,
	};

	const xItalic: ICommand = {
		...italic,
		icon: <Italic />,
	};

	const xStrikethrough: ICommand = {
		...strikethrough,
		icon: <Strikethrough />,
	};

	// --

	const xTitle1: ICommand = {
		...title1,
		icon: <Heading1 />,
	};

	const xTitle2: ICommand = {
		...title2,
		icon: <Heading2 />,
	};

	const xTitle3: ICommand = {
		...title3,
		icon: <Heading3 />,
	};

	const xTitle4: ICommand = {
		...title4,
		icon: <Heading4 />,
	};

	const xTitle5: ICommand = {
		...title5,
		icon: <Heading5 />,
	};

	const xTitle6: ICommand = {
		...title6,
		icon: <Heading6 />,
	};

	// --

	const xLink: ICommand = {
		...link,
		icon: <Link />,
	};

	const xQuote: ICommand = {
		...quote,
		icon: <Quote />,
	};

	const xCode: ICommand = {
		...code,
		icon: <Code />,
	};

	const xComment: ICommand = {
		...comment,
		icon: <MessageCircle />,
	};

	const xImage: ICommand = {
		...image,
		icon: <Image />,
	};

	const xTable: ICommand = {
		...table,
		icon: <Table />,
	};

	// --

	const xList: ICommand = {
		...unorderedListCommand,
		icon: <List />,
	};

	const xListOrdered: ICommand = {
		...orderedListCommand,
		icon: <ListOrdered />,
	};

	const xListTodo: ICommand = {
		...checkedListCommand,
		icon: <ListTodo />,
	};

	// --

	const xCodeEdit: ICommand = {
		...codeEdit,
		icon: <PanelLeftOpen />,
	};

	const xCodeLive: ICommand = {
		...codeLive,
		icon: <Columns2 />,
	};

	const xCodePreview: ICommand = {
		...codePreview,
		icon: <PanelRightOpen />,
	};

	const xFullscreen: ICommand = {
		...fullscreen,
		icon: <Fullscreen />,
	};

	// --

	const xHr: ICommand = {
		...hr,
		icon: <Minus />,
	};

	return (
		<div className={"grid gap-4"}>
			<MDEditor
				value={input}
				enableScroll={true}
				visibleDragbar={false}
				height={512}
				onChange={e => setInput(String(e))}
				commands={[
					xBold,
					xItalic,
					xStrikethrough,
					divider,
					xTitle1,
					xTitle2,
					xTitle3,
					xTitle4,
					xTitle5,
					xTitle6,
					divider,
					xLink,
					xQuote,
					xCode,
					xComment,
					xImage,
					xTable,
					divider,
					xList,
					xListOrdered,
					xListTodo,
					divider,
					xHr,
				]}
				extraCommands={[xCodeEdit, xCodeLive, xCodePreview, xFullscreen]}
			/>
			<Button variant={"outline"}>Download Markdown as File</Button>
		</div>
	);
}
