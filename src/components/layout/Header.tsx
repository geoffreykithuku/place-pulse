"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Heart, Home } from "lucide-react";
import { clsx } from "clsx";
import Button from "../ui/Button";

const navigation = [
  { name: "Browse Houses", href: "/browse" },
  { name: "Our Scouts", href: "/scouts" },
  { name: "For Hunters", href: "/for-hunters" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-display font-bold text-safari-600"
          >
            <div className="w-8 h-8 bg-safari-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:block">Spot A Crib</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md",
                  pathname === item.href
                    ? "text-safari-600 bg-safari-50"
                    : "text-neutral-700 hover:text-safari-600 hover:bg-neutral-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className="p-2 text-neutral-700 hover:text-safari-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-700 hover:text-safari-600 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <Link href="/hunter-signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-safari-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "block text-base font-medium transition-colors px-3 py-2 rounded-md",
                    pathname === item.href
                      ? "text-safari-600 bg-safari-50"
                      : "text-neutral-700 hover:text-safari-600 hover:bg-neutral-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <Link href="/hunter-signup" onClick={() => setIsMenuOpen(false)}>
                  <Button fullWidth>Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
