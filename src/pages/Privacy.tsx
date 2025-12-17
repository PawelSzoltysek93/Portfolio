import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Privacy() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-4 py-16 relative overflow-hidden">
      <ThemeToggle />
      <ParticlesBackground />
      <div className="w-full max-w-3xl bg-card/80 rounded-xl shadow-lg p-8 md:p-12 mb-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {t("privacy.title")}
        </h1>
        <div className="prose prose-invert max-w-none text-lg leading-relaxed whitespace-pre-line mb-8">
          {t("privacy.content")}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoHome}
            className="cosmic-button text-lg px-8 py-3"
          >
            {t("nav.home")}
          </button>
        </div>
      </div>
    </div>
  );
}
