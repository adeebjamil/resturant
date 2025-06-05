'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaPhone, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUtensils,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaStar,
  FaParking,
  FaWifi,
  FaCreditCard,
  FaAccessibleIcon,
  FaChild,
  FaSmokingBan,
  FaPaperPlane,
  FaMapPin
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiPartyFlags,
  GiTable
} from 'react-icons/gi'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        message: ''
      })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      info: '+971 4 123 4567',
      subInfo: 'Available 24/7',
      action: 'tel:+97141234567'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: '+971 50 123 4567',
      subInfo: 'Quick responses',
      action: 'https://wa.me/971501234567'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'info@worldcuprestaurant.ae',
      subInfo: 'We reply within 2 hours',
      action: 'mailto:info@worldcuprestaurant.ae'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      info: 'Al Karama, Dubai, UAE',
      subInfo: 'Easy parking available',
      action: 'https://maps.google.com'
    }
  ]

  const openingHours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 12:00 AM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 1:00 AM' },
    { day: 'Sunday', hours: '11:00 AM - 12:00 AM' }
  ]

  const amenities = [
    { icon: FaParking, title: 'Free Parking', desc: 'Valet & self-parking available' },
    { icon: FaWifi, title: 'Free WiFi', desc: 'High-speed internet throughout' },
    { icon: FaCreditCard, title: 'All Cards Accepted', desc: 'Cash, cards, and digital payments' },
    { icon: FaAccessibleIcon, title: 'Wheelchair Accessible', desc: 'Fully accessible facilities' },
    { icon: FaChild, title: 'Family Friendly', desc: 'Kids menu and high chairs available' },
    { icon: FaSmokingBan, title: 'Non-Smoking', desc: 'Smoke-free dining environment' }
  ]

  const occasions = [
    'Birthday Celebration',
    'Anniversary',
    'Business Meeting',
    'Date Night',
    'Family Gathering',
    'Special Event',
    'Other'
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Main animation classes */
        .fade-in { animation: fadeIn 0.6s ease-out; }
        .slide-up { animation: slideUp 0.6s ease-out; }
        .spin { animation: spin 1s linear infinite; }

        /* Stagger delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        /* Hover effects - no keyframes needed */
        .contact-card {
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .form-input {
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .icon-hover {
          transition: transform 0.3s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1);
        }

        .social-icon {
          transition: transform 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
        }

        .floating-element {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
      `}</style>

      <div className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          {/* Simplified Floating Elements */}
          <div className="absolute inset-0">
            <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-black/5 rounded-full blur-xl"></div>
            <div className="floating-element absolute bottom-20 right-10 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
            <div className="floating-element absolute top-1/2 left-1/3 w-16 h-16 bg-black/5 rounded-full blur-lg"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="fade-in">
                <div className="inline-flex items-center space-x-2 bg-black/5 px-6 py-2 rounded-full mb-6">
                  <FaMapMarkerAlt className="text-black" />
                  <span className="text-gray-700 font-medium">Get In Touch</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-black">
                  Contact Us
                </h1>
                <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              </div>
              
              <div className="slide-up delay-100">
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Ready for an unforgettable dining experience? We're here to serve you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+97141234567"
                    className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                  >
                    <FaPhone />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href="#reservation"
                    className="inline-flex items-center space-x-2 border-2 border-black text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <FaCalendarAlt />
                    <span>Book Table</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`contact-card bg-white p-6 rounded-2xl border border-gray-200 hover:border-black/20 text-center group shadow-lg slide-up delay-${(index + 1) * 100}`}
                  >
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 icon-hover">
                      <info.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-black font-medium mb-1">{info.info}</p>
                    <p className="text-gray-500 text-sm">{info.subInfo}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Reservation Form & Info */}
        <section id="reservation" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Reservation Form */}
                <div className="slide-up">
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Reserve Your <span className="text-gray-600">Table</span>
                      </h2>
                      <p className="text-gray-600">
                        Book your perfect dining experience with us
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mb-6 text-center fade-in">
                        <FaCheckCircle className="inline mr-2" />
                        Reservation request sent successfully! We'll confirm within 2 hours.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                            placeholder="+971 XX XXX XXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Guests *
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            required
                            className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                          >
                            {[...Array(12)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} Guest{i > 0 ? 's' : ''}
                              </option>
                            ))}
                            <option value="13+">13+ Guests</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                          >
                            <option value="">Select time</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
                            <option value="21:30">9:30 PM</option>
                            <option value="22:00">10:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Occasion
                        </label>
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                        >
                          <option value="">Select occasion (optional)</option>
                          {occasions.map((occasion, index) => (
                            <option key={index} value={occasion}>{occasion}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="form-input w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none text-black resize-none"
                          placeholder="Any dietary restrictions, seating preferences, or special requests..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="spin">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                            </div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <FaPaperPlane />
                            <span>Reserve Table</span>
                          </div>
                        )}
                      </button>
                    </form>
                  </div>
                </div>

                {/* Restaurant Info */}
                <div className="space-y-8 slide-up delay-200">
                  {/* Opening Hours */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                      <FaClock className="text-2xl text-black" />
                      <h3 className="text-2xl font-bold text-black">Opening Hours</h3>
                    </div>
                    <div className="space-y-3">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="text-gray-700 font-medium">{schedule.day}</span>
                          <span className="text-black font-bold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-black/5 rounded-xl border border-black/10">
                      <p className="text-black text-sm text-center">
                        <FaStar className="inline mr-1" />
                        Highest hygiene standards maintained for your safety
                      </p>
                    </div>
                  </div>

                  {/* Location & Map */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                      <FaMapPin className="text-2xl text-black" />
                      <h3 className="text-2xl font-bold text-black">Find Us</h3>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">
                        <strong>World Cup Restaurant</strong>
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Al Karama Street, Near Dubai Mall<br />
                        Dubai, United Arab Emirates<br />
                        P.O. Box 12345
                      </p>
                    </div>
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gray-200">
                      <div className="absolute inset-0 bg-gray-300/50 flex items-center justify-center">
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-black font-bold">15 min</div>
                        <div className="text-gray-600 text-sm">from Dubai Mall</div>
                      </div>
                      <div className="text-center">
                        <div className="text-black font-bold">10 min</div>
                        <div className="text-gray-600 text-sm">from ADCB Metro</div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Quick Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Stay <span className="text-gray-600">Connected</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Follow us on social media for the latest updates, special offers, and behind-the-scenes content
                </p>
                
                <div className="flex justify-center space-x-6 mb-8">
                  <a 
                    href="https://instagram.com/worldcuprestaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <FaInstagram className="text-2xl text-white" />
                  </a>
                  <a 
                    href="https://facebook.com/worldcuprestaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center"
                  >
                    <FaFacebook className="text-2xl text-white" />
                  </a>
                  <a 
                    href="https://twitter.com/worldcuprest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-14 h-14 bg-black rounded-full flex items-center justify-center"
                  >
                    <FaTwitter className="text-2xl text-white" />
                  </a>
                  <a 
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-14 h-14 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <FaWhatsapp className="text-2xl text-white" />
                  </a>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 inline-block shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <FaPhone className="text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-gray-600 text-sm">Quick Call</div>
                      <a href="tel:+97141234567" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                        +971 4 123 4567
                      </a>
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
            <div className="max-w-3xl mx-auto fade-in">
              <GiCookingPot className="text-6xl text-white mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Dine with Us?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Experience world-class cuisine in the heart of Dubai
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/menu"
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Our Menu
                </Link>
                <a 
                  href="#reservation"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact Us for Table
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}