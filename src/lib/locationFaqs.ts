import { LocationData, formatCurrency } from './locations';

export interface LocationFaq {
  question: string;
  answer: string;
}

export function generateLocationFaqs(location: LocationData): LocationFaq[] {
  const { city, state, stateAbbr, climate, avgRoofCost, popularMaterials, seasonalNotes, region } = location;

  // Determine climate-specific advice
  const climateAdvice = getClimateAdvice(climate);
  const bestSeason = getBestSeason(climate, seasonalNotes);
  const warrantyYears = getWarrantyYears(climate);

  return [
    {
      question: `How much does a new roof cost in ${city}, ${stateAbbr}?`,
      answer: `In ${city}, ${stateAbbr}, roof replacement costs typically range from ${formatCurrency(avgRoofCost.low)} for basic materials to ${formatCurrency(avgRoofCost.high)} for premium options. The average ${city} homeowner pays around ${formatCurrency(avgRoofCost.mid)} for a complete roof replacement with architectural shingles. Factors affecting your final cost include roof size, pitch, accessibility, and material choice.`
    },
    {
      question: `What are the best roofing materials for ${city}'s climate?`,
      answer: `Given ${city}'s ${climate} climate, the most popular and effective roofing materials are ${popularMaterials.join(', ')}. ${climateAdvice.materialReason} Local ${city} roofing contractors recommend these materials because they provide the best protection and longevity for homes in the ${region} region.`
    },
    {
      question: `How long does roof replacement take in ${city}?`,
      answer: `Most roof replacements in ${city} take 1-3 days for an average-sized home. Larger homes or those with complex roof designs may take 4-5 days. Weather conditions in ${city} can affect timing, as ${seasonalNotes.toLowerCase()} Professional ${city} roofers work efficiently while ensuring quality installation.`
    },
    {
      question: `When is the best time to replace a roof in ${city}, ${stateAbbr}?`,
      answer: `${bestSeason} This timing allows for optimal shingle adhesion and comfortable working conditions. However, experienced ${city} roofing contractors can perform quality installations year-round when necessary, though emergency repairs are available anytime.`
    },
    {
      question: `Do I need a permit for roof replacement in ${city}?`,
      answer: `Yes, most roof replacements in ${city}, ${stateAbbr} require a building permit. Reputable ${city} roofing contractors handle the permit process as part of their service. Permits ensure your new roof meets ${state} building codes and local ${city} regulations, which is important for insurance claims and future home sales.`
    },
    {
      question: `How do I find a reputable roofing contractor in ${city}?`,
      answer: `When searching for a roofer in ${city}, look for contractors who are licensed and insured in ${stateAbbr}, have positive local reviews, offer written estimates, and provide manufacturer warranties. Ask for references from recent ${city} projects and verify their ${state} contractor license. Our free estimate service connects you with vetted ${city} roofing professionals.`
    },
    {
      question: `Will my homeowners insurance cover roof replacement in ${city}?`,
      answer: `Homeowners insurance in ${city} typically covers roof damage from storms, hail, wind, and other covered perils. ${climateAdvice.insuranceNote} Document all damage with photos and contact your insurance company promptly. Many ${city} roofing contractors offer free inspections and can help with the insurance claims process.`
    },
    {
      question: `How long do roofs last in ${city}, ${stateAbbr}?`,
      answer: `Roof lifespan in ${city} varies by material: asphalt shingles last 15-25 years, architectural shingles 25-30 years, metal roofing 40-70 years, and tile or slate 50+ years. ${city}'s ${climate} climate ${climateAdvice.lifespanImpact}. Regular maintenance and prompt repairs can extend your roof's life significantly.`
    },
    {
      question: `What are signs I need a new roof in ${city}?`,
      answer: `Warning signs ${city} homeowners should watch for include: missing or damaged shingles, granules in gutters, sagging areas, water stains on ceilings, daylight through roof boards, moss or algae growth, and a roof over 20 years old. ${city}'s ${climate} climate can accelerate wear, so annual inspections are recommended.`
    },
    {
      question: `Can I get a roof estimate in ${city} without a home visit?`,
      answer: `Yes! Our instant roof estimate tool provides accurate ${city} pricing using satellite imagery of your home. Enter your ${city} address to receive an estimate in 60 seconds based on your actual roof dimensions. For detailed inspections, local ${city} contractors can provide free on-site assessments.`
    },
    {
      question: `What roofing warranty options are available in ${city}?`,
      answer: `${city} homeowners can choose from manufacturer warranties (25-50 years on materials) and workmanship warranties from contractors (typically ${warrantyYears}). Premium materials like those from GAF, Owens Corning, and CertainTeed offer extended warranties. Ask your ${city} roofing contractor about warranty registration and coverage details.`
    },
    {
      question: `How does ${city}'s weather affect roofing costs?`,
      answer: `${city}'s ${climate} climate influences roofing costs in several ways. ${climateAdvice.costImpact} Local ${city} contractors factor in weather patterns when scheduling work and may recommend specific materials suited to ${region} conditions. Getting an estimate before peak season can help avoid rush pricing.`
    },
    {
      question: `Should I repair or replace my roof in ${city}?`,
      answer: `The repair vs. replace decision for ${city} homes depends on the roof's age, extent of damage, and cost comparison. Generally, if repairs exceed 30% of replacement cost, or if your roof is over 20 years old, replacement is more economical. ${city} roofing professionals can assess your specific situation and provide honest recommendations.`
    },
    {
      question: `What is the average roof size in ${city}?`,
      answer: `The average home in ${city}, ${stateAbbr} has a roof between 1,500-2,500 square feet. Larger ${city} homes may have 3,000+ square feet of roofing. Roof size is measured in "squares" (100 sq ft each). Our satellite-based estimate tool accurately measures your specific ${city} property for precise pricing.`
    },
    {
      question: `Are there energy-efficient roofing options in ${city}?`,
      answer: `Yes, ${city} homeowners have several energy-efficient options. Cool roofs, reflective shingles, and metal roofing can reduce cooling costs by 10-25%. ${climateAdvice.energyAdvice} Many ${stateAbbr} utility companies offer rebates for energy-efficient roofing upgrades in ${city}.`
    },
    {
      question: `How do I prepare my ${city} home for roof replacement?`,
      answer: `Before your ${city} roof replacement: move vehicles away from the house, secure or remove outdoor furniture, cover items in the attic, take down wall decorations (vibrations occur during work), trim tree branches near the roof, and ensure contractors have clear access. Your ${city} roofing contractor will provide a specific preparation checklist.`
    },
    {
      question: `What financing options are available for roofing in ${city}?`,
      answer: `${city} homeowners have several financing options: home equity loans, personal loans, credit cards with promotional rates, and contractor financing programs. Many ${city} roofing companies offer 0% financing for qualified buyers. Our partner contractors in ${city} can explain available payment plans during your estimate.`
    },
    {
      question: `How do ${city} roofers handle storm damage repairs?`,
      answer: `${city} roofing contractors respond to storm damage with emergency tarping services to prevent further damage, thorough damage documentation for insurance claims, direct billing to insurance companies when applicable, and complete restoration services. ${climateAdvice.stormNote} Quick response is crucial to prevent secondary water damage.`
    },
    {
      question: `What questions should I ask a ${city} roofing contractor?`,
      answer: `Essential questions for ${city} roofers include: Are you licensed and insured in ${stateAbbr}? How long have you worked in ${city}? Can you provide local references? What warranties do you offer? Will you obtain the necessary ${city} permits? What is included in the written estimate? How do you handle unexpected repairs? Do you have manufacturer certifications?`
    },
    {
      question: `Why choose a local ${city} roofing contractor?`,
      answer: `Local ${city} contractors offer several advantages: knowledge of ${city} building codes, familiarity with ${climate} climate challenges, established relationships with local suppliers, faster response times, accountability to the ${city} community, and understanding of ${region} architectural styles. They're also available for future maintenance and warranty service.`
    }
  ];
}

function getClimateAdvice(climate: string): {
  materialReason: string;
  insuranceNote: string;
  lifespanImpact: string;
  costImpact: string;
  energyAdvice: string;
  stormNote: string;
} {
  if (climate.includes('humid subtropical')) {
    return {
      materialReason: 'These materials resist humidity, heat, and occasional severe weather common in this region.',
      insuranceNote: 'Storm damage claims are common in this area due to seasonal thunderstorms and occasional hurricanes.',
      lifespanImpact: 'can cause moderate wear due to heat and humidity, making quality materials important',
      costImpact: 'Heat-resistant and algae-resistant materials may add to costs but provide better longevity.',
      energyAdvice: 'Light-colored or reflective roofing is especially beneficial for reducing summer cooling costs in this hot climate.',
      stormNote: 'Severe thunderstorms and occasional hurricanes make prompt storm response essential.'
    };
  } else if (climate.includes('desert') || climate.includes('hot')) {
    return {
      materialReason: 'These materials are specifically chosen for their heat resistance and UV stability in extreme temperatures.',
      insuranceNote: 'While severe weather is less common, monsoon season can bring damaging storms.',
      lifespanImpact: 'requires UV-resistant materials due to intense sun exposure',
      costImpact: 'Heat-reflective and UV-resistant materials are essential but may cost more initially.',
      energyAdvice: 'Cool roofs and reflective materials are essential for managing the extreme heat and reducing cooling costs.',
      stormNote: 'Monsoon season can bring sudden intense storms requiring quick response.'
    };
  } else if (climate.includes('continental') || climate.includes('cold') || climate.includes('snow')) {
    return {
      materialReason: 'These materials handle freeze-thaw cycles and snow loads effectively.',
      insuranceNote: 'Ice dams and winter storm damage are common insurance claims in this region.',
      lifespanImpact: 'subjects roofs to freeze-thaw stress, making proper installation and ventilation critical',
      costImpact: 'Ice and water shield, proper ventilation, and snow load considerations add to installation costs.',
      energyAdvice: 'Proper insulation and ventilation are as important as the roofing material for energy efficiency.',
      stormNote: 'Winter storms and ice can cause significant damage requiring experienced cold-weather repairs.'
    };
  } else if (climate.includes('oceanic') || climate.includes('rain')) {
    return {
      materialReason: 'These materials excel at water shedding and resist moss growth in wet conditions.',
      insuranceNote: 'Water intrusion and wind damage are the most common roofing claims in this wet climate.',
      lifespanImpact: 'can promote moss and algae growth, requiring regular maintenance',
      costImpact: 'Moisture-resistant underlayment and moss-resistant treatments add to the investment.',
      energyAdvice: 'Proper ventilation and moisture management are key priorities in this rainy climate.',
      stormNote: 'Heavy rain and wind events require prompt attention to prevent water intrusion.'
    };
  } else if (climate.includes('Mediterranean')) {
    return {
      materialReason: 'These materials are fire-resistant and suited to the dry, warm conditions of this region.',
      insuranceNote: 'Fire resistance ratings are important for insurance in fire-prone areas.',
      lifespanImpact: 'is generally kind to roofing materials, though fire resistance is a key consideration',
      costImpact: 'Fire-rated materials and compliance with local fire codes may increase costs.',
      energyAdvice: 'Cool roofs are popular for their ability to reduce heat absorption during warm, dry summers.',
      stormNote: 'Though storms are infrequent, fire damage response is a priority in this region.'
    };
  }

  // Default
  return {
    materialReason: 'These materials provide a good balance of durability and value for local conditions.',
    insuranceNote: 'Weather-related claims depend on your specific policy and local conditions.',
    lifespanImpact: 'provides typical wear patterns, with proper maintenance extending roof life',
    costImpact: 'Material selection and local labor rates are the primary cost factors.',
    energyAdvice: 'Consider both heating and cooling needs when selecting roofing materials.',
    stormNote: 'Storm damage response times depend on weather patterns in your area.'
  };
}

function getBestSeason(climate: string, seasonalNotes: string): string {
  if (climate.includes('hot') || climate.includes('desert')) {
    return 'The best time to replace a roof here is during the cooler months from October through April, when temperatures are more moderate for installation.';
  } else if (climate.includes('continental') || climate.includes('cold') || climate.includes('snow')) {
    return 'Late spring through early fall (May-September) is ideal for roof replacement, avoiding winter freeze conditions.';
  } else if (climate.includes('oceanic') || climate.includes('rain')) {
    return 'The drier summer months (June-September) are ideal for roof replacement, though experienced contractors can work year-round.';
  } else if (climate.includes('subtropical')) {
    if (seasonalNotes.toLowerCase().includes('hurricane')) {
      return 'Spring and early summer are ideal for roof replacement, before hurricane season begins. Fall after storm season is also excellent.';
    }
    return 'Spring and fall offer the best conditions for roof replacement, with moderate temperatures and lower humidity.';
  }

  return 'Spring through fall typically offers the best conditions for roof replacement, with moderate temperatures and stable weather.';
}

function getWarrantyYears(climate: string): string {
  if (climate.includes('desert') || climate.includes('hot')) {
    return '5-10 years due to extreme conditions';
  } else if (climate.includes('continental') || climate.includes('cold')) {
    return '5-10 years, with some offering extended coverage';
  } else if (climate.includes('oceanic') || climate.includes('rain')) {
    return '5-10 years, with emphasis on waterproofing guarantees';
  }
  return '5-15 years depending on the contractor';
}
