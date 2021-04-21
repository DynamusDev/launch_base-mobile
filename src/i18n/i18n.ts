import * as Localization from "expo-localization"
import i18n from "i18n-js"
import { useTranslateContext } from '../hooks/useTranslate';

const en = require("./en")
const pt = require("./pt")

i18n.fallbacks = true
i18n.translations = { en, pt }

const fallback = { languageTag: "en", isRTL: false }

i18n.locale = Localization.locale || fallback
// i18n.locale = 'en'
