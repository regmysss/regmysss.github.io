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
        tecnologes: ["Flutter", "Dart", "OAuth", "Machine Learning", "l10n (Localization)"],
        images: getProjectImages("DetectingFoodAI"),
        linkGithub: "https://github.com/0deans/foodly"
    },
    {
        title: t("projects.climateVisualizationPlatform.title"),
        description: t("projects.climateVisualizationPlatform.description"),
        tecnologes: ["React", "TypeScript", "Leaflet", "OpenStreetMap", "Chart.js", "D3.js"],
        images: getProjectImages("ClimateVisualizationPlatform"),
        linkDemo: "https://climateistu.tech/"
    },
    {
        title: t("projects.carPlateRecognition.title"),
        description: t("projects.carPlateRecognition.description"),
        tecnologes: ["Python", "Yolo", "EasyOCR", "Machine Learning", "OpenCV"],
        images: getProjectImages("CarPlateRecognition"),
        linkGithub: "https://github.com/0deans/Car-Plate-Recognition"
    },
    {
        title: t("projects.mediaCompressor.title"),
        description: t("projects.mediaCompressor.description"),
        tecnologes: ["C#", "FFmpeg", "Windows Forms"],
        images: getProjectImages("MediaCompressor"),
        linkGithub: "https://github.com/regmysss/Media-Compressor"
    },
    {
        title: t("projects.currencyConverter.title"),
        description: t("projects.currencyConverter.description"),
        tecnologes: ["Flutter", "Dart", "l10n (Localization)", "API"],
        images: getProjectImages("CurrencyConverter"),
        linkGithub: "https://github.com/regmysss/Currency-Converter"
    },
    {
        title: t("projects.converterFilesTool.title"),
        description: t("projects.converterFilesTool.description"),
        tecnologes: ["React", "FFmpeg", "Express"],
        images: getProjectImages("ConverterFilesTool"),
        linkGithub: "https://github.com/regmysss/Converter-Files"
    },
];
