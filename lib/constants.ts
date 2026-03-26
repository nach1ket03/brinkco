export const services = [
  { id: 1, num: "01", name: "Starter Website", desc: "A robust online presence to get you started.", price: "From ₹5,000" },
  { id: 2, num: "02", name: "Standard Website", desc: "For growing businesses needing more features.", price: "From ₹10,000" },
  { id: 3, num: "03", name: "Premium Website", desc: "Advanced functionality and custom design.", price: "From ₹20,000" },
  { id: 4, num: "04", name: "Monthly Care Plan", desc: "Maintenance, updates, and priority support.", price: "₹2,000/month" },
];

export const workItems = [
  {
    id: 1,
    title: "Cafe Bliss",
    tag: "Cafes & Restaurants",
    result: "+340% enquiries",
    desc: "A complete overhaul of their digital presence leading to massive growth in table reservations.",
    pills: ["Next.js", "Tailwind CSS"],
    image: "/placeholder1.jpg", // Will be actual image path later
  },
  {
    id: 2,
    title: "FitLife Gym",
    tag: "Gyms",
    result: "+210% memberships",
    desc: "A high-conversion landing page focused on lead generation for local fitness enthusiasts.",
    pills: ["React", "Framer Motion"],
    image: "/placeholder2.jpg",
  },
  {
    id: 3,
    title: "Glow Salon",
    tag: "Salons",
    result: "+180% bookings",
    desc: "An elegant, photo-heavy portfolio site that showcases their premium services perfectly.",
    pills: ["Next.js", "Tailwind CSS"],
    image: "/placeholder3.jpg",
  },
  {
    id: 4,
    title: "Swift Delivery",
    tag: "Fast Delivery",
    result: "+400% orders",
    desc: "A mobile-first platform integrating seamless ordering and tracking for local deliveries.",
    pills: ["Web Design", "Mobile Optimization"],
    image: "/placeholder4.jpg",
    isSlider: true,
  }
];

export const pricingTiers = [
  {
    id: 1,
    name: "Starter",
    price: "₹5,000",
    note: "Perfect for new local businesses.",
    features: ["1-page landing page", "Mobile responsive", "Contact form", "WhatsApp integration", "Basic SEO"],
    hot: false,
  },
  {
    id: 2,
    name: "Standard",
    price: "₹10,000",
    note: "Great for growing companies.",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "WhatsApp integration", "Advanced SEO", "Google My Business setup"],
    hot: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "₹20,000",
    note: "For established businesses.",
    features: ["Up to 10 pages", "Custom animations", "CMS for easy updates", "Priority support", "Full SEO suite", "Analytics integration"],
    hot: false,
  },
];

export const testimonials = [
  { id: 1, quote: "Nachiket completely transformed our digital presence. We're seeing table bookings like never before.", author: "Rahul P.", role: "Owner, Cafe Bliss", result: "3x More Bookings", stars: 5 },
  { id: 2, quote: "The website was delivered in just 5 days and it looks incredible. The WhatsApp button alone doubled our leads.", author: "Sneha M.", role: "Founder, Glow Salon", result: "Doubled Leads", stars: 5 },
  { id: 3, quote: "Best investment we made for our gym. The new site is fast, modern, and gets people to sign up.", author: "Vikram S.", role: "Manager, FitLife Gym", result: "Higher Conversions", stars: 5 },
];

export const faqItems = [
  { id: 1, question: "Why not just use Instagram?", answer: "While Instagram is great for updates, a website acts as your 24/7 salesman. It builds trust, allows for better SEO so people can find you on Google, and provides a structured way to convert visitors into paying customers without platform distractions." },
  { id: 2, question: "Why not Wix/Squarespace?", answer: "DIY builders are notoriously slow and often look generic. I build custom, highly-optimized websites that load instantly and are specifically designed to convert visitors in your local market. Plus, you get a dedicated partner, not just a tool." },
  { id: 3, question: "I'm not tech-savvy.", answer: "You don't need to be! I handle everything from design to deployment. I'll even set up your domain and hosting. You just need to focus on your business while I make sure your website works for you." },
  { id: 4, question: "Are there any hidden fees?", answer: "No hidden fees. The pricing is completely transparent. The only ongoing cost might be the domain/hosting or if you opt for the Monthly Care Plan for maintenance." },
  { id: 5, question: "Do you provide hosting?", answer: "Yes, I deploy all websites on Vercel, providing blazing-fast global speeds. We can discuss domain registration as well." },
  { id: 6, question: "Can I update the site myself?", answer: "For Premium tiers, I can integrate a CMS so you can easily update text and images. For other tiers, updates are handled through the Monthly Care Plan or ad-hoc requests." },
];

export const processSteps = [
  { id: 1, num: "01", title: "Free Demo", desc: "We'll discuss your business goals, and I'll create a quick mockup or strategy tailored to you—before you pay anything." },
  { id: 2, num: "02", title: "Share Details", desc: "You provide images, text, and any specific requirements. I'll handle the rest." },
  { id: 3, num: "03", title: "Built in 3–7 Days", desc: "I'll design and develop a high-converting website using modern tech." },
  { id: 4, num: "04", title: "Go Live", desc: "After your approval, we launch the site. I'll also ensure all WhatsApp links and tracking are working perfectly." },
];

export const whyCards = [
  { id: 1, icon: "CheckCircle", title: "Free demo before you pay", desc: "See what you're getting before any commitment. I'll build a mini-prototype so you can visualize the final product." },
  { id: 2, icon: "MessageCircle", title: "Built for WhatsApp enquiries", desc: "Every call-to-action is optimized to start a conversation right where your customers are most comfortable." },
  { id: 3, icon: "Zap", title: "Delivered in 3–7 days", desc: "No months of waiting. I use modern tools to turn around premium designs fast, so you can start getting leads sooner." },
  { id: 4, icon: "PiggyBank", title: "No agency pricing (save ₹30K–₹70K)", desc: "You get agency-quality design and performance without the massive overhead. More value, better results." },
];
