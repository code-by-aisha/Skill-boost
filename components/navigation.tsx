"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isNavbarSolid, setIsNavbarSolid] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarSolid(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isNavbarSolid ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">SkillBoost</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors text-white font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
