'use client'
import { useState, useEffect } from 'react'
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
  FaChartLine
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiChefToque,
  GiHotMeal,
  GiSpoon
} from 'react-icons/gi'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Animation classes */
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .blog-card {
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .category-filter {
          transition: all 0.3s ease;
        }

        .category-filter.active {
          background: #000000;
          color: white;
        }
      `}</style>

      <div className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-black/5 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-black/5 rounded-full blur-xl animate-float stagger-2"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-black/5 rounded-full blur-lg animate-float stagger-4"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-down">
                <div className="inline-flex items-center space-x-2 bg-black/5 px-6 py-2 rounded-full mb-6">
                  <GiCookingPot className="text-black animate-float" />
                  <span className="text-gray-700 font-medium">Food Stories & More</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">
                  World Cup Blog
                </h1>
                <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              </div>
              
              <div className="animate-fade-in-up stagger-1">
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Discover culinary secrets, chef stories, and the latest from our kitchen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8 animate-fade-in-up">
                <div className="relative max-w-md mx-auto">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black text-black"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up stagger-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-filter px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'active'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12 animate-fade-in-down">
                  <h2 className="text-3xl md:text-4xl font-bold text-black">
                    Featured <span className="text-gray-600">Stories</span>
                  </h2>
                  <FaFire className="text-3xl text-black animate-pulse" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {featuredPosts.map((post, index) => (
                    <article 
                      key={post.id}
                      className="blog-card bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-black/20 animate-scale-in shadow-lg"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <FaCalendar />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FaClock />
                            <span>{post.readTime}</span>
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-black hover:text-gray-700 transition-colors">
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span className="flex items-center space-x-1">
                              <FaEye />
                              <span>{post.views}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <FaComment />
                              <span>{post.comments}</span>
                            </span>
                          </div>
                          
                          <Link 
                            href={`/blog/${post.id}`}
                            className="text-black hover:text-gray-700 transition-colors flex items-center space-x-1 font-medium"
                          >
                            <span>Read More</span>
                            <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-8 animate-fade-in-down">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                      {selectedCategory === 'All' ? 'Latest' : selectedCategory} Articles
                    </h2>
                    <span className="text-gray-500">
                      {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                    </span>
                  </div>

                  <div className="space-y-8">
                    {filteredPosts.map((post, index) => (
                      <article 
                        key={post.id}
                        className="blog-card bg-white p-6 rounded-2xl border border-gray-200 hover:border-black/20 animate-fade-in-up shadow-lg"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="relative h-48 md:h-32 overflow-hidden rounded-xl">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                              <span className="bg-black/10 text-black px-2 py-1 rounded text-xs">
                                {post.category}
                              </span>
                              <span className="flex items-center space-x-1">
                                <FaUser />
                                <span>{post.author}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <FaCalendar />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 text-black hover:text-gray-700 transition-colors">
                              <Link href={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 2).map((tag, idx) => (
                                  <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center space-x-4 text-xs text-gray-400">
                                <span className="flex items-center space-x-1">
                                  <FaEye />
                                  <span>{post.views}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <FaClock />
                                  <span>{post.readTime}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Trending Posts */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 animate-slide-in-right shadow-lg">
                    <div className="flex items-center space-x-2 mb-6">
                      <FaChartLine className="text-black" />
                      <h3 className="text-xl font-bold text-black">Trending Now</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {trendingPosts.map((post, index) => (
                        <div key={post.id} className="flex space-x-3 group">
                          <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-black group-hover:text-gray-700 transition-colors leading-tight">
                              <Link href={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                              <FaEye />
                              <span>{post.views} views</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-black p-6 rounded-2xl animate-slide-in-right stagger-2 shadow-lg">
                    <div className="text-center">
                      <GiSpoon className="text-4xl text-white mx-auto mb-4 animate-float" />
                      <h3 className="text-xl font-bold mb-3 text-white">Stay Updated</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Get the latest recipes, tips, and stories delivered to your inbox.
                      </p>
                      <div className="space-y-3">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                        />
                        <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Hungry for More Stories?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Visit us to experience these flavors firsthand
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/menu"
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Our Menu
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Visit Restaurant
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}