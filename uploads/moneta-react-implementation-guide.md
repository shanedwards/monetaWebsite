# moneta Website - React Implementation Guide
**For Claude (Artifacts/AI-Powered Development)**

---

## 🎯 Project Overview

Build a 4-page Next.js website with modal form overlay based on the moneta Figma design spec.

**Tech Stack:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Hook Form (form handling)

---

## 📁 Project Structure

```
moneta-website/
├── app/
│   ├── layout.tsx                 # Root layout with header/footer
│   ├── page.tsx                   # Home page
│   ├── platform/
│   │   └── page.tsx              # Platform page
│   ├── finops-services/
│   │   └── page.tsx              # FinOps Services page
│   ├── why-moneta/
│   │   └── page.tsx              # Why moneta page
│   └── globals.css               # Global styles + Tailwind
├── components/
│   ├── Header.tsx                # Navigation bar
│   ├── Footer.tsx                # Site footer
│   ├── DemoModal.tsx             # Book a Demo modal
│   ├── Hero.tsx                  # Hero section component
│   ├── FeatureCard.tsx           # Feature card component
│   ├── Section.tsx               # Section wrapper
│   └── Button.tsx                # Button component
├── public/
│   └── assets/                   # Images from original site
├── tailwind.config.ts            # Tailwind configuration
└── package.json
```

---

## 🎨 Tailwind Configuration

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#111111',
          secondary: '#1A1A1A',
          tertiary: '#242424',
          card: '#1E1E1E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B8B8B8',
          muted: '#787878',
        },
        accent: {
          primary: '#00D9FF',
          secondary: '#5B9BFF',
          success: '#00FF88',
          warning: '#FFB800',
        },
        border: {
          default: '#2A2A2A',
          hover: '#3A3A3A',
          focus: '#00D9FF',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        'section': '96px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 🧩 Core Components

### 1. Header Component

```typescript
// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header({ onDemoClick }: { onDemoClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-bg-primary/80 backdrop-blur-lg border-b border-border-default' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/favicon.png" alt="moneta" width={32} height={32} />
          <span className="text-xl font-semibold">moneta</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/platform" className="text-text-secondary hover:text-text-primary transition-colors text-[15px] font-medium">
            Platform
          </Link>
          <Link href="/finops-services" className="text-text-secondary hover:text-text-primary transition-colors text-[15px] font-medium">
            FinOps Services
          </Link>
          <Link href="/why-moneta" className="text-text-secondary hover:text-text-primary transition-colors text-[15px] font-medium">
            Why moneta
          </Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onDemoClick}
          className="px-6 py-3 bg-accent-primary text-bg-primary rounded-lg font-semibold text-[15px] hover:bg-[#00C4E8] transition-all hover:-translate-y-0.5"
        >
          Book a Demo
        </button>
      </div>
    </header>
  )
}
```

### 2. Demo Modal Component

```typescript
// components/DemoModal.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  title: string
  message: string
}

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // Handle form submission
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div className="relative max-w-[580px] w-full bg-bg-card border border-border-default rounded-2xl p-12 max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors"
              >
                ✕
              </button>

              {/* Header */}
              <h2 className="text-h2 mb-2">Book a Demo</h2>
              <p className="text-h3 mb-4">Review Your Billing, Pricing, and Margins</p>
              <p className="text-[15px] text-text-secondary mb-8">
                Tell us a bit about your cloud resale business and we will follow up to schedule a demo.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                      First name
                    </label>
                    <input
                      {...register('firstName', { required: true })}
                      className="w-full h-12 bg-bg-primary border border-border-default rounded-md px-4 text-[15px] focus:border-accent-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                      Last name
                    </label>
                    <input
                      {...register('lastName', { required: true })}
                      className="w-full h-12 bg-bg-primary border border-border-default rounded-md px-4 text-[15px] focus:border-accent-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                    Business email
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full h-12 bg-bg-primary border border-border-default rounded-md px-4 text-[15px] focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full h-12 bg-bg-primary border border-border-default rounded-md px-4 text-[15px] focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                    Company
                  </label>
                  <input
                    {...register('company', { required: true })}
                    className="w-full h-12 bg-bg-primary border border-border-default rounded-md px-4 text-[15px] focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                    Title
                  </label>
                  <input
                    {...register('title')}
                    className="w-full h-12 bg-bg-primary border border-border-default rounded-md px-4 text-[15px] focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full bg-bg-primary border border-border-default rounded-md px-4 py-3 text-[15px] focus:border-accent-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-14 bg-accent-primary text-bg-primary rounded-lg font-semibold text-base hover:bg-[#00C4E8] transition-colors mt-6"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

### 3. Button Component

```typescript
// components/Button.tsx
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-7 py-3.5 rounded-lg font-semibold text-base transition-all'
  
  const variants = {
    primary: 'bg-accent-primary text-bg-primary hover:bg-[#00C4E8] hover:-translate-y-0.5',
    secondary: 'bg-transparent border border-border-hover text-text-primary hover:border-accent-primary hover:text-accent-primary'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 📄 Page Implementation Examples

### Home Page (app/page.tsx)

```typescript
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DemoModal from '@/components/DemoModal'
import Button from '@/components/Button'

export default function HomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <Header onDemoClick={() => setIsDemoOpen(true)} />
      
      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="min-h-[600px] flex items-center py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[14px] font-semibold text-accent-primary uppercase tracking-[0.1em] mb-4">
              Built for AWS and Azure resellers managing multiple customers.
            </p>
            
            <h1 className="text-hero max-w-4xl mb-6">
              Cloud Reseller Billing That Eliminates Margin Loss
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mb-8 leading-relaxed">
              moneta is the billing infrastructure for AWS and Azure resellers, aligning cost, pricing, and discounts across every customer account to ensure accurate invoicing and full margin visibility.
            </p>
            
            <Button onClick={() => setIsDemoOpen(true)}>
              See your margin gaps
            </Button>

            <p className="text-sm text-text-muted mt-12">
              Trusted by AWS & Azure resellers managing $100M+ in annual cloud spend
            </p>
          </div>
        </section>

        {/* moneta Operating System Diagram */}
        <section className="py-section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[12px] font-semibold text-accent-primary uppercase tracking-[0.1em] mb-4">
                moneta operating system
              </p>
            </div>
            
            <div className="bg-bg-secondary border border-border-default rounded-2xl p-12">
              <div className="grid grid-cols-3 gap-8">
                {/* Inputs Column */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Inputs</h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Usage Data', subtitle: 'Real-time' },
                      { title: 'Vendor Pricing', subtitle: 'AWS, Azure' },
                      { title: 'Contracts', subtitle: 'Agreements' }
                    ].map((item, i) => (
                      <div key={i} className="bg-bg-tertiary border border-border-default rounded-lg p-4">
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-sm text-text-secondary">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controls Column */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Controls</h3>
                  {/* Center logo and controls */}
                </div>

                {/* Outputs Column */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Outputs</h3>
                  {/* Output items */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-12 opacity-60">
              {/* Image placeholders */}
            </div>
          </div>
        </section>

        {/* More sections... */}
      </main>

      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
```

---

## 🎬 Animation Guidelines

### Framer Motion Variants

```typescript
// Use these animation variants throughout

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
}

export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Usage example:
<motion.div
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

---

## ✅ Implementation Checklist

### Phase 1: Setup
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind with design tokens
- [ ] Install dependencies (framer-motion, react-hook-form)
- [ ] Set up project structure

### Phase 2: Core Components
- [ ] Build Header component with sticky behavior
- [ ] Build Footer component
- [ ] Build DemoModal with form validation
- [ ] Build reusable Button component
- [ ] Build FeatureCard component

### Phase 3: Pages
- [ ] Home page with all sections
- [ ] Platform page
- [ ] FinOps Services page
- [ ] Why moneta page

### Phase 4: Polish
- [ ] Add page transitions
- [ ] Implement smooth scroll
- [ ] Test modal open/close
- [ ] Responsive design testing
- [ ] Performance optimization

---

## 🚀 Quick Start Command

```bash
npx create-next-app@latest moneta-website --typescript --tailwind --app
cd moneta-website
npm install framer-motion react-hook-form
```

Then copy tailwind.config.ts and start building components!

---

**End of Implementation Guide**
