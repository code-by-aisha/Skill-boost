"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, TrendingUp, Target, Users, Lightbulb, Award, ArrowRight, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll(
      ".fade-in-up, .slide-up, .slide-in-left, .slide-in-right, .timeline-item",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const timelineSteps = [
    {
      id: 1,
      title: "Traditional School",
      subtitle: "The Foundation",
      description: "Students learn core subjects and basic knowledge through standardized curriculum and testing.",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "bg-blue-500",
      challenges: ["Limited practical application", "One-size-fits-all approach", "Outdated industry practices"],
    },
    {
      id: 2,
      title: "Skill Gap Discovery",
      subtitle: "The Reality Check",
      description: "Graduates enter the workforce and realize they lack practical skills needed for modern careers.",
      icon: <Target className="h-8 w-8" />,
      color: "bg-orange-500",
      challenges: ["Employers want experience", "Technology moves fast", "Soft skills matter more"],
    },
    {
      id: 3,
      title: "Skill Development",
      subtitle: "The Transformation",
      description:
        "Learners actively pursue additional skills through online courses, bootcamps, and practical projects.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-green-500",
      challenges: ["Self-directed learning", "Real-world projects", "Industry mentorship"],
    },
    {
      id: 4,
      title: "Career Success",
      subtitle: "The Achievement",
      description:
        "Professionals with diverse skills thrive in their careers, adapt to change, and create opportunities.",
      icon: <Award className="h-8 w-8" />,
      color: "bg-purple-500",
      challenges: ["Higher earning potential", "Career flexibility", "Innovation leadership"],
    },
  ]

  const missionPoints = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Bridge the Skills Gap",
      description:
        "Traditional education often lags behind industry needs. We help learners acquire relevant, in-demand skills.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Foster Lifelong Learning",
      description:
        "In a rapidly changing world, the ability to continuously learn and adapt is more valuable than any degree.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Enable Career Flexibility",
      description:
        "Multiple skills create multiple opportunities, allowing professionals to pivot and thrive in any economy.",
    },
  ]

  const stats = [
    { number: "85%", label: "of jobs require skills not taught in school" },
    { number: "50%", label: "of current skills become obsolete every 2-5 years" },
    { number: "70%", label: "of successful professionals are self-taught in key areas" },
    { number: "3x", label: "higher earning potential with diverse skill sets" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/diverse-students-collaborating-on-projects-teamwor.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 fade-in-up text-balance">
            Why Learning Beyond School Matters
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up text-pretty"
            style={{ animationDelay: "0.2s" }}
          >
            In today's rapidly evolving world, traditional education provides the foundation, but continuous skill
            development is what builds successful careers. We're here to bridge that gap.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in-up text-balance">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up text-pretty">
              We believe that everyone deserves access to the skills that will help them thrive in the modern economy.
              Here's why we're passionate about learning beyond traditional boundaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <Card
                key={index}
                className="text-center slide-up border-border bg-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-primary">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">{point.title}</h3>
                  <p className="text-muted-foreground text-pretty">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in-up text-balance">
              The Skills Revolution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up text-pretty">
              The data speaks for itself. The future belongs to those who continuously adapt and learn.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-pretty">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline-section" className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/students-learning-technology-modern-classroom-brigh.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in-up text-balance">
              The Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up text-pretty">
              Follow the path from traditional education to career success through continuous skill development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block">
              <div
                className="bg-primary transition-all duration-1000 ease-out w-full"
                style={{ height: `${(activeTimelineItem + 1) * 25}%` }}
              />
            </div>

            <div className="space-y-16">
              {timelineSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <Card
                      className={`bg-card border-border transition-all duration-500 ${
                        activeTimelineItem >= index ? "shadow-xl scale-105" : "shadow-md"
                      }`}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center text-white`}
                          >
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-card-foreground">{step.title}</h3>
                            <p className="text-primary font-medium">{step.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6 text-pretty">{step.description}</p>
                        <div className="space-y-2">
                          {step.challenges.map((challenge, challengeIndex) => (
                            <div key={challengeIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-card-foreground">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-500 ${
                        activeTimelineItem >= index ? step.color : "bg-border"
                      }`}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in-up text-balance">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up text-pretty">
              These principles guide everything we do and every course we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img
                src="/diverse-students-collaborating-on-projects-teamwor.jpg"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="slide-in-right space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Practical Over Theoretical</h3>
                <p className="text-muted-foreground text-pretty">
                  Every lesson includes real-world applications and hands-on projects that you can use immediately.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Industry-Relevant Content</h3>
                <p className="text-muted-foreground text-pretty">
                  Our curriculum is constantly updated based on current market demands and emerging trends.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Community-Driven Learning</h3>
                <p className="text-muted-foreground text-pretty">
                  Learn alongside peers, get feedback from experts, and build a network that lasts beyond the course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up text-balance">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 fade-in-up text-pretty">
            Don't let traditional education limits define your potential. Join thousands of learners who are building
            skills for the future.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
