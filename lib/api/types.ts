// Shape mirrors the Django /home/ endpoint (home/views.py::HomePageView) response.
// The `images` arrays were empty in the reference response (no CMS images uploaded
// yet), so their item shape below is inferred from the id/order pattern used by
// every other nested list in this payload (products, steps, faqs, testimonials).
export interface GalleryImage {
  id: number;
  image: string;
  alt_text: string;
  order: number;
}

export interface HeroSection {
  id: number;
  headline: string;
  subtext: string;
  cta1_label: string;
  cta1_url: string;
  cta2_label: string;
  cta2_url: string;
  images: GalleryImage[];
  is_active: boolean;
}

export interface FeaturedProduct {
  id: number;
  name: string;
  description: string;
  image: string | null;
  order: number;
}

export interface ProductsSection {
  heading: {
    id: number;
    headline: string;
    subtext: string;
  };
  products: FeaturedProduct[];
}

export interface ServiceStep {
  id: number;
  icon: string | null;
  title: string;
  description: string;
  order: number;
}

export interface ServicesSection {
  id: number;
  headline: string;
  subtext: string;
  background_image: string | null;
  steps: ServiceStep[];
}

export interface HowItWorksStep {
  id: number;
  step_number: number;
  title: string;
  description: string;
  icon: string | null;
}

export interface HowItWorks {
  id: number;
  headline: string;
  subtext: string;
  steps: HowItWorksStep[];
}

export interface StoneGallery {
  id: number;
  headline: string;
  subtext: string;
  explore_more_label: string;
  explore_more_url: string;
  images: GalleryImage[];
}

export interface AboutUs {
  id: number;
  headline: string;
  body_text: string;
  images: GalleryImage[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  order: number;
}

export interface FAQSection {
  id: number;
  headline: string;
  faqs: FAQ[];
}

export interface Testimonial {
  id: number;
  customer_name: string;
  review_text: string;
  star_rating: number;
  order: number;
}

export interface TestimonialsSection {
  id: number;
  headline: string;
  subtext: string;
  testimonials: Testimonial[];
}

export interface HomePageResponse {
  hero: HeroSection;
  products_section: ProductsSection;
  services_section: ServicesSection;
  how_it_works: HowItWorks;
  stone_gallery: StoneGallery;
  about_us: AboutUs;
  faq: FAQSection;
  testimonials: TestimonialsSection;
}