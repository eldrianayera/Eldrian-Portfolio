import { HeroSection } from "../components/HeroSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "./Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
      </main>
      {/* Footer */}
    </div>
  );
};
