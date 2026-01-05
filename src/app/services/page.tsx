import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, CloudRain, Search, Shield, Home, AlertTriangle } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Roofing Services | Repair, Replacement & Storm Damage | Instant Roof Estimate',
  description: 'Professional roofing services: roof repair, replacement, storm damage repair, inspections, and more. Free estimates and insurance claim assistance.',
  keywords: [
    'roofing services',
    'roof repair',
    'roof replacement',
    'storm damage repair',
    'roof inspection',
    'roofing contractor',
    'emergency roof repair',
    'hail damage repair',
    'roof leak repair',
    'residential roofing services',
  ],
  openGraph: {
    title: 'Roofing Services | Complete Solutions for Your Home',
    description: 'Professional roofing services including repair, replacement, and storm damage. Free estimates available.',
    type: 'website',
    url: 'https://instantroofestimate.ai/services',
  },
  alternates: {
    canonical: 'https://instantroofestimate.ai/services',
  },
};

const services = [
  {
    name: 'Storm & Hail Damage',
    slug: 'storm-damage',
    icon: CloudRain,
    description: 'Fast response for storm-damaged roofs. Free inspections and insurance claim assistance.',
    features: ['Free damage inspection', 'Insurance claim help', '24-48hr response'],
    urgent: true,
  },
  {
    name: 'Roof Repair',
    slug: 'roof-repair',
    icon: Wrench,
    description: 'Fix leaks, damaged shingles, flashing issues, and more. Extend your roof\'s life.',
    features: ['Leak repair', 'Shingle replacement', 'Flashing repair'],
    urgent: false,
  },
  {
    name: 'Roof Inspection',
    slug: 'roof-inspection',
    icon: Search,
    description: 'Comprehensive roof inspections for buyers, sellers, and annual maintenance.',
    features: ['Detailed reports', 'Photo documentation', 'Repair recommendations'],
    urgent: false,
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://instantroofestimate.ai' },
    { name: 'Services', url: 'https://instantroofestimate.ai/services' },
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
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Roofing Services</h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Professional roofing services for every need. From emergency repairs to full replacements, we connect you with trusted contractors.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all relative">
                    {service.urgent && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Urgent</span>
                    )}
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{service.name}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <Shield className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Roofing Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free estimate for any roofing service. Instant results, no obligation.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
              Get My Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
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
              <Link href="/roofing-materials" className="hover:text-white transition-colors">Materials Guide</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
