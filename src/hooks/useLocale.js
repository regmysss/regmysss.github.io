import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLocale = () => {
    const { i18n } = useTranslation();

    const [locale, setLocale] = useState(i18n.language);

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
        i18n.changeLanguage(newLocale);
        localStorage.setItem('locale', newLocale);
    }

    return { locale, changeLocale };
}
