const allImages = import.meta.glob("../assets/*/preview*.png", { eager: true });

const getProjectImages = (dirName) => {
    const images = Object.entries(allImages)
        .filter(([path]) => path.includes(dirName))
        .map(([, image]) => image.default);

    return images;
};

export const getProjects = (t) => [
    {
        title: t("projects.detectingFoodAI.title"),
        description: t("projects.detectingFoodAI.description"),
        tecnologes: [
            "Flutter",
            "Dart",
            "OAuth",
            "Machine Learning",
            "l10n (Localization)",
        ],
        images: getProjectImages("DetectingFoodAI"),
        linkGithub: "https://github.com/0deans/foodly",
        ariaLabel: t("projects.detectingFoodAI.ariaLabel"),
    },
    {
        title: t("projects.climateVisualizationPlatform.title"),
        description: t("projects.climateVisualizationPlatform.description"),
        tecnologes: [
            "React",
            "TypeScript",
            "Leaflet",
            "OpenStreetMap",
            "Chart.js",
            "D3.js",
        ],
        images: getProjectImages("ClimateVisualizationPlatform"),
        linkDemo: "https://climateistu.tech/",
        ariaLabel: t("projects.climateVisualizationPlatform.ariaLabel"),
    },
    {
        title: t("projects.carPlateRecognition.title"),
        description: t("projects.carPlateRecognition.description"),
        tecnologes: ["Python", "Yolo", "EasyOCR", "Machine Learning", "OpenCV"],
        images: getProjectImages("CarPlateRecognition"),
        linkGithub: "https://github.com/0deans/Car-Plate-Recognition",
        ariaLabel: t("projects.carPlateRecognition.ariaLabel"),
    },
    {
        title: t("projects.mediaCompressor.title"),
        description: t("projects.mediaCompressor.description"),
        tecnologes: ["C#", "FFmpeg", "Windows Forms"],
        images: getProjectImages("MediaCompressor"),
        linkGithub: "https://github.com/regmysss/Media-Compressor",
        ariaLabel: t("projects.mediaCompressor.ariaLabel"),
    },
    {
        title: t("projects.currencyConverter.title"),
        description: t("projects.currencyConverter.description"),
        tecnologes: ["Flutter", "Dart", "l10n (Localization)", "API"],
        images: getProjectImages("CurrencyConverter"),
        linkGithub: "https://github.com/regmysss/Currency-Converter",
        ariaLabel: t("projects.currencyConverter.ariaLabel"),
    },
    {
        title: t("projects.converterFilesTool.title"),
        description: t("projects.converterFilesTool.description"),
        tecnologes: ["React", "FFmpeg", "Express"],
        images: getProjectImages("ConverterFilesTool"),
        linkGithub: "https://github.com/regmysss/Converter-Files",
        ariaLabel: t("projects.converterFilesTool.ariaLabel"),
    },
    {
        title: t("projects.RockPaperScissors.title"),
        description: t("projects.RockPaperScissors.description"),
        tecnologes: ["React", "TypeScript"],
        images: getProjectImages("RockPaperScissors"),
        linkGithub: "https://github.com/regmysss/rock-paper-scissors",
        linkDemo: "https://rock-paper-scissors-rosy-sigma.vercel.app/",
        ariaLabel: t("projects.RockPaperScissors.ariaLabel"),
    },
    {
        title: t("projects.RollCraftGame.title"),
        description: t("projects.RollCraftGame.description"),
        tecnologes: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
        images: getProjectImages("RollCraftGame"),
        linkGithub: "https://github.com/regmysss/roll-craft-game",
        linkDemo: "https://roll-craft-game-henna.vercel.app/",
        ariaLabel: t("projects.RollCraftGame.ariaLabel"),
    },
    {
        title: t("projects.FantasyFootball.title"),
        description: t("projects.FantasyFootball.description"),
        tecnologes: ["Next.js", "Emotion.js"],
        images: getProjectImages("FantasyFootball"),
        linkGithub: "https://github.com/regmysss/fantasy-football",
        linkDemo: "https://fantasy-football-silk.vercel.app/",
        ariaLabel: t("projects.FantasyFootball.ariaLabel"),
    }
];
