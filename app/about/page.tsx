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
  FaAward,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaCrown,
  FaRocket,
  FaFire,
  FaLeaf,
  FaChartLine,
  FaLightbulb,
  FaHandsHelping
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiSparkles,
  GiChefToque,
  GiHotMeal
} from 'react-icons/gi'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const journey = [
    {
      year: '2015',
      title: 'The Dream Begins',
      description: 'Founded with a vision to bring world flavors to Dubai',
      icon: FaRocket
    },
    {
      year: '2017',
      title: 'First Recognition',
      description: 'Won "Best New Restaurant" at Dubai Food Awards',
      icon: FaAward
    },
    {
      year: '2019',
      title: 'Expansion & Innovation',
      description: 'Launched our signature fusion menu concept',
      icon: FaFire
    },
    {
      year: '2023',
      title: 'Culinary Excellence',
      description: 'Achieved Michelin recognition and community love',
      icon: FaCrown
    }
  ]

  const stats = [
    { icon: FaUsers, number: '50K+', label: 'Happy Customers' },
    { icon: FaUtensils, number: '200+', label: 'Menu Items' },
    { icon: FaAward, number: '15+', label: 'Awards' },
    { icon: FaClock, number: '24/7', label: 'Service' }
  ]

  const values = [
    { icon: GiCookingPot, title: 'Quality First', desc: 'Premium ingredients, authentic flavors' },
    { icon: FaHeart, title: 'Made with Love', desc: 'Every dish crafted with passion' },
    { icon: FaStar, title: 'Excellence', desc: 'Award-winning culinary experience' }
  ]

  const team = [
    {
      name: 'Chef Ahmed Al-Rashid',
      role: 'Executive Head Chef',
      bio: '18+ years of culinary excellence across Dubai\'s finest establishments',
      image: '/team/chef-ahmed.jpg',
      expertise: 'Middle Eastern & Fusion Cuisine'
    },
    {
      name: 'Chef Priya Sharma',
      role: 'Spice Master & Sous Chef',
      bio: 'Expert in authentic Indian cooking techniques and spice blending',
      image: '/team/chef-priya.jpg',
      expertise: 'Indian Cuisine & Spice Blending'
    },
    {
      name: 'Marco Giuseppe',
      role: 'Culinary Consultant',
      bio: 'Michelin-starred chef bringing international expertise',
      image: '/team/chef-marco.jpg',
      expertise: 'European & International Cuisine'
    }
  ]

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

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Animation classes */
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-slide-up { animation: slideUp 0.8s ease-out; }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }

        .timeline-card {
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .team-card {
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
                  <span className="text-gray-700 font-medium">Our Story</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">
                  World Cup Restaurant
                </h1>
                <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              </div>
              
              <div className="animate-fade-in-up stagger-1">
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Dubai's Premier Destination for Global Culinary Excellence
                </p>
                <Link 
                  href="/menu"
                  className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  <FaUtensils className="animate-float" />
                  <span>Explore Menu</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section id="story" className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 animate-fade-in-down">
              <div className="inline-flex items-center space-x-2 bg-black/10 px-6 py-2 rounded-full mb-6">
                <FaRocket className="text-black animate-pulse" />
                <span className="text-gray-700 font-medium">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
                Our <span className="text-gray-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From a passionate dream to Dubai's most celebrated culinary destination
              </p>
              <div className="mt-8 w-24 h-1 bg-black mx-auto rounded-full"></div>
            </div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 rounded-full"></div>
                
                {journey.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center mb-16 group ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className={`timeline-card bg-white p-8 rounded-2xl border border-gray-200 shadow-lg animate-slide-up`}
                           style={{ animationDelay: `${index * 0.2}s` }}>
                        
                        {/* Year Badge */}
                        <div className={`inline-block mb-4 ${index % 2 === 0 ? 'float-right' : 'float-left'}`}>
                          <span className="bg-black text-white px-4 py-2 rounded-full text-lg font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        
                        <div className="clear-both">
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Central Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <milestone.icon className="text-2xl text-white" />
                      </div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up stagger-6">
              {[
                { number: '8+', label: 'Years of Excellence', icon: FaClock },
                { number: '75K+', label: 'Happy Guests', icon: FaUsers },
                { number: '25+', label: 'Awards Won', icon: FaAward },
                { number: '300+', label: 'Signature Dishes', icon: FaUtensils }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="mb-4">
                    <stat.icon className="text-4xl text-black mx-auto animate-float" 
                              style={{ animationDelay: `${index * 0.2}s` }} />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="text-4xl text-white mx-auto mb-3 animate-float" 
                             style={{ animationDelay: `${index * 0.3}s` }} />
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-down">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Why Choose <span className="text-gray-600">Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence sets us apart in Dubai's culinary scene
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black/20 transition-all duration-300 group animate-fade-in-up shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <value.icon className="text-5xl text-black mx-auto mb-6 group-hover:scale-110 transition-transform animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4 text-black">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-down">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Meet Our <span className="text-gray-600">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate chefs behind our culinary excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="team-card bg-white rounded-2xl border border-gray-200 overflow-hidden animate-scale-in shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-black">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="bg-black/5 px-3 py-1 rounded-full text-xs text-black inline-block">
                      {member.expertise}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <FaQuoteLeft className="text-4xl text-black mx-auto mb-6 animate-float" />
              <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 italic leading-relaxed">
                "World Cup Restaurant is a culinary masterpiece! Their fusion of global flavors 
                with local favorites creates an unforgettable dining experience."
              </blockquote>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Image
                  src="/testimonials/customer1.jpg"
                  alt="Sarah Johnson"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-black"
                />
                <div className="text-left">
                  <div className="text-xl font-bold text-black">Sarah Johnson</div>
                  <div className="text-gray-600">Food Blogger & Critic</div>
                </div>
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-2xl text-black animate-float" 
                          style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <GiChefToque className="text-6xl text-white mx-auto mb-6 animate-float" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Taste Excellence?
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Join us for an extraordinary culinary journey that celebrates flavors from around the world
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
                  Reserve Your Table
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}