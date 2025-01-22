import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Nuxt",
	description:
		"Nuxt.js is a Vue-based framework for building high-performance web apps with server-side rendering, static site generation, and seamless SEO optimization.",
	other: {
		icon: (
			<svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<title>Nuxt</title>
				<path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z" />
			</svg>
		),
	},
};

type CList = {
	id: number;
	name: string;
	questions: QList[];
};

type QList = {
	id: number;
	question: string;
	answer: string;
};

const list: CList[] = [
	{
		id: 1,
		name: "Основные принципы и возможности Nuxt.js",
		questions: [
			{
				id: 1,
				question: "Что такое Nuxt.js и для чего он используется?",
				answer:
					"Nuxt.js — это фреймворк на основе Vue.js, который упрощает разработку серверно-рендерируемых приложений (SSR), статических сайтов и одностраничных приложений (SPA).",
			},
			{
				id: 2,
				question: "Какие основные преимущества использования Nuxt.js?",
				answer:
					"Nuxt.js упрощает реализацию SSR, маршрутизации, настройки middleware, имеет поддержку модульной архитектуры и позволяет создавать статические сайты с генерацией на этапе сборки.",
			},
			{
				id: 3,
				question: "Какие режимы работы поддерживает Nuxt.js?",
				answer:
					"Nuxt.js поддерживает три режима работы: серверно-рендерируемый (SSR), статическая генерация (SSG) и одностраничное приложение (SPA).",
			},
			{
				id: 4,
				question: "Как создать новый проект Nuxt.js?",
				answer:
					"Для создания нового проекта нужно использовать команду npx nuxi init <project-name>, а затем установить зависимости с помощью npm install или yarn.",
			},
		],
	},
	{
		id: 2,
		name: "Маршрутизация и страницы",
		questions: [
			{
				id: 1,
				question: "Как работает автоматическая маршрутизация в Nuxt.js?",
				answer:
					"Nuxt.js автоматически генерирует маршруты на основе структуры директорий в папке pages. Например, файл pages/about.vue будет доступен по маршруту /about.",
			},
			{
				id: 2,
				question: "Как создать динамический маршрут в Nuxt.js?",
				answer:
					"Динамические маршруты создаются с помощью файлов с квадратными скобками, например, pages/user/[id].vue для маршрута /user/:id.",
			},
			{
				id: 3,
				question: "Как использовать nested routes в Nuxt.js?",
				answer:
					"Для создания вложенных маршрутов необходимо использовать директории и файл _layout.vue. Например, структура pages/blog/_layout.vue и pages/blog/post.vue создаёт маршруты для блога и его постов.",
			},
			{
				id: 4,
				question: "Как настроить перенаправление маршрутов?",
				answer: "Перенаправления можно настроить с помощью middleware или в конфигурации serverMiddleware.",
			},
		],
	},
	{
		id: 3,
		name: "Данные и состояние",
		questions: [
			{
				id: 1,
				question: "Как загружать данные в компоненты Nuxt.js?",
				answer:
					"Для загрузки данных используется функция asyncData(), которая вызывается перед рендерингом компонента и позволяет асинхронно получать данные.",
			},
			{
				id: 2,
				question: "Чем отличается asyncData() от fetch() в Nuxt.js?",
				answer:
					"asyncData() заменяет данные компонента перед рендерингом, а fetch() используется для обновления данных в компоненте после его инициализации.",
			},
			{
				id: 3,
				question: "Как управлять глобальным состоянием в Nuxt.js?",
				answer:
					"Глобальное состояние можно управлять с помощью Vuex, который встроен в Nuxt.js. Директория store автоматически регистрируется как хранилище.",
			},
			{
				id: 4,
				question: "Как использовать плагины в Nuxt.js для работы с API?",
				answer:
					"Плагины можно использовать для создания экземпляров axios или других библиотек и их интеграции через папку plugins.",
			},
		],
	},
	{
		id: 4,
		name: "SEO и производительность",
		questions: [
			{
				id: 1,
				question: "Как оптимизировать SEO в приложении Nuxt.js?",
				answer:
					"SEO оптимизируется через meta-данные, которые можно задавать в файле nuxt.config.js, а также с помощью свойств head в компонентах.",
			},
			{
				id: 2,
				question: "Как включить генерацию статических сайтов в Nuxt.js?",
				answer:
					"Для генерации статического сайта нужно установить режим static в nuxt.config.js и запустить команду npm run generate.",
			},
			{
				id: 3,
				question: "Как уменьшить размер бандлов в Nuxt.js?",
				answer:
					"Для уменьшения размера бандлов используется tree shaking, динамическая загрузка модулей и настройка build.optimizeCSS в nuxt.config.js.",
			},
			{
				id: 4,
				question: "Как настроить кеширование для улучшения производительности?",
				answer:
					"Кеширование настраивается через HTTP-заголовки, а также с помощью модулей, таких как @nuxt/pwa или плагинов для CDN.",
			},
		],
	},
	{
		id: 5,
		name: "Интеграция и инструменты",
		questions: [
			{
				id: 1,
				question: "Какие модули часто используются в Nuxt.js?",
				answer: "Наиболее популярные модули: @nuxt/http, @nuxt/auth, @nuxt/pwa, @nuxt/content и @nuxt/axios.",
			},
			{
				id: 2,
				question: "Как интегрировать TypeScript в проект Nuxt.js?",
				answer:
					"TypeScript интегрируется через @nuxt/typescript-build модуль, а также через установку соответствующих типов для Nuxt.js.",
			},
			{
				id: 3,
				question: "Как подключить и использовать PWA в Nuxt.js?",
				answer:
					"Для подключения PWA используется модуль @nuxt/pwa, который добавляет поддержку манифеста, offline-режима и сервис-воркеров.",
			},
			{
				id: 4,
				question: "Как подключить и настроить Google Analytics в Nuxt.js?",
				answer:
					"Для интеграции Google Analytics используется модуль @nuxtjs/google-analytics, который требует указания идентификатора отслеживания в nuxt.config.js.",
			},
		],
	},
];

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Nuxt</h1>
			<p className={"leading-7"}>
				Nuxt.js is a versatile framework built on Vue.js, designed for creating server-side rendered, static, and
				single-page applications. With its simple configuration, automatic routing, and powerful modules, Nuxt
				streamlines development while enhancing SEO and performance. Ideal for projects of any scale, Nuxt provides an
				efficient, intuitive approach to building modern web applications.
			</p>
			<Separator />
			<Accordion type="single" className={"w-full"} collapsible>
				{list.map((x: CList) => (
					<AccordionItem key={x.id} value={x.name}>
						<AccordionTrigger>{x.name}</AccordionTrigger>
						<AccordionContent>
							<ul className={"flex flex-wrap gap-4"}>
								{x.questions.map((y: QList) => (
									<li key={y.id}>
										<Popover>
											<PopoverTrigger asChild>
												<Button className={""} variant="outline">
													{y.question}
												</Button>
											</PopoverTrigger>
											<PopoverContent>
												<p className={"max-w-96 font-fast-sans text-sm py-2"}>{y.answer}</p>
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
