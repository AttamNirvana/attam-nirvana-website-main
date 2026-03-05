# Aattam Nirvana - Trauma Healing & Empowerment Website

A beautiful, modern Next.js website for Rupi Dhillon's trauma healing and women empowerment practice.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful page transitions and interactions
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Purple Theme**: Sophisticated color palette designed for healing/wellness
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Focused**: Optimized images, fonts, and code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd AttamNirvana
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page (placeholder)
│   ├── contact/           # Contact page (placeholder)
│   ├── services/          # Services page (placeholder)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── animations/        # Framer Motion animation wrappers
│   ├── layout/            # Header, Footer components
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   └── ui/                # Reusable UI components
```

## 🎨 Design System

### Colors

- **Primary Purple**: `#6B47A1` - Main brand color
- **Dark Purple**: `#2D1B4E` - Backgrounds
- **Accent Cyan**: `#06B6D4` - Highlights
- **Accent Gold**: `#F59E0B` - Ratings, premium elements

### Fonts

- **Poppins**: Headlines and branding
- **Inter**: Body text and UI elements

## 📦 Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `lucide-react` - Icons
- `clsx` - Conditional class names
- `tailwindcss` - Utility-first CSS

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is private and proprietary.

## Workshop Series

<div class="relative max-w-6xl mx-auto">
  <div class="grid gap-6 md:grid-cols-1">
    <!-- Values Workshop Card -->
    <div>
      <div class="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div class="relative h-44 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&amp;auto=format&amp;fit=crop&amp;q=80" alt="Values Workshop" class="absolute inset-0 w-full h-full object-cover brightness-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div class="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#c99a1d]/10 to-transparent"></div>
        </div>
        <div class="p-6 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
          <h3 class="text-xl font-poppins font-bold text-primary-900 mb-2">Values Workshop</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">Discover and align with your core values to create a life of authenticity and purpose.</p>
          <div class="flex items-center justify-between mb-4 pt-3 border-t border-gray-200">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#c99a1d]"></div>
              <span class="text-xs font-semibold text-gray-900">3 hours</span>
            </div>
            <div class="flex gap-0.5">...existing code...</div>
          </div>
          <a class="inline-flex items-center justify-center gap-2 text-xs font-bold   bg-gradient-to-r from-[#c99a1d] to-[#e0b84d] text-white   hover:shadow-lg hover:shadow-[#c99a1d]/30 px-5 py-3 rounded-xl   transition-all duration-300 group/link" href="/contact">LEARN MORE...existing code...</a>
        </div>
      </div>
    </div>
    <!-- Group Workshops Card -->
    <div>
      <div class="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div class="relative h-44 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&amp;auto=format&amp;fit=crop&amp;q=80" alt="Group Workshops" class="absolute inset-0 w-full h-full object-cover brightness-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div class="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#c99a1d]/10 to-transparent"></div>
        </div>
        <div class="p-6 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
          <h3 class="text-xl font-poppins font-bold text-primary-900 mb-2">Group Workshops</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">Connect with a supportive community of women on similar healing journeys through facilitated group sessions.</p>
          <div class="flex items-center justify-between mb-4 pt-3 border-t border-gray-200">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#c99a1d]"></div>
              <span class="text-xs font-semibold text-gray-900">2 hours</span>
            </div>
            <div class="flex gap-0.5">...existing code...</div>
          </div>
          <a class="inline-flex items-center justify-center gap-2 text-xs font-bold   bg-gradient-to-r from-[#c99a1d] to-[#e0b84d] text-white   hover:shadow-lg hover:shadow-[#c99a1d]/30 px-5 py-3 rounded-xl   transition-all duration-300 group/link" href="/contact">LEARN MORE...existing code...</a>
        </div>
      </div>
    </div>
    <!-- Corporate Card -->
    <div>
      <div class="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div class="relative h-44 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&amp;auto=format&amp;fit=crop&amp;q=80" alt="Corporate" class="absolute inset-0 w-full h-full object-cover brightness-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div class="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#c99a1d]/10 to-transparent"></div>
        </div>
        <div class="p-6 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
          <h3 class="text-xl font-poppins font-bold text-primary-900 mb-2">Corporate</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">Tailored wellness and empowerment programs for corporate teams to foster psychological safety and growth.</p>
          <div class="flex items-center justify-between mb-4 pt-3 border-t border-gray-200">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#c99a1d]"></div>
              <span class="text-xs font-semibold text-gray-900">Customizable</span>
            </div>
            <div class="flex gap-0.5">...existing code...</div>
          </div>
          <a class="inline-flex items-center justify-center gap-2 text-xs font-bold   bg-gradient-to-r from-[#c99a1d] to-[#e0b84d] text-white   hover:shadow-lg hover:shadow-[#c99a1d]/30 px-5 py-3 rounded-xl   transition-all duration-300 group/link" href="/contact">LEARN MORE...existing code...</a>
        </div>
      </div>
    </div>
  </div>
</div>
