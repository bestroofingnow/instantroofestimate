'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function ExpandableSection({ title, children, defaultOpen = false }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition-colors"
      >
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[5000px] pb-6' : 'max-h-0'
        }`}
      >
        <div className="prose prose-slate max-w-none text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
}

export function SEOContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Guide to Getting a Roof Estimate
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about roof replacement costs, estimates, and finding the right contractor
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
            <ExpandableSection title="How Much Does a New Roof Cost in 2025?" defaultOpen={true}>
              <p>
                The cost of a new roof in 2025 varies significantly based on several factors, but most homeowners can expect to pay between <strong>$8,000 and $25,000</strong> for a complete roof replacement. The national average cost sits around $12,000 to $15,000 for a typical single-family home with an asphalt shingle roof.
              </p>
              <p>
                Understanding what goes into roof replacement cost helps you budget appropriately and recognize fair pricing when getting quotes. The primary factors affecting your final price include:
              </p>
              <h4>Roof Size and Square Footage</h4>
              <p>
                Roofing contractors measure roofs in "squares" – one roofing square equals 100 square feet. A typical home has between 15 to 30 squares of roofing area. The larger your roof, the more materials and labor required, directly increasing your total cost. Our free instant roof estimate uses satellite imagery to accurately calculate your roof's square footage without anyone needing to climb on your roof.
              </p>
              <h4>Roofing Materials</h4>
              <p>
                Material choice is the second-largest factor in roof replacement cost. Here's what you can expect to pay per square foot installed:
              </p>
              <ul>
                <li><strong>3-Tab Asphalt Shingles:</strong> $3 - $5 per sq ft (most affordable, 15-20 year lifespan)</li>
                <li><strong>Architectural Shingles:</strong> $4 - $7 per sq ft (most popular choice, 25-30 year lifespan)</li>
                <li><strong>Metal Roofing:</strong> $8 - $16 per sq ft (premium durability, 40-70 year lifespan)</li>
                <li><strong>Tile Roofing:</strong> $10 - $20 per sq ft (luxury option, 50-100 year lifespan)</li>
                <li><strong>Slate Roofing:</strong> $15 - $30 per sq ft (ultimate luxury, 75-150+ year lifespan)</li>
              </ul>
              <h4>Roof Complexity and Pitch</h4>
              <p>
                A steep roof pitch requires more safety equipment, takes longer to install, and uses more materials due to the increased surface area. Complex roofs with multiple valleys, dormers, skylights, and chimneys also add significant labor costs. A simple gable roof with a moderate pitch costs less to replace than a multi-faceted roof with steep angles.
              </p>
              <h4>Geographic Location</h4>
              <p>
                Labor rates and material costs vary by region. Metropolitan areas typically have higher labor costs than rural areas. States prone to severe weather may have higher prices due to increased demand. Our instant roof estimate takes your location into account when calculating your personalized quote.
              </p>
              <h4>Removal of Existing Roof</h4>
              <p>
                Most roof replacements require tearing off the old roofing material before installation. Tear-off costs add $1 to $3 per square foot to your total. Some contractors may offer to install over existing shingles, which saves money but isn't always recommended or code-compliant.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What Is a Roof Estimate and Why Do You Need One?">
              <p>
                A <strong>roof estimate</strong> is a professional assessment of how much it will cost to repair or replace your roof. Getting an accurate roof estimate is the critical first step in any roofing project. Without knowing what to expect, you could end up overpaying or being caught off guard by unexpected costs.
              </p>
              <h4>Types of Roof Estimates</h4>
              <p>
                There are several ways to get a roof estimate, each with its own advantages:
              </p>
              <p>
                <strong>Instant Online Roof Estimates:</strong> Using satellite imagery and AI technology, services like ours provide an instant roof estimate in about 60 seconds. This gives you a reliable ballpark figure without waiting for contractor appointments. It's perfect for initial budgeting and comparing options.
              </p>
              <p>
                <strong>In-Person Contractor Estimates:</strong> A roofing contractor visits your home, inspects the roof, and provides a detailed written quote. This is more accurate than online estimates because the contractor can see roof conditions not visible from satellite images, but it requires scheduling and typically takes several days.
              </p>
              <p>
                <strong>Insurance Adjuster Estimates:</strong> If you're filing an insurance claim for storm damage, your insurance company will send an adjuster to assess damage and provide a repair or replacement estimate. This determines your coverage amount.
              </p>
              <h4>Why Get Multiple Roof Estimates?</h4>
              <p>
                Experts recommend getting at least three roof estimates before choosing a contractor. This helps you:
              </p>
              <ul>
                <li>Understand fair market pricing for your area</li>
                <li>Compare materials, warranties, and workmanship guarantees</li>
                <li>Identify contractors who might be overcharging</li>
                <li>Find the best value for your budget</li>
                <li>Spot red flags (extremely low prices often indicate corners will be cut)</li>
              </ul>
              <p>
                Our free instant roof estimate gives you a head start by providing an accurate baseline price. You can then use this information when meeting with contractors to ensure their quotes are in the right range.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Signs You Need a New Roof: When to Get a Roof Quote">
              <p>
                Knowing when to get a roof quote can save you thousands of dollars by addressing problems before they cause interior damage. Here are the key signs that indicate it's time to consider roof replacement:
              </p>
              <h4>Age of Your Current Roof</h4>
              <p>
                Most asphalt shingle roofs last 20-30 years, depending on quality and maintenance. If your roof is approaching or past its expected lifespan, it's wise to get a roof estimate even if you don't see obvious damage. Proactive replacement before leaks occur protects your home's interior and can qualify you for better insurance rates.
              </p>
              <h4>Visible Shingle Damage</h4>
              <p>
                Walk around your home and look for these warning signs:
              </p>
              <ul>
                <li><strong>Curling shingles:</strong> Edges curling up or cupping indicate age and weathering</li>
                <li><strong>Missing shingles:</strong> Gaps in coverage leave your roof deck exposed to water damage</li>
                <li><strong>Cracked or broken shingles:</strong> Brittle shingles can no longer protect effectively</li>
                <li><strong>Granule loss:</strong> Check your gutters for granules – excessive granules indicate aging shingles</li>
                <li><strong>Moss or algae growth:</strong> While not always serious, heavy growth can trap moisture</li>
              </ul>
              <h4>Interior Warning Signs</h4>
              <p>
                Sometimes roof problems show up inside your home first:
              </p>
              <ul>
                <li><strong>Water stains on ceilings:</strong> Brown spots indicate water intrusion</li>
                <li><strong>Light visible through roof boards:</strong> Check your attic during the day</li>
                <li><strong>Sagging roof deck:</strong> Visible dips or sags from inside the attic</li>
                <li><strong>Increased energy bills:</strong> Poor roof insulation or ventilation affects efficiency</li>
                <li><strong>Mold or mildew smell:</strong> Especially in the attic, indicates moisture problems</li>
              </ul>
              <h4>Storm Damage</h4>
              <p>
                After severe weather, always inspect your roof for damage. Hail can bruise shingles, high winds can lift or tear them, and falling branches cause obvious damage. File insurance claims promptly – most policies have time limits for reporting damage. Our instant roof estimate can help you understand replacement costs before meeting with your insurance adjuster.
              </p>
            </ExpandableSection>

            <ExpandableSection title="How to Get a Free Roof Estimate Online">
              <p>
                Getting a free roof estimate online has never been easier. Modern technology allows you to receive accurate roof replacement quotes without scheduling contractor visits or climbing on your roof. Here's how our instant roof estimate process works:
              </p>
              <h4>Step 1: Enter Your Address</h4>
              <p>
                Simply type your home address into our search bar. Our system uses Google's address autocomplete to ensure we locate the correct property. No account creation, credit card, or personal information is required to get started.
              </p>
              <h4>Step 2: Satellite Roof Measurement</h4>
              <p>
                Our advanced AI technology analyzes high-resolution satellite imagery of your home to calculate:
              </p>
              <ul>
                <li>Total roof square footage</li>
                <li>Estimated roof pitch (slope)</li>
                <li>Roof complexity factors</li>
                <li>Number of roof facets and features</li>
              </ul>
              <p>
                This same satellite measurement technology is used by millions through Google Services and insurance companies, ensuring 90-95% accuracy for most residential properties.
              </p>
              <h4>Step 3: Receive Your Estimate</h4>
              <p>
                Within 60 seconds, you'll receive a detailed roof estimate including:
              </p>
              <ul>
                <li>Low, mid, and high price ranges based on material quality</li>
                <li>Estimated roof size in square feet</li>
                <li>Cost breakdown by material type</li>
                <li>Local market pricing considerations</li>
              </ul>
              <h4>Step 4: Connect with Contractors (Optional)</h4>
              <p>
                After receiving your estimate, you can optionally connect with licensed, insured roofing contractors in your area. A roofing specialist will reach out to answer questions and provide a more detailed, binding quote based on an in-person inspection. There's no obligation to proceed.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Roof Replacement vs. Roof Repair: Which Do You Need?">
              <p>
                Not every roof problem requires complete replacement. Understanding when repair makes sense versus when replacement is the better investment can save you significant money. Here's how to decide:
              </p>
              <h4>When Roof Repair Makes Sense</h4>
              <p>
                Roof repair is typically the right choice when:
              </p>
              <ul>
                <li><strong>Damage is localized:</strong> A few missing or damaged shingles in one area</li>
                <li><strong>Your roof is under 15 years old:</strong> Younger roofs have more life left</li>
                <li><strong>Less than 30% of the roof is affected:</strong> Small problem areas don't warrant full replacement</li>
                <li><strong>No structural issues:</strong> The roof deck and supports are sound</li>
                <li><strong>Repair costs are under 50% of replacement:</strong> Beyond this point, replacement often makes more financial sense</li>
              </ul>
              <h4>When Roof Replacement Is Better</h4>
              <p>
                Consider full roof replacement when:
              </p>
              <ul>
                <li><strong>Your roof is 20+ years old:</strong> Near or past expected lifespan</li>
                <li><strong>Damage is widespread:</strong> Multiple areas showing wear or damage</li>
                <li><strong>Recurring leaks:</strong> Patching isn't solving the problem</li>
                <li><strong>Structural issues:</strong> Sagging, rotted decking, or compromised supports</li>
                <li><strong>You're selling your home:</strong> A new roof adds value and attracts buyers</li>
                <li><strong>Insurance requirements:</strong> Some insurers require roof replacement after a certain age</li>
              </ul>
              <h4>The Math on Repair vs. Replace</h4>
              <p>
                Consider this example: If your 18-year-old asphalt shingle roof needs $4,000 in repairs, but a full replacement costs $12,000, the repair might seem like the obvious choice. However, if the roof has only 5-7 years of life left anyway, you'll likely spend that $4,000 and still need to replace within a decade. The $12,000 replacement gives you 25-30 years of protection – often the better long-term value.
              </p>
              <p>
                Our free roof estimate helps you understand full replacement costs so you can make an informed decision when comparing to repair quotes.
              </p>
            </ExpandableSection>

            <ExpandableSection title="How to Choose a Roofing Contractor">
              <p>
                Selecting the right roofing contractor is just as important as choosing quality materials. A poorly installed roof will fail regardless of how premium the shingles are. Here's how to find a trustworthy professional:
              </p>
              <h4>Verify Licensing and Insurance</h4>
              <p>
                Every legitimate roofing contractor should have:
              </p>
              <ul>
                <li><strong>State contractor's license:</strong> Requirements vary by state, but licensing ensures minimum competency standards</li>
                <li><strong>General liability insurance:</strong> Protects you if the contractor damages your property</li>
                <li><strong>Workers' compensation insurance:</strong> Covers injuries to workers on your property – without this, you could be liable</li>
                <li><strong>Bond (where required):</strong> Financial protection if the contractor fails to complete the work</li>
              </ul>
              <p>
                Ask for copies of insurance certificates and verify them directly with the insurance company. Don't just take the contractor's word for it.
              </p>
              <h4>Check Reviews and References</h4>
              <p>
                Research the contractor's reputation:
              </p>
              <ul>
                <li>Read Google, Yelp, and BBB reviews</li>
                <li>Ask for references from recent projects in your area</li>
                <li>Check for complaints with your state's contractor licensing board</li>
                <li>Look for manufacturer certifications (GAF Master Elite, Owens Corning Preferred, CertainTeed SELECT ShingleMaster)</li>
              </ul>
              <h4>Get Written Estimates and Contracts</h4>
              <p>
                A professional estimate should include:
              </p>
              <ul>
                <li>Detailed scope of work</li>
                <li>Material specifications (brand, product line, color)</li>
                <li>Timeline for completion</li>
                <li>Total cost with no hidden fees</li>
                <li>Payment schedule (never pay 100% upfront)</li>
                <li>Warranty information for both materials and workmanship</li>
                <li>Permit responsibilities</li>
              </ul>
              <h4>Red Flags to Avoid</h4>
              <p>
                Be wary of contractors who:
              </p>
              <ul>
                <li>Demand full payment upfront</li>
                <li>Only accept cash</li>
                <li>Pressure you into immediate decisions</li>
                <li>Don't have a physical business address</li>
                <li>Offer prices dramatically lower than competitors</li>
                <li>Can't provide license or insurance documentation</li>
                <li>Want to use leftover materials from another job</li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Understanding Roof Warranties">
              <p>
                Roof warranties provide important protection for your investment, but they can be confusing. Here's what you need to know:
              </p>
              <h4>Manufacturer's Material Warranty</h4>
              <p>
                This warranty covers defects in the roofing materials themselves. Most asphalt shingle manufacturers offer:
              </p>
              <ul>
                <li><strong>Standard warranties:</strong> 20-30 years, covering manufacturing defects only</li>
                <li><strong>Enhanced warranties:</strong> 40-50 years or "lifetime," covering defects plus some wind and algae resistance</li>
                <li><strong>Premium warranties:</strong> Lifetime coverage with higher wind speed ratings and transferability to new owners</li>
              </ul>
              <p>
                Note that "lifetime" warranties typically mean the expected lifetime of the product, not your lifetime. They also often prorate, meaning coverage decreases over time.
              </p>
              <h4>Contractor Workmanship Warranty</h4>
              <p>
                This warranty covers installation errors. A roof can fail even with perfect materials if installed incorrectly. Workmanship warranties typically range from:
              </p>
              <ul>
                <li><strong>1-2 years:</strong> Minimum standard, often not enough</li>
                <li><strong>5-10 years:</strong> Better protection, look for this minimum</li>
                <li><strong>15-25 years:</strong> Premium contractors offer extended workmanship coverage</li>
              </ul>
              <h4>Extended/Enhanced Warranties</h4>
              <p>
                Some manufacturers offer enhanced warranty programs when certified contractors install their products. These often include:
              </p>
              <ul>
                <li>Extended workmanship coverage backed by the manufacturer</li>
                <li>Coverage for the full system, not just shingles</li>
                <li>Non-prorated coverage periods</li>
                <li>Transferability to new homeowners</li>
              </ul>
              <p>
                Examples include GAF's Golden Pledge warranty, Owens Corning's Platinum Protection, and CertainTeed's SureStart PLUS.
              </p>
              <h4>What Voids a Roof Warranty</h4>
              <p>
                Common warranty violations include:
              </p>
              <ul>
                <li>Improper installation (why contractor choice matters)</li>
                <li>Inadequate attic ventilation</li>
                <li>Pressure washing the roof</li>
                <li>Walking on the roof excessively</li>
                <li>Installing satellite dishes or solar panels improperly</li>
                <li>Failing to maintain the roof (cleaning gutters, removing debris)</li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Financing Your Roof Replacement">
              <p>
                A new roof is a significant investment, but several financing options can make it more manageable. Here's how homeowners typically pay for roof replacement:
              </p>
              <h4>Insurance Claims</h4>
              <p>
                If your roof was damaged by a covered peril (storm, hail, wind, fire, fallen trees), your homeowner's insurance may cover replacement. You'll typically pay your deductible ($500-$2,500 for most policies), and insurance covers the rest up to your policy limits. Document damage thoroughly and file claims promptly.
              </p>
              <h4>Home Equity Loans and HELOCs</h4>
              <p>
                Home equity loans and home equity lines of credit (HELOCs) use your home as collateral, typically offering lower interest rates than unsecured loans. Advantages include:
              </p>
              <ul>
                <li>Lower interest rates (typically 5-10%)</li>
                <li>Interest may be tax-deductible (consult a tax advisor)</li>
                <li>Longer repayment terms available</li>
              </ul>
              <h4>Personal Loans</h4>
              <p>
                Unsecured personal loans don't require home equity and have faster approval processes. Rates typically range from 6-20% depending on credit score. Online lenders often offer competitive rates and quick funding.
              </p>
              <h4>Roofing Company Financing</h4>
              <p>
                Many roofing contractors offer financing through partnerships with lending companies. Some offer promotional rates like 0% APR for 12-18 months for qualified buyers. Always read the fine print and understand what happens if you don't pay off the balance during the promotional period.
              </p>
              <h4>Credit Cards</h4>
              <p>
                Credit cards work for smaller roofing projects or deposits. If you can qualify for a card with a 0% introductory APR, this can be essentially free financing if paid off before the promotional period ends. However, high ongoing interest rates make this risky for larger amounts.
              </p>
              <h4>FHA Title 1 Loans</h4>
              <p>
                The Federal Housing Administration offers Title 1 loans for home improvements, including roofing. These government-backed loans don't require home equity and have competitive rates, making them a good option for homeowners without significant equity.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Best Time to Replace Your Roof">
              <p>
                Timing your roof replacement strategically can affect both cost and quality. Here's what to consider:
              </p>
              <h4>Seasonal Considerations</h4>
              <p>
                <strong>Spring (March-May):</strong> Moderate temperatures are ideal for shingle installation. Contractors are ramping up for busy season, and you'll beat the summer rush. However, spring storms can cause scheduling delays.
              </p>
              <p>
                <strong>Summer (June-August):</strong> Peak roofing season means highest demand and potentially higher prices. Extreme heat can make shingles too pliable and uncomfortable for workers. Schedule early in summer for best results.
              </p>
              <p>
                <strong>Fall (September-November):</strong> Many consider fall the ideal roofing season. Temperatures are moderate, humidity is lower, and you'll have a new roof before winter weather. Book early – this is a popular time.
              </p>
              <p>
                <strong>Winter (December-February):</strong> Off-season pricing may offer savings. However, cold temperatures can affect shingle sealing, and weather delays are more common. Only recommended in mild climates or for emergency situations.
              </p>
              <h4>Temperature Requirements</h4>
              <p>
                Asphalt shingles install best between 45°F and 85°F. Temperatures below 40°F can cause shingles to crack during installation, and they won't properly seal until temperatures warm up. Extreme heat makes shingles too soft and increases worker safety risks.
              </p>
              <h4>Planning Ahead</h4>
              <p>
                Don't wait until your roof fails to start planning. The best time to get a roof estimate is before you need emergency repairs. Getting your free instant estimate now helps you budget and plan for replacement before problems occur.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Roofing Materials Comparison: Which Is Right for You?">
              <p>
                Choosing the right roofing material involves balancing cost, durability, aesthetics, and climate suitability. Here's a comprehensive comparison:
              </p>
              <h4>Asphalt Shingles</h4>
              <p>
                <strong>Cost:</strong> $3-$7 per sq ft installed<br />
                <strong>Lifespan:</strong> 15-30 years<br />
                <strong>Best for:</strong> Budget-conscious homeowners, most climates
              </p>
              <p>
                Asphalt shingles dominate the U.S. roofing market for good reason. They offer excellent value, come in hundreds of colors and styles, and work well in most climates. Choose architectural (dimensional) shingles over 3-tab for better durability and appearance.
              </p>
              <h4>Metal Roofing</h4>
              <p>
                <strong>Cost:</strong> $8-$16 per sq ft installed<br />
                <strong>Lifespan:</strong> 40-70 years<br />
                <strong>Best for:</strong> Long-term homeowners, extreme weather areas, energy efficiency
              </p>
              <p>
                Metal roofing has become increasingly popular due to its exceptional longevity and energy efficiency. Standing seam metal offers the best protection, while metal shingles provide a traditional look. Metal roofs can reduce cooling costs by 10-25% through solar reflection.
              </p>
              <h4>Tile Roofing</h4>
              <p>
                <strong>Cost:</strong> $10-$20 per sq ft installed<br />
                <strong>Lifespan:</strong> 50-100 years<br />
                <strong>Best for:</strong> Hot, dry climates, Spanish/Mediterranean style homes
              </p>
              <p>
                Clay and concrete tiles offer exceptional durability and a distinctive appearance. They're heavy, requiring strong roof structure, but provide excellent fire resistance and stand up well to UV exposure. Most popular in the Southwest, Florida, and California.
              </p>
              <h4>Slate Roofing</h4>
              <p>
                <strong>Cost:</strong> $15-$30 per sq ft installed<br />
                <strong>Lifespan:</strong> 75-150+ years<br />
                <strong>Best for:</strong> Historic homes, luxury properties, multi-generational ownership
              </p>
              <p>
                Natural slate is the ultimate premium roofing material. A properly installed slate roof can last over a century. The weight requires reinforced roof structure, and repairs require specialized contractors. The initial investment is highest, but cost-per-year can actually be lower than other materials over the long term.
              </p>
              <h4>Wood Shakes and Shingles</h4>
              <p>
                <strong>Cost:</strong> $8-$14 per sq ft installed<br />
                <strong>Lifespan:</strong> 20-40 years<br />
                <strong>Best for:</strong> Rustic aesthetics, mild climates
              </p>
              <p>
                Cedar shakes and shingles offer natural beauty and good insulation. However, they require more maintenance than other options, aren't fire-resistant without treatment, and aren't suitable for humid climates or fire-prone areas. Some municipalities prohibit wood roofing.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Understanding Your Roof Estimate: What's Included?">
              <p>
                A comprehensive roof estimate should detail all costs involved in your project. Here's what to look for:
              </p>
              <h4>Material Costs</h4>
              <p>
                Your estimate should specify:
              </p>
              <ul>
                <li><strong>Shingles or primary roofing material:</strong> Brand, product line, color, quantity</li>
                <li><strong>Underlayment:</strong> Synthetic or felt, quality grade</li>
                <li><strong>Ice and water shield:</strong> For valleys, eaves, and penetrations</li>
                <li><strong>Flashing:</strong> Metal pieces around chimneys, vents, and edges</li>
                <li><strong>Ridge cap and starter shingles:</strong> Specialty pieces for edges and peaks</li>
                <li><strong>Ventilation:</strong> Ridge vents, soffit vents, or other ventilation components</li>
                <li><strong>Nails and fasteners:</strong> Quality and quantity</li>
              </ul>
              <h4>Labor Costs</h4>
              <p>
                Labor typically accounts for 40-60% of total roof replacement cost. Factors affecting labor include:
              </p>
              <ul>
                <li>Roof pitch and complexity</li>
                <li>Number of stories</li>
                <li>Accessibility</li>
                <li>Local labor rates</li>
                <li>Tear-off requirements</li>
              </ul>
              <h4>Removal and Disposal</h4>
              <p>
                Tearing off old roofing material and disposing of it properly adds $1-$3 per square foot. This includes:
              </p>
              <ul>
                <li>Removing old shingles and underlayment</li>
                <li>Inspecting and repairing roof decking</li>
                <li>Dumpster rental or hauling</li>
                <li>Proper disposal fees</li>
              </ul>
              <h4>Permits and Inspections</h4>
              <p>
                Most jurisdictions require building permits for roof replacement. Permit costs vary by location but typically run $100-$500. Your contractor should handle permit acquisition as part of the project.
              </p>
              <h4>Warranty Coverage</h4>
              <p>
                The estimate should clearly state what warranties are included and their terms. Better warranties may cost slightly more but provide valuable protection.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Preparing for Your Roof Replacement">
              <p>
                Once you've chosen a contractor and scheduled your roof replacement, proper preparation ensures the project goes smoothly:
              </p>
              <h4>Before the Crew Arrives</h4>
              <ul>
                <li><strong>Move vehicles:</strong> Park cars away from the house to avoid damage from falling debris</li>
                <li><strong>Clear the perimeter:</strong> Move patio furniture, grills, potted plants, and decorations</li>
                <li><strong>Protect landscaping:</strong> Cover plants and bushes near the house with tarps</li>
                <li><strong>Remove wall decorations:</strong> Vibrations from roofing can knock items off walls</li>
                <li><strong>Secure loose items in the attic:</strong> Dust and debris will fall through gaps</li>
                <li><strong>Inform neighbors:</strong> Let them know about the upcoming noise and activity</li>
                <li><strong>Plan for pets:</strong> Keep pets inside or away from the work area</li>
                <li><strong>Arrange child care if needed:</strong> Roofing is loud and disruptive</li>
              </ul>
              <h4>During the Project</h4>
              <ul>
                <li>Expect significant noise throughout the day</li>
                <li>Workers will need access to electricity and possibly water</li>
                <li>Don't be surprised by vibrations throughout the house</li>
                <li>The crew may work from early morning until evening</li>
                <li>A dumpster will be placed on your property temporarily</li>
              </ul>
              <h4>After Completion</h4>
              <ul>
                <li><strong>Final inspection:</strong> Walk around the property with your contractor</li>
                <li><strong>Check for debris:</strong> Run a magnet over the lawn to find stray nails</li>
                <li><strong>Document everything:</strong> Take photos of the completed work</li>
                <li><strong>Secure warranty documents:</strong> Keep copies of all warranties</li>
                <li><strong>Final payment:</strong> Only pay the final balance after satisfactory completion</li>
              </ul>
            </ExpandableSection>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Your Free Roof Estimate?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Now that you understand roof replacement costs and what to expect, get your personalized instant estimate. It's free, takes just 60 seconds, and helps you plan your roofing project with confidence.
            </p>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get My Free Estimate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
