"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll(".fade-in-up, .slide-up, .slide-in-left, .slide-in-right")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const featuredSkills = [
    {
      id: 1,
      title: "Programming",
      description: "Learn coding languages that power the future",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Leadership",
      description: "Develop skills to lead teams and projects",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Growth Mindset",
      description: "Cultivate continuous learning and improvement",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-purple-500",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Developer",
      content:
        "SkillBoost helped me transition from marketing to tech. The programming courses were exactly what I needed to land my dream job.",
      rating: 5,
      avatar: "/professional-woman-smiling.png",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Team Lead",
      content:
        "The leadership skills I learned here transformed how I manage my team. My productivity increased by 40% in just 3 months.",
      rating: 5,
      avatar: "/professional-man-confident.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      content:
        "These courses gave me the confidence to start freelancing. I'm now earning 3x more than my previous job!",
      rating: 5,
      avatar: "/creative-woman-designer.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500 to-lime-500">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up text-balance">Learn Beyond the Books</h1>
          <p className="text-xl md:text-2xl mb-8 fade-in-up text-pretty" style={{ animationDelay: "0.2s" }}>
            Discover the skills that prepare you for the future
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Skills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up text-balance">
              Skills That Matter
            </h2>
            <p className="text-lg text-muted-foreground fade-in-up text-pretty" style={{ animationDelay: "0.2s" }}>
              Explore categories that will accelerate your growth beyond traditional education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredSkills.map((skill, index) => (
              <Card
                key={skill.id}
                className="group cursor-pointer skill-card bg-card border-border rounded-xl overflow-hidden slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`${skill.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground text-pretty">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up text-balance">
              What Students Say
            </h2>
            <p className="text-lg text-muted-foreground fade-in-up text-pretty">
              Real stories from learners who transformed their careers
            </p>
          </div>

          <div className="relative">
            <Card className="bg-white shadow-xl border-0 slide-up">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-center text-foreground mb-8 font-medium text-pretty">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gray-50">
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="slide-in-left">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div className="slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Skill Courses</div>
            </div>
            <div className="slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="slide-in-right" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up text-balance">
            Stay Updated with New Skills
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 fade-in-up text-pretty">
            Get weekly insights, new course announcements, and career tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4 fade-in-up">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              <Mail className="h-5 w-5 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 fade-in-up text-balance">
            Ready to Grow Your Skills?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 fade-in-up text-pretty">
            Join thousands of learners who are already building skills that matter for their future careers.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Learning Today
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">SkillBoost</span>
              </div>
              <p className="text-background/80 text-pretty mb-6">
                Empowering learners to grow beyond traditional education and build skills for the future.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/skills" className="hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="/courses" className="hover:text-primary transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-background/80 mb-4 text-pretty">Subscribe for updates and new courses</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 SkillBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
