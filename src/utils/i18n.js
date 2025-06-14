import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const supportedLocales = ['en', 'uk'];

const getInitialLocale = () => {
    const getLocale = localStorage.getItem('locale') || navigator.language || 'en';

    if (supportedLocales.includes(getLocale)) {
        return getLocale;
    }
};


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                headerHome: "Home",
                headerProjects: "Projects",
                headerSkills: "Skills",
                headerAbout: "About",
                headerContact: "Contact",
                homeWelcome: "Hi! I'm <selection>Vladyslav</selection> - a Web Developer.",
                homeWelcomeDescription: "I specialize in creating <selection>responsive</selection> and " +
                    "<selection>functional</selection> websites to help businesses achieve <selection>success</selection>.",
                homeProjectsBtn: "Projects",
                projectsTitle: "What I've Built",
                projectsDescription: "Here are some of the projects I have worked on that showcase my skills in web and mobile development.",
                projectConverterFiles: "Converter Files Tool",
                projectDetectingFood: "Detecting Food (AI)",
                projectCarPlateRecognition: "Car Plate Recognition (AI)",
                projectCurrencyConverter: "Currency Converter",
                projectMediaCompressor: "Media Compressor Tool",
                skillsTitle: "What I Know",
                skillsDescription: "Here are the technologies and tools I use to create efficient and user-friendly solutions.",
                skillsFrontend: "Frontend Development",
                skillsBackend: "Backend Development",
                skillsMobile: "Mobile Development",
                skillsOther: "Other Skills",
                aboutTitle: "Who I Am",
                aboutDescription: "Here I will tell you a little about myself.",
                aboutDetails: "<paragraph>  I’m <bold>Vladyslav Yarmolyuk,</bold> a <bold>passionate web developer</bold> from Kyiv, Ukraine, " +
                    "with over <bold>3 years of experience</bold> studying and practicing modern web development. " +
                    "I focus on building <bold>responsive, functional, and user-friendly</bold> websites that solve real- world problems.</paragraph>" +
                    "<break />" +
                    "<paragraph> I’m always excited to explore <bold>new technologies</bold> and continuously learn to create " +
                    "better and more <bold>innovative IT solutions</bold>. My goal is to deliver <bold>high-quality digital " +
                    "products</bold> that not only meet but exceed user expectations. </paragraph>",
                contactTitle: "Get in Touch",
                contactDescription: "Feel free to reach out for collaborations, inquiries, or just a friendly chat.",
                footerCopyright: "© {{date}} Vladyslav Yarmolyuk. All rights reserved.",
            }
        },
        uk: {
            translation: {
                headerHome: "Головна",
                headerProjects: "Проекти",
                headerSkills: "Навички",
                headerAbout: "Про мене",
                headerContact: "Контакти",
                homeWelcome: "Привіт! Я <selection>Владислав</selection> - Веб-Розробник.",
                homeWelcomeDescription: "Я спеціалізуюсь на створенні <selection>адаптивних</selection> та " +
                    "<selection>функціональних</selection> веб-сайтів, щоб допомогти бізнесам досягти <selection>успіху</selection>.",
                homeProjectsBtn: "Проекти",
                projectsTitle: "Що я створив",
                projectsDescription: "Ось деякі з проектів, над якими я працював, які демонструють мої навички веб-розробки та розробки для мобільних пристроїв.",
                projectConverterFiles: "Інструмент конвертації файлів",
                projectDetectingFood: "Виявлення їжі (ШІ)",
                projectCarPlateRecognition: "Розпізнавання номерних знаків (ШІ)",
                projectCurrencyConverter: "Конвертер валют",
                projectMediaCompressor: "Інструмент стиснення медіа",
                skillsTitle: "Що я знаю",
                skillsDescription: "Ось технології та інструменти, які я використовую для створення ефективних та зручних рішень.",
                skillsFrontend: "Фронтенд розробка",
                skillsBackend: "Бекенд розробка",
                skillsMobile: "Мобільна розробка",
                skillsOther: "Інші навички",
                aboutTitle: "Хто я",
                aboutDescription: "Тут я розповім трохи про себе.",
                aboutDetails: "<paragraph> Я <bold>Владислав Ярмолюк,</bold> <bold>пристрастний веб-розробник</bold> з Києва, Україна," +
                    " з понад <bold>3-річним досвідом</bold> вивчення та практики сучасної веб-розробки. " +
                    "Я зосереджуюсь на створенні <bold>адаптивних, функціональних та зручних для користувача</bold> веб-сайтів, які вирішують реальні проблеми.</paragraph> " +
                    "<break />" +
                    "<paragraph> Я завжди радий досліджувати <bold>нові технології</bold> і постійно вчитися, щоб створювати " +
                    "кращі та більш <bold>інноваційні ІТ-рішення</bold>. Моя мета - надавати <bold>високоякісні цифрові продукти</bold>, " +
                    "які не тільки відповідають, але й перевершують очікування користувачів. </paragraph>"
                ,
                contactTitle: "Зв'яжіться зі мною",
                contactDescription: "Не соромтеся звертатися для співпраці, запитів або просто для дружньої розмови.",
                footerCopyright: "© {{date}} Владислав Ярмолюк. Всі права захищені.",
            }
        },
    },
    lng: getInitialLocale(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});