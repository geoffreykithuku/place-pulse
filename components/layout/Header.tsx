"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Heart, Home } from "lucide-react";
import { clsx } from "clsx";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Browse Houses", href: "/browse" },
  { name: "Our Scouts", href: "/scouts" },
  { name: "For Hunters", href: "/for-hunters" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-safari-600 transition-opacity hover:opacity-80"
          >
            <div className="w-8 h-8 bg-safari-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:block">Spot A Crib</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
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
          <div className="hidden md:flex md:items-center md:space-x-2">
            <button
              className="p-2 text-neutral-700 hover:text-safari-600 transition-colors rounded-md hover:bg-neutral-50"
              aria-label="Search properties"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-neutral-700 hover:text-safari-600 transition-colors rounded-md hover:bg-neutral-50"
              aria-label="View favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
            <Link href="/hunter-signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-safari-600 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "block px-3 py-2 text-base font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-safari-600 bg-safari-50"
                      : "text-neutral-700 hover:text-safari-600 hover:bg-neutral-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
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
}
