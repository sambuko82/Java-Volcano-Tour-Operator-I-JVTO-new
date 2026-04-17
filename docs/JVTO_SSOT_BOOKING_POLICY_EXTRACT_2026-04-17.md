# JVTO SSOT Booking & Policy Extraction

Date: 2026-04-17  
Source: `F:\New folder\DOWNLOADS\JVTO_SSOT_v4_0_CLEAN.json`  
Target app: `f:\New folder\Java-Volcano-Tour-Operator-I-JVTO-new`

## Extraction Scope

This extraction audits the SSOT for checkout concept, how-to-book flow, payment rules, cancellation rules, inclusion/exclusion policy, privacy policy, and policy hierarchy.

Relevant SSOT nodes:

- `operational_logic.financial_policy`
- `policy_pages[]`
- `travel_pages[]` route `/travel-guide/booking-information`
- `policy_links[]`
- `page_architecture.Master_Content_Index[]`
- `pages[]` contact and booking guidance
- `tour_pages[]` package conversion context

## Canonical Booking Model

Current app mode remains availability-inquiry first. The checkout model is represented as a confirmation/payment gate, not as a visible cart or instant booking engine until availability logic is implemented.

Canonical flow:

1. Guest selects an official JVTO private tour.
2. Guest sends availability inquiry with date, group size, start point, drop-off point, lead guest name, email, and WhatsApp.
3. JVTO verifies availability and sends written quote or itinerary summary through official channels.
4. Guest pays the required 20% deposit, or full payment if Day 1 is within 14 days or if JVTO requires it.
5. JVTO issues the Official E-Voucher / Invoice PDF.
6. Guest provides operational details such as guest list, pickup point, rooming, dietary needs, and relevant health notes.

Booking is confirmed only after approved payment and Official E-Voucher / Invoice issuance.

## Policy Hierarchy

If content conflicts, priority order is:

1. Official E-Voucher / Invoice PDF for the confirmed booking.
2. Booking, Payment & Cancellation Policy.
3. Inclusions & Exclusions Policy.
4. Privacy & Data Protection Policy.
5. Travel Guide - Booking Information.
6. Other website content or informal messages.

## Payment Rules

- Official accounting currency: IDR.
- Standard deposit: 20% of total booking value.
- If Day 1 is within 14 days, JVTO may require up to 100% full payment.
- Deposit method: card payment via secure payment link or checkout issued by JVTO.
- Balance payment methods: card, bank transfer, Wise, or cash at JVTO office only if approved in writing.
- Balance deadlines:
  - Card: no later than 5 days before Day 1.
  - Bank transfer / Wise: no later than 3 days before Day 1.
- Public bank accounts:
  - Bank BRI - PT Java Volcano Rendezvous - 001301001779564 - SWIFT: BRINIDJAXXX
  - Bank BCA - PT Java Volcano Rendezvous - 1200944352 - SWIFT: CENAIDJAXXX

## Cancellation & Travel Credit

- Guest cancellation 48 hours or more before Day 1: eligible booking value converts to Lifetime Travel Credit.
- Guest cancellation less than 48 hours before Day 1: full forfeiture, no Travel Credit.
- Travel Credit does not expire and is transferable.
- Guest cancellation does not create cash refund by default.
- Official closure or route restriction can trigger safe alternative route, reschedule option, or destination-fee adjustment according to confirmed booking context.

## Inclusions Rule

Only items written on the official tour page and/or Official E-Voucher / Invoice are contractually binding.

Typical inclusions:

- Private AC land transport.
- Fuel, tolls, standard parking, and driver logistics.
- Bromo 4WD Jeep when Bromo is included.
- Accommodation for included overnight stays.
- Professional driver, escort guide, and licensed local site guides where required.
- Listed tickets, permits, and local logistics.
- Ijen gas mask and trekking support.
- Health-certificate screening coordination for Ijen routes when current access rules require it.
- Bottled mineral water and included hotel breakfasts.

Typical exclusions:

- Flights.
- Visa, passport, and travel document costs.
- Travel insurance and personal medical expenses.
- Lunches, dinners, snacks, and drinks unless written as included.
- Personal expenses.
- Tips.
- Optional upgrades or route changes not written in the voucher.

## Privacy Rules

JVTO may collect lead guest contact details, participant details where needed, pickup/drop-off and rooming information, and relevant safety or health information only where needed for tour operation.

Data may be shared only where needed with accommodation partners, drivers, guides, ticketing/permit partners, local authorities, or medical screening providers.

JVTO does not store full card numbers, CVV codes, banking passwords, or OTP codes.

## Implementation Applied

- Created `lib/bookingPolicy.ts` as local canonical policy constants.
- Rebuilt `/travel-guide/booking-information` around SSOT booking flow.
- Rebuilt `/policy/booking-payment-cancellation` around payment, confirmation, anti-fraud, Travel Credit, and rescheduling.
- Rebuilt `/policy/inclusions-exclusions` around write-it-to-bind-it rule.
- Rebuilt `/policy/privacy` around operational data use.
- Updated `/policy` hub summary to match policy hierarchy.
- Updated FAQ, homepage, tours copy, `llms.txt`, `ai-agent-config.json`, and JSON-LD payment methods.

## Future Checkout Requirements

When checkout is implemented, it must preserve these SSOT rules:

- Availability must be checked before payment is treated as final confirmation.
- Payment must be tied to package, date, group size, lead guest, and official quote.
- System must issue Official E-Voucher / Invoice PDF after successful payment.
- Deposit defaults to 20%.
- Close-departure bookings can require full payment.
- WhatsApp remains support and verification, not the proof of booking by itself.
