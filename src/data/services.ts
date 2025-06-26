// /data/services.ts

export interface ServiceDataType {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: ServiceDataType[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Build responsive and modern websites.',
    image: '/images/web-dev.jpg',
    features: ['Responsive Design', 'SEO Friendly', 'Fast Loading'],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications.',
    image: '/images/mobile-app.jpg',
    features: ['iOS and Android', 'Push Notifications', 'App Store Deployment'],
  },
];

export default services;
