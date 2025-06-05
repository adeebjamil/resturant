'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaPhone, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
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
  FaMapPin,
  FaChevronDown,
  FaArrowRight,
  FaInfoCircle
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiPartyFlags,
  GiTable,
  GiShrimp,
  GiKnifeFork
} from 'react-icons/gi'
import { MdDinnerDining } from 'react-icons/md'

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
  const [activeTab, setActiveTab] = useState('reservation')
  const reservationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Check if URL has a hash and scroll to that section
    if (window.location.hash === '#reservation' && reservationRef.current) {
      setTimeout(() => {
        reservationRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
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
      action: 'tel:+97141234567',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: '+971 50 123 4567',
      subInfo: 'Quick responses',
      action: 'https://wa.me/971501234567',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'info@worldcuprestaurant.ae',
      subInfo: 'We reply within 2 hours',
      action: 'mailto:info@worldcuprestaurant.ae',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      info: 'Al Karama, Dubai, UAE',
      subInfo: 'Easy parking available',
      action: 'https://maps.google.com',
      color: 'from-red-500 to-red-600'
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
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Main animation classes */
        .fade-in { 
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards; 
        }
        
        .slide-up { 
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards; 
        }
        
        .slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .spin { animation: spin 1s linear infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .float { animation: float 3s ease-in-out infinite; }

        /* Stagger delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }

        /* Hover effects */
        .contact-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
          transform: scale(1.15);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .floating-element {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        
        .tab-button {
          transition: all 0.3s ease;
        }
        
        .tab-content {
          transition: all 0.5s ease;
        }
      `}</style>

      <div className="min-h-screen bg-white text-black">
   

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  How Can We <span className="text-amber-500">Help You?</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose the most convenient way to reach us. We're always ready to assist you with any questions or reservations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`contact-card bg-white p-8 rounded-3xl border border-gray-100 text-center group shadow-xl slide-up delay-${(index + 2) * 100}`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-2 transition-colors group-hover:text-amber-600">{info.info}</p>
                    <p className="text-gray-500 text-sm">{info.subInfo}</p>
                    <div className="mt-5 text-amber-500 font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Contact Now</span>
                      <FaArrowRight className="text-xs" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Reservation Form & Info */}
        <section id="reservation" ref={reservationRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16 slide-up">
                <GiTable className="text-5xl text-amber-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                  Table Reservation & Information
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Book your table in advance or find key information about our restaurant
                </p>
              </div>

              {/* Tabs - Mobile */}
              <div className="md:hidden mb-8 slide-up">
                <div className="bg-white rounded-xl p-2 shadow-md">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveTab('reservation')}
                      className={`tab-button p-4 rounded-lg text-center font-medium ${
                        activeTab === 'reservation' 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaCalendarAlt className="mx-auto mb-1" />
                      <span>Book a Table</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('info')}
                      className={`tab-button p-4 rounded-lg text-center font-medium ${
                        activeTab === 'info' 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaInfoCircle className="mx-auto mb-1" />
                      <span>Restaurant Info</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Reservation Form */}
                <div className={`tab-content slide-in-left ${activeTab === 'reservation' ? 'block' : 'hidden md:block'}`}>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                        Reserve Your <span className="text-amber-500">Table</span>
                      </h3>
                      <p className="text-gray-600">
                        Book your perfect dining experience with us
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-700 p-5 rounded-xl mb-8 text-center fade-in">
                        <FaCheckCircle className="text-xl inline mr-2" />
                        <span className="font-medium">Reservation request sent successfully!</span> 
                        <p className="text-sm mt-1">We'll confirm your booking within 2 hours.</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-5">
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
                            className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
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
                            className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
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
                            className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
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
                            className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black appearance-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23666666\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
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

                      <div className="grid md:grid-cols-2 gap-5">
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
                            className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black"
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
                            className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black appearance-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23666666\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
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
                          className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black appearance-none"
                          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23666666\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
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
                          className="form-input w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none text-black resize-none"
                          placeholder="Any dietary restrictions, seating preferences, or special requests..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-amber-500/30"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="spin">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                            </div>
                            <span>Processing Request...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <FaPaperPlane />
                            <span>Confirm Reservation</span>
                          </div>
                        )}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        By making a reservation, you agree to our reservation policy.
                      </p>
                    </form>
                  </div>
                </div>

                {/* Restaurant Info */}
                <div className={`tab-content space-y-8 slide-in-right ${activeTab === 'info' ? 'block' : 'hidden md:block'}`}>
                  {/* Opening Hours */}
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <FaClock className="text-2xl text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Opening Hours</h3>
                    </div>
                    <div className="space-y-4">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                          <span className="text-gray-700 font-medium">{schedule.day}</span>
                          <span className="text-amber-600 font-bold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-5 bg-amber-50 rounded-xl border border-amber-100">
                      <p className="text-gray-800 text-sm flex items-center">
                        <FaStar className="text-amber-500 mr-2 flex-shrink-0" />
                        <span>We maintain the highest hygiene standards for your safety and comfort</span>
                      </p>
                    </div>
                  </div>

                  {/* Location & Map */}
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <FaMapPin className="text-2xl text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Find Us</h3>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold mb-2">
                        World Cup Restaurant
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Al Karama Street, Near Dubai Mall<br />
                        Dubai, United Arab Emirates<br />
                        P.O. Box 12345
                      </p>
                    </div>
                    <div className="relative h-56 rounded-xl overflow-hidden mb-6 border border-gray-200">
                      {/* Map would typically go here, using a placeholder for now */}
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <div className="text-gray-900 font-bold text-lg">15 min</div>
                        <div className="text-gray-600 text-sm">from Dubai Mall</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <div className="text-gray-900 font-bold text-lg">10 min</div>
                        <div className="text-gray-600 text-sm">from ADCB Metro</div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities - Mobile Only */}
                  <div className="md:hidden bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <FaWifi className="text-2xl text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Amenities</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {amenities.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 border border-gray-100 rounded-lg">
                          <item.icon className="text-amber-500 text-lg flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Amenities - Desktop */}
              <div className="hidden md:block mt-12 slide-up delay-400">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Restaurant <span className="text-amber-500">Amenities</span>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      We offer a range of amenities to make your dining experience comfortable and enjoyable
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {amenities.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors">
                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-amber-500 text-xl" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Quick Contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Stay <span className="text-amber-500">Connected</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Follow us on social media for the latest updates, special offers, and behind-the-scenes content
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <a 
                  href="https://instagram.com/worldcuprestaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-3xl text-center slide-up delay-100"
                >
                  <FaInstagram className="text-4xl text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold">Instagram</h3>
                  <p className="text-white/80 text-sm mt-1">@worldcuprestaurant</p>
                </a>
                
                <a 
                  href="https://facebook.com/worldcuprestaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-3xl text-center slide-up delay-200"
                >
                  <FaFacebook className="text-4xl text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold">Facebook</h3>
                  <p className="text-white/80 text-sm mt-1">@worldcuprestaurant</p>
                </a>
                
                <a 
                  href="https://twitter.com/worldcuprest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-3xl text-center slide-up delay-300"
                >
                  <FaTwitter className="text-4xl text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold">Twitter</h3>
                  <p className="text-white/80 text-sm mt-1">@worldcuprest</p>
                </a>
                
                <a 
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-3xl text-center slide-up delay-400"
                >
                  <FaWhatsapp className="text-4xl text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold">WhatsApp</h3>
                  <p className="text-white/80 text-sm mt-1">Quick Chat</p>
                </a>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-center slide-up delay-500">
                <div className="bg-amber-50 p-6 md:p-8 rounded-3xl border border-amber-100 flex flex-col md:flex-row items-center gap-6 shadow-lg w-full md:w-auto">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-gray-600 text-sm mb-1">For Quick Reservations</div>
                    <a href="tel:+97141234567" className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                      +971 4 123 4567
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for your convenience</p>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-lg w-full md:w-auto">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-gray-400 text-sm mb-1">Email Us</div>
                    <a href="mailto:info@worldcuprestaurant.ae" className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
                      info@worldcuprestaurant.ae
                    </a>
                    <p className="text-sm text-gray-400 mt-1">We respond within 2 hours</p>
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