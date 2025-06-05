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
  FaAward,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaCrown,
  FaRocket,
  FaFire,
  FaLeaf,
  FaChartLine,
  FaLightbulb,
  FaHandsHelping,
  FaQuoteRight
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiSparkles,
  GiChefToque,
  GiHotMeal,
  GiMeal
} from 'react-icons/gi'
import { IoRestaurantOutline } from 'react-icons/io5'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const journey = [
    {
      year: '2015',
      title: 'The Dream Begins',
      description: 'Founded with a vision to bring world flavors to Dubai',
      icon: FaRocket,
      image: '/about/img2.webp'
    },
    {
      year: '2017',
      title: 'First Recognition',
      description: 'Won "Best New Restaurant" at Dubai Food Awards',
      icon: FaAward,
      image: '/about/img3.webp'
    },
    {
      year: '2019',
      title: 'Expansion & Innovation',
      description: 'Launched our signature fusion menu concept',
      icon: FaFire,
      image: '/about/img4.webp'
    },
    {
      year: '2023',
      title: 'Culinary Excellence',
      description: 'Achieved Michelin recognition and community love',
      icon: FaCrown,
      image: '/about/img5.webp'
    }
  ]



  const values = [
    { 
      icon: GiCookingPot, 
      title: 'Quality First', 
      desc: 'We source the finest ingredients from local and international suppliers to ensure every dish meets our exacting standards.',
      color: 'from-amber-400 to-orange-500'
    },
    { 
      icon: FaHeart, 
      title: 'Made with Love', 
      desc: 'Our chefs pour their passion into every dish, creating memorable culinary experiences that keep our guests coming back.',
      color: 'from-red-400 to-rose-500'
    },
    { 
      icon: FaStar, 
      title: 'Excellence', 
      desc: 'We strive for perfection in every aspect of our service, from the first greeting to the final bite of dessert.',
      color: 'from-blue-400 to-indigo-500'
    }
  ]

  const team = [
    {
      name: 'Chef Ahmed Al-Rashid',
      role: 'Executive Head Chef',
      bio: '18+ years of culinary excellence across Dubai\'s finest establishments',
      image: '/team/chef-ahmed.jpg',
      expertise: 'Middle Eastern & Fusion Cuisine',
      quote: "Cooking is about passion, so it may look slightly temperamental in a way that it's too assertive to the naked eye."
    },
    {
      name: 'Chef Priya Sharma',
      role: 'Spice Master & Sous Chef',
      bio: 'Expert in authentic Indian cooking techniques and spice blending',
      image: '/team/chef-priya.jpg',
      expertise: 'Indian Cuisine & Spice Blending',
      quote: "The essence of great food lies in understanding the soul of your ingredients."
    },
    {
      name: 'Marco Giuseppe',
      role: 'Culinary Consultant',
      bio: 'Michelin-starred chef bringing international expertise',
      image: '/team/chef-marco.jpg',
      expertise: 'European & International Cuisine',
      quote: "Simplicity is the ultimate sophistication in cuisine. Let ingredients speak for themselves."
    }
  ]
  
  const testimonials = [
    {
      text: "World Cup Restaurant is a culinary masterpiece! Their fusion of global flavors with local favorites creates an unforgettable dining experience.",
      name: "Sarah Johnson",
      role: "Food Blogger & Critic",
      image: "/testimonials/customer1.jpg",
      stars: 5
    },
    {
      text: "Every dish tells a story. The chefs at World Cup Restaurant are true artists who transform ingredients into edible masterpieces.",
      name: "Mohammed Al-Farsi",
      role: "Dubai Foodie Guide",
      image: "/testimonials/customer2.jpg",
      stars: 5
    },
    {
      text: "From ambiance to service to taste - everything is perfection. Their dedication to quality and innovation is evident in every bite.",
      name: "Elena Petrova",
      role: "Travel & Food Writer",
      image: "/testimonials/customer3.jpg",
      stars: 5
    }
  ]
  
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
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
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        
        /* Timeline connector for mobile */
        .timeline-connector::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 30px;
          width: 2px;
          background: #e5e7eb;
          z-index: 0;
        }
        
        /* Testimonial animation */
        @keyframes testimonialFadeIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .testimonial-enter {
          animation: testimonialFadeIn 0.6s ease forwards;
        }
        
        /* Scroll reveal animation */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="min-h-screen bg-white text-black overflow-hidden">
        {/* Hero Section with Parallax Effect */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange-400 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/2 w-40 h-40 rounded-full bg-red-400 blur-3xl"></div>
          </div>
          
          {/* Small Floating Food Icons */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[15%] left-[10%] animate-float" style={{animationDelay: '0.5s'}}>
              <GiMeal className="text-3xl text-orange-300 opacity-60" />
            </div>
            <div className="absolute top-[30%] right-[15%] animate-float" style={{animationDelay: '1.2s'}}>
              <FaUtensils className="text-2xl text-amber-400 opacity-60" />
            </div>
            <div className="absolute bottom-[25%] left-[20%] animate-float" style={{animationDelay: '0.8s'}}>
              <GiHotMeal className="text-4xl text-orange-400 opacity-40" />
            </div>
            <div className="absolute bottom-[10%] right-[25%] animate-float" style={{animationDelay: '1.5s'}}>
              <GiSparkles className="text-2xl text-amber-500 opacity-50" />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <div className="animate-fade-in-down">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2 rounded-full mb-6">
                    <GiCookingPot className="text-amber-600 animate-float" />
                    <span className="text-amber-800 font-medium">Our Story</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                    World Cup <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Restaurant</span>
                  </h1>
                </div>
                
                <div className="animate-fade-in-up delay-200">
                  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    Dubai's premier destination where culinary excellence meets unforgettable dining experiences. A journey through global flavors crafted with passion.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/menu"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaUtensils className="animate-pulse" />
                      <span>Explore Menu</span>
                    </Link>
                    
                    <Link 
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-white text-gray-800 border-2 border-amber-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaMapMarkerAlt />
                      <span>Find Us</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Hero Image with Animation */}
              <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in-right delay-300">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl shadow-2xl">
                    <Image 
                      src="/about/img1.webp"
                      alt="World Cup Restaurant Interior"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float">
                    <div className="flex items-center space-x-2">
                      <FaAward className="text-amber-500 text-xl" />
                      <div>
                        <p className="text-xs text-gray-500">Recognized by</p>
                        <p className="font-bold text-gray-900">Michelin Guide</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-xl shadow-xl text-white animate-float" style={{animationDelay: '1s'}}>
                    <div className="text-center">
                      <p className="text-2xl font-bold">8+</p>
                      <p className="text-xs uppercase tracking-wide">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline - Responsive for Mobile & Desktop */}
        <section id="story" className="py-16 md:py-24 bg-white relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2 rounded-full mb-6">
                <FaRocket className="text-amber-600 animate-pulse" />
                <span className="text-amber-800 font-medium">Our Journey</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Story</span>
              </h2>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From a passionate dream to Dubai's most celebrated culinary destination
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block max-w-6xl mx-auto">
              <div className="relative">
                {/* Timeline Connector Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-200 via-orange-300 to-red-400 rounded-full"></div>
                
                {journey.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center mb-20 group ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                           style={{ animationDelay: `${index * 0.2}s` }}>
                        
                        {/* Year Badge */}
                        <div className={`inline-block mb-4 ${index % 2 === 0 ? 'float-right ml-4' : 'float-left mr-4'}`}>
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        
                        <div className="clear-both">
                          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Central Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <milestone.icon className="text-2xl text-white" />
                      </div>
                    </div>
                    
                    {/* Image on opposite side */}
                    <div className="w-5/12 animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                      <div className={`overflow-hidden rounded-2xl shadow-lg ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                        <div className="relative h-69 transition-transform duration-300 group-hover:scale-105">
                          <Image 
                            src={milestone.image || "/about/placeholder.jpg"}
                            alt={milestone.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden relative timeline-connector">
              {journey.map((milestone, index) => (
                <div 
                  key={index} 
                  className="ml-16 mb-12 relative animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon */}
                  <div className="absolute left-0 transform -translate-x-[50%] z-20">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <milestone.icon className="text-lg text-white" />
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute -left-8 top-14 z-20">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xl">
                    <div className="mb-3 mt-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 text-sm mt-2">
                        {milestone.description}
                      </p>
                    </div>
                    
                    {/* Image */}
                    <div className="overflow-hidden rounded-lg shadow-sm">
                      <div className="relative h-52 w-full">
                        <Image 
                          src={milestone.image || "/about/placeholder.jpg"}
                          alt={milestone.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* Values Section - Revised Design */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2 rounded-full mb-6">
                <FaHeart className="text-amber-600 animate-pulse" />
                <span className="text-amber-800 font-medium">Our Values</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Guests <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Choose Us</span>
              </h2>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our commitment to excellence and passion for food creates an unforgettable dining experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Gradient Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                  
                  <div className="p-8">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="text-2xl text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> 
      </div>
    </>
  )
}