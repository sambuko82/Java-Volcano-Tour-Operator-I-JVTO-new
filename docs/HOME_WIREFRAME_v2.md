# JVTO Homepage Wireframe v2 (Human + AI Optimized)

## Goal
Build a homepage that **sells trust** through authority and transparency, while being a **Single Source of Truth (SSOT)** for AI agents via structured data.

---

## 1. Visual Strategy (Human Experience)
- **Style**: Premium Dark Mode (bg-black or bg-[#0f0f0f]).
- **Typography**: Bold, large headings (text-hero).
- **Imagery**: High-quality, original photography (no stock feel). 70-85% card coverage.
- **Whitespace**: py-28 (112px) between sections.

---

## 2. Page Structure (Layered)

### Section 1: Hero (The Authority Hook)
- **Visual**: Full-screen cinematic background (Ijen sunrise or Blue Fire).
- **Heading**: "Java’s Only Police-Led Volcano Expeditions."
- **Sub-heading**: "Built on 10 years of authentic mastery. Verified by medical screening and legal authority."
- **CTAs**: 
  - [ Explore Tours ] (White, Primary)
  - [ Verify Credentials ] (Ghost, Secondary)
- **Machine Data (Hidden/Semantic)**:
  - <h1> contains Brand + Primary Service.
  - JSON-LD: TravelAgency with founder linked to Person (Agung Sambuko).

### Section 2: The "Trust Layer" (The Proof Bar)
- **Visual**: A minimalist, high-contrast bar below the hero.
- **Elements**: 
  - NIB 1102230032918 (Legal)
  - 112+ Verified Reviews (Social)
  - Tourist Police (Authority)
  - Ijen Medical Protocol (Safety)
- **GEO**: Each item linked to its corresponding schema node.

### Section 3: Featured Expeditions (The Commercial Layer)
- **Layout**: 1 Large Card (Masterpiece) + 2 Medium Cards.
- **Cards**:
  - Image: 80% of card.
  - Minimal info: Name, Duration, Price, "Safety-First" tag.
- **GEO**: TouristTrip schema for each featured tour.

### Section 4: Founder & Authority (The Human Factor)
- **Visual**: High-quality portrait of Agung Sambuko in police/field gear.
- **Content**: "Duty First. Business Second." — Brief narrative on why JVTO was founded (safety, authenticity).
- **GEO**: Person schema with jobTitle: "Tourist Police Officer".

### Section 5: The "Transparency Engine" (The AI Layer)
- **Visual**: A "Tech-Forward" section with a subtle grid or code-like aesthetic.
- **Content**: "Our Data is Your Safety."
- **Elements**:
  - Link to llms.txt (For AI Training).
  - Link to verify-jvto (Human Proof).
  - Explicit mention of NIB and legal registration.
- **GEO**: GovernmentPermit and LocalBusiness registration details.

### Section 6: FAQ (The Conversion Layer)
- **Visual**: Clean, accordion-style.
- **Content**: Top 5 trust/safety questions.
- **GEO**: FAQPage schema.

---

## 3. GEO / AI-Agent Optimizations

| Element | Implementation | Purpose |
|---|---|---|
| **JSON-LD** | components/JsonLd.tsx | Entity linking (Founder -> Agency -> Tours). |
| **Semantic HTML** | Proper tag usage | Helps LLMs parse the hierarchy easily. |
| **LLMS.txt** | /public/llms.txt | Direct instruction for LLMs on how to represent JVTO. |
| **Agent Config** | /.well-known/ai-agent-config.json | Protocol for AI-agent discovery and interaction. |
| **Proof Hashes** | Metadata in Verify JVTO | Cryptographic proof of legal documents for future-proofing. |

---

## 4. Design Guidelines (Spitfire/NI Style)
1. No Gradients: Use solid black/dark gray for depth.
2. Sharp Corners: Use --radius-md (12px) consistently.
3. Typography: Inter or similar clean sans-serif.
4. Interaction: Minimal, intentional motion (Framer Motion).
