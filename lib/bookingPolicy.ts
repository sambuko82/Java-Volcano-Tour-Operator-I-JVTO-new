export const BOOKING_POLICY = {
  lastUpdated: 'March 2026',
  operator: 'PT Java Volcano Rendezvous',
  brand: 'Java Volcano Tour Operator (JVTO)',
  officialChannels: {
    website: 'https://javavolcano-touroperator.com',
    whatsapp: '+62 822-4478-8833',
    email: 'hello@javavolcano-touroperator.com',
  },
  currentBookingMode:
    'The website currently starts with an availability inquiry. Payment happens only after the package, date, group size, and official quote are confirmed through JVTO channels.',
  confirmationRule:
    'A booking is confirmed only after the required deposit or full payment is processed through an approved method and JVTO issues an Official E-Voucher / Invoice PDF.',
  precedence: [
    'Official E-Voucher / Invoice PDF for the confirmed booking',
    'Booking, Payment & Cancellation Policy',
    'Inclusions & Exclusions Policy',
    'Privacy & Data Protection Policy',
    'Travel Guide — Booking Information',
    'Other website content or informal messages',
  ],
  howToBook: [
    'Choose an official JVTO private tour and review route, duration, price tier, inclusions, exclusions, and safety notes.',
    'Send an availability inquiry with travel date, group size, start point, drop-off point, lead guest name, email, and WhatsApp number.',
    'JVTO verifies availability and sends a written quote or itinerary summary through official channels.',
    'Pay the required 20% deposit, or full payment if Day 1 is within 14 days or if JVTO states full payment is required.',
    'Receive the Official E-Voucher / Invoice PDF and check all details immediately.',
    'Submit additional operational details when requested, such as pickup time, hotel, guest list, rooming, dietary needs, and relevant health notes.',
  ],
  payment: {
    currency: 'IDR',
    standardDeposit: '20% of total booking value',
    closeDepartureRule: 'If Day 1 is within 14 days, JVTO may require up to 100% full payment.',
    depositMethods: ['Card payment via secure payment link or checkout when issued by JVTO'],
    balanceMethods: [
      'Card payment via secure payment link or checkout',
      'Bank transfer or Wise',
      'Cash at JVTO office only if approved in writing',
    ],
    balanceDeadlines: [
      'Card balance: no later than 5 days before Day 1',
      'Bank transfer / Wise balance: no later than 3 days before Day 1',
    ],
    bankAccounts: [
      'Bank BRI — PT Java Volcano Rendezvous — 001301001779564 — SWIFT: BRINIDJAXXX',
      'Bank BCA — PT Java Volcano Rendezvous — 1200944352 — SWIFT: CENAIDJAXXX',
    ],
    antiFraud: [
      'Use only official JVTO website, WhatsApp, email, payment links, and listed bank accounts.',
      'JVTO never asks for full card numbers, CVV codes, online banking passwords, or OTP codes via chat or email.',
      'Pause and verify through official WhatsApp or email before paying if any account number, link, or contact looks different.',
    ],
  },
  cancellation: {
    cutoff: '48 hours before Day 1',
    atLeast48h:
      'Cancellations made 48 hours or more before Day 1 convert 100% of eligible booking value into Lifetime Travel Credit. Cash refund is not available for guest cancellation.',
    lessThan48h:
      'Cancellations made less than 48 hours before Day 1 are fully forfeited and do not create Travel Credit.',
    travelCredit:
      'Lifetime Travel Credit does not expire, is transferable, and may be gifted or sold by the guest.',
    closures:
      'If an official closure or route restriction affects the trip, JVTO offers a safe alternative route, reschedule option, or destination-fee adjustment according to the confirmed booking context.',
  },
  rescheduling: [
    'Requests made 48 hours or more before Day 1 may receive one reschedule for the same package, subject to availability and any seasonal or supplier cost difference.',
    'Requests made less than 48 hours before Day 1 are handled case by case and may be treated as cancellation depending on committed supplier costs.',
  ],
  standardInclusions: [
    'Private air-conditioned land transport for confirmed itinerary sectors',
    'Fuel, tolls, standard parking, and driver logistics for the confirmed route',
    '4WD Jeep at Mount Bromo when Bromo is included',
    'Accommodation for included overnight stays as written in the voucher',
    'Professional driver, escort guide, and licensed local site guides where required',
    'Listed tickets, permits, and local logistics connected to the confirmed itinerary',
    'Gas mask and trekking support for Ijen routes',
    'Health-certificate screening coordination for Ijen routes when current access rules require it',
    'Daily bottled mineral water in the vehicle and included hotel breakfasts',
  ],
  standardExclusions: [
    'International or domestic flights',
    'Visa, passport, and personal travel document costs',
    'Travel insurance and personal medical expenses',
    'Lunches, dinners, snacks, and drinks unless written as included',
    'Laundry, phone costs, souvenirs, porterage, and personal purchases',
    'Tips for guides and drivers',
    'Optional upgrades, additional rooms, extra activities, or route changes not written in the voucher',
  ],
  privacyUse: [
    'Issue and deliver the Official E-Voucher / Invoice PDF',
    'Coordinate pickup, accommodation, vehicles, guides, route planning, and customer support',
    'Meet legal, permit, ticketing, accommodation, and safety requirements where applicable',
    'Share only necessary operational details with hotels, drivers, guides, ticketing partners, authorities, or medical screening providers where required for the booked service',
  ],
} as const;
