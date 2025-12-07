"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Star, Clock, Users, BookOpen, Play, Download, Filter, Search, Heart, Code, Palette, Users2, Zap, BarChart3, MessageSquare } from "lucide-react"
import Navigation from "@/components/navigation"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlistItems, setWishlistItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll(".fade-in-up, .slide-up, .course-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const courses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      description: "Master JavaScript from basics to advanced concepts with real-world projects",
      price: 89.99,
      originalPrice: 149.99,
      category: "programming",
      type: "course",
      image: "/placeholder.jpg",
      rating: 4.9,
      students: 12543,
      duration: "40 hours",
      lessons: 156,
      level: "Beginner to Advanced",
      instructor: "Sarah Chen",
      bestseller: true,
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles and create stunning user interfaces",
      price: 79.99,
      originalPrice: 129.99,
      category: "design",
      type: "course",
      image: "/placeholder.jpg",
      rating: 4.8,
      students: 8932,
      duration: "32 hours",
      lessons: 98,
      level: "Beginner",
      instructor: "Marcus Johnson",
      bestseller: false,
    },
    {
      id: 3,
      title: "Leadership in the Digital Age",
      description: "Develop modern leadership skills for remote and hybrid teams",
      price: 99.99,
      originalPrice: 179.99,
      category: "leadership",
      type: "course",
      image: "/placeholder.jpg",
      rating: 4.9,
      students: 6754,
      duration: "28 hours",
      lessons: 84,
      level: "Intermediate",
      instructor: "Emily Rodriguez",
      bestseller: true,
    },
    {
      id: 4,
      title: "AI Tools for Productivity",
      description: "Harness ChatGPT, Midjourney, and other AI tools to boost your productivity",
      price: 69.99,
      originalPrice: 119.99,
      category: "ai",
      type: "course",
      image: "/placeholder.jpg",
      rating: 4.7,
      students: 15432,
      duration: "24 hours",
      lessons: 72,
      level: "Beginner",
      instructor: "David Kim",
      bestseller: true,
    },
    {
      id: 5,
      title: "Freelancer's Success Guide",
      description: "Complete ebook on building a successful freelancing business",
      price: 29.99,
      originalPrice: 49.99,
      category: "freelancing",
      type: "ebook",
      image: "/placeholder.jpg",
      rating: 4.6,
      students: 3421,
      duration: "5 hours read",
      lessons: 12,
      level: "All Levels",
      instructor: "Lisa Park",
      bestseller: false,
    },
    {
      id: 6,
      title: "Public Speaking Mastery",
      description: "Overcome fear and become a confident, compelling speaker",
      price: 59.99,
      originalPrice: 99.99,
      category: "communication",
      type: "course",
      image: "/placeholder.jpg",
      rating: 4.8,
      students: 7865,
      duration: "18 hours",
      lessons: 54,
      level: "All Levels",
      instructor: "Michael Brown",
      bestseller: false,
    },
    {
      id: 7,
      title: "Python for Data Science",
      description: "Learn Python programming specifically for data analysis and machine learning",
      price: 94.99,
      originalPrice: 159.99,
      category: "programming",
      type: "course",
      image: "/placeholder.jpg",
      rating: 4.9,
      students: 11234,
      duration: "45 hours",
      lessons: 134,
      level: "Intermediate",
      instructor: "Dr. Anna Wilson",
      bestseller: true,
    },
    {
      id: 8,
      title: "Digital Marketing Toolkit",
      description: "Comprehensive guide with templates and strategies for online marketing",
      price: 39.99,
      originalPrice: 69.99,
      category: "freelancing",
      type: "guide",
      image: "/placeholder.jpg",
      rating: 4.5,
      students: 5643,
      duration: "8 hours read",
      lessons: 25,
      level: "Beginner",
      instructor: "Jennifer Lee",
      bestseller: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "programming", label: "Programming" },
    { value: "design", label: "Design" },
    { value: "leadership", label: "Leadership" },
    { value: "ai", label: "Artificial Intelligence" },
    { value: "communication", label: "Communication" },
    { value: "freelancing", label: "Freelancing" },
  ]

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "free", label: "Free" },
    { value: "under50", label: "Under $50" },
    { value: "50to100", label: "$50 - $100" },
    { value: "over100", label: "Over $100" },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())

    let matchesPrice = true
    if (selectedPriceRange === "under50") matchesPrice = course.price < 50
    else if (selectedPriceRange === "50to100") matchesPrice = course.price >= 50 && course.price <= 100
    else if (selectedPriceRange === "over100") matchesPrice = course.price > 100

    return matchesCategory && matchesSearch && matchesPrice
  })

  const addToCart = (courseId: number) => {
    if (!cartItems.includes(courseId)) {
      setCartItems([...cartItems, courseId])
    }
  }

  const toggleWishlist = (courseId: number) => {
    if (wishlistItems.includes(courseId)) {
      setWishlistItems(wishlistItems.filter((id) => id !== courseId))
    } else {
      setWishlistItems([...wishlistItems, courseId])
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <Play className="h-4 w-4" />
      case "ebook":
        return <BookOpen className="h-4 w-4" />
      case "guide":
        return <Download className="h-4 w-4" />
      default:
        return <Play className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "course":
        return "bg-blue-100 text-blue-800"
      case "ebook":
        return "bg-green-100 text-green-800"
      case "guide":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    const iconClass = "h-24 w-24"
    switch (category) {
      case "programming":
        return <Code className={iconClass} />
      case "design":
        return <Palette className={iconClass} />
      case "leadership":
        return <Users2 className={iconClass} />
      case "ai":
        return <Zap className={iconClass} />
      case "communication":
        return <MessageSquare className={iconClass} />
      case "freelancing":
        return <BarChart3 className={iconClass} />
      default:
        return <BookOpen className={iconClass} />
    }
  }

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "programming":
        return ["#3b82f6", "#1e40af"]
      case "design":
        return ["#ec4899", "#be185d"]
      case "leadership":
        return ["#8b5cf6", "#6d28d9"]
      case "ai":
        return ["#f59e0b", "#d97706"]
      case "communication":
        return ["#10b981", "#047857"]
      case "freelancing":
        return ["#06b6d4", "#0369a1"]
      default:
        return ["#6b7280", "#374151"]
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up text-balance">
            Courses & Resources
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto fade-in-up text-pretty"
            style={{ animationDelay: "0.2s" }}
          >
            Discover our comprehensive collection of courses, ebooks, and guides designed to accelerate your skill
            development
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{filteredCourses.length} results</span>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                Cart ({cartItems.length})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="group cursor-pointer course-card bg-card border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Course Icon Background */}
                  <div className="relative overflow-hidden bg-gradient-to-br p-8 h-48 flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${getCategoryGradient(course.category)[0]} 0%, ${getCategoryGradient(course.category)[1]} 100%)`,
                    }}
                  >
                    <div className="text-white/20 group-hover:scale-110 transition-transform duration-500">
                      {getCategoryIcon(course.category)}
                    </div>
                    {course.bestseller && (
                      <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Bestseller</Badge>
                    )}
                    <Badge className={`absolute top-3 right-3 ${getTypeColor(course.type)} gap-1`}>
                      {getTypeIcon(course.type)}
                      {course.type}
                    </Badge>
                    <button
                      onClick={() => toggleWishlist(course.id)}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                    >
                      <Heart
                        className={`h-4 w-4 ${wishlistItems.includes(course.id) ? "text-red-500 fill-current" : "text-gray-600"}`}
                      />
                    </button>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2 text-balance">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 text-pretty">{course.description}</p>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Instructor */}
                    <p className="text-xs text-muted-foreground mb-4">by {course.instructor}</p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${course.price}</span>
                        {course.originalPrice > course.price && (
                          <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      onClick={() => addToCart(course.id)}
                      disabled={cartItems.includes(course.id)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-105 transition-transform duration-300"
                    >
                      {cartItems.includes(course.id) ? (
                        "Added to Cart"
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">No courses found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your filters or search terms</p>
              <Button
                onClick={() => {
                  setSelectedCategory("all")
                  setSelectedPriceRange("all")
                  setSearchQuery("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up text-balance">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 fade-in-up text-pretty">
            We're constantly adding new courses and resources. Let us know what skills you'd like to learn next.
          </p>
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-white/90 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Request a Course
          </Button>
        </div>
      </section>
    </div>
  )
}
