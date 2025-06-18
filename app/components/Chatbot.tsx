'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './Chatbot.css';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface QuickAction {
  id: number;
  text: string;
  action: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showReservationForm, setShowReservationForm] = useState<boolean>(false);
  const [reservationData, setReservationData] = useState({ name: '', mobile: '' });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! Welcome to World Cup Restaurant! How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const quickActions: QuickAction[] = [
    { id: 1, text: "📍 Location & Hours", action: "location" },
    { id: 2, text: "📋 View Menu", action: "menu" },
    { id: 3, text: "📞 Make Reservation", action: "reservation" },
    { id: 4, text: "📱 Contact Us", action: "contact" }
  ];

  // Scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(false);
        setIsOpen(false); // Close chatbot when scrolling up
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: string): void => {
    const userMessage: Message = {
      id: Date.now(),
      text: quickActions.find(qa => qa.action === action)?.text || '',
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Handle special actions
    if (action === 'menu') {
      setTimeout(() => {
        const botResponse = "📋 Great choice! Let me redirect you to our menu page where you can explore all our delicious World Cup cuisine! 🍽️";
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        }]);
        setIsTyping(false);
        
        // Redirect after showing message
        setTimeout(() => {
          router.push('/menu');
        }, 1000);
      }, 1000);
      return;
    }

    if (action === 'reservation') {
      setTimeout(() => {
        const botResponse = "📞 I'd love to help you make a reservation! Please fill out the form below and we'll get back to you shortly.";
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        }]);
        setIsTyping(false);
        setShowReservationForm(true);
      }, 1000);
      return;
    }

    // Regular responses
    setTimeout(() => {
      const botResponse = getBotResponse(action);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (action: string): string => {
    const responses: Record<string, string> = {
      location: "📍 We're open daily from 11:00 AM to 10:00 PM. Come visit us for an amazing World Cup dining experience! 🕐",
      contact: "📱 You can reach us at: +91 7033772680\n\nFeel free to call us for reservations, inquiries, or any assistance! We're here to help! 📞"
    };
    return responses[action] || "I'm here to help! What would you like to know about our World Cup restaurant?";
  };

  const handleReservationSubmit = (): void => {
    if (!reservationData.name.trim() || !reservationData.mobile.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Here you can handle the reservation data later
    console.log('Reservation Data:', reservationData);
    
    const confirmationMessage: Message = {
      id: Date.now(),
      text: `✅ Thank you ${reservationData.name}! Your reservation request has been received. We'll contact you at ${reservationData.mobile} shortly to confirm your booking!`,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, confirmationMessage]);
    setShowReservationForm(false);
    setReservationData({ name: '', mobile: '' });
  };

  const handleSendMessage = (): void => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('menu') || input.includes('food') || input.includes('dish')) {
      return "🍽️ Our World Cup menu features authentic global cuisine! Would you like me to redirect you to our menu page to see all our offerings?";
    }
    if (input.includes('reservation') || input.includes('book') || input.includes('table')) {
      return "📅 I'd be happy to help with your reservation! Use the quick action button above or let me know your preferred details.";
    }
    if (input.includes('hours') || input.includes('open') || input.includes('time')) {
      return "🕐 We're open daily from 11:00 AM to 10:00 PM. Perfect timing for lunch, dinner, or evening dining!";
    }
    if (input.includes('contact') || input.includes('phone') || input.includes('call')) {
      return "📱 You can reach us at +91 7033772680. Feel free to call anytime during our operating hours!";
    }
    if (input.includes('location') || input.includes('address') || input.includes('where')) {
      return "📍 We're open daily from 11:00 AM to 10:00 PM. Visit us for an amazing World Cup dining experience!";
    }
    
    return "Thanks for your message! I'm here to help with anything about our World Cup restaurant. Feel free to use the quick options above! 🏆";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Toggle Button */}
      <div 
        className={`chat-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
        {!isOpen && <div className="chat-notification">1</div>}
      </div>

      {/* Chat Window */}
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="bot-avatar">🤖</div>
          <div className="bot-info">
            <h4>World Cup Assistant</h4>
            <span className="status">● Online</span>
          </div>
          <button 
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message: Message) => (
            <div 
              key={message.id} 
              className={`message ${message.sender}`}
            >
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-content typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          {/* Reservation Form */}
          {showReservationForm && (
            <div className="message bot">
              <div className="reservation-form">
                <h4>📝 Make a Reservation</h4>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={reservationData.name}
                  onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={reservationData.mobile}
                  onChange={(e) => setReservationData({...reservationData, mobile: e.target.value})}
                  className="form-input"
                />
                <button 
                  onClick={handleReservationSubmit}
                  className="form-submit-btn"
                >
                  Send Reservation Request
                </button>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-actions">
          {quickActions.map((action: QuickAction) => (
            <button
              key={action.id}
              className="quick-action-btn"
              onClick={() => handleQuickAction(action.action)}
            >
              {action.text}
            </button>
          ))}
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;