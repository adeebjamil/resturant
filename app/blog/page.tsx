'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaUtensils, 
  FaHeart,
  FaUsers,
  FaClock,
  FaStar,
  FaEye,
  FaComment,
  FaShare,
  FaCalendar,
  FaUser,
  FaTag,
  FaSearch,
  FaArrowRight,
  FaFire,
  FaChartLine,
  FaEnvelope,
  FaBookmark,
  FaAngleRight,
  FaFilter
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiChefToque,
  GiHotMeal,
  GiSpoon,
  GiKnifeFork,
  GiNewspaper
} from 'react-icons/gi'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [activePostIndex, setActivePostIndex] = useState(0)
  
  // Automatic featured post carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePostIndex(prev => (prev + 1) % featuredPosts.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsVisible(true)
  }, [selectedCategory])
  
  const filterRef = useRef<HTMLDivElement>(null);
  
  // Close mobile filter when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsMobileFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  const categories = ['All', 'Recipes', 'Food Tips', 'Restaurant News', 'Chef Stories', 'Events']

  const blogPosts = [
    {
      id: 1,
      title: 'The Secret Behind Our Signature Porotta Sandwich',
      excerpt: 'Discover the authentic techniques and premium ingredients that make our porotta sandwich a Dubai favorite.',
      content: 'Our porotta sandwich has become legendary in Dubai, and today we\'re sharing the secrets behind this masterpiece...',
      category: 'Chef Stories',
      author: 'Chef Ahmed Al-Rashid',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/blog/porotta-sandwich.jpg',
      views: 2450,
      comments: 38,
      featured: true,
      tags: ['Porotta', 'Sandwich', 'Authentic', 'Dubai Favorite']
    },
    {
      id: 2,
      title: '10 Fusion Cooking Techniques Every Food Lover Should Know',
      excerpt: 'Learn the art of fusion cuisine with these professional techniques straight from our kitchen.',
      content: 'Fusion cooking is an art that combines the best of different culinary traditions...',
      category: 'Food Tips',
      author: 'Chef Priya Sharma',
      date: '2024-01-12',
      readTime: '8 min read',
      image: '/blog/fusion-cooking.webp',
      views: 1890,
      comments: 24,
      featured: false,
      tags: ['Fusion', 'Cooking Tips', 'Techniques', 'Professional']
    },
    {
      id: 3,
      title: 'World Cup Restaurant Wins Best International Cuisine 2024',
      excerpt: 'We\'re thrilled to announce our latest recognition at the Dubai Food Excellence Awards.',
      content: 'It\'s with immense pride that we share our latest achievement at the Dubai Food Excellence Awards...',
      category: 'Restaurant News',
      author: 'World Cup Team',
      date: '2024-01-10',
      readTime: '3 min read',
      image: '/blog/award-ceremony.webp',
      views: 3200,
      comments: 67,
      featured: true,
      tags: ['Award', 'Recognition', 'Dubai', 'Excellence']
    },
    {
      id: 4,
      title: 'Authentic Indian Spice Blending: A Master Class',
      excerpt: 'Join Chef Priya as she reveals the ancient art of creating perfect spice blends for maximum flavor.',
      content: 'Spices are the soul of Indian cuisine, and mastering their blending is essential...',
      category: 'Recipes',
      author: 'Chef Priya Sharma',
      date: '2024-01-08',
      readTime: '12 min read',
      image: '/blog/spice-blending.webp',
      views: 1675,
      comments: 29,
      featured: false,
      tags: ['Spices', 'Indian Cuisine', 'Blending', 'Authentic']
    },
    {
      id: 5,
      title: 'Behind the Scenes: A Day in Our Kitchen',
      excerpt: 'Take an exclusive look at the daily operations that bring world-class cuisine to your table.',
      content: 'Ever wondered what happens behind the scenes at World Cup Restaurant? Join us for a day...',
      category: 'Restaurant News',
      author: 'Marketing Team',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/blog/kitchen-behind-scenes.jpg',
      views: 2890,
      comments: 45,
      featured: false,
      tags: ['Behind Scenes', 'Kitchen', 'Team', 'Daily Operations']
    },
    {
      id: 6,
      title: 'Upcoming: International Food Festival 2024',
      excerpt: 'Get ready for our biggest culinary event of the year featuring cuisines from 15 countries.',
      content: 'Mark your calendars! World Cup Restaurant is proud to present the International Food Festival 2024...',
      category: 'Events',
      author: 'Events Team',
      date: '2024-01-03',
      readTime: '4 min read',
      image: '/blog/food-festival.webp',
      views: 4100,
      comments: 89,
      featured: true,
      tags: ['Festival', 'International', 'Event', '2024']
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const trendingPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3)

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-zoom-in { animation: zoomIn 0.6s ease forwards; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        
        .blog-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Carousel transition */
        .carousel-item {
          transition: all 0.5s ease;
        }
        
        .carousel-enter {
          opacity: 1;
          transform: translateX(0);
        }
        
        .carousel-exit {
          opacity: 0;
          transform: translateX(-30px);
        }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section with Pattern Background */}
        <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="food-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20h40M20 0v40" stroke="#f97316" strokeWidth="0.5" fill="none" />
                  <circle cx="20" cy="20" r="1" fill="#f97316" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#food-pattern)" />
            </svg>
          </div>
          
          {/* Floating Food Icons */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[15%] left-[10%] animate-float" style={{animationDelay: '0.5s'}}>
              <GiSpoon className="text-3xl text-amber-300 opacity-40" />
            </div>
            <div className="absolute top-[30%] right-[15%] animate-float" style={{animationDelay: '1.2s'}}>
              <FaUtensils className="text-2xl text-amber-400 opacity-40" />
            </div>
            <div className="absolute bottom-[25%] left-[20%] animate-float" style={{animationDelay: '0.8s'}}>
              <GiKnifeFork className="text-4xl text-amber-400 opacity-30" />
            </div>
            <div className="absolute bottom-[15%] right-[25%] animate-float" style={{animationDelay: '1.5s'}}>
              <GiCookingPot className="text-2xl text-amber-500 opacity-40" />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-down">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-teal-100 px-5 py-2 rounded-full mb-6">
                  <GiNewspaper className="text-amber-600 animate-float" />
                  <span className="text-amber-800 font-medium">Food Stories & More</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
                  World Cup <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-500">Blog</span>
                </h1>
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Discover culinary secrets, chef stories, and the latest from our kitchen
                </p>
                
                <div className="hidden md:flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-2xl mx-auto">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-amber-500 to-teal-500 text-white shadow-md shadow-teal-200'
                          : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="white" preserveAspectRatio="none">
              <path d="M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z"></path>
            </svg>
          </div>
        </section>

        {/* Mobile Category Filter & Search */}
        <section className="md:hidden sticky top-0 z-40 bg-white shadow-md py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="flex items-center space-x-2 bg-amber-50 px-3 py-2 rounded-full text-amber-700 border border-amber-200"
              >
                <FaFilter className="text-amber-500" />
                <span className="font-medium text-sm">{selectedCategory}</span>
              </button>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>
            
            {/* Mobile Category Filter Dropdown */}
            {isMobileFilterOpen && (
              <div 
                ref={filterRef}
                className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-xl z-50 p-4 border-t border-gray-100 animate-fade-in-down"
              >
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-amber-500 to-teal-500 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-amber-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Search Bar - Desktop */}
        <section className="py-10 hidden md:block">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-amber-500" />
                <input
                  type="text"
                  placeholder="Search for recipes, tips, stories and more..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Carousel */}
        {selectedCategory === 'All' && featuredPosts.length > 0 && (
          <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8 animate-fade-in-down">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                    <FaFire className="text-amber-500 mr-3" />
                    Featured Stories
                  </h2>
                  
                  {/* Carousel Indicators */}
                  <div className="flex space-x-2">
                    {featuredPosts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePostIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === activePostIndex 
                            ? 'w-8 bg-amber-500' 
                            : 'bg-gray-300 hover:bg-amber-300'
                        }`}
                        aria-label={`Go to featured story ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  {featuredPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className={`relative ${
                        index === activePostIndex ? 'block carousel-enter' : 'hidden carousel-exit'
                      }`}
                    >
                      <div className="relative h-64 sm:h-96 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          priority={index === activePostIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                        <div className="max-w-2xl">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                            <span className="text-white/80 text-sm flex items-center">
                              <FaCalendar className="mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <h3 className="text-xl sm:text-3xl font-bold mb-2 text-white">
                            <Link 
                              href={`/blog/${post.id}`}
                              className="hover:text-amber-200 transition-colors duration-300"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-white/80 mb-4 hidden sm:block">
                            {post.excerpt}
                          </p>
                          
                          <Link 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                          >
                            <span>Read Article</span>
                            <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-10 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-8 animate-fade-in">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {selectedCategory === 'All' ? 'Latest' : selectedCategory} Articles
                    </h2>
                    <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                    </span>
                  </div>

                  {/* No results message */}
                  {filteredPosts.length === 0 && (
                    <div className="text-center py-16 px-4 bg-gray-50 rounded-xl">
                      <GiCookingPot className="text-5xl text-amber-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                      <p className="text-gray-600 mb-6">
                        We couldn't find any articles matching your search criteria.
                      </p>
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('All');
                        }}
                        className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}

                  {/* Articles List */}
                  <div className="space-y-6">
                    {filteredPosts.map((post, index) => (
                      <article 
                        key={post.id}
                        className="blog-card bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Link href={`/blog/${post.id}`} className="block">
                          <div className="sm:flex">
                            <div className="relative h-52 sm:h-auto sm:w-1/3 flex-shrink-0">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                              {post.featured && (
                                <div className="absolute top-3 left-3">
                                  <span className="bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                                    Featured
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            <div className="p-5 sm:p-6 sm:w-2/3">
                              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
                                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md">
                                  {post.category}
                                </span>
                                <span className="flex items-center">
                                  <FaUser className="mr-1 text-amber-500" />
                                  {post.author}
                                </span>
                                <span className="flex items-center">
                                  <FaClock className="mr-1 text-amber-500" />
                                  {post.readTime}
                                </span>
                                <span className="flex items-center">
                                  <FaEye className="mr-1 text-amber-500" />
                                  {post.views}
                                </span>
                              </div>
                              
                              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-amber-600 transition-colors">
                                {post.title}
                              </h3>
                              
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map((tag, idx) => (
                                  <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              
                              <Link 
                                href={`/blog/${post.id}`}
                                className="text-amber-600 hover:text-amber-700 transition-colors flex items-center space-x-1 text-sm font-medium"
                              >
                                <span>Continue Reading</span>
                                <FaAngleRight className="mt-0.5" />
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Trending Posts */}
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md animate-fade-in-right">
                    <div className="flex items-center space-x-2 mb-6">
                      <FaChartLine className="text-amber-500" />
                      <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {trendingPosts.map((post, index) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                          <div className="flex space-x-4">
                            <div className="relative w-20 h-20 flex-shrink-0">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                              <div className="absolute bottom-1 right-1 bg-white/80 backdrop-blur-sm rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold text-amber-600">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug mb-1">
                                {post.title}
                              </h4>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{post.views} views</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link 
                        href="/blog"
                        className="text-amber-600 hover:text-amber-700 transition-colors flex items-center justify-center space-x-1 text-sm font-medium"
                      >
                        <span>View All Articles</span>
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 shadow-md animate-fade-in-right delay-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
                    
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                              selectedCategory === category
                                ? 'bg-amber-500 text-white font-medium'
                                : 'hover:bg-amber-100 text-gray-700'
                            }`}
                          >
                            <span>{category}</span>
                            <span className="text-xs">
                              {category === 'All' 
                                ? blogPosts.length
                                : blogPosts.filter(post => post.category === category).length}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-br from-amber-500 to-teal-500 p-6 rounded-xl shadow-lg animate-fade-in-right delay-300">
                    <div className="text-center">
                      <GiSpoon className="text-4xl text-white mx-auto mb-4 animate-float" />
                      <h3 className="text-xl font-bold mb-2 text-white">Food Inspiration</h3>
                      <p className="text-white/90 text-sm mb-6">
                        Subscribe for recipes, cooking tips, and exclusive restaurant news
                      </p>
                      <form className="space-y-3">
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-300" />
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/20"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full bg-white text-amber-600 font-medium py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                        >
                          <span>Subscribe</span>
                          <FaBookmark />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </>
  )
}