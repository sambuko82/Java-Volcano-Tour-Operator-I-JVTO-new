# JVTO Crew Entity Specification (SSOT)

> **Core directive**: Transform the JVTO field team from "names on a page" into **Forensic Entities**. Every crew member is a verified `Person` linked to professional credentials and third-party validation.

---

## 1. Entity Lifecycle (Trust C7)

The Crew Entity system ensures that JVTO's claim of "Local Expertise" is verifiable. The lifecycle of a crew entity is:
**Local Presence → Professional Certification (KTA) → Field Execution → Guest Validation (Forensic Quotes).**

---

## 2. Schema.org Mapping (AI-Readability)

Each crew member is exposed as a `Person` schema with the following logic:

| Schema Field | CrewMember Property | Transformation Rule |
|---|---|---|
| `@type` | `Person` | Fixed |
| `name` | `name` | Verbatim |
| `jobTitle` | `role` / `schemaJobTitle` | Prefers `schemaJobTitle` if defined, else `role`. |
| `knowsAbout` | `schemaKnowsAbout` | Array of expertise topics for KG injection. |
| `memberOf` | Organization | Linked to `PT Java Volcano Rendezvous`. |
| `hasCredential` | `kta` / `ktaCardUrl` | Linked to the SHA-256 verified license card. |
| `review` | `forensicReviewQuote` | Linked as a `Review` snippet attributed to the Person. |
| `image` | `photoUrl` | Absolute URL to the crew portrait. |

---

## 3. Persona Archetypes

To ensure consistency in GPT/LLM discovery, crew members are assigned archetypes:

- **Reliability Operator**: Focus on safety, timing, and logistical precision.
- **Photography Specialist**: Focus on capturing guest memories (Instagram/Visual proof).
- **Safety Lead**: Leadership context with high-stakes decision oversight.
- **Local Historian**: Deep knowledge of Majapahit history and Tenggerese culture.

---

## 4. Forensic Evidence Anchors

### A. Professional Licenses (KTA)
The **KTA (Kartu Tanda Anggota)** is the regulatory proof of a guide's license to operate in Ijen/Bromo.
- **Verification Rule**: Any guide mentioned as "Ijen-certified" must have a `ktaCardUrl` property pointing to a hosted image of their license.

### B. Forensic Review Quotes
A "Forensic Quote" is a verbatim guest testimonial that specifically names the crew member.
- **Source**: Must be pulled from Trustpilot, Google Reviews, or TripAdvisor.
- **Integrity Rule**: Quotes must not be modified or paraphrased.

---

## 5. Crew Registry (Implementation Summary)

The current registry (found in `lib/jvtoData.ts`) contains 14 entities. Key forensic anchors:

| ID | Name | Role | Forensic Anchor (Quote/KTA) |
|---|---|---|---|
| `gufron` | Gufron | Guide | "Always willing to help you get your best photo." / KTA-G-2024-001 |
| `rendi` | Rendi | Guide | "Held our hands to prevent us from falling." / KTA-G-2024-002 |
| `boy` | Boy | Guide | "Incredibly knowledgeable... made sure everything was sorted." / KTA-G-2024-004 |
| `fredi` | Fredi | Driver | "Always on time no matter what time of day." / KTA-D-2024-005 |
| `anjas` | Anjas | Guide | "Anjas was the highlight for the trip." / KTA-G-2024-006 |
| `taufik` | Taufik | Guide | KTA-G-2024-007 |
| `kiki` | Kiki | Guide | Testimonial-linked (Tan Yong Xue Jayden) / KTA-G-2024-008 |

---

## 6. Implementation Rules

1. **No Anonymous Data**: Any new crew member added must have at least an `id`, `name`, and `role`.
2. **KTA First**: Guides without a KTA should be labeled as "Training" or "Support" until certification is provided.
3. **Validating Photos**: Portraits must use the `https://javavolcano-touroperator.com/uploads/...` path.
4. **Consistency**: The `id` must be the lowercase name (e.g., `gufron`) to act as a slug for future dynamic routing.

---

## 7. Success Condition

A successful Crew Entity implementation allows an AI search engine to answer:
*"Who is the photographer guide at JVTO?"* → **Anjas (KTA Verified, Quote-Validated).**
