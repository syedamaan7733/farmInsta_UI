import React from "react";
import { Sun, Moon, Home, Phone, BarChart2, User } from "lucide-react";
import { ThemeToggle } from "./ToggleTheme";


const Navbar = () => {
  return (
    <nav className="w-full border-b border-border dark:border-border bg-background dark:bg-background px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-md bg-primary"></div>
          <span className="text-lg font-semibold text-foreground">
            EarthTone
          </span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <NavItem icon={<Home size={18} />} text="Home" />
          <NavItem icon={<Phone size={18} />} text="Contact" />
          <NavItem icon={<BarChart2 size={18} />} text="Charts" />
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle/>

          {/* Login Button */}
          <button className="flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-foreground hover:bg-primary/90">
            <User size={16} className="mr-1.5 " />
            Login
          </button>
        </div>

        {/* Mobile menu button - Only shown on mobile */}
        <button className="md:hidden flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// Helper component for navigation items
const NavItem = ({ icon, text }) => (
  <a
    href="#"
    className="flex items-center text-foreground/80 hover:text-foreground transition-colors duration-200"
  >
    <span className="mr-1.5">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </a>
);

export default Navbar;
