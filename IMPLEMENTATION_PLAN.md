# G1 Fitness Landing Page — Full Implementation Plan

> **Purpose**: Google Ads landing page for lead capture (group fitness class memberships)
> **Platform**: Next.js 16 on Vercel, coexisting with Squarespace main site
> **Primary Goal**: Capture leads → Google Sheets + SMS notification

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Landing Page UI](#2-landing-page-ui)
3. [Thank You Page](#3-thank-you-page)
4. [SEO Blocking](#4-seo-blocking)
5. [Form API Route](#5-form-api-route)
6. [Google Sheets Integration](#6-google-sheets-integration)
7. [SMS Notification (Twilio)](#7-sms-notification-twilio)
8. [Google Tag Manager Setup](#8-google-tag-manager-setup)
9. [Google Ads Conversion Tracking](#9-google-ads-conversion-tracking)
10. [UTM Parameter Capture](#10-utm-parameter-capture)
11. [Dynamic Ad Group Content](#11-dynamic-ad-group-content)
12. [Privacy Policy Page](#12-privacy-policy-page)
13. [Cookie Consent](#13-cookie-consent)
14. [Subdomain & DNS Setup](#14-subdomain--dns-setup)
15. [Environment Variables](#15-environment-variables)
16. [Design Cohesion with Squarespace](#16-design-cohesion-with-squarespace)
17. [Build Order & Dependencies](#17-build-order--dependencies)
18. [Testing Checklist](#18-testing-checklist)
19. [Launch Checklist](#19-launch-checklist)

---

## 1. Architecture Overview

### System Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER JOURNEY                                    │
└─────────────────────────────────────────────────────────────────────────────┘

Google Ad Click
      │
      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Landing Page (get.g1fitness.com)                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │  - Hero Section (headline, subheadline, CTA)                            │ │
│  │  - Lead Capture Form                                                     │ │
│  │  - Trust Signals (testimonials, photos, class info)                     │ │
│  │  - GTM Container (loads on all pages)                                   │ │
│  │  - UTM params captured from URL                                         │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
      │
      │ Form Submit (POST /api/lead)
      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  API Route (/api/lead)                                                       │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │  1. Validate form data                                                  │ │
│  │  2. Append row to Google Sheets                                         │ │
│  │  3. Send SMS notification via Twilio                                    │ │
│  │  4. Return success → redirect to /thank-you                             │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Thank You Page (/thank-you)                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │  - Confirmation message                                                 │ │
│  │  - GTM fires Google Ads Conversion Tag                                  │ │
│  │  - Google Ads records: "1 Lead Conversion"                              │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                           EXTERNAL SERVICES                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Google Sheets   │  │     Twilio       │  │   Google Ads     │
│  (Lead Storage)  │  │  (SMS Alerts)    │  │  (Conversion     │
│                  │  │                  │  │   Tracking)      │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.2.7 |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |
| Hosting | Vercel |
| Form Backend | Next.js API Routes |
| Lead Storage | Google Sheets API |
| SMS | Twilio |
| Analytics | Google Tag Manager |
| Ads | Google Ads Conversion Tracking |

### File Structure (Final)

```
g1-fitness-landing/
├── app/
│   ├── layout.tsx              # Root layout (GTM script, fonts, metadata)
│   ├── page.tsx                # Landing page (hero, form, trust signals)
│   ├── thank-you/
│   │   └── page.tsx            # Thank you page (conversion fires here)
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy page
│   ├── api/
│   │   └── lead/
│   │       └── route.ts        # Form submission handler
│   ├── globals.css             # Global styles + Tailwind
│   └── favicon.ico
├── components/
│   ├── LeadForm.tsx            # Lead capture form component
│   ├── Hero.tsx                # Hero section component
│   ├── TrustSignals.tsx        # Testimonials, photos, etc.
│   ├── CookieConsent.tsx       # Cookie consent banner
│   └── GTMScript.tsx           # Google Tag Manager script component
├── lib/
│   ├── sheets.ts               # Google Sheets API helper
│   ├── twilio.ts               # Twilio SMS helper
│   └── utm.ts                  # UTM parameter utilities
├── public/
│   ├── robots.txt              # Block search indexing
│   ├── images/                 # Optimized images
│   └── ...
├── .env.local                  # Environment variables (not committed)
├── .env.example                # Example env file (committed)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts          # If customization needed
└── IMPLEMENTATION_PLAN.md      # This file
```

---

## 2. Landing Page UI

### File: `app/page.tsx`

### Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                           HERO SECTION                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Headline: [Dynamic based on ad group OR default]         │  │
│  │  Subheadline: Value proposition                           │  │
│  │  CTA Button: Scrolls to form OR form is visible           │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                         LEAD FORM                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Fields: Name, Email, Phone, + additional TBD             │  │
│  │  Submit Button: Clear CTA text                            │  │
│  │  Privacy note: Link to /privacy                           │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                       TRUST SIGNALS                             │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  - Class types offered                                    │  │
│  │  - Testimonials (2-3)                                     │  │
│  │  - Photos of facility/classes                             │  │
│  │  - Location/map                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                          FOOTER                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Logo | Privacy Policy link | © 2026 G1 Fitness           │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation Details

#### Hero Component (`components/Hero.tsx`)

```tsx
interface HeroProps {
  headline?: string;      // Override from URL param for ad groups
  subheadline?: string;   // Override from URL param for ad groups
}

export function Hero({ headline, subheadline }: HeroProps) {
  return (
    <section className="...">
      <h1>{headline || "Default Headline Here"}</h1>
      <p>{subheadline || "Default subheadline here"}</p>
      <a href="#lead-form" className="...">Get Started</a>
    </section>
  );
}
```

#### Lead Form Component (`components/LeadForm.tsx`)

```tsx
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  // Add additional fields as needed
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({...});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Capture UTM params
    const utmParams = {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
      gclid: searchParams.get("gclid") || "",  // Google Click ID
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...utmParams }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // Redirect to thank you page
      router.push("/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form id="lead-form" onSubmit={handleSubmit} className="...">
      {/* Form fields */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {/* ... more fields ... */}

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Get Your Free Trial"}
      </button>

      <p className="text-sm text-gray-500">
        By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}
```

### Mobile Responsiveness

- Form fields stack vertically on mobile
- Touch-friendly input sizes (min 44px tap targets)
- Hero image scales or hides on small screens
- Single column layout on mobile, multi-column on desktop

### Page Speed Optimization

- Use `next/image` for all images with proper sizing
- Lazy load below-fold content
- Minimize JavaScript bundle
- Use Tailwind (purged CSS)
- No heavy animations

---

## 3. Thank You Page

### File: `app/thank-you/page.tsx`

### Purpose

1. Confirm form submission to user
2. **Trigger Google Ads conversion tracking** (critical)
3. Optionally provide next steps

### Implementation

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | G1 Fitness",
  robots: "noindex, nofollow",  // Don't index thank you page
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We've received your information and will be in touch shortly.
        </p>
        <a href="/" className="text-blue-600 underline">
          Return to homepage
        </a>
      </div>
    </main>
  );
}
```

### Why This Page Matters

Google Tag Manager will be configured to fire the **Google Ads Conversion Tag** when the URL contains `/thank-you`. This is how Google Ads knows a lead was captured.

---

## 4. SEO Blocking

### File: `public/robots.txt`

```txt
User-agent: *
Disallow: /

# Block all search engine indexing
# This is a paid ads landing page only
```

### Meta Tags in Layout

In `app/layout.tsx`, add to metadata:

```tsx
export const metadata: Metadata = {
  title: "G1 Fitness",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
```

### Why Block Indexing?

- Landing page is for paid traffic only
- Prevents duplicate content with main Squarespace site
- Keeps analytics clean (100% paid traffic)
- Avoids thin content penalties

---

## 5. Form API Route

### File: `app/api/lead/route.ts`

### Implementation

```ts
import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";
import { sendSMS } from "@/lib/twilio";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  // Additional fields
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // 1. Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 3. Add timestamp
    const timestamp = new Date().toISOString();

    // 4. Append to Google Sheets
    await appendToSheet({
      timestamp,
      name: data.name,
      email: data.email,
      phone: data.phone,
      // Additional fields...
      utm_source: data.utm_source || "",
      utm_medium: data.utm_medium || "",
      utm_campaign: data.utm_campaign || "",
      utm_content: data.utm_content || "",
      utm_term: data.utm_term || "",
      gclid: data.gclid || "",
    });

    // 5. Send SMS notification
    await sendSMS(
      `New G1 Fitness Lead!\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nCampaign: ${data.utm_campaign || "Direct"}`
    );

    // 6. Return success
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

---

## 6. Google Sheets Integration

### File: `lib/sheets.ts`

### Prerequisites

1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a Service Account
4. Download JSON credentials
5. Share the target spreadsheet with the service account email

### Installation

```bash
npm install googleapis
```

### Implementation

```ts
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Initialize auth from environment variables
function getAuth() {
  const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || "{}");

  return new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });
}

interface LeadRow {
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
}

export async function appendToSheet(data: LeadRow) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = "Leads!A:J"; // Adjust based on your columns

  const values = [
    [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.utm_source,
      data.utm_medium,
      data.utm_campaign,
      data.utm_content,
      data.utm_term,
      data.gclid,
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}
```

### Google Sheets Setup

1. Create a new Google Sheet
2. Name the first sheet "Leads"
3. Add headers in row 1:
   ```
   Timestamp | Name | Email | Phone | UTM Source | UTM Medium | UTM Campaign | UTM Content | UTM Term | GCLID
   ```
4. Share the sheet with your service account email (found in credentials JSON)

---

## 7. SMS Notification (Twilio)

### File: `lib/twilio.ts`

### Prerequisites

1. Create Twilio account
2. Get Account SID, Auth Token, and a phone number
3. Verify the recipient phone number (for trial accounts)

### Installation

```bash
npm install twilio
```

### Implementation

```ts
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;
const toNumber = process.env.NOTIFICATION_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function sendSMS(message: string) {
  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    console.warn("Twilio not configured, skipping SMS");
    return;
  }

  try {
    await client.messages.create({
      body: message,
      from: fromNumber,
      to: toNumber,
    });
  } catch (error) {
    console.error("Twilio SMS error:", error);
    // Don't throw - SMS failure shouldn't block lead capture
  }
}
```

### Note on SMS Failures

SMS notification is a "nice to have" — if it fails, the lead is still saved to Google Sheets. The function logs the error but doesn't throw, so form submission still succeeds.

---

## 8. Google Tag Manager Setup

### File: `components/GTMScript.tsx`

### Implementation

```tsx
import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function GTMScript() {
  if (!GTM_ID) return null;

  return (
    <>
      {/* Google Tag Manager - head */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export function GTMNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
```

### Add to Layout (`app/layout.tsx`)

```tsx
import { GTMScript, GTMNoScript } from "@/components/GTMScript";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GTMScript />
      </head>
      <body>
        <GTMNoScript />
        {children}
      </body>
    </html>
  );
}
```

### GTM Container Setup (in GTM Web Interface)

1. **Create GTM Account & Container**
   - Go to tagmanager.google.com
   - Create account for G1 Fitness
   - Create a Web container
   - Copy the GTM-XXXXXXX ID

2. **Create Conversion Linker Tag** (Required for Google Ads)
   - Tags → New → Tag Configuration → Conversion Linker
   - Trigger: All Pages
   - Name: "Conversion Linker"

3. **Create Google Ads Conversion Tag** (See next section)

---

## 9. Google Ads Conversion Tracking

### Google Ads Setup

1. **Create Conversion Action in Google Ads**
   - Go to Google Ads → Goals → Conversions → New conversion action
   - Select "Website"
   - Category: "Lead" → "Submit lead form"
   - Conversion name: "Lead Form Submission"
   - Value: Don't use a value (or set estimated lead value)
   - Count: One conversion per click
   - Click-through window: 30 days
   - Copy the **Conversion ID** and **Conversion Label**

### GTM Configuration

1. **Create Google Ads Conversion Tag**
   - Tags → New → Tag Configuration → Google Ads → Google Ads Conversion Tracking
   - Conversion ID: `[Your Conversion ID]`
   - Conversion Label: `[Your Conversion Label]`
   - Name: "Google Ads - Lead Conversion"

2. **Create Thank You Page Trigger**
   - Triggers → New → Trigger Configuration → Page View
   - Trigger Type: Page View
   - This trigger fires on: Some Page Views
   - Condition: Page URL contains `/thank-you`
   - Name: "Thank You Page View"

3. **Connect Tag to Trigger**
   - Edit the conversion tag
   - Add the "Thank You Page View" trigger
   - Save and publish container

### How It Works

```
User submits form
       ↓
Redirected to /thank-you
       ↓
GTM detects URL contains "/thank-you"
       ↓
GTM fires Google Ads Conversion Tag
       ↓
Google Ads records conversion, links to original click via gclid
```

---

## 10. UTM Parameter Capture

### File: `lib/utm.ts`

### Utility Functions

```ts
export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
}

export function getUTMParams(searchParams: URLSearchParams): UTMParams {
  return {
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_content: searchParams.get("utm_content") || "",
    utm_term: searchParams.get("utm_term") || "",
    gclid: searchParams.get("gclid") || "",
  };
}
```

### Why Capture UTM Params?

- Track which campaigns/ad groups generate leads
- Analyze performance in Google Sheets
- Debug attribution issues
- `gclid` (Google Click ID) enables enhanced conversions

### Google Ads Auto-Tagging

Google Ads automatically appends `gclid` to URLs. Ensure "Auto-tagging" is enabled:
- Google Ads → Admin → Account Settings → Auto-tagging → ON

---

## 11. Dynamic Ad Group Content

### URL Parameter Strategy

For different ad groups, use URL parameters to customize content:

```
# Ad Group 1: Weight Loss
https://get.g1fitness.com/?variant=weight-loss&utm_campaign=weight-loss-2024

# Ad Group 2: Strength Training
https://get.g1fitness.com/?variant=strength&utm_campaign=strength-2024

# Ad Group 3: General
https://get.g1fitness.com/?utm_campaign=general-2024
```

### Implementation in Page

```tsx
// app/page.tsx
import { Hero } from "@/components/Hero";

const VARIANTS: Record<string, { headline: string; subheadline: string }> = {
  "weight-loss": {
    headline: "Transform Your Body at G1 Fitness",
    subheadline: "Join our weight loss focused group classes",
  },
  "strength": {
    headline: "Build Strength at G1 Fitness",
    subheadline: "High-intensity strength training classes",
  },
  default: {
    headline: "Your Fitness Journey Starts Here",
    subheadline: "Join G1 Fitness group classes today",
  },
};

export default function LandingPage({
  searchParams,
}: {
  searchParams: { variant?: string };
}) {
  const variant = VARIANTS[searchParams.variant || ""] || VARIANTS.default;

  return (
    <main>
      <Hero headline={variant.headline} subheadline={variant.subheadline} />
      {/* ... rest of page ... */}
    </main>
  );
}
```

---

## 12. Privacy Policy Page

### File: `app/privacy/page.tsx`

### Implementation

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | G1 Fitness",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-4">Last updated: [DATE]</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p>When you submit our contact form, we collect:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>[Additional fields]</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Contact you about our fitness programs</li>
          <li>Respond to your inquiries</li>
          <li>Send promotional communications (with consent)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies for advertising
          and analytics purposes, including Google Ads conversion tracking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
        <p>We share data with:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Google (Analytics and Ads)</li>
          <li>Twilio (SMS notifications)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>
          For privacy questions, contact us at: [EMAIL]
        </p>
      </section>
    </main>
  );
}
```

### Note

This is a minimal privacy policy. For full legal compliance, consult with a legal professional, especially for GDPR/CCPA requirements.

---

## 13. Cookie Consent

### File: `components/CookieConsent.tsx`

### Simple Implementation

```tsx
"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies for analytics and advertising. By continuing, you accept our{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-white text-gray-900 px-4 py-2 rounded font-medium whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
```

### Add to Layout

```tsx
// app/layout.tsx
import { CookieConsent } from "@/components/CookieConsent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
```

---

## 14. Subdomain & DNS Setup

### Domain Configuration

| Record Type | Host | Value |
|-------------|------|-------|
| CNAME | `get` | `cname.vercel-dns.com` |

### Steps

1. **Add Domain in Vercel**
   - Go to Project → Settings → Domains
   - Add `get.g1fitness.com` (or your chosen subdomain)
   - Vercel will show the required DNS record

2. **Add DNS Record**
   - Go to your domain registrar/DNS provider
   - Add the CNAME record as shown above
   - Wait for propagation (usually minutes, up to 48 hours)

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - No action required

### Alternative Subdomains

| Subdomain | Use Case |
|-----------|----------|
| `get.` | Common for lead gen |
| `go.` | Short, action-oriented |
| `start.` | For "start your journey" messaging |
| `join.` | For membership focus |
| `try.` | For free trial offers |

---

## 15. Environment Variables

### File: `.env.example`

```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Sheets
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"..."}
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here

# Twilio
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890
NOTIFICATION_PHONE_NUMBER=+1234567890
```

### Setting in Vercel

1. Go to Project → Settings → Environment Variables
2. Add each variable
3. Select environments (Production, Preview, Development)

### Local Development

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

---

## 16. Design Cohesion with Squarespace

### Branding Elements to Match

| Element | Action |
|---------|--------|
| Logo | Use same logo file/format |
| Colors | Extract hex codes from Squarespace |
| Fonts | Use same Google Fonts or similar |
| Button styles | Match shape, size, hover states |
| Spacing | Use similar padding/margins |
| Photography | Use consistent photo style |

### Tailwind Configuration

If needed, create `tailwind.config.ts` to define brand colors:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#XXXXXX",   // Main brand color
          secondary: "#XXXXXX", // Secondary color
          accent: "#XXXXXX",    // Accent/CTA color
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        // Or match Squarespace fonts
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 17. Build Order & Dependencies

### Phase 1: Core Landing Page
```
1. [ ] Set up project structure (folders, files)
2. [ ] Create Hero component
3. [ ] Create LeadForm component (UI only, no submission)
4. [ ] Create TrustSignals component
5. [ ] Assemble landing page (app/page.tsx)
6. [ ] Create thank you page (app/thank-you/page.tsx)
7. [ ] Add robots.txt and noindex meta tags
8. [ ] Mobile responsive testing
```

### Phase 2: Form Backend
```
9. [ ] Install googleapis and twilio packages
10. [ ] Set up Google Cloud project and Sheets API
11. [ ] Create Google Sheet with headers
12. [ ] Implement lib/sheets.ts
13. [ ] Set up Twilio account
14. [ ] Implement lib/twilio.ts
15. [ ] Create API route (app/api/lead/route.ts)
16. [ ] Connect form to API route
17. [ ] Test form submission end-to-end
```

### Phase 3: Tracking
```
18. [ ] Create GTM account and container
19. [ ] Implement GTMScript component
20. [ ] Add GTM to layout
21. [ ] Create Conversion Linker tag in GTM
22. [ ] Create Google Ads account (if not exists)
23. [ ] Create conversion action in Google Ads
24. [ ] Create conversion tag in GTM
25. [ ] Create thank you page trigger in GTM
26. [ ] Test conversion tracking with GTM Preview mode
```

### Phase 4: Polish
```
27. [ ] Add UTM parameter capture to form
28. [ ] Implement dynamic content for ad groups (optional)
29. [ ] Create privacy policy page
30. [ ] Add cookie consent banner
31. [ ] Design cohesion review (match Squarespace)
32. [ ] Page speed optimization
```

### Phase 5: Deploy
```
33. [ ] Set environment variables in Vercel
34. [ ] Deploy to Vercel
35. [ ] Configure subdomain DNS
36. [ ] Verify SSL working
37. [ ] Test full flow on production
38. [ ] Verify conversion tracking on production
```

### Phase 6: Launch Campaign
```
39. [ ] Create Google Ads campaign
40. [ ] Set up ad groups with appropriate URLs
41. [ ] Launch campaign
42. [ ] Monitor first conversions
```

---

## 18. Testing Checklist

### Form Testing
- [ ] Form validates required fields
- [ ] Form shows error for invalid email
- [ ] Form submits successfully
- [ ] Lead appears in Google Sheets
- [ ] SMS notification received
- [ ] User redirected to thank you page
- [ ] Form works on mobile

### Tracking Testing
- [ ] GTM Preview mode shows container loading
- [ ] Conversion Linker fires on all pages
- [ ] Conversion tag fires ONLY on /thank-you
- [ ] Google Ads shows test conversion (use GTM Preview)
- [ ] UTM parameters captured in sheet

### Cross-Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] Page load < 3 seconds
- [ ] No layout shift on load

---

## 19. Launch Checklist

### Pre-Launch
- [ ] All environment variables set in Vercel
- [ ] Subdomain DNS configured and propagated
- [ ] SSL certificate active
- [ ] robots.txt blocking indexing
- [ ] Privacy policy page live
- [ ] Cookie consent working
- [ ] Form submission working (test on production)
- [ ] Google Sheets receiving leads
- [ ] SMS notifications working
- [ ] GTM published and live
- [ ] Conversion tracking verified

### Post-Launch Monitoring
- [ ] First real conversion tracked in Google Ads
- [ ] Lead data appearing correctly in Sheets
- [ ] SMS alerts timely
- [ ] No errors in Vercel logs
- [ ] Page speed acceptable

### Ongoing
- [ ] Monitor cost per lead vs. prediction
- [ ] A/B test headlines (optional)
- [ ] Optimize based on conversion data

---

## Appendix: Quick Reference

### Key URLs

| Environment | URL |
|-------------|-----|
| Production | `https://get.g1fitness.com` |
| Vercel Preview | Auto-generated per PR |
| Local Dev | `http://localhost:3000` |

### Key Accounts/Logins

| Service | Purpose |
|---------|---------|
| Vercel | Hosting |
| Google Ads | Ad campaigns |
| Google Tag Manager | Tracking |
| Google Cloud | Sheets API |
| Twilio | SMS |

### Emergency Contacts

| Issue | Action |
|-------|--------|
| Form not submitting | Check Vercel logs |
| Leads not in Sheets | Check API route, Sheets permissions |
| SMS not sending | Check Twilio dashboard |
| Conversion not tracking | Check GTM Preview mode |
