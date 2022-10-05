import i18next from "i18next"
import backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(backend)
    .init({
        // fallbackLng: 'ge',
        lng:localStorage.getItem("lng")||"ge",
        ns: [
            'common',
            "home",
            "productItem",
            "vacancyForm",
            "vacancy",
            "auth",
            "reg",
            "forgot",
            "productPage",
            "contact",
            "sidebar",
            "aboutus"
        ],
        react: { useSuspense: false },

    })
