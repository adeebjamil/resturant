'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
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
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaThumbsUp,
  FaReply,
  FaUserCircle,
  FaBookmark,
  FaRegBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaPrint,
  FaEnvelope,
  FaLink,
  FaImage,
  FaSearch,
  FaChevronDown
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiChefToque,
  GiHotMeal,
  GiSpoon,
  GiKnifeFork
} from 'react-icons/gi'

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [likedComments, setLikedComments] = useState(new Set())
  const [newComment, setNewComment] = useState('')
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showImageViewer, setShowImageViewer] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showMobileNav, setShowMobileNav] = useState(false)

  // Reference for content section for scroll progress tracking
  const contentRef = useRef<HTMLElement>(null)

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        const totalHeight = element.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY - element.offsetTop;
        
        const scrollPercent = 
          (scrollTop / (totalHeight - windowHeight)) * 100;
        
        setReadingProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set visibility animation on load
  useEffect(() => {
    setIsVisible(true)
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])
  
  // Close share options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showShareOptions && event.target && event.target instanceof Element && !event.target.closest('.share-container')) {
        setShowShareOptions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareOptions]);

  // Blog posts data (same as main blog page)
  const blogPosts = [
    {
      id: 1,
      title: 'The Secret Behind Our Signature Porotta Sandwich',
      excerpt: 'Discover the authentic techniques and premium ingredients that make our porotta sandwich a Dubai favorite.',
      content: `Our porotta sandwich has become legendary in Dubai, and today we're sharing the secrets behind this masterpiece that has captured the hearts and taste buds of thousands.

## The Art of Perfect Porotta

The foundation of any great porotta sandwich starts with the porotta itself. Our chefs spend years mastering the delicate art of creating the perfect layers - thin, flaky, and buttery. Each porotta is hand-stretched and cooked on a traditional tawa, giving it that authentic texture and flavor that machine-made alternatives simply cannot replicate.

### Premium Ingredients Make the Difference

We source our flour from Kerala's finest mills, ensuring the authentic taste that our customers have come to love. The ghee we use is clarified butter from organic farms, and every spice blend is ground fresh daily in our kitchen.

## The Fusion Element

What makes our porotta sandwich truly special is the fusion element. We've taken the traditional Kerala porotta and created a sandwich that incorporates:

- **International flavors**: Mediterranean herbs, Arabic spices, and continental sauces
- **Fresh local produce**: Sourced daily from Dubai's premium suppliers
- **Innovative cooking techniques**: Combining traditional methods with modern culinary science

### The Perfect Assembly

Each sandwich is assembled with precision:
1. Freshly made porotta, still warm from the tawa
2. Our signature sauce blend (recipe closely guarded!)
3. Premium proteins - chicken, lamb, or vegetarian options
4. Fresh vegetables and herbs
5. A final touch of our house-made chutney

## Customer Love and Recognition

Since introducing our porotta sandwich three years ago, we've served over 50,000 of these culinary masterpieces. Food bloggers from across the Middle East have featured our sandwich, calling it "a perfect fusion of tradition and innovation."

The sandwich has also won several awards, including the "Best Fusion Dish" at the Dubai Food Festival 2023.

## Try It Yourself

Ready to experience this legendary sandwich? Visit us at World Cup Restaurant and discover why food lovers from around the world make special trips to Dubai just to taste our signature creation.`,
      fullContent: `Our porotta sandwich has become legendary in Dubai, and today we're sharing the secrets behind this masterpiece that has captured the hearts and taste buds of thousands.

The foundation of any great porotta sandwich starts with the porotta itself. Our chefs spend years mastering the delicate art of creating the perfect layers - thin, flaky, and buttery. Each porotta is hand-stretched and cooked on a traditional tawa, giving it that authentic texture and flavor that machine-made alternatives simply cannot replicate.

We source our flour from Kerala's finest mills, ensuring the authentic taste that our customers have come to love. The ghee we use is clarified butter from organic farms, and every spice blend is ground fresh daily in our kitchen.

What makes our porotta sandwich truly special is the fusion element. We've taken the traditional Kerala porotta and created a sandwich that incorporates international flavors, fresh local produce, and innovative cooking techniques.

Each sandwich is assembled with precision - freshly made porotta, our signature sauce blend, premium proteins, fresh vegetables and herbs, and a final touch of our house-made chutney.

Since introducing our porotta sandwich three years ago, we've served over 50,000 of these culinary masterpieces. The sandwich has won several awards, including the "Best Fusion Dish" at the Dubai Food Festival 2023.`,
      category: 'Chef Stories',
      author: 'Chef Ahmed Al-Rashid',
      authorBio: 'Executive Head Chef with 18+ years of experience crafting fusion masterpieces across Dubai\'s finest establishments.',
      authorImage: <FaUserCircle className="w-10 h-10 text-amber-500" />,
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/blog/porotta-sandwich.jpg',
      images: [
        '/blog/porotta-making.webp',
        '/blog/ingredients.webp',
        '/blog/assembly-process.webp'
      ],
      views: 2450,
      comments: 38,
      featured: true,
      tags: ['Porotta', 'Sandwich', 'Authentic', 'Dubai Favorite', 'Fusion Cuisine'],
      relatedPosts: [2, 4, 5]
    },
    {
      id: 2,
      title: '10 Fusion Cooking Techniques Every Food Lover Should Know',
      excerpt: 'Learn the art of fusion cuisine with these professional techniques straight from our kitchen.',
      content: `Fusion cooking is an art that combines the best of different culinary traditions to create something entirely new and exciting. At World Cup Restaurant, we've mastered this art form over the years.

## Understanding Fusion Cuisine

Fusion cuisine isn't just about mixing random ingredients from different cultures. It's about understanding the harmony of flavors, textures, and cooking methods to create dishes that honor their origins while offering something fresh and innovative.

### The 10 Essential Techniques

1. **Spice Layering**: Building complex flavors by adding spices at different cooking stages
2. **Cross-Cultural Marinades**: Combining Asian soy-based marinades with Mediterranean herbs
3. **Textural Contrasts**: Mixing crispy and soft elements from different cuisines
4. **Sauce Fusion**: Blending traditional sauces to create new flavor profiles
5. **Cooking Method Hybridization**: Using tandoor techniques with European ingredients
6. **Protein Preparation Fusion**: Japanese techniques on Middle Eastern cuts
7. **Vegetable Treatment Innovation**: Asian stir-fry methods with European vegetables
8. **Grain and Carb Fusion**: Using quinoa in traditional rice dishes
9. **Dessert Innovation**: Combining Arabic sweets with Western presentation
10. **Beverage Pairing**: Creating drinks that complement fusion flavors

Each technique requires practice and understanding of the base cuisines involved.`,
      fullContent: `Fusion cooking is an art that combines the best of different culinary traditions. Our chefs have developed these 10 essential techniques over years of experimentation and refinement.`,
      category: 'Food Tips',
      author: 'Chef Priya Sharma',
      authorBio: 'Spice Master & Sous Chef specializing in Arabic cuisine and fusion techniques.',
      authorImage: <FaUserCircle className="w-10 h-10 text-amber-500" />,
      date: '2024-01-12',
      readTime: '12 min read',
      image: '/blog/fusion-cooking.jpg',
      images: [
        '/blog/spice-mixing.jpg',
        '/blog/fusion-techniques.jpg',
        '/blog/plating-fusion.jpg'
      ],
      views: 1890,
      comments: 24,
      featured: false,
      tags: ['Fusion', 'Cooking Tips', 'Techniques', 'Professional', 'Innovation'],
      relatedPosts: [1, 4, 6]
    },
    {
      id: 3,
      title: 'World Cup Restaurant Wins Best International Cuisine 2024',
      excerpt: 'We\'re thrilled to announce our latest recognition at the Dubai Food Excellence Awards.',
      content: `It's with immense pride that we share our latest achievement at the Dubai Food Excellence Awards 2024, where World Cup Restaurant was honored with the "Best International Cuisine" award.

## A Night to Remember

The awards ceremony, held at the prestigious Burj Al Arab, brought together Dubai's finest culinary establishments. Our team was represented by Chef Ahmed Al-Rashid and Chef Priya Sharma, who accepted the award on behalf of our entire World Cup family.

### What This Award Means

This recognition validates our commitment to bringing authentic international flavors to Dubai while maintaining the highest standards of quality and innovation. The judges particularly praised our fusion approach and the authenticity of our diverse menu offerings.

## Our Winning Dishes

The judging panel specifically highlighted several of our signature dishes:

- **Porotta Sandwich**: Our legendary fusion creation
- **Spiced Lamb Biryani**: Traditional recipe with modern presentation
- **Mediterranean-Arabic Fusion Platter**: A perfect blend of two great cuisines
- **Dessert Innovation**: Our unique take on international sweets

### Community Impact

Beyond the culinary excellence, the award also recognized our commitment to the local community, including our support for local suppliers and our training programs for aspiring chefs from diverse backgrounds.

## Looking Forward

This award motivates us to continue pushing boundaries and exploring new culinary horizons. We're already working on exciting new menu additions that will further showcase the beauty of international cuisine fusion.

Thank you to all our customers, staff, and supporters who made this achievement possible!`,
      fullContent: `We're honored to receive the "Best International Cuisine" award at the Dubai Food Excellence Awards 2024. This recognition celebrates our commitment to authentic international flavors and culinary innovation.`,
      category: 'Restaurant News',
      author: 'World Cup Team',
      authorBio: 'The dedicated team behind World Cup Restaurant\'s success.',
      authorImage: <FaUserCircle className="w-10 h-10 text-amber-500" />,
      date: '2024-01-10',
      readTime: '5 min read',
      image: '/blog/award-ceremony.jpg',
      images: [
        '/blog/award-trophy.jpg',
        '/blog/team-celebration.jpg',
        '/blog/judges-tasting.jpg'
      ],
      views: 3200,
      comments: 67,
      featured: true,
      tags: ['Award', 'Recognition', 'Dubai', 'Excellence', 'Achievement'],
      relatedPosts: [1, 5, 6]
    },
    {
      id: 4,
      title: 'Authentic Arabic Spice Blending: A Master Class',
      excerpt: 'Join Chef Priya as she reveals the ancient art of creating perfect spice blends for maximum flavor.',
      content: `Spices are the soul of Arabic cuisine, and mastering their blending is essential for creating authentic, flavorful dishes. Today, I'm sharing the secrets of spice blending that have been passed down through generations.

## The Foundation of Flavor

Understanding spices is the first step to mastering Arabic cuisine. Each spice has its own character, intensity, and purpose. Some provide heat, others add aroma, and many contribute both flavor and color to dishes.

### Essential Spices for Blending

- **Cumin (Jeera)**: Earthy and warm, forms the base of many blends
- **Coriander (Dhania)**: Sweet and citrusy, balances stronger spices
- **Turmeric (Haldi)**: Provides color and subtle earthiness
- **Red Chili**: Heat and vibrant color
- **Garam Masala Components**: Cinnamon, cardamom, cloves, bay leaves

## The Art of Roasting

Roasting spices is crucial for developing their full flavor potential. Each spice requires different roasting times and temperatures:

1. **Whole spices first**: Cumin, coriander, fennel
2. **Medium heat**: Never rush the roasting process
3. **Constant stirring**: Prevents burning and ensures even roasting
4. **Aromatic indicators**: Trust your nose to know when they're ready

### Grinding Techniques

Traditional stone grinding produces the best texture and flavor, but modern spice grinders can work well too. The key is achieving the right consistency for each dish.

## Creating Signature Blends

At World Cup Restaurant, we create unique blends that represent different regions of India while adapting to international palates. Our signature masala includes 15 different spices, each roasted and ground separately before blending.

### Storage and Freshness

Proper storage is crucial for maintaining spice quality:
- Airtight containers in cool, dark places
- Label with grinding dates
- Use within 6 months for best flavor
- Never store near heat sources

## Practice Makes Perfect

Start with simple three-spice blends before moving to complex mixtures. Taste at every stage and adjust according to your preference and the specific dish you're preparing.`,
      fullContent: `Spice blending is an ancient art that requires understanding each spice's character and purpose. Through proper roasting, grinding, and blending techniques, you can create authentic flavors that form the foundation of great Arabic cuisine.`,
      category: 'Recipes',
      author: 'Chef Priya Sharma',
      authorBio: 'Spice Master & Sous Chef with expertise in traditional Arabic cooking techniques.',
      authorImage: <FaUserCircle className="w-10 h-10 text-amber-500" />,
      date: '2024-01-08',
      readTime: '15 min read',
      image: '/blog/spice-blending.jpg',
      images: [
        '/blog/whole-spices.webp',
        '/blog/roasting-process.jpg',
        '/blog/grinding-spices.jpg'
      ],
      views: 1675,
      comments: 29,
      featured: false,
      tags: ['Spices', 'Arabic Cuisine', 'Blending', 'Authentic', 'Techniques'],
      relatedPosts: [1, 2, 5]
    },
    {
      id: 5,
      title: 'Behind the Scenes: A Day in Our Kitchen',
      excerpt: 'Take an exclusive look at the daily operations that bring world-class cuisine to your table.',
      content: `Ever wondered what happens behind the scenes at World Cup Restaurant? Join us for a day in our kitchen and discover the dedication, precision, and passion that goes into every dish we serve.

## 5:00 AM - The Day Begins

Our kitchen team arrives early to begin the extensive preparation process. The first task is checking deliveries - fresh vegetables, premium meats, and specialty ingredients sourced from around the world.

### 6:00 AM - Prep Work Starts

The prep team begins their meticulous work:
- Cleaning and cutting vegetables with precision
- Preparing marinades for our signature dishes
- Making fresh bread and porotta dough
- Grinding spices for the day's cooking

## 8:00 AM - Chef's Meeting

Our head chefs conduct the daily briefing, discussing:
- Special menu items for the day
- Ingredient quality checks
- Coordination between different kitchen stations
- Any special dietary requirements for reserved tables

### 10:00 AM - Station Setup

Each cooking station is prepared with military precision:
- **Tandoor Station**: Fired up and calibrated for perfect temperature
- **Curry Station**: Aromatics ready, base gravies prepared
- **Grill Station**: Marinades applied, proteins at perfect temperature
- **Dessert Station**: Fresh preparations and garnish ready

## 12:00 PM - Service Begins

As the first customers arrive, our kitchen transforms into a well-orchestrated symphony:

### The Service Flow

1. **Order Reception**: Digital systems ensure accuracy
2. **Station Coordination**: Each chef knows their role
3. **Quality Control**: Every dish inspected before leaving kitchen
4. **Timing Perfection**: Hot dishes served immediately

## 2:00 PM - Lunch Rush Peak

During peak hours, our team serves up to 200 dishes per hour while maintaining our quality standards. The energy is intense but focused.

### 4:00 PM - Afternoon Reset

Brief respite allows for:
- Deep cleaning of equipment
- Restocking ingredients
- Staff meal and short break
- Preparation for evening service

## 6:00 PM - Evening Service Prep

Evening brings different challenges:
- Special dinner menu items
- More complex presentations
- Wine pairing considerations
- Special occasion preparations

### The Team Behind the Magic

Our kitchen employs 25 dedicated professionals:
- **3 Head Chefs**: Each specializing in different cuisines
- **8 Line Cooks**: Experts in their respective stations
- **6 Prep Cooks**: Foundation of our daily operations
- **4 Dishwashers**: Unsung heroes keeping everything clean
- **4 Support Staff**: Ensuring smooth operations

## Quality Never Compromises

Despite the fast pace, quality remains our top priority. Every dish undergoes multiple quality checks, from ingredient selection to final presentation.

### 11:00 PM - Day Ends

As service concludes, the team begins the extensive cleaning process, preparing for another day of culinary excellence.

## What Makes Us Different

Our commitment goes beyond just cooking - we're creating experiences, memories, and bringing people together through exceptional food.`,
      fullContent: `A day in our kitchen starts at 5 AM with fresh deliveries and ends at 11 PM with thorough cleaning. Our 25-member team works with precision and passion to serve up to 200 dishes per hour while maintaining exceptional quality standards.`,
      category: 'Restaurant News',
      author: 'Marketing Team',
      authorBio: 'The marketing team dedicated to sharing World Cup Restaurant\'s story.',
      authorImage: <FaUserCircle className="w-10 h-10 text-amber-500" />,
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/blog/kitchen-behind-scenes.jpg',
      images: [
        '/blog/morning-prep.jpg',
        '/blog/chef-meeting.jpg',
        '/blog/service-action.jpg'
      ],
      views: 2890,
      comments: 45,
      featured: false,
      tags: ['Behind Scenes', 'Kitchen', 'Team', 'Daily Operations', 'Quality'],
      relatedPosts: [1, 3, 6]
    },
    {
      id: 6,
      title: 'Upcoming: International Food Festival 2024',
      excerpt: 'Get ready for our biggest culinary event of the year featuring cuisines from 15 countries.',
      content: `Mark your calendars! World Cup Restaurant is proud to present the International Food Festival 2024, our biggest culinary celebration featuring authentic cuisines from 15 countries around the globe.

## Event Overview

From March 15-30, 2024, our restaurant will transform into a global culinary destination, offering visitors the chance to experience authentic dishes from every continent.

### Featured Countries

**Asia**: India, Thailand, Japan, China, Korea
**Europe**: Italy, France, Spain, Greece
**Middle East**: Lebanon, Turkey, Iran
**Americas**: Mexico, Brazil, USA

Each country will be represented by specialized dishes prepared by our international chef team, some of whom hail from these very nations.

## Special Highlights

### Week 1: Asian Fusion (March 15-21)
- **Thai Night**: Authentic pad thai, green curry, and mango sticky rice
- **Japanese Experience**: Fresh sushi, ramen, and tempura preparations
- **Arabic Feast**: Regional specialties from different Arabic states
- **Chinese Celebration**: Dim sum, Peking duck, and regional stir-fries

### Week 2: Global Flavors (March 22-30)
- **Mediterranean Journey**: Italian pasta, Greek moussaka, Spanish paella
- **Middle Eastern Nights**: Lebanese mezze, Turkish kebabs, Persian rice
- **Americas Adventure**: Mexican tacos, Brazilian churrasco, American BBQ

## Celebrity Chef Appearances

We're honored to host renowned chefs throughout the festival:

**Chef Marco Giuseppe** (Italy) - March 16-17
Master of authentic Italian cuisine, Michelin-starred chef

**Chef Yuki Tanaka** (Japan) - March 19-20
Sushi master with 30 years of experience

**Chef Maria Rodriguez** (Mexico) - March 25-26
Expert in traditional Mexican regional cuisines

### Special Events

**Cooking Demonstrations**: Daily at 3 PM and 7 PM
Watch master chefs prepare signature dishes while sharing techniques and stories.

**Wine Pairing Sessions**: Weekends at 6 PM
Curated wine selections perfectly matched with international cuisines.

**Cultural Performances**: Evening entertainment featuring music and dance from represented countries.

## Reservation Information

Due to expected high demand, advance reservations are strongly recommended:

- **Online Booking**: Available on our website
- **Phone Reservations**: +971-XXX-XXXX
- **Special Packages**: Multi-course tasting menus available
- **Group Bookings**: Special arrangements for parties of 8 or more

### Pricing

- **Individual Dishes**: AED 45-125 per dish
- **Tasting Menus**: AED 180-280 per person
- **Wine Pairing**: Additional AED 95-150

## Festival Pass

Purchase a Festival Pass for AED 800 and enjoy:
- Priority seating throughout the festival
- Complimentary appetizer each visit
- 20% discount on all dishes
- Exclusive access to chef meet-and-greets
- Take-home festival cookbook

### Community Involvement

Part of the festival proceeds will benefit Dubai Food Bank, supporting our commitment to giving back to the community.

## Getting Ready

Our kitchen team has been preparing for months, sourcing authentic ingredients and perfecting recipes. This festival represents our dedication to bringing the world's finest cuisines to Dubai.

Don't miss this culinary journey around the world without leaving Dubai!`,
      fullContent: `The International Food Festival 2024 (March 15-30) will feature authentic cuisines from 15 countries, celebrity chef appearances, cooking demonstrations, and cultural performances. This celebration of global cuisine includes special tasting menus, wine pairings, and supports Dubai Food Bank.`,
      category: 'Events',
      author: 'Events Team',
      authorBio: 'The events team responsible for creating memorable culinary experiences.',
      authorImage: <FaUserCircle className="w-10 h-10 text-amber-500" />,
      date: '2024-01-03',
      readTime: '7 min read',
      image: '/blog/food-festival.jpg',
      images: [
        '/blog/festival-setup.jpg',
        '/blog/international-chefs.jpg',
        '/blog/cultural-performance.jpg'
      ],
      views: 4100,
      comments: 89,
      featured: true,
      tags: ['Festival', 'International', 'Event', '2024', 'Celebration'],
      relatedPosts: [1, 3, 5]
    }
  ]

  // Find current post
  const currentPost = blogPosts.find(post => post.id === parseInt(params.id as string))
  
  // Find post index for prev/next navigation
  const currentPostIndex = blogPosts.findIndex(post => post.id === parseInt(params.id as string))
  const prevPost = currentPostIndex > 0 ? blogPosts[currentPostIndex - 1] : null
  const nextPost = currentPostIndex < blogPosts.length - 1 ? blogPosts[currentPostIndex + 1] : null
  
  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-amber-600 hover:text-amber-700 flex items-center justify-center gap-2">
            <FaArrowLeft />
            <span>Return to Blog</span>
          </Link>
        </div>
      </div>
    )
  }

  // Get related posts
  const relatedPosts = blogPosts.filter(post => 
    currentPost.relatedPosts?.includes(post.id)
  ).slice(0, 3)

// Sample comments data
const comments = [
  {
    id: 1,
    author: 'Sarah Mitchell',
    avatar: <FaUserCircle className="w-8 h-8 text-amber-500" />,
    date: '2024-01-16',
    content: 'This article perfectly explains why your porotta sandwich is so special! I\'ve been a regular customer for 2 years and never knew about the authentic Kerala flour sourcing.',
    likes: 12,
    replies: [
      {
        id: 11,
        author: 'Chef Ahmed Al-Rashid',
        avatar: <FaUserCircle className="w-7 h-7 text-amber-600" />,
        date: '2024-01-16',
        content: 'Thank you Sarah! We\'re so glad you enjoy our sandwiches. The authentic ingredients make all the difference.',
        likes: 8
      }
    ]
  },
  {
    id: 2,
    author: 'Omar Al-Farisi',
    avatar: <FaUserCircle className="w-8 h-8 text-blue-500" />,
    date: '2024-01-15',
    content: 'Incredible insight into the process! Would love to see a cooking class where we can learn to make porotta ourselves.',
    likes: 18,
    replies: []
  },
  {
    id: 3,
    author: 'Elena Rodriguez',
    avatar: <FaUserCircle className="w-8 h-8 text-green-500" />,
    date: '2024-01-15',
    content: 'The fusion approach is brilliant. Combining traditional techniques with international flavors - that\'s what makes World Cup unique!',
    likes: 15,
    replies: []
  }
]

  const toggleCommentLike = (commentId: number) => {
    setLikedComments(prev => {
      const newLiked = new Set(prev)
      if (newLiked.has(commentId)) {
        newLiked.delete(commentId)
      } else {
        newLiked.add(commentId)
      }
      return newLiked
    })
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      alert('Comment submitted: ' + newComment)
      setNewComment('')
    }
  }

  const sharePost = (platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'email') => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = currentPost.title;
    
    let shareUrl;
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank');
    setShowShareOptions(false);
  };

  return (
    <>
      <style jsx>{`
        /* Basic animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
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
        
        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        
        /* Blog content styling */
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2.5rem 0 1.25rem 0;
          color: #111827;
          line-height: 1.3;
          border-bottom: 2px solid rgba(251, 191, 36, 0.2);
          padding-bottom: 0.5rem;
        }
        
        .blog-content h3 {
          font-size: 1.35rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          color: #374151;
          line-height: 1.4;
        }
        
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.05rem;
        }
        
        .blog-content ul {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        
        .blog-content ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
          list-style-type: decimal;
        }
        
        .blog-content li {
          margin-bottom: 0.75rem;
          color: #4b5563;
          line-height: 1.6;
        }
        
        .blog-content strong {
          color: #111827;
          font-weight: 600;
        }
        
        .blog-content blockquote {
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          border-left: 4px solid #f59e0b;
          background-color: #fff8f0;
          color: #713f12;
          font-style: italic;
          position: relative;
        }
        
        .blog-content blockquote::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 10px;
          font-size: 3rem;
          color: rgba(245, 158, 11, 0.2);
          font-family: serif;
        }
        
        .shine-button {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        
        /* Mobile navigation drawer */
        .mobile-drawer {
          transition: transform 0.3s ease-in-out;
          transform: translateY(100%);
        }
        
        .mobile-drawer.open {
          transform: translateY(0);
        }
        
        /* Smooth image transition */
        .image-fade {
          transition: opacity 0.4s ease;
        }
        
        .image-viewer-bg {
          background-color: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(4px);
        }
      `}</style>

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
        style={{ opacity: readingProgress > 0 ? 1 : 0 }}
      >
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-teal-500"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        {/* Bottom Nav Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-t border-gray-200 shadow-lg">
          <button 
            onClick={() => router.push('/blog')}
            className="p-2 text-gray-700"
          >
            <FaArrowLeft className="text-lg" />
          </button>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 text-gray-700"
            >
              {isBookmarked ? (
                <FaBookmark className="text-amber-500" />
              ) : (
                <FaRegBookmark />
              )}
            </button>
            
            <button 
              onClick={() => setShowShareOptions(!showShareOptions)}
              className="p-2 text-gray-700"
            >
              <FaShare />
            </button>
            
            <button 
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="p-2 flex items-center gap-1 text-gray-700"
            >
              <span className="text-sm font-medium">More</span>
              {showMobileNav ? (
                <FaChevronDown className="text-xs" />
              ) : (
                <FaChevronRight className="text-xs" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav Drawer */}
        <div className={`mobile-drawer absolute bottom-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-t-xl overflow-hidden max-h-[60vh] overflow-y-auto ${showMobileNav ? 'open' : ''}`}>
          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-semibold mb-3 text-gray-900">Related Articles</h3>
              
              <div className="space-y-3">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-3 p-1"
                  >
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{post.title}</h4>
                      <div className="text-[11px] text-gray-500 mt-0.5">{post.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Author Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-amber-100 flex items-center justify-center bg-amber-50">
                {currentPost.authorImage}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{currentPost.author}</h3>
                <p className="text-xs text-gray-500">{currentPost.authorBio}</p>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="p-4">
            <h3 className="text-xs font-medium text-gray-500 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {currentPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Jump to comments */}
          <div className="bg-amber-50 p-4">
            <Link href="#comments" className="flex items-center justify-between">
              <span className="text-sm font-medium text-amber-800">Read Comments</span>
              <span className="bg-white text-amber-600 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold">{comments.length}</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Share Options Mobile */}
      {showShareOptions && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center animate-fade-in md:hidden">
          <div className="bg-white rounded-t-xl w-full max-w-lg p-5 share-container animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Share this article</h3>
              <button 
                onClick={() => setShowShareOptions(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-4">
              <button 
                onClick={() => sharePost('facebook')} 
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <FaFacebook className="text-xl" />
                </div>
                <span className="text-xs">Facebook</span>
              </button>
              
              <button 
                onClick={() => sharePost('twitter')}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
                  <FaTwitter className="text-xl" />
                </div>
                <span className="text-xs">Twitter</span>
              </button>
              
              <button 
                onClick={() => sharePost('linkedin')}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white">
                  <FaLinkedin className="text-xl" />
                </div>
                <span className="text-xs">LinkedIn</span>
              </button>
              
              <button 
                onClick={() => sharePost('email')}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white">
                  <FaEnvelope className="text-xl" />
                </div>
                <span className="text-xs">Email</span>
              </button>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                  setShowShareOptions(false);
                }}
                className="w-full py-3 flex items-center justify-center gap-2 bg-amber-50 text-amber-700 rounded-lg font-medium"
              >
                <FaLink />
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Image Viewer Overlay */}
      {showImageViewer && currentPost.images && (
        <div className="fixed inset-0 image-viewer-bg z-50 flex flex-col items-center justify-center animate-fade-in">
          <div className="absolute top-4 right-4">
            <button 
              onClick={() => setShowImageViewer(false)}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="relative w-full max-w-4xl h-[60vh] px-4">
            <Image
              src={currentPost.images[activeImageIndex]}
              alt={`${currentPost.title} - Image ${activeImageIndex + 1}`}
              fill
              className="object-contain image-fade"
            />
          </div>
          
          <div className="w-full max-w-4xl px-4 mt-4 flex items-center justify-between text-white">
            <button 
              onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : currentPost.images.length - 1))}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${activeImageIndex === 0 ? 'text-gray-500' : 'bg-white/10 hover:bg-white/20'}`}
              disabled={activeImageIndex === 0}
            >
              <FaChevronLeft />
            </button>
            
            <div className="text-center">
              <p className="text-sm">
                {activeImageIndex + 1} of {currentPost.images.length}
              </p>
            </div>
            
            <button 
              onClick={() => setActiveImageIndex((prev) => (prev < currentPost.images.length - 1 ? prev + 1 : 0))}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${activeImageIndex === currentPost.images.length - 1 ? 'text-gray-500' : 'bg-white/10 hover:bg-white/20'}`}
              disabled={activeImageIndex === currentPost.images.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-white text-gray-900">
        {/* Heading Section with Modern Design */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
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
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Back to Blog & Share/Save - Desktop */}
            <div className="hidden md:flex justify-between items-center mb-10 animate-fade-in-down">
              <Link 
                href="/blog"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm group-hover:bg-amber-50 transition-colors">
                  <FaArrowLeft className="text-gray-500 group-hover:text-amber-600 transition-colors" />
                </div>
                <span className="font-medium">Back to Blog</span>
              </Link>
              
              <div className="flex items-center space-x-4 relative share-container">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-full border transition-colors ${
                    isBookmarked 
                      ? 'border-amber-200 bg-amber-50 text-amber-600' 
                      : 'border-gray-200 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  {isBookmarked ? (
                    <FaBookmark className="text-amber-500" />
                  ) : (
                    <FaRegBookmark />
                  )}
                  <span className="text-sm font-medium">Save</span>
                </button>
                
                <div className="relative">
                  <button 
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-gray-200 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <FaShare />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  
                  {/* Desktop Share Options Dropdown */}
                  {showShareOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl p-3 z-50 border border-gray-100 animate-fade-in">
                      <div className="space-y-2">
                        <button 
                          onClick={() => sharePost('facebook')}
                          className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                        >
                          <FaFacebook className="text-blue-600" />
                          <span className="text-sm">Facebook</span>
                        </button>
                        
                        <button 
                          onClick={() => sharePost('twitter')}
                          className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                        >
                          <FaTwitter className="text-sky-500" />
                          <span className="text-sm">Twitter</span>
                        </button>
                        
                        <button 
                          onClick={() => sharePost('linkedin')}
                          className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                        >
                          <FaLinkedin className="text-blue-700" />
                          <span className="text-sm">LinkedIn</span>
                        </button>
                        
                        <hr className="my-2" />
                        
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Link copied to clipboard!');
                            setShowShareOptions(false);
                          }}
                          className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                        >
                          <FaLink className="text-gray-600" />
                          <span className="text-sm">Copy Link</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Category, Reading Time & Date - Mobile */}
            <div className="md:hidden flex flex-wrap items-center justify-center gap-3 mb-4 text-xs text-gray-600">
              <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium">
                {currentPost.category}
              </span>
              <div className="flex items-center space-x-1">
                <FaClock className="text-amber-500" />
                <span>{currentPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCalendar className="text-amber-500" />
                <span>{new Date(currentPost.date).toLocaleDateString()}</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                {currentPost.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                {currentPost.excerpt}
              </p>
              
              {/* Category, Reading Time & Date - Desktop */}
              <div className="hidden md:flex items-center justify-center space-x-6 text-sm text-gray-600 mb-8">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                  {currentPost.category}
                </span>
                <div className="flex items-center space-x-1.5">
                  <FaClock className="text-amber-500" />
                  <span>{currentPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <FaCalendar className="text-amber-500" />
                  <span>{new Date(currentPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <FaEye className="text-amber-500" />
                  <span>{currentPost.views} views</span>
                </div>
              </div>
              
              {/* Author Information */}
              <div className="hidden md:block animate-fade-in-up delay-200">
                <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white rounded-full shadow-sm">
                  <div className="w-10 h-10 rounded-full border-2 border-amber-100 flex items-center justify-center bg-amber-50">
                    {currentPost.authorImage}
                  </div>
                  <span className="font-medium text-gray-800">{currentPost.author}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="white" preserveAspectRatio="none">
              <path d="M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z"></path>
            </svg>
          </div>
        </section>

        {/* Article Content Section */}
        <section className="py-8 md:py-16" ref={contentRef}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="md:col-span-8 lg:col-span-8">
                  <article className="animate-fade-in-up">
                    {/* Featured Image with Overlay */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={currentPost.image}
                          alt={currentPost.title}
                          fill
                          priority
                          className="object-cover transition duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Image Credits */}
                      <div className="absolute bottom-4 right-4">
                        <div className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                          World Cup Restaurant
                        </div>
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="blog-content prose prose-lg max-w-none bg-white p-5 sm:p-8 rounded-2xl shadow-md border border-gray-100">
                      {currentPost.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('## ')) {
                          return <h2 key={index} id={paragraph.slice(3).toLowerCase().replace(/\s+/g, '-')}>{paragraph.slice(3)}</h2>;
                        } else if (paragraph.startsWith('### ')) {
                          return <h3 key={index}>{paragraph.slice(4)}</h3>;
                        } else if (paragraph.includes('- **')) {
                          const items = paragraph.split('\n').filter(item => item.startsWith('- **'));
                          return (
                            <ul key={index}>
                              {items.map((item, idx) => {
                                const processedText = item.slice(2).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                                return <li key={idx} dangerouslySetInnerHTML={{ __html: processedText }} />;
                              })}
                            </ul>
                          );
                        } else if (paragraph.match(/^\d+\./)) {
                          const items = paragraph.split('\n').filter(item => item.match(/^\d+\./));
                          return (
                            <ol key={index}>
                              {items.map((item, idx) => {
                                const processedText = item.replace(/^\d+\.\s*/, '').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                                return <li key={idx} dangerouslySetInnerHTML={{ __html: processedText }} />;
                              })}
                            </ol>
                          );
                        } else {
                          return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />;
                        }
                      })}
                    </div>

                    {/* Additional Images Gallery */}
                    {currentPost.images && currentPost.images.length > 0 && (
                      <div className="my-10">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                          <FaImage className="mr-2 text-amber-500" />
                          Photo Gallery
                        </h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {currentPost.images.map((img, index) => (
                            <button 
                              key={index} 
                              onClick={() => {
                                setActiveImageIndex(index);
                                setShowImageViewer(true);
                              }}
                              className="relative group rounded-lg overflow-hidden aspect-square shadow-md hover:shadow-lg transition-shadow"
                            >
                              <Image
                                src={img}
                                alt={`${currentPost.title} - Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/80 transition flex items-center justify-center transform scale-0 group-hover:scale-100">
                                  <FaSearch className="text-amber-600" />
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Author Box */}
                    <div className="mt-10 bg-gradient-to-r from-amber-50 to-teal-50 p-6 sm:p-8 rounded-xl border border-amber-100/50 shadow-sm">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                        <div className="w-20 h-20 rounded-full border-4 border-amber-100 flex items-center justify-center bg-amber-50 flex-shrink-0">
                          {currentPost.authorImage}
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">About {currentPost.author}</h3>
                          <p className="text-sm text-gray-700">{currentPost.authorBio}</p>
                        </div>
                      </div>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-12" id="comments">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Comments ({comments.length})
                      </h3>
                      
                      <div className="space-y-4">
                        {comments.map(comment => (
                          <div key={comment.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full border-2 border-amber-100 flex items-center justify-center bg-amber-50">
                                {comment.avatar}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-900">
                                    {comment.author}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {new Date(comment.date).toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-gray-700 text-sm mt-1">
                                  {comment.content}
                                </p>
                              </div>
                            </div>
                            
                            {/* Comment Replies */}
                            {comment.replies && comment.replies.length > 0 && (
                              <div className="ml-10 mt-4 border-l border-gray-200 pl-4">
                                {comment.replies.map(reply => (
                                  <div key={reply.id} className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full border-2 border-amber-100 flex items-center justify-center bg-amber-50">
                                      {reply.avatar}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-900">
                                          {reply.author}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                          {new Date(reply.date).toLocaleDateString()}
                                        </span>
                                      </div>
                                      <p className="text-gray-700 text-sm mt-1">
                                        {reply.content}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Comment Form */}
                      <div className="mt-8">
                        <h4 className="text-md font-semibold text-gray-900 mb-4">
                          Leave a Comment
                        </h4>
                        
                        <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4">
                          <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            rows={4}
                            placeholder="Write your comment here..."
                            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                            required
                          ></textarea>
                          <div className="flex items-center gap-3">
                            <button 
                              type="submit"
                              className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                            >
                              Post Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="sticky top-8 space-y-6">
                    {/* Article Stats */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 animate-slide-in-right shadow-lg">
                      <h3 className="text-lg font-bold mb-4 text-black">Article Stats</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">Views</span>
                          <span className="text-black font-bold text-xl">{currentPost.views}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">Comments</span>
                          <span className="text-black font-bold text-xl">{currentPost.comments}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">Reading Time</span>
                          <span className="text-black font-medium">{currentPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 animate-slide-in-right stagger-1 shadow-lg">
                        <h3 className="text-lg font-bold mb-4 text-black">Related Articles</h3>
                        <div className="space-y-4">
                          {relatedPosts.map((post, index) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                              <div className="flex space-x-3">
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
                                    {post.title}
                                  </h4>
                                  <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Newsletter */}
                    <div className="bg-black p-6 rounded-2xl animate-slide-in-right stagger-2 shadow-lg">
                      <div className="text-center">
                        <GiSpoon className="text-4xl text-white mx-auto mb-4 animate-float" />
                        <h3 className="text-lg font-bold mb-3 text-white">Stay Updated</h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Get the latest recipes and stories from our kitchen.
                        </p>
                        <div className="space-y-3">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-white text-sm"
                          />
                          <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
                            Subscribe
                          </button>
                        </div>
                      </div>
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