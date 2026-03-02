import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "am" : "en")}
      className="flex items-center gap-1.5 text-sm font-medium text-primary-foreground hover:text-gold transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "አማ" : "EN"}</span>
    </button>
  );
};

export default LanguageSwitcher;
