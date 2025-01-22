import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const metadata: Metadata = {
	title: "Vue",
	description:
		"Vue.js is a flexible, progressive JavaScript framework for building dynamic, high-performance web applications with reactive data binding and component-based architecture.",
	other: {
		icon: (
			<svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<title>Vue.js</title>
				<path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
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
		name: "Основные изменения и особенности Vue 3",
		questions: [
			{
				id: 1,
				question: "Что нового в Vue 3 по сравнению с Vue 2?",
				answer:
					"Vue 3 включает новый Composition API, улучшенную производительность, поддержку TypeScript, новый механизм рендеринга, улучшенное управление жизненным циклом, Teleport, Suspense, улучшенную поддержку реактивности и многое другое.",
			},
			{
				id: 2,
				question: "Что такое Composition API и как оно отличается от Options API?",
				answer:
					"Composition API — это новый способ организации логики компонента, где данные, вычисляемые свойства и методы инкапсулируются внутри setup() функции. В отличие от Options API, где используется объект с различными опциями (data, methods, computed), Composition API предлагает более гибкую и модульную структуру.",
			},
			{
				id: 3,
				question: "Как можно улучшить производительность Vue 3?",
				answer:
					"Использование keep-alive, динамическая загрузка компонентов (code-splitting), уменьшение размера бандлов с помощью tree shaking, использование Virtual DOM и улучшенная реактивность в Vue 3 способствуют улучшению производительности.",
			},
		],
	},
	{
		id: 2,
		name: "Реактивность и данные",
		questions: [
			{
				id: 1,
				question: "Как можно использовать реактивные данные в Vue 3?",
				answer:
					"В Vue 3 данные становятся реактивными через reactive() или ref(). reactive() используется для объектов, а ref() — для примитивных типов (строк, чисел и т.д.).",
			},
			{
				id: 2,
				question: "Что такое ref и как оно используется в Composition API?",
				answer:
					"ref используется для создания реактивных примитивных значений. Например, можно объявить переменную const count = ref(0), и Vue автоматически будет отслеживать ее изменения.",
			},
			{
				id: 3,
				question: "Как работает reactive в Vue 3 и в чем отличие от ref?",
				answer:
					"reactive делает объект или массив реактивным, создавая прослойку для отслеживания изменений. В отличие от ref, который используется для примитивных типов, reactive применяется для сложных объектов или массивов.",
			},
			{
				id: 4,
				question: "Что такое computed свойства в Vue 3?",
				answer:
					"computed — это вычисляемые свойства, которые кэшируют результат, пока зависимые данные не изменятся. Они используются для вычисления значений на основе реактивных данных.",
			},
			{
				id: 5,
				question: "Как работает watch в Vue 3 и когда его использовать?",
				answer:
					"watch отслеживает изменения реактивных данных и позволяет выполнить действие при их изменении. Используется для выполнения побочных эффектов, например, для вызова API.",
			},
			{
				id: 6,
				question: "Что такое реактивность в Vue.js?",
				answer:
					"Реактивность — это способность Vue.js автоматически отслеживать изменения данных и обновлять пользовательский интерфейс.",
			},
			{
				id: 7,
				question: "Как в Vue.js можно привязать данные к атрибутам HTML?",
				answer:
					"Для привязки данных к атрибутам используется директива v-bind или её сокращённый вариант двоеточия (:).",
			},
		],
	},
	{
		id: 3,
		name: "Механизмы Vue 3",
		questions: [
			{
				id: 1,
				question: "Что такое provide и inject в Vue 3?",
				answer:
					"provide и inject позволяют передавать данные от родительского компонента к потомкам, не используя props. Это полезно для более глубокой передачи данных, например, в случае глобальных настроек.",
			},
			{
				id: 2,
				question: "Объясните принцип работы с v-model в Vue 3.",
				answer:
					"В Vue 3 v-model теперь позволяет использовать несколько модификаторов. Например, можно указать имя привязываемого свойства (modelValue по умолчанию) и события (update:modelValue по умолчанию).",
			},
			{
				id: 3,
				question: "Что такое Teleport в Vue 3 и как его использовать?",
				answer:
					"Teleport позволяет переносить содержимое компонента в другую часть DOM-дерева. Это полезно для модальных окон, всплывающих подсказок и других элементов, которые должны быть отрисованы вне родительского контейнера.",
			},
			{
				id: 4,
				question: "Что такое и как использовать Suspense в Vue 3?",
				answer:
					"Suspense позволяет приостановить рендеринг компонента до тех пор, пока не будут загружены асинхронные данные. Это полезно для работы с асинхронными компонентами или API-запросами.",
			},
			{
				id: 5,
				question: "Как работает новый механизм маршрутизации в Vue 3?",
				answer:
					"Vue Router в версии 4.x, который поддерживает Vue 3, был переписан с учетом Composition API. Он теперь имеет поддержку динамических маршрутов, вложенных маршрутов, а также улучшенную работу с асинхронными компонентами.",
			},
			{
				id: 6,
				question: "Что такое директивы Vue.js?",
				answer:
					"Директивы — это специальные атрибуты, добавляемые к HTML, которые предоставляют возможности для работы с DOM, такие как v-if, v-for и v-bind.",
			},
			{
				id: 7,
				question: "Как можно создать пользовательскую директиву в Vue.js?",
				answer:
					"Пользовательская директива создаётся через функцию directive, где можно определить её поведение в хуках bind, inserted, update и т.д.",
			},
		],
	},
	{
		id: 4,
		name: "Жизненные циклы и события",
		questions: [
			{
				id: 1,
				question: "Как использовать жизненные циклы компонента в Vue 3?",
				answer:
					"Жизненные циклы в Vue 3 можно использовать через onMounted, onUpdated, onBeforeUnmount и другие функции из Composition API, которые заменяют старые методы, такие как mounted и destroyed.",
			},
			{
				id: 2,
				question: "Как обрабатывать события в Vue 3?",
				answer:
					"В Vue 3 события можно обрабатывать через директиву @ (например, @click), а также использовать emit в дочерних компонентах для отправки событий на родителя.",
			},
			{
				id: 3,
				question: "Что такое emits и как его использовать?",
				answer:
					"emits — это механизм, который позволяет компонентам явно объявлять, какие события они могут генерировать. Это улучшает читаемость кода и позволяет разработчикам легче понимать интерфейс компонента.",
			},
			{
				id: 4,
				question: "Какие стадии жизненного цикла компонента есть в Vue.js?",
				answer:
					"Основные стадии: создание (beforeCreate, created), монтирование (beforeMount, mounted), обновление (beforeUpdate, updated) и уничтожение (beforeUnmount, unmounted).",
			},
		],
	},
	{
		id: 5,
		name: "Интеграция и инструменты",
		questions: [
			{
				id: 1,
				question: "Как добавить TypeScript в проект на Vue 3?",
				answer:
					"Для добавления TypeScript в проект Vue 3 нужно установить соответствующие зависимости (vue, typescript, @vue/tsconfig) и настроить конфигурацию в файле tsconfig.json.",
			},
			{
				id: 2,
				question: "Как управлять состоянием приложения в Vue 3 с помощью Vuex?",
				answer:
					"Vuex остается основным инструментом для управления состоянием в Vue 3. С помощью Vuex можно организовать централизованное хранилище состояний, мутации, действия и геттеры для глобального состояния приложения.",
			},
			{
				id: 3,
				question: "Как обрабатывать асинхронные операции в Vue 3 с помощью Composition API?",
				answer:
					"Асинхронные операции можно обрабатывать с помощью async/await внутри setup() функции, например, при вызове API. Можно использовать watch для отслеживания асинхронных изменений или Suspense для ожидания результата.",
			},
		],
	},
];

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Vue</h1>
			<p className={"leading-7"}>
				Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications.
				Known for its simplicity and flexibility, Vue allows developers to easily integrate into projects of any size,
				offering reactive data binding and a component-based architecture. Whether you’re creating a complex app or
				enhancing a small feature, Vue provides an intuitive and efficient approach for building dynamic,
				high-performance web applications.
			</p>
			<Separator />
			<Accordion type="single" className={"w-full"} collapsible>
				{list.map((x: CList) => (
					<AccordionItem key={x.id} value={String(x.id)}>
						<AccordionTrigger>{x.name}</AccordionTrigger>
						<AccordionContent>
							<ul className={"flex flex-wrap font-fast-sans gap-4"}>
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
