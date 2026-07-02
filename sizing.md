# Image Sizing Requirements

This document specifies all image sizing requirements for the Chronotype landing page. Use these specifications when providing custom designs to replace the placeholder images.

---

## 1. HERO SECTION

### Hero Slider Images
- **Container**: Aspect ratio `4/5` (mobile), `4.8/5` (desktop)
- **Mobile**: Max width `240px` (constrained by `max-w-[240px]`)
- **Desktop**: Width `52%` of the row (on the right side)
- **Height**: Varies with width based on aspect ratio
- **Object-fit**: `cover`
- **Rounded corners**: `36px` (mobile), `44px` (sm+)
- **Recommended size**: **1200x1500px** (maintains 4:5 aspect ratio)
- **File format**: JPG or WebP
- **Quality**: High quality, well-lit, sleep/healthcare theme

### Hero Background Images
- **Tagline overlay images**: Same sizing as hero slider
- **Current placeholders**: 
  - `/images/hero-visual.jpg` (to be designed)
  - Pexels URLs for slides 2-4

---

## 2. WHY SLEEP MATTERS SECTION

### Main Story Image
- **Container**: Handled by `ImageStorySection` component
- **Primary image**: `sleepingWoman`
- **Secondary image**: `stretchMorning`
- **Object-fit**: `cover`
- **Recommended size**: **1200x800px** (matches URL params `h=1200&w=800`)

### Story Section Dimensions
- **Main image container**: `h-96 w-full` (mobile), `sm:h-[24rem]` (larger)
- **Secondary image**: Positioned in bottom-right corner overlay
- **Rounded corners**: `36px`
- **Recommended main image**: **1200x960px** (4:3 aspect)
- **Recommended secondary image**: **400x500px** (portrait)

### Why Sleep Matters Cards
- **Container**: `md:grid-cols-3` grid, `gap-8`
- **Card dimensions**: 
  - **Mobile**: Full width (`w-full`)
  - **Tablet**: `w-full` (stacked in 2 columns on sm)
  - **Desktop**: Equal width columns in 3-column grid
- **Image header**: `h-56 w-full` (336px height)
- **Object-fit**: `cover`
- **Rounded corners**: `36px` (card), image fills
- **Recommended size**: **840x560px** (3:2 aspect ratio)

### Card Images (3 Cards)
| Card | Image Key | Dimensions | Purpose |
|------|-----------|------------|---------|
| Sleep | `sleepingWoman` | 840x560px | Sleep restoration theme |
| Recovery | `stretchMorning` | 840x560px | Morning recovery stretch |
| Energy | `bodyRepair` | 840x560px | Physical energy restoration |

### Card Overlay Elements
- **Icon container**: `h-14 w-14` rounded-2xl, white background with colored icon
- **Title**: `font-serif text-3xl` for name, `text-lg` for description
- **Gradient overlay**: `from-black/55 via-black/10 to-transparent`

---

## 3. SLEEP CYCLES SECTION

### Cycle Visualization
- **Container**: `h-96 w-full` (mobile), `sm:h-[24rem]` (larger)
- **Object-fit**: `cover`
- **Recommended size**: **1200x800px**
- **Note**: Uses SVG/timeline graphics, not photo

---

## 4. SLEEP DISORDERS SECTION

### Disorders Cards
- **Container**: `md:grid-cols-2` grid, `gap-6`
- **Card image**: `h-56 w-full` (336px height)
- **Object-fit**: `cover`
- **Recommended size**: **840x560px** (3:2 aspect ratio)

| Card | Image Key | Dimensions |
|------|-----------|------------|
| Warning Signs | `tiredEyes` | 840x560px |
| Symptoms | `tiredLaptop` | 840x560px |

---

## 5. WARNING SIGNS SECTION

### Warning Image
- **Container**: `h-96 w-full` (mobile), `sm:h-[28rem]` (larger)
- **Object-fit**: `cover`
- **Recommended size**: **1200x1600px** (portrait, 3:4 aspect)
- **Image key**: `tiredEyes`

---

## 6. THE RIPPLE EFFECT SECTION (Quality of Life)

### Main Hero Image (Above Cards)
- **Aspect ratio**: `16/9`
- **Max width**: `512px` (within `max-w-5xl`)
- **Height**: Calculated from `aspect-[16/9]`
- **Rounded corners**: `40px`
- **Recommended size**: **1152x648px** (16:9 aspect ratio)
- **Object-fit**: `cover`
- **Overlay**: Bottom gradient text overlay

### Impact Cards (5 Cards)
- **Mobile/Tablet**: `w-full` (stacked or 2-column)
- **Desktop**: 
  - Row 1: 3 cards, each `col-span-4` (33.3% width minus gaps)
  - Row 2: 2 centered cards, each `max-w-[440px]`
- **Card width**: ~350-440px depending on viewport
- **Card height**: `min-h-[240px]` (mobile) / `min-h-[300px]` (desktop)
- **Image area**: Not directly in cards; cards use icon + title + list
- **Note**: Cards have gradient headers, not images
- **Gradient header**: `bg-gradient-to-br` from accent color (light tint)
- **Icon**: `h-11 w-11` or `h-12 w-12` in colored circle

---

## 7. CHRONOTYPE TYPES SECTION (Three Patterns, One Rhythm)

### Chronotype Human Images
- **Container**: `h-80 w-full` (mobile), `sm:h-88` (larger mobile)
- **Object-fit**: `cover`
- **Rounded corners**: `38px` (card), image fills container
- **Recommended size**: **800x960px** (portrait orientation, ~4:5 aspect)
- **Card width**: `w-[320px]` (mobile), `w-[360px]` (sm)
- **Card height**: Auto (depends on content)

### Chronotype Images (per type)
| Chronotype | Image Key | Recommended Size | Notes |
|------------|-----------|------------------|-------|
| Lark | `larkHuman`, `larkHuman2` | 800x960px | Morning chronotype |
| Eagle | `eagleHuman` | 800x960px | Intermediate chronotype |
| Owl | `owlHuman`, `owlHuman2` | 800x960px | Evening chronotype |

### Card Content
- **Badge**: Top-right, `h-8 w-8` icon in white circle
- **Title**: `font-serif text-3xl` for name, `text-xs` for subtitle
- **Points list**: 3-4 bullet points with `CheckCircle2` icons

---

## 8. BIORHYTHM SECTION (Peak Performance)

### Main Images
- **Primary**: `yogaCliff`
- **Secondary**: `neckStretch`
- **Container**: Same as Why Sleep Matters
- **Recommended size**: **1200x800px**
- **Layout**: `reverse` prop flips image position

### Timeline Graphic
- **Image key**: `/images/rhythm-timeline.jpg`
- **Recommended size**: Full-width, ~1200x400px

### Point Icons (4 columns)
- **Container**: `h-20 w-full` (implicit from padding)
- **Icon size**: `16px` (Sparkles icon)
- **No custom images needed** - uses icon + text

---

## 9. FOUR PILLARS SECTION

### Pillar Images
- **Large pillar** (Sleep): `h-full min-h-[420px]`
- **Small pillars**: `min-h-[300px]`
- **Object-fit**: `cover`
- **Recommended size**: 
  - Large: **840x560px** (3:2)
  - Small: **600x400px** (3:2)

| Pillar | Image Key | Size |
|--------|-----------|------|
| Sleep | `cozyBed` | Large (840x560) |
| Movement | `runningRoad` | Small (600x400) |
| Nutrition | `nutritionPlate` | Small (600x400) |
| Light | `windowLight` | Small (600x400) |

---

## 10. BEYOND BEDROOM SECTION

### Main Image
- **Container**: `h-[560px] w-full` (mobile), `sm:h-[620px]` (larger)
- **Object-fit**: `cover`
- **Recommended size**: **1200x896px** (maintains height ratio)
- **Image key**: `friendsHug`

---

## 11. SLEEP FACTS SECTION

### Fact Cards
- **Container**: Each card has `h-80 w-full` image area
- **Object-fit**: `cover`
- **Recommended size**: **800x1280px** (portrait)
- **Images**: `focusBrain`, `bodyRepair`, `dailyPerformance`

---

## 12. GUIDANCE SECTION

### Doctor Consult Images
- **Container**: `h-full w-full` (fills card)
- **Object-fit**: `cover`
- **Recommended size**: **800x1000px** (portrait)
- **Images**: `doctorConsult`, `doctorConsult2`

---

## SUMMARY TABLE

| # | Section | Image Key | Dimensions | Aspect Ratio | Purpose |
|---|---------|-----------|------------|--------------|---------|
| 1 | Hero (all slides) | heroSlides[i] | 1200x1500 | 4:5 | Main carousel |
| 2 | Why Sleep (primary) | `sleepingWoman` | 1200x800 | 3:2 | Story image |
| 3 | Why Sleep (cards x3) | `sleepingWoman`, `stretchMorning`, etc. | 840x560 | 3:2 | Card headers |
| 4 | Sleep Cycles | - | SVG | - | Timeline graphic |
| 5 | Sleep Disorders (x2) | `tiredEyes`, `tiredLaptop` | 840x560 | 3:2 | Disorder cards |
| 6 | Warning Signs | `tiredEyes` | 1200x1600 | 3:4 | Warning image |
| 7 | Ripple Hero | `tiredDesk` | 1152x648 | 16:9 | Section banner |
| 8 | Chronotype (x6) | `larkHuman`, `owlHuman`, etc. | 800x960 | 4:5 | Type cards |
| 9 | Biorhythm (main) | `yogaCliff`, `neckStretch` | 1200x800 | 3:2 | Story image |
| 10 | Four Pillars (large) | `cozyBed` | 840x560 | 3:2 | Large card |
| 11 | Four Pillars (small x3) | `runningRoad`, `nutritionPlate`, `windowLight` | 600x400 | 3:2 | Small cards |
| 12 | Beyond Bedroom | `friendsHug` | 1200x896 | ~4:3 | Section image |
| 13 | Sleep Facts (x3) | `focusBrain`, `bodyRepair`, `dailyPerformance` | 800x1280 | 4:5 | Fact cards |
| 14 | Guidance (x2) | `doctorConsult`, `doctorConsult2` | 800x1000 | 4:5 | Gallery images |

---

## TECHNICAL NOTES

### File Format Recommendations
- **Primary**: WebP (smaller file size, same quality)
- **Fallback**: JPG for broader compatibility
- **Transparency**: PNG only if needed (icons, overlays)

### Compression Guidelines
- **Quality**: 80-85% for JPG/WebP
- **Max file size per image**: 200KB
- **Total page budget**: Keep total image assets under 2MB

### Responsive Considerations
- Images should be **square-cropped** or **portrait-oriented** for consistent display
- **Mobile-first**: Design for mobile dimensions first, then scale up
- **Art direction**: Consider cropping differently on mobile vs desktop

### Color Profiles
- **sRGB** color space recommended
- Avoid CMYK or P3 profiles