"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@skillboost.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Learning Street, Education City, EC 12345",
      description: "Our headquarters",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Support Hours",
      details: "24/7 Online Support",
      description: "We're always here to help",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, name: "Facebook", href: "#" },
    { icon: <Twitter className="h-6 w-6" />, name: "Twitter", href: "#" },
    { icon: <Instagram className="h-6 w-6" />, name: "Instagram", href: "#" },
    { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", href: "#" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-cyan-200 to-blue-200"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-700 mb-6 fade-in-up text-balance">Get In Touch</h1>
          <p
            className="text-xl text-cyan-600 max-w-3xl mx-auto fade-in-up text-pretty"
            style={{ animationDelay: "0.2s" }}
          >
            Have questions about our courses? Need help choosing the right skill path? We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center slide-up hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border-2 border-cyan-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-cyan-600">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-cyan-600 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-card-foreground">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-card-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-card-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-card-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 min-h-32"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map/Location Info */}
            <div className="slide-in-right">
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-card-foreground mb-6">Find Us</h2>

                  {/* Simulated Map */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-64 mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="text-center z-10">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-card-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Learning Street, Education City</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Office Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className="bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full p-3 transition-all duration-300 transform hover:scale-110"
                            aria-label={social.name}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-6 fade-in-up text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-cyan-600 fade-in-up text-pretty">
              Find answers to common questions about our courses and learning platform.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I choose the right course for my career goals?",
                answer:
                  "We recommend starting with our free skill assessment to identify your current level and career objectives. Our course advisors can also provide personalized recommendations based on your background and goals.",
              },
              {
                question: "Are the courses self-paced or do they have fixed schedules?",
                answer:
                  "Most of our courses are self-paced, allowing you to learn at your own speed. However, we also offer live cohort-based courses with fixed schedules for those who prefer structured learning with peer interaction.",
              },
              {
                question: "Do I get a certificate upon completion?",
                answer:
                  "Yes! All our courses come with industry-recognized certificates upon successful completion. These certificates can be shared on LinkedIn and included in your professional portfolio.",
              },
              {
                question: "What if I'm not satisfied with a course?",
                answer:
                  "We offer a 30-day money-back guarantee on all our courses. If you're not completely satisfied within the first 30 days, we'll provide a full refund, no questions asked.",
              },
              {
                question: "Can I access courses on mobile devices?",
                answer:
                  "Our platform is fully responsive and works seamlessly on all devices. You can learn on your phone, tablet, or computer - your progress syncs across all devices.",
              },
              {
                question: "Do you offer group discounts for teams or organizations?",
                answer:
                  "Yes, we offer special pricing for teams of 5 or more learners. Contact our sales team for custom enterprise packages that include additional features like progress tracking and dedicated support.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="slide-up bg-card border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                      <div className="text-primary group-open:rotate-180 transition-transform duration-200">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-muted-foreground text-pretty">{faq.answer}</div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up text-balance">
            Still Have Questions?
          </h3>
          <p className="text-lg text-white/95 max-w-2xl mx-auto mb-8 fade-in-up text-pretty">
            Our support team is here to help you succeed. Don't hesitate to reach out with any questions about our
            courses or platform.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Live Chat
          </Button>
        </div>
      </section>
    </div>
  )
}
