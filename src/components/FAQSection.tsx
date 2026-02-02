'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

// Default FAQs for homepage
const defaultFaqs: FAQ[] = [
  {
    question: 'How accurate is the instant roof estimate?',
    answer: 'Our estimates are 90-95% accurate. We use satellite photos and smart technology to measure your roof.\n\nThe final price may change a little based on things we can only see in person, like how your roof looks up close.',
  },
  {
    question: 'Is the roof estimate really free?',
    answer: 'Yes! Our instant roof estimate is 100% free.\n\nThere are no hidden fees. We measure your roof using satellite photos. You only pay if you decide to hire a roofer.',
  },
  {
    question: 'How long does it take to get my roof estimate?',
    answer: 'About 60 seconds!\n\nJust type in your address. Our smart tools look at satellite photos of your roof. They figure out the size and give you a price.',
  },
  {
    question: 'What do I need to get an estimate?',
    answer: 'Just your address! That is all.\n\nOur satellite tools measure your roof for you. We will ask for your phone or email so a roofer can send you more details.',
  },
  {
    question: 'How do you figure out the roof cost?',
    answer: 'We look at:\n• How big your roof is (from satellite photos)\n• How steep your roof is\n• Material prices in your area\n• What roofers charge near you\n\nWe show you low, middle, and high prices for different quality levels.',
  },
  {
    question: 'Will a roofer call me after I get my estimate?',
    answer: 'Yes, a licensed roofer near you will call or text. They can:\n• Answer your questions\n• Come look at your roof in person\n• Give you a detailed quote\n\nYou do not have to say yes. There is no pressure.',
  },
  {
    question: 'How much does a new roof cost?',
    answer: 'A new roof costs $8,000 to $25,000 for most homes.\n\nBasic shingles cost $4 to $8 per square foot. Fancy materials like metal or tile cost $10 to $25 per square foot.\n\nGet your free estimate to see your exact price.',
  },
  {
    question: 'How long does a roof last?',
    answer: 'It depends on what your roof is made of:\n• Basic shingles: 20 to 30 years\n• Fancy shingles: 25 to 35 years\n• Metal roofs: 40 to 70 years\n• Tile roofs: 50 to 100 years\n• Slate roofs: 100+ years\n\nGood care helps your roof last longer.',
  },
  {
    question: 'How do I know if I need a new roof?',
    answer: 'Watch for these warning signs:\n• Shingles that are curling, cracking, or missing\n• Shingle bits in your gutters\n• Light coming through roof boards\n• Saggy spots on your roof\n• Water stains on your ceiling\n• Your roof is over 20 years old\n• High energy bills\n\nIf you see any of these, get a free estimate.',
  },
  {
    question: 'Should I fix my roof or get a new one?',
    answer: 'Fix your roof if:\n• The damage is in one small area\n• Your roof is less than 15 years old\n• Less than 30% needs work\n\nGet a new roof if:\n• Damage is all over\n• Your roof is over 20 years old\n• You keep getting leaks\n• Repairs would cost more than half a new roof\n\nOur free estimate helps you decide.',
  },
  {
    question: 'What is a hip roof vs a gable roof?',
    answer: 'A hip roof has slopes on all four sides that meet at a ridge on top. A gable roof has two sloping sides with a triangle shape at each end.\n\nHip roofs are stronger in high winds and storms. Gable roofs cost less and give more attic space. Most American homes have one of these two types. Our satellite tool measures both accurately.',
  },
  {
    question: 'What is a roofing square and how do I calculate it?',
    answer: 'A roofing square equals 100 square feet of roof area.\n\n1. Measure your roof length and width\n2. Multiply to get total square feet\n3. Divide by 100 to get squares\n\nExample: A 2,000 sq ft roof = 20 squares. You need about 3 bundles of shingles per square. Our tool measures your roof from satellite photos so you do not have to climb up.',
  },
  {
    question: 'How do I figure out my roof pitch?',
    answer: 'Roof pitch is how steep your roof is. It is written as a ratio like 6/12 (rises 6 inches for every 12 inches horizontal).\n\nTo measure from your attic:\n• Hold a level against a rafter\n• Mark 12 inches on the level\n• Measure straight up to the rafter\n\nCommon pitches: 4/12 (low), 6/12 (standard), 8/12 or more (steep). Steeper roofs cost more. Our estimate already factors in your pitch.',
  },
  {
    question: 'Can you paint a metal roof?',
    answer: 'Yes! Use acrylic latex paint made for metal roofs. Clean the roof first, remove any rust, and apply a primer.\n\nPainting extends your metal roof life by 10 or more years and can lower energy bills by reflecting heat. Professional painting costs $1 to $3 per square foot. Most metal roofs need repainting every 10 to 15 years.',
  },
  {
    question: 'How long does a metal roof last?',
    answer: 'Metal roofs last 40 to 70 years with proper care:\n\n• Steel roofing: 40 to 60 years\n• Aluminum roofing: 50 to 70 years\n• Copper roofing: 70 to 100+ years\n• Zinc roofing: 80 to 100+ years\n\nMetal roofs last 2 to 3 times longer than asphalt shingles. The higher upfront cost often makes them cheaper per year.',
  },
  {
    question: 'How do I measure my roof for shingles?',
    answer: 'You can estimate from the ground:\n\n1. Measure your house footprint (length times width)\n2. Multiply by a pitch factor (1.05 for low, 1.15 for standard, 1.3 for steep)\n3. Add 10% for waste\n4. Divide by 100 to get roofing squares\n5. Multiply squares by 3 for bundles needed\n\nOr skip the math. Our free tool measures your roof from satellite photos in 60 seconds.',
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  description?: string;
  showIcon?: boolean;
  bgColor?: string;
}

export function FAQSection({
  faqs = defaultFaqs,
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know about getting your free roof estimate',
  showIcon = true,
  bgColor = 'bg-white',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {showIcon && (
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">FAQ</span>
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Schema component for structured data (AEO optimization)
export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Export default FAQs for backward compatibility
export const faqData = defaultFaqs;
