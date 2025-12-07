"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Palette,
  MessageCircle,
  Users,
  Brain,
  Briefcase,
  BookOpen,
  Laptop,
  TrendingUp,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function SkillsPage() {
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

  const skillCategories = [
    {
      id: 1,
      title: "Programming",
      description: "Master coding languages and development frameworks that power modern technology",
      icon: <Code className="h-12 w-12" />,
      color: "bg-blue-500",
      skills: ["JavaScript", "Python", "React", "Node.js", "TypeScript"],
      level: "Beginner to Advanced",
      duration: "3-6 months",
      projects: 15,
    },
    {
      id: 2,
      title: "Design",
      description: "Create stunning visuals and user experiences that captivate and convert",
      icon: <Palette className="h-12 w-12" />,
      color: "bg-pink-500",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"],
      level: "Beginner to Pro",
      duration: "2-4 months",
      projects: 12,
    },
    {
      id: 3,
      title: "Communication",
      description: "Develop powerful speaking and writing skills for professional success",
      icon: <MessageCircle className="h-12 w-12" />,
      color: "bg-green-500",
      skills: ["Public Speaking", "Writing", "Presentation", "Negotiation"],
      level: "All Levels",
      duration: "1-3 months",
      projects: 8,
    },
    {
      id: 4,
      title: "Leadership",
      description: "Build the skills to inspire teams and drive organizational change",
      icon: <Users className="h-12 w-12" />,
      color: "bg-purple-500",
      skills: ["Team Management", "Strategic Thinking", "Decision Making", "Coaching"],
      level: "Intermediate to Advanced",
      duration: "4-8 months",
      projects: 10,
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      description: "Harness the power of AI and machine learning for the future of work",
      icon: <Brain className="h-12 w-12" />,
      color: "bg-cyan-500",
      skills: ["Machine Learning", "ChatGPT", "Data Analysis", "AI Tools"],
      level: "Beginner to Advanced",
      duration: "3-6 months",
      projects: 18,
    },
    {
      id: 6,
      title: "Freelancing",
      description: "Build a successful independent career with business and marketing skills",
      icon: <Briefcase className="h-12 w-12" />,
      color: "bg-orange-500",
      skills: ["Client Management", "Marketing", "Pricing", "Portfolio Building"],
      level: "All Levels",
      duration: "2-4 months",
      projects: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500 via-green-400 to-amber-500">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up text-balance">Master In-Demand Skills</h1>
          <p className="text-xl md:text-2xl mb-8 fade-in-up text-pretty" style={{ animationDelay: "0.2s" }}>
            Learn from industry experts and transform your career
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore All Skills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="py-20 px-4 relative bg-gray-50">
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up text-balance">
              Master Skills Beyond the Classroom
            </h2>
            <p
              className="text-lg text-muted-foreground fade-in-up text-pretty max-w-3xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              Each skill category is carefully designed with hands-on projects, real-world applications, and
              industry-relevant content to prepare you for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group cursor-pointer skill-card bg-card border-border rounded-xl overflow-hidden slide-up hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Card Header with Icon */}
                  <div className={`${category.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 opacity-20">{category.icon}</div>
                    <div className="relative z-10">
                      <div className="mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 text-pretty">{category.description}</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Skills Tags */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-card-foreground mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="font-medium text-card-foreground">{category.level}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-card-foreground">{category.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Projects:</span>
                        <span className="font-medium text-card-foreground">{category.projects} hands-on projects</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-105 transition-transform duration-300">
                      Explore {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Skills Matter Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up text-balance">
              Why These Skills Matter
            </h2>
            <p className="text-lg text-muted-foreground fade-in-up text-pretty max-w-3xl mx-auto">
              In today's rapidly evolving job market, traditional education alone isn't enough. These skills bridge the
              gap between classroom learning and real-world success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center slide-in-left">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Future-Proof Career</h3>
              <p className="text-muted-foreground text-pretty">
                Stay ahead of automation and industry changes with skills that remain valuable across different roles
                and sectors.
              </p>
            </div>

            <div className="text-center slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Practical Application</h3>
              <p className="text-muted-foreground text-pretty">
                Learn through real projects and case studies that you can immediately apply in your current or future
                role.
              </p>
            </div>

            <div className="text-center slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Innovation Mindset</h3>
              <p className="text-muted-foreground text-pretty">
                Develop creative problem-solving abilities and entrepreneurial thinking that sets you apart from the
                competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 fade-in-up text-balance">
            Ready to Start Building Your Skills?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 fade-in-up text-pretty">
            Choose a skill category that interests you most and begin your journey toward a more successful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Take Skill Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
