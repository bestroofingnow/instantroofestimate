import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, DollarSign, Leaf } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Roofing Materials Guide | Compare Types, Costs & Durability',
  description: 'Compare roofing materials: asphalt shingles, metal roofing, tile, and slate. See costs, lifespan, pros & cons to choose the best option for your home.',
  keywords: [
    'roofing materials',
    'types of roofing',
    'roofing material comparison',
    'best roofing materials',
    'roof material types',
    'roofing options',
    'residential roofing materials',
    'roof shingles types',
    'metal vs shingles',
    'roofing material costs',
  ],
  openGraph: {
    title: 'Roofing Materials Guide | Compare All Options',
    description: 'Complete guide to roofing materials. Compare costs, durability, and find the best option for your home.',
    type: 'website',
    url: 'https://instantroofestimate.ai/roofing-materials',
  },
  alternates: {
    canonical: 'https://instantroofestimate.ai/roofing-materials',
  },
};

const materials = [
  {
    name: 'Asphalt Shingles',
    slug: 'asphalt-shingles',
    cost: '$3-$7/sq ft',
    lifespan: '15-30 years',
    description: 'The most popular roofing choice in America. Affordable, versatile, and available in many styles.',
    color: 'bg-amber-500',
    pros: ['Most affordable', 'Easy installation', '100+ colors'],
  },
  {
    name: 'Metal Roofing',
    slug: 'metal-roofing',
    cost: '$8-$16/sq ft',
    lifespan: '40-70 years',
    description: 'Premium durability with energy efficiency. Standing seam and metal shingles available.',
    color: 'bg-zinc-500',
    pros: ['Longest lifespan', 'Energy efficient', 'Low maintenance'],
  },
  {
    name: 'Tile Roofing',
    slug: 'tile-roofing',
    cost: '$10-$20/sq ft',
    lifespan: '50-100 years',
    description: 'Classic Mediterranean and Spanish style. Clay or concrete options available.',
    color: 'bg-orange-600',
    pros: ['Exceptional durability', 'Fire resistant', 'Classic aesthetics'],
  },
  {
    name: 'Slate Roofing',
    slug: 'slate-roofing',
    cost: '$15-$30/sq ft',
    lifespan: '75-150 years',
    description: 'The ultimate luxury roofing material. Natural stone with unmatched longevity.',
    color: 'bg-slate-600',
    pros: ['Century+ lifespan', 'Natural beauty', 'Highest value'],
  },
];

export default function RoofingMaterialsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://instantroofestimate.ai' },
    { name: 'Roofing Materials', url: 'https://instantroofestimate.ai/roofing-materials' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Instant Roof Estimate" width={48} height={48} className="w-12 h-12" />
                <span className="font-bold text-xl text-slate-900">Instant Roof Estimate</span>
              </Link>
              <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Roofing Materials Guide</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Compare costs, durability, and features of every roofing material to find the perfect option for your home.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
                Get Estimate for Any Material <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Materials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Choose Your Roofing Material</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {materials.map((material) => (
                  <Link key={material.slug} href={`/roofing-materials/${material.slug}`} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${material.color} rounded-xl`}></div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{material.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{material.cost}</span>
                          <span>•</span>
                          <span>{material.lifespan}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{material.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {material.pros.map((pro) => (
                        <span key={pro} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{pro}</span>
                      ))}
                    </div>
                    <div className="mt-4 text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Link */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Sure Which to Choose?</h2>
              <p className="text-slate-600 mb-6">Our detailed comparison guides help you decide between popular options.</p>
              <Link href="/compare/metal-vs-shingles" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Compare Metal vs Shingles <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <p>&copy; {new Date().getFullYear()} Instant Roof Estimate. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Get Free Estimate</Link>
              <Link href="/roof-estimate" className="hover:text-white transition-colors">All Locations</Link>
              <Link href="/roof-cost-calculator" className="hover:text-white transition-colors">Cost Calculator</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
