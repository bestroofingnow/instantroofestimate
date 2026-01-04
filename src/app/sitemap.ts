import { MetadataRoute } from 'next';
import { fetchBlogPosts } from '@/lib/blog';

// Top cities for roofing services - for location-based SEO pages
const topCities = [
  // Texas
  'houston-tx',
  'dallas-tx',
  'san-antonio-tx',
  'austin-tx',
  'fort-worth-tx',
  // Arizona
  'phoenix-az',
  // California
  'los-angeles-ca',
  'san-diego-ca',
  // Colorado
  'denver-co',
  // Florida
  'miami-fl',
  'tampa-fl',
  'orlando-fl',
  'jacksonville-fl',
  // Georgia
  'atlanta-ga',
  // Illinois
  'chicago-il',
  // Indiana
  'indianapolis-in',
  // Missouri
  'kansas-city-mo',
  // Nevada
  'las-vegas-nv',
  // North Carolina - Charlotte Metro
  'charlotte-nc',
  'concord-nc',
  'gastonia-nc',
  'huntersville-nc',
  'mooresville-nc',
  'lake-norman-nc',
  'cornelius-nc',
  'davidson-nc',
  'kannapolis-nc',
  'indian-trail-nc',
  'matthews-nc',
  'hickory-nc',
  'statesville-nc',
  'monroe-nc',
  'raleigh-nc',
  // South Carolina - Charlotte Metro
  'rock-hill-sc',
  'fort-mill-sc',
  // Ohio
  'columbus-oh',
  // Oklahoma
  'oklahoma-city-ok',
  // Oregon
  'portland-or',
  // Pennsylvania
  'philadelphia-pa',
  // Tennessee
  'nashville-tn',
  'memphis-tn',
  // Washington
  'seattle-wa',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://instantroofestimate.ai';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await fetchBlogPosts();
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  // Location pages
  const locationPages: MetadataRoute.Sitemap = topCities.map((city) => ({
    url: `${baseUrl}/roof-estimate/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...locationPages];
}
