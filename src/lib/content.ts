export const CONTACT_EMAIL = "rapheli0@gmail.com";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "listopia-research",
    title: "Goodreads Listopia Research",
    description:
      "Research public Goodreads Listopia lists relevant to your book's genre, themes, and intended readership. Receive a curated selection of appropriate lists and recommendations for pursuing suitable opportunities in accordance with platform rules.",
    cta: "Learn More",
  },
  {
    id: "metadata-optimization",
    title: "Book Metadata Optimization",
    description:
      "Review your book description, genre positioning, keywords, and available metadata. Receive practical recommendations to help readers understand your book and determine whether it matches their interests.",
    cta: "Improve My Book",
  },
  {
    id: "discoverability-strategy",
    title: "Book Discoverability Strategy",
    description:
      "Develop a personalized discovery plan based on your book's subject, ideal audience, existing online presence, and relevant reader communities.",
    cta: "Build My Strategy",
  },
  {
    id: "campaign-reporting",
    title: "Campaign Monitoring and Reporting",
    description:
      "Receive progress updates documenting completed research, outreach or placement assistance where appropriate, and relevant campaign activities. Understand what has been completed and identify possible next steps.",
    cta: "Discuss My Campaign",
  },
] as const;

export const VALUE_CARDS = [
  {
    title: "Genre-Focused Research",
    description:
      "Identify Goodreads Listopia lists that align with your book's genre, themes, audience, and subject matter.",
  },
  {
    title: "Book Presentation Optimization",
    description:
      "Review your book's description, categories, keywords, and other available metadata to identify opportunities for a clearer and more compelling presentation.",
  },
  {
    title: "Reader Discoverability",
    description:
      "Develop a practical strategy for helping interested readers encounter your book through relevant discovery channels.",
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Book",
    description:
      "Share your book title, author name, Goodreads or Amazon link, genre, and publishing goals.",
  },
  {
    number: "02",
    title: "Research Relevant Opportunities",
    description:
      "We review your book's positioning and identify potentially suitable Goodreads Listopia lists and other relevant discovery opportunities.",
  },
  {
    number: "03",
    title: "Develop Your Strategy",
    description:
      "We provide recommendations and discuss appropriate next steps, including available services and their costs before any paid work begins.",
  },
  {
    number: "04",
    title: "Review Progress",
    description:
      "Receive updates on agreed activities, recommendations, and completed work so you can make informed decisions about your book's promotion.",
  },
] as const;

export const BENEFITS = [
  { title: "Personalized attention to each book." },
  { title: "Research based on genre and reader relevance." },
  { title: "Clear explanations of services and costs." },
  { title: "Transparent progress updates." },
  {
    title:
      "Respect for Goodreads guidelines and authentic reader engagement.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Research before recommendations",
    description:
      "Every suggestion starts with your book's genre, themes, and intended readership — never a generic checklist.",
  },
  {
    title: "Clear, upfront communication",
    description:
      "Services, scope, and costs are explained plainly before any paid work begins.",
  },
  {
    title: "Platform-respectful practice",
    description:
      "We work within Goodreads' rules and focus on authentic discovery, not artificial activity.",
  },
  {
    title: "Honest expectations",
    description:
      "List availability and discovery outcomes depend on factors outside anyone's control. We tell you what we can and cannot influence.",
  },
] as const;

export const GENRES = [
  "Dark Fantasy and Epic Fantasy",
  "Romance",
  "Mystery and Crime",
  "Thriller and Suspense",
  "Science Fiction",
  "Horror",
  "Young Adult",
  "Children's Books",
  "Historical Fiction",
  "Christian Fiction",
  "Literary Fiction",
  "LGBTQ+ Fiction",
] as const;

export const FEATURED_BOOKS = [
  { title: "Go Pro", author: "Eric Worre" },
  { title: "Dream Achievers", author: "Anthony and Enik Massi" },
] as const;

export const FAQS = [
  {
    question: "What is Goodreads Listopia?",
    answer:
      "Goodreads Listopia features reader-created lists of books organized around genres, themes, topics, and interests. Readers can explore lists and participate according to Goodreads' features and rules.",
  },
  {
    question: "How can Raphelix help with my book?",
    answer:
      "We can research relevant Listopia opportunities, review your book's presentation, and develop a discovery strategy suited to your genre and intended readership.",
  },
  {
    question: "Do you work with self-published authors?",
    answer:
      "Yes. Our services are designed to support independent authors, self-published writers, and other authors seeking practical book discoverability assistance.",
  },
  {
    question: "Can you guarantee placement or ranking on Goodreads?",
    answer:
      "List availability, list-owner decisions, reader participation, rankings, and discovery outcomes depend on factors outside our control. We focus on relevant research, appropriate assistance, and transparent delivery of agreed services.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the service scope, research requirements, and agreed deliverables. Contact Raphelix to discuss your book and request available options before making a commitment.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us your book details using the contact form. We will review your inquiry and discuss relevant services and next steps.",
  },
] as const;

export const HELP_TOPICS = [
  "Goodreads Listopia Research",
  "Book Metadata Optimization",
  "Book Discoverability Strategy",
  "Campaign Monitoring and Reporting",
  "General Question",
] as const;
