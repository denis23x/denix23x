import { create, StoreApi, UseBoundStore } from "zustand";
import { nanoid } from "nanoid";

type CheatsheetAccordion = {
	uid: string;
	name: string;
	questions: CheatsheetAccordionQuestion[];
};

type CheatsheetAccordionQuestion = {
	uid: string;
	question: string;
	answer: string;
};

interface StoreState {
	accordionVue: CheatsheetAccordion[];
	accordionNuxt: CheatsheetAccordion[];
	accordionGet: (accordionName: string) => CheatsheetAccordion[];
}

const accordionVue: CheatsheetAccordion[] = [
	{
		uid: nanoid(),
		name: "Основные изменения и особенности Vue 3",
		questions: [
			{
				uid: nanoid(),
				question: "Что нового в Vue 3 по сравнению с Vue 2?",
				answer:
					"Vue 3 включает новый Composition API, улучшенную производительность, поддержку TypeScript, новый механизм рендеринга, улучшенное управление жизненным циклом, Teleport, Suspense, улучшенную поддержку реактивности и многое другое.",
			},
			{
				uid: nanoid(),
				question: "Что такое Composition API и как оно отличается от Options API?",
				answer:
					"Composition API — это новый способ организации логики компонента, где данные, вычисляемые свойства и методы инкапсулируются внутри setup() функции. В отличие от Options API, где используется объект с различными опциями (data, methods, computed), Composition API предлагает более гибкую и модульную структуру.",
			},
			{
				uid: nanoid(),
				question: "Как можно улучшить производительность Vue 3?",
				answer:
					"Использование keep-alive, динамическая загрузка компонентов (code-splitting), уменьшение размера бандлов с помощью tree shaking, использование Virtual DOM и улучшенная реактивность в Vue 3 способствуют улучшению производительности.",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Реактивность и данные",
		questions: [
			{
				uid: nanoid(),
				question: "Как можно использовать реактивные данные в Vue 3?",
				answer:
					"В Vue 3 данные становятся реактивными через reactive() или ref(). reactive() используется для объектов, а ref() — для примитивных типов (строк, чисел и т.д.).",
			},
			{
				uid: nanoid(),
				question: "Что такое ref и как оно используется в Composition API?",
				answer:
					"ref используется для создания реактивных примитивных значений. Например, можно объявить переменную const count = ref(0), и Vue автоматически будет отслеживать ее изменения.",
			},
			{
				uid: nanoid(),
				question: "Как работает reactive в Vue 3 и в чем отличие от ref?",
				answer:
					"reactive делает объект или массив реактивным, создавая прослойку для отслеживания изменений. В отличие от ref, который используется для примитивных типов, reactive применяется для сложных объектов или массивов.",
			},
			{
				uid: nanoid(),
				question: "Что такое computed свойства в Vue 3?",
				answer:
					"computed — это вычисляемые свойства, которые кэшируют результат, пока зависимые данные не изменятся. Они используются для вычисления значений на основе реактивных данных.",
			},
			{
				uid: nanoid(),
				question: "Как работает watch в Vue 3 и когда его использовать?",
				answer:
					"watch отслеживает изменения реактивных данных и позволяет выполнить действие при их изменении. Используется для выполнения побочных эффектов, например, для вызова API.",
			},
			{
				uid: nanoid(),
				question: "Что такое реактивность в Vue.js?",
				answer:
					"Реактивность — это способность Vue.js автоматически отслеживать изменения данных и обновлять пользовательский интерфейс.",
			},
			{
				uid: nanoid(),
				question: "Как в Vue.js можно привязать данные к атрибутам HTML?",
				answer:
					"Для привязки данных к атрибутам используется директива v-bind или её сокращённый вариант двоеточия (:).",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Механизмы Vue 3",
		questions: [
			{
				uid: nanoid(),
				question: "Что такое provide и inject в Vue 3?",
				answer:
					"provide и inject позволяют передавать данные от родительского компонента к потомкам, не используя props. Это полезно для более глубокой передачи данных, например, в случае глобальных настроек.",
			},
			{
				uid: nanoid(),
				question: "Объясните принцип работы с v-model в Vue 3.",
				answer:
					"В Vue 3 v-model теперь позволяет использовать несколько модификаторов. Например, можно указать имя привязываемого свойства (modelValue по умолчанию) и события (update:modelValue по умолчанию).",
			},
			{
				uid: nanoid(),
				question: "Что такое Teleport в Vue 3 и как его использовать?",
				answer:
					"Teleport позволяет переносить содержимое компонента в другую часть DOM-дерева. Это полезно для модальных окон, всплывающих подсказок и других элементов, которые должны быть отрисованы вне родительского контейнера.",
			},
			{
				uid: nanoid(),
				question: "Что такое и как использовать Suspense в Vue 3?",
				answer:
					"Suspense позволяет приостановить рендеринг компонента до тех пор, пока не будут загружены асинхронные данные. Это полезно для работы с асинхронными компонентами или API-запросами.",
			},
			{
				uid: nanoid(),
				question: "Как работает новый механизм маршрутизации в Vue 3?",
				answer:
					"Vue Router в версии 4.x, который поддерживает Vue 3, был переписан с учетом Composition API. Он теперь имеет поддержку динамических маршрутов, вложенных маршрутов, а также улучшенную работу с асинхронными компонентами.",
			},
			{
				uid: nanoid(),
				question: "Что такое директивы Vue.js?",
				answer:
					"Директивы — это специальные атрибуты, добавляемые к HTML, которые предоставляют возможности для работы с DOM, такие как v-if, v-for и v-bind.",
			},
			{
				uid: nanoid(),
				question: "Как можно создать пользовательскую директиву в Vue.js?",
				answer:
					"Пользовательская директива создаётся через функцию directive, где можно определить её поведение в хуках bind, inserted, update и т.д.",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Жизненные циклы и события",
		questions: [
			{
				uid: nanoid(),
				question: "Как использовать жизненные циклы компонента в Vue 3?",
				answer:
					"Жизненные циклы в Vue 3 можно использовать через onMounted, onUpdated, onBeforeUnmount и другие функции из Composition API, которые заменяют старые методы, такие как mounted и destroyed.",
			},
			{
				uid: nanoid(),
				question: "Как обрабатывать события в Vue 3?",
				answer:
					"В Vue 3 события можно обрабатывать через директиву @ (например, @click), а также использовать emit в дочерних компонентах для отправки событий на родителя.",
			},
			{
				uid: nanoid(),
				question: "Что такое emits и как его использовать?",
				answer:
					"emits — это механизм, который позволяет компонентам явно объявлять, какие события они могут генерировать. Это улучшает читаемость кода и позволяет разработчикам легче понимать интерфейс компонента.",
			},
			{
				uid: nanoid(),
				question: "Какие стадии жизненного цикла компонента есть в Vue.js?",
				answer:
					"Основные стадии: создание (beforeCreate, created), монтирование (beforeMount, mounted), обновление (beforeUpdate, updated) и уничтожение (beforeUnmount, unmounted).",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Интеграция и инструменты",
		questions: [
			{
				uid: nanoid(),
				question: "Как добавить TypeScript в проект на Vue 3?",
				answer:
					"Для добавления TypeScript в проект Vue 3 нужно установить соответствующие зависимости (vue, typescript, @vue/tsconfig) и настроить конфигурацию в файле tsconfig.json.",
			},
			{
				uid: nanoid(),
				question: "Как управлять состоянием приложения в Vue 3 с помощью Vuex?",
				answer:
					"Vuex остается основным инструментом для управления состоянием в Vue 3. С помощью Vuex можно организовать централизованное хранилище состояний, мутации, действия и геттеры для глобального состояния приложения.",
			},
			{
				uid: nanoid(),
				question: "Как обрабатывать асинхронные операции в Vue 3 с помощью Composition API?",
				answer:
					"Асинхронные операции можно обрабатывать с помощью async/await внутри setup() функции, например, при вызове API. Можно использовать watch для отслеживания асинхронных изменений или Suspense для ожидания результата.",
			},
		],
	},
];

const accordionNuxt: CheatsheetAccordion[] = [
	{
		uid: nanoid(),
		name: "Основные принципы и возможности Nuxt.js",
		questions: [
			{
				uid: nanoid(),
				question: "Что такое Nuxt.js и для чего он используется?",
				answer:
					"Nuxt.js — это фреймворк на основе Vue.js, который упрощает разработку серверно-рендерируемых приложений (SSR), статических сайтов и одностраничных приложений (SPA).",
			},
			{
				uid: nanoid(),
				question: "Какие основные преимущества использования Nuxt.js?",
				answer:
					"Nuxt.js упрощает реализацию SSR, маршрутизации, настройки middleware, имеет поддержку модульной архитектуры и позволяет создавать статические сайты с генерацией на этапе сборки.",
			},
			{
				uid: nanoid(),
				question: "Какие режимы работы поддерживает Nuxt.js?",
				answer:
					"Nuxt.js поддерживает три режима работы: серверно-рендерируемый (SSR), статическая генерация (SSG) и одностраничное приложение (SPA).",
			},
			{
				uid: nanoid(),
				question: "Как создать новый проект Nuxt.js?",
				answer:
					"Для создания нового проекта нужно использовать команду npx nuxi init <project-name>, а затем установить зависимости с помощью npm install или yarn.",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Маршрутизация и страницы",
		questions: [
			{
				uid: nanoid(),
				question: "Как работает автоматическая маршрутизация в Nuxt.js?",
				answer:
					"Nuxt.js автоматически генерирует маршруты на основе структуры директорий в папке pages. Например, файл pages/about.vue будет доступен по маршруту /about.",
			},
			{
				uid: nanoid(),
				question: "Как создать динамический маршрут в Nuxt.js?",
				answer:
					"Динамические маршруты создаются с помощью файлов с квадратными скобками, например, pages/user/[id].vue для маршрута /user/:id.",
			},
			{
				uid: nanoid(),
				question: "Как использовать nested routes в Nuxt.js?",
				answer:
					"Для создания вложенных маршрутов необходимо использовать директории и файл _layout.vue. Например, структура pages/blog/_layout.vue и pages/blog/post.vue создаёт маршруты для блога и его постов.",
			},
			{
				uid: nanoid(),
				question: "Как настроить перенаправление маршрутов?",
				answer: "Перенаправления можно настроить с помощью middleware или в конфигурации serverMiddleware.",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Данные и состояние",
		questions: [
			{
				uid: nanoid(),
				question: "Как загружать данные в компоненты Nuxt.js?",
				answer:
					"Для загрузки данных используется функция asyncData(), которая вызывается перед рендерингом компонента и позволяет асинхронно получать данные.",
			},
			{
				uid: nanoid(),
				question: "Чем отличается asyncData() от fetch() в Nuxt.js?",
				answer:
					"asyncData() заменяет данные компонента перед рендерингом, а fetch() используется для обновления данных в компоненте после его инициализации.",
			},
			{
				uid: nanoid(),
				question: "Как управлять глобальным состоянием в Nuxt.js?",
				answer:
					"Глобальное состояние можно управлять с помощью Vuex, который встроен в Nuxt.js. Директория store автоматически регистрируется как хранилище.",
			},
			{
				uid: nanoid(),
				question: "Как использовать плагины в Nuxt.js для работы с API?",
				answer:
					"Плагины можно использовать для создания экземпляров axios или других библиотек и их интеграции через папку plugins.",
			},
		],
	},
	{
		uid: nanoid(),
		name: "SEO и производительность",
		questions: [
			{
				uid: nanoid(),
				question: "Как оптимизировать SEO в приложении Nuxt.js?",
				answer:
					"SEO оптимизируется через meta-данные, которые можно задавать в файле nuxt.config.js, а также с помощью свойств head в компонентах.",
			},
			{
				uid: nanoid(),
				question: "Как включить генерацию статических сайтов в Nuxt.js?",
				answer:
					"Для генерации статического сайта нужно установить режим static в nuxt.config.js и запустить команду npm run generate.",
			},
			{
				uid: nanoid(),
				question: "Как уменьшить размер бандлов в Nuxt.js?",
				answer:
					"Для уменьшения размера бандлов используется tree shaking, динамическая загрузка модулей и настройка build.optimizeCSS в nuxt.config.js.",
			},
			{
				uid: nanoid(),
				question: "Как настроить кеширование для улучшения производительности?",
				answer:
					"Кеширование настраивается через HTTP-заголовки, а также с помощью модулей, таких как @nuxt/pwa или плагинов для CDN.",
			},
		],
	},
	{
		uid: nanoid(),
		name: "Интеграция и инструменты",
		questions: [
			{
				uid: nanoid(),
				question: "Какие модули часто используются в Nuxt.js?",
				answer: "Наиболее популярные модули: @nuxt/http, @nuxt/auth, @nuxt/pwa, @nuxt/content и @nuxt/axios.",
			},
			{
				uid: nanoid(),
				question: "Как интегрировать TypeScript в проект Nuxt.js?",
				answer:
					"TypeScript интегрируется через @nuxt/typescript-build модуль, а также через установку соответствующих типов для Nuxt.js.",
			},
			{
				uid: nanoid(),
				question: "Как подключить и использовать PWA в Nuxt.js?",
				answer:
					"Для подключения PWA используется модуль @nuxt/pwa, который добавляет поддержку манифеста, offline-режима и сервис-воркеров.",
			},
			{
				uid: nanoid(),
				question: "Как подключить и настроить Google Analytics в Nuxt.js?",
				answer:
					"Для интеграции Google Analytics используется модуль @nuxtjs/google-analytics, который требует указания идентификатора отслеживания в nuxt.config.js.",
			},
		],
	},
];

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(() => ({
	accordionVue: accordionVue,
	accordionNuxt: accordionNuxt,
	accordionGet: (accordionName: string) => {
		switch (accordionName) {
			case "vue":
				return accordionVue;
			case "nuxt":
				return accordionNuxt;
			default:
				return [];
		}
	},
}));

export default useStore;
