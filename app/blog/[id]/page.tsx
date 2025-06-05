'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
  FaUserCircle
} from 'react-icons/fa'
import { 
  GiCookingPot,
  GiChefToque,
  GiHotMeal,
  GiSpoon
} from 'react-icons/gi'

export default function BlogPostPage() {
  const params = useParams()
  const [isVisible, setIsVisible] = useState(false)
  const [likedComments, setLikedComments] = useState(new Set())
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
      authorImage: <FaUserCircle className="w-10 h-10 text-black" />,
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
9. **Dessert Innovation**: Combining Indian sweets with Western presentation
10. **Beverage Pairing**: Creating drinks that complement fusion flavors

Each technique requires practice and understanding of the base cuisines involved.`,
      fullContent: `Fusion cooking is an art that combines the best of different culinary traditions. Our chefs have developed these 10 essential techniques over years of experimentation and refinement.`,
      category: 'Food Tips',
      author: 'Chef Priya Sharma',
      authorBio: 'Spice Master & Sous Chef specializing in Indian cuisine and fusion techniques.',
      authorImage: <FaUserCircle className="w-10 h-10 text-black" />,
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
- **Mediterranean-Indian Fusion Platter**: A perfect blend of two great cuisines
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
      authorImage: <FaUserCircle className="w-10 h-10 text-black" />,
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
      title: 'Authentic Indian Spice Blending: A Master Class',
      excerpt: 'Join Chef Priya as she reveals the ancient art of creating perfect spice blends for maximum flavor.',
      content: `Spices are the soul of Indian cuisine, and mastering their blending is essential for creating authentic, flavorful dishes. Today, I'm sharing the secrets of spice blending that have been passed down through generations.

## The Foundation of Flavor

Understanding spices is the first step to mastering Indian cuisine. Each spice has its own character, intensity, and purpose. Some provide heat, others add aroma, and many contribute both flavor and color to dishes.

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
      fullContent: `Spice blending is an ancient art that requires understanding each spice's character and purpose. Through proper roasting, grinding, and blending techniques, you can create authentic flavors that form the foundation of great Indian cuisine.`,
      category: 'Recipes',
      author: 'Chef Priya Sharma',
      authorBio: 'Spice Master & Sous Chef with expertise in traditional Indian cooking techniques.',
      authorImage: <FaUserCircle className="w-10 h-10 text-black" />,
      date: '2024-01-08',
      readTime: '15 min read',
      image: '/blog/spice-blending.jpg',
      images: [
        '/blog/whole-spices.jpg',
        '/blog/roasting-process.jpg',
        '/blog/grinding-spices.jpg'
      ],
      views: 1675,
      comments: 29,
      featured: false,
      tags: ['Spices', 'Indian Cuisine', 'Blending', 'Authentic', 'Techniques'],
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
      authorImage: <FaUserCircle className="w-10 h-10 text-black" />,
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
- **Indian Feast**: Regional specialties from different Indian states
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
      authorImage: <FaUserCircle className="w-10 h-10 text-black" />,
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
  
  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-black hover:text-gray-700">
            Return to Blog
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
      avatar: '/testimonials/customer1.jpg',
      date: '2024-01-16',
      content: 'This article perfectly explains why your porotta sandwich is so special! I\'ve been a regular customer for 2 years and never knew about the authentic Kerala flour sourcing.',
      likes: 12,
      replies: [
        {
          id: 11,
          author: 'Chef Ahmed Al-Rashid',
          avatar: '/team/chef-ahmed.jpg',
          date: '2024-01-16',
          content: 'Thank you Sarah! We\'re so glad you enjoy our sandwiches. The authentic ingredients make all the difference.',
          likes: 8
        }
      ]
    },
    {
      id: 2,
      author: 'Omar Al-Farisi',
      avatar: '/testimonials/customer2.jpg',
      date: '2024-01-15',
      content: 'Incredible insight into the process! Would love to see a cooking class where we can learn to make porotta ourselves.',
      likes: 18,
      replies: []
    },
    {
      id: 3,
      author: 'Elena Rodriguez',
      avatar: '/testimonials/customer3.jpg',
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

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log('New comment:', newComment)
      setNewComment('')
    }
  }

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

        /* Blog content styling */
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
          color: #000000;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: #374151;
        }

        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #4b5563;
        }

        .blog-content ul, .blog-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }

        .blog-content strong {
          color: #000000;
          font-weight: 600;
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-down">
                <Link 
                  href="/blog"
                  className="inline-flex items-center space-x-2 text-black hover:text-gray-700 transition-colors mb-6"
                >
                  <FaArrowLeft />
                  <span>Back to Blog</span>
                </Link>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="bg-black/10 text-black px-4 py-2 rounded-full text-sm">
                    {currentPost.category}
                  </span>
                  <span className="text-gray-600 text-sm">{currentPost.readTime}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
                  {currentPost.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {currentPost.excerpt}
                </p>
              </div>
              

              <div className="animate-fade-in-up stagger-1">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-gray-100">
                      {currentPost.authorImage}
                    </div>
                    <span>{currentPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaCalendar />
                    <span>{new Date(currentPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaEye />
                    <span>{currentPost.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <article className="animate-fade-in-up">
                    {/* Featured Image */}
                    <div className="relative h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={currentPost.image}
                        alt={currentPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Article Body */}
                    <div className="blog-content prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                      {currentPost.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('## ')) {
                          return <h2 key={index}>{paragraph.slice(3)}</h2>
                        } else if (paragraph.startsWith('### ')) {
                          return <h3 key={index}>{paragraph.slice(4)}</h3>
                        } else if (paragraph.includes('- **')) {
                          const items = paragraph.split('\n').filter(item => item.startsWith('- **'))
                          return (
                            <ul key={index}>
                              {items.map((item, idx) => (
                                <li key={idx} dangerouslySetInnerHTML={{ __html: item.slice(2) }} />
                              ))}
                            </ul>
                          )
                        } else if (paragraph.match(/^\d+\./)) {
                          const items = paragraph.split('\n').filter(item => item.match(/^\d+\./))
                          return (
                            <ol key={index}>
                              {items.map((item, idx) => (
                                <li key={idx}>{item.replace(/^\d+\.\s*/, '')}</li>
                              ))}
                            </ol>
                          )
                        } else {
                          return <p key={index}>{paragraph}</p>
                        }
                      })}
                    </div>

                    {/* Additional Images */}
                    {currentPost.images && currentPost.images.length > 0 && (
                      <div className="grid md:grid-cols-3 gap-6 my-12">
                        {currentPost.images.map((img, index) => (
                          <div key={index} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={img}
                              alt={`${currentPost.title} - Image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <div className="flex flex-wrap gap-3">
                        {currentPost.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-black/10 text-black px-4 py-2 rounded-full text-sm hover:bg-black/20 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
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

        {/* Call to Action */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Experience the Flavors
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Ready to taste what you've been reading about?
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
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}