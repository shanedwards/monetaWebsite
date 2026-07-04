# moneta Website - Figma Design Specification
**For React/Next.js Development**

---

## 🎨 Design System

### Color Palette
```
Background Primary: #111111 (rgb(17, 17, 17))
Background Secondary: #1A1A1A (rgb(26, 26, 26))
Background Tertiary: #242424 (rgb(36, 36, 36))
Background Card: #1E1E1E (rgb(30, 30, 30))

Text Primary: #FFFFFF (rgb(255, 255, 255))
Text Secondary: #B8B8B8 (rgb(184, 184, 184))
Text Muted: #787878 (rgb(120, 120, 120))

Accent Primary: #00D9FF (Cyan - primary CTA)
Accent Secondary: #5B9BFF (Blue - secondary elements)
Accent Success: #00FF88 (Green - success states)
Accent Warning: #FFB800 (Amber - highlights)

Border Default: #2A2A2A (rgb(42, 42, 42))
Border Hover: #3A3A3A (rgb(58, 58, 58))
Border Focus: #00D9FF (Cyan)

Overlay Dark: rgba(0, 0, 0, 0.7)
Overlay Darker: rgba(0, 0, 0, 0.85)
```

### Typography
```
Font Family: Inter, -apple-system, system-ui, sans-serif

Hero Headline:
- Size: 56px / 3.5rem
- Weight: 700 (Bold)
- Line Height: 1.1
- Letter Spacing: -0.02em

H1:
- Size: 48px / 3rem
- Weight: 700
- Line Height: 1.2
- Letter Spacing: -0.01em

H2:
- Size: 36px / 2.25rem
- Weight: 600
- Line Height: 1.3
- Letter Spacing: -0.01em

H3:
- Size: 24px / 1.5rem
- Weight: 600
- Line Height: 1.4

Body Large:
- Size: 20px / 1.25rem
- Weight: 400
- Line Height: 1.6

Body:
- Size: 16px / 1rem
- Weight: 400
- Line Height: 1.6

Body Small:
- Size: 14px / 0.875rem
- Weight: 400
- Line Height: 1.5

Caption:
- Size: 12px / 0.75rem
- Weight: 500
- Line Height: 1.4
- Letter Spacing: 0.02em
```

### Spacing System
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
```

### Component Specifications

#### Navigation Bar
```
Height: 72px
Background: rgba(17, 17, 17, 0.8) with backdrop-blur
Border Bottom: 1px solid #2A2A2A
Position: Fixed/Sticky top

Logo:
- Height: 32px
- Contains favicon + "moneta" text
- Text: 20px, Weight 600

Nav Links:
- Font Size: 15px
- Weight: 500
- Color: #B8B8B8
- Hover: #FFFFFF
- Spacing: 32px between items

CTA Button:
- Padding: 12px 24px
- Background: #00D9FF
- Color: #111111
- Border Radius: 6px
- Font Weight: 600
```

#### Hero Section
```
Min Height: 600px
Padding: 96px 0

Tagline:
- Font Size: 14px
- Weight: 600
- Color: #00D9FF
- Text Transform: Uppercase
- Letter Spacing: 0.1em
- Margin Bottom: 16px

Headline:
- Max Width: 900px
- Margin Bottom: 24px

Subheadline:
- Max Width: 700px
- Font Size: 20px
- Color: #B8B8B8
- Margin Bottom: 32px

Primary CTA:
- Padding: 16px 32px
- Font Size: 16px
- Background: #00D9FF
- Color: #111111
- Border Radius: 8px
- Font Weight: 600
```

#### Content Sections
```
Container Max Width: 1200px
Section Padding: 96px 0
Content Max Width: 800px (centered)

Section Headers:
- Eyebrow: 12px, uppercase, #00D9FF, spacing 0.1em
- Headline: H2, margin-bottom 16px
- Description: Body Large, color #B8B8B8

Two-Column Layout:
- Gap: 48px
- Columns: 1fr 1fr (equal)
```

#### Cards/Features
```
Background: #1E1E1E
Border: 1px solid #2A2A2A
Border Radius: 12px
Padding: 32px
Transition: all 0.2s ease

Hover State:
- Border Color: #3A3A3A
- Transform: translateY(-2px)
- Box Shadow: 0 8px 24px rgba(0, 0, 0, 0.3)

Icon/Badge:
- Size: 48px
- Background: #242424
- Border Radius: 8px
- Margin Bottom: 16px

Title:
- Font Size: 20px
- Weight: 600
- Margin Bottom: 12px

Description:
- Font Size: 15px
- Color: #B8B8B8
- Line Height: 1.6
```

#### System Diagram (moneta operating system)
```
Container:
- Background: #1A1A1A
- Border: 1px solid #2A2A2A
- Border Radius: 16px
- Padding: 48px

Layout: Three columns
- Inputs (left)
- Controls (center)
- Outputs (right)

Column Items:
- Background: #242424
- Border: 1px solid #2A2A2A
- Border Radius: 8px
- Padding: 16px 20px
- Margin Bottom: 12px

Arrow Connectors:
- Color: #3A3A3A
- Width: 2px
- Style: Solid line with arrow

Center Logo:
- Size: 64px
- Circular container
- Background: #1E1E1E
```

#### Buttons

**Primary (CTA)**
```
Background: #00D9FF
Color: #111111
Padding: 14px 28px
Border Radius: 8px
Font Size: 16px
Font Weight: 600
Transition: all 0.15s ease

Hover:
- Background: #00C4E8
- Transform: translateY(-1px)
```

**Secondary**
```
Background: transparent
Border: 1px solid #3A3A3A
Color: #FFFFFF
Padding: 14px 28px
Border Radius: 8px

Hover:
- Border Color: #00D9FF
- Color: #00D9FF
```

#### Footer
```
Background: #1A1A1A
Border Top: 1px solid #2A2A2A
Padding: 64px 0 32px

Logo Section:
- Margin Bottom: 16px
- Description: Font Size 14px, Color #787878

Link Columns:
- Gap: 48px
- Heading: 14px, Weight 600, Color #FFFFFF
- Links: 14px, Weight 400, Color #B8B8B8
- Hover: #FFFFFF

Bottom Bar:
- Padding Top: 32px
- Border Top: 1px solid #2A2A2A
- Font Size: 13px
- Color: #787878
```

---

## 📄 Page Layouts

### 1. Home Page (index.html)

**Sections in order:**
1. Hero Section
   - Tagline: "Built for AWS and Azure resellers managing multiple customers."
   - H1: "Cloud Reseller Billing That Eliminates Margin Loss"
   - Description paragraph
   - CTA: "See your margin gaps"
   - Social proof: "Trusted by AWS & Azure resellers managing $100M+ in annual cloud spend"

2. moneta Operating System Diagram
   - Visual flow: Inputs → Controls → Outputs
   - Three columns with items
   - Center moneta logo

3. Trust Badges Row
   - 4 image placeholders (Cloud spot, AWS, Azure, Purpose-built)
   - Display as inline row with spacing

4. "The Problem" Section
   - Eyebrow: "The Problem"
   - H2: "Margin Loss Is Built Into Cloud Reseller Billing"
   - Arrow indicator: "→ Why it happens"
   - Description paragraphs
   - Bullet list of problems
   - Callout box: "The Bottom Line"

5. "The Solution" Section
   - Eyebrow: "The Solution"
   - H2: "Billing, Pricing, and Margin Control in One System"
   - Description
   - Feature cards (4 items in 2x2 grid)
   - Bottom tagline

6. "Results" Section
   - Eyebrow: "Results"
   - H2: "Real Outcomes for Cloud Resellers"
   - Description
   - Arrow indicator: "→ Review Your Billing, Pricing, and Margins"
   - List of transformations (Before → After)

7. FinOps Managed Services Preview
   - Dark background section
   - Two-column layout (moneta → Your Managed Service)
   - Three feature items each side
   - Bottom description

8. Why moneta Section
   - H2: "Why Cloud Resellers Choose moneta"
   - Feature list with headers and descriptions
   - "The difference" callout
   - "Not another FinOps tool" distinction

9. Final CTA Section
   - Large H2 statement
   - CTA button

10. Footer

### 2. Platform Page

**Sections:**
1. Hero
   - Tagline
   - H1: "The Financial Infrastructure for Cloud Resellers"
   - Description + CTA

2. Platform Introduction
   - H2: "A System Built for Cloud Resale Operations"
   - Two paragraphs

3. Core Platform Capabilities
   - Four feature cards with icons
   - Pricing Advantage, Cloud Discount Management, Billing Infrastructure, Margin Intelligence

4. System Flow
   - Eyebrow: "System Flow"
   - H2: "One System. Continuous Flow."
   - Four steps with numbers/icons
   - Bottom description

5. Footer

### 3. FinOps Services Page

**Sections:**
1. Hero
   - Eyebrow: "FinOps Managed Services"
   - H1: "Deliver Cloud FinOps as a Managed Service"
   - Description + CTA

2. Service Diagram
   - Two-column: moneta → Your Managed Service
   - Three items each
   - Bottom tagline

3. "The Shift" Section
   - H2 + description

4. "The Problem" Section
   - H2 + description

5. "The Solution" Section
   - H2 + description

6. "Why moneta" Section
   - Feature list (4 bullets)

7. "From Tool to Service" Section
   - H2 + description
   - Four outcomes listed

8. Final CTA
   - H2 + CTA button

9. Footer

### 4. Why moneta Page

**Sections:**
1. Hero
   - Tagline: "moneta is the billing infrastructure built for how AWS and Azure resellers operate."
   - H1: "Why Existing Solutions Fail Cloud Reseller Billing"
   - Description + CTA

2. "The Difference" Section
   - Four bullet points

3. "The Reality" Section
   - H2 + description

4. "Why moneta" Section
   - H2: "Built for Multi-Customer Cloud Reseller Operations"
   - Description paragraph
   - Four bullets

5. Final CTA Section
   - H2 + CTA button

6. Footer

---

## 📝 Demo Form Modal

### Overlay
```
Position: Fixed, covers entire viewport
Background: rgba(0, 0, 0, 0.85)
Backdrop Filter: blur(8px)
Z-Index: 1000
```

### Modal Container
```
Max Width: 580px
Background: #1E1E1E
Border: 1px solid #2A2A2A
Border Radius: 16px
Padding: 48px
Position: Centered in viewport
Box Shadow: 0 24px 48px rgba(0, 0, 0, 0.6)
```

### Close Button
```
Position: Absolute top-right
Size: 32px
Color: #787878
Hover: #FFFFFF
```

### Form Header
```
H2: "Book a Demo"
Subheading: "Review Your Billing, Pricing, and Margins"
Description: Font Size 15px, Color #B8B8B8
Margin Bottom: 32px
```

### Form Fields
```
Layout: Two columns where applicable
Gap: 16px between fields

Input Field:
- Height: 48px
- Background: #111111
- Border: 1px solid #2A2A2A
- Border Radius: 6px
- Padding: 0 16px
- Font Size: 15px
- Color: #FFFFFF

Label:
- Font Size: 13px
- Weight: 500
- Color: #B8B8B8
- Margin Bottom: 6px

Focus State:
- Border Color: #00D9FF
- Outline: none

Fields (in order):
1. First name (half width)
2. Last name (half width)
3. Business email (full width)
4. Phone number (full width)
5. Company (full width)
6. Title (full width)
7. Message (full width, textarea, height: 120px)
```

### Submit Button
```
Width: 100%
Padding: 16px
Background: #00D9FF
Color: #111111
Font Size: 16px
Font Weight: 600
Border Radius: 8px
Margin Top: 24px

Hover:
- Background: #00C4E8
```

---

## 🎯 Component Library (Reusable)

### Components to Create
1. **Header/Navigation** - Fixed header with logo, nav links, CTA button
2. **Hero Section** - Tagline + H1 + Description + CTA pattern
3. **Section Container** - Max-width wrapper with padding
4. **Feature Card** - Icon/badge + title + description
5. **Two-Column Layout** - Equal columns with gap
6. **Arrow Indicator** - "→" prefix for callouts
7. **Eyebrow Label** - Small uppercase accent text
8. **CTA Button** - Primary and secondary variants
9. **Footer** - Logo + link columns + bottom bar
10. **Modal Overlay** - Full-screen overlay with centered modal
11. **Form Input** - Labeled input field with focus states
12. **System Diagram Box** - Card with arrow connectors

---

## 📐 Responsive Breakpoints

```
Desktop: 1440px (primary design)
Laptop: 1024px - 1439px
Tablet: 768px - 1023px
Mobile: 375px - 767px

Adjustments:
- Container padding: 96px → 64px → 48px → 32px
- Font sizes: Scale down 10-15% on mobile
- Two-column → Single column on tablet/mobile
- Nav: Hamburger menu on mobile
```

---

## 🚀 Implementation Notes for React

### Recommended Stack
- Next.js 14+ with App Router
- Tailwind CSS (use design tokens above)
- Framer Motion for animations
- React Hook Form for modal form
- TypeScript for type safety

### Key Interactions
1. **Smooth Scroll**: Anchor links scroll smoothly to sections
2. **Modal Trigger**: "Book a Demo" button opens modal overlay
3. **Modal Close**: Click X, press Escape, or click outside to close
4. **Hover States**: Cards lift on hover, buttons brighten
5. **Form Validation**: Real-time validation on blur/submit
6. **Sticky Header**: Header stays fixed with backdrop blur on scroll

### Animation Timing
```
Fast: 150ms (buttons, small elements)
Standard: 200ms (cards, modal)
Slow: 300ms (page sections, large elements)
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## ✅ Figma File Contents

The Figma file includes:
- ✅ Design Tokens page with color palette
- ✅ Components library with all reusable elements
- ✅ 4 full page designs (Home, Platform, FinOps, Why moneta)
- ✅ Demo Form Modal overlay
- ✅ All typography styles
- ✅ Spacing system
- ✅ Responsive grid guidelines

**File Name:** `moneta-website.fig.json`

---

## 📦 Assets Needed

From existing site:
- favicon.png (moneta logo icon)
- Cloud spot 1-transparent.png
- AWS spot 2-transparent.png
- Azure spot 3-transparent.png
- Purpose built spot 4-transparent.png

These should be placed in `/public/assets/` for React build.

---

## 🎨 Design Philosophy

**moneta brand voice:**
- Technical precision
- Dark, professional aesthetic
- Clear information hierarchy
- Restrained but confident
- B2B SaaS tone (not flashy)

**Key principles:**
- Content-first (let copy breathe)
- High contrast for readability
- Consistent spacing rhythm
- Purposeful color accents
- Mobile-first responsive design

---

**End of Specification**

This document provides everything needed to build a pixel-perfect React implementation of the moneta website from the Figma design.
