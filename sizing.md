# Image Sizing Requirements

This document specifies all image sizing requirements for the Chronotype landing page. Use these specifications when providing custom designs to replace the placeholder images.

---

## 1. HERO SECTION

### Hero Slider Images
- **Container**: Aspect ratio `4/5` (mobile), `3.6/5` (desktop)
- **Mobile**: Max width `320px` (constrained by `max-w-[240px]` at smallest)
- **Desktop**: Width `52%` of the row (on the right side)
- **Height**: Varies with width based on aspect ratio
- **Object-fit**: `cover`
- **Rounded corners**: `36px` (mobile), `44px` (sm+)
- **Recommended size**: **1200x1500px** (maintains 4/5 aspect ratio)
- **File format**: JPG or WebP
- **Quality**: High quality, well-lit, sleep/healthcare theme

### Hero Background Images
- **Tagline overlay images**: Same sizing as hero slider
- **Current placeholders**: 
  - `/images/hero-visual.jpg` (to be designed)
  - Pexels URLs for slides 2-4

---

## 2. THE RIPPLE EFFECT SECTION (Quality of Life)

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
- **Card height**: `min-h-[300px]` (mobile) / `min-h-[460px]` (desktop hero cards)
- **Image area**: Not directly in cards; cards use icon + title + list
- **Note**: Cards have gradient headers, not images

---

## 3. THREE PATTERNS, ONE RHYTHM SECTION (Chronotype Slider)

### Chronotype Human Images
- **Container**: `h-80 w-full` (mobile), `sm:h-88` (larger mobile)
- **Object-fit**: `cover`
- **Rounded corners**: `38px` (card), image fills container
- **Recommended size**: **800x960px** (portrait orientation, ~4:5 aspect)
- **Card width**: `w-[320px]` (mobile), `w-[360px]` (sm)
- **Card height**: Auto (depends on content)

### Chronotype Images (per type)
| Chronotype | Image Key | Recommended Size |
|------------|-----------|------------------|
| Lark | `larkHuman`, `larkHuman2` | 800x960px |
| Eagle | `eagleHuman` | 800x960px |
| Owl | `owlHuman`, `owlHuman2` | 800x960px |

---

## 4. WHY SLEEP MATTERS SECTION

### Main Story Image
- **Container**: Handled by `ImageStorySection` component
- **Primary image**: `sleepingWoman`
- **Secondary image**: `stretchMorning`
- **Object-fit**: `cover`
- **Recommended size**: **1200x800px** (matches URL params `h=1200&w=800`)

### Card Images (3 Cards)
- **Container**: `h-56 w-full` (336px height)
- **Object-fit**: `cover`
- **Rounded corners**: `36px`
- **Recommended size**: **840x560px** (3:2 aspect ratio)
- **Overlay**: Gradient overlay for text readability

| Card | Image Key | Title Overlay |
|------|-----------|---------------|
| Sleep | `sleepingWoman` | Peaceful restorative sleep |
| Recovery | `stretchMorning` | Morning stretch recovery |
| Energy | `bodyRepair` | Body repair during sleep |

---

## 5. PEAK PERFORMANCE SECTION (Biorhythm)

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

## 6. FOUR PILLARS SECTION

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

## 7. SLEEP DISORDERS SECTION (Beyond Bedroom)

### Main Image
- **Container**: `h-[560px] w-full` (mobile), `sm:h-[620px]` (larger)
- **Object-fit**: `cover`
- **Recommended size**: **1200x896px** (maintains height ratio)
- **Image key**: `friendsHug`

---

## 8. WARNING SIGNS SECTION

### Warning Image
- **Container**: `h-80 w-full` (mobile), `sm:h-96` (larger)
- **Object-fit**: `cover`
- **Recommended size**: **800x1280px** (portrait)
- **Image key**: `tiredEyes`

---

## 9. SLEEP FACTS SECTION

### Fact Cards
- **Container**: Each card has `h-80 w-full` image area
- **Object-fit**: `cover`
- **Recommended size**: **800x1280px** (portrait)
- **Images**: `focusBrain`, `bodyRepair`, `dailyPerformance`

---

## 10. GALLERY SHOWCASE (Guidance)

### Doctor Consult Images
- **Container**: `h-full w-full` (fills card)
- **Object-fit**: `cover`
- **Recommended size**: **800x1000px** (portrait)
- **Images**: `doctorConsult`, `doctorConsult2`

---

## SUMMARY TABLE

| Section | Image Key | Dimensions | Aspect Ratio | Purpose |
|---------|-----------|------------|--------------|---------|
| Hero (all slides) | heroSlides[i] | 1200x1500 | 4:5 | Main carousel |
| Ripple Hero | `tiredDesk` | 1152x648 | 16:9 | Section banner |
| Chronotype (x6) | `larkHuman`, `owlHuman`, etc. | 800x960 | 4:5 | Type cards |
| Why Sleep (primary) | `sleepingWoman` | 1200x800 | 3:2 | Story image |
| Why Sleep (cards x3) | `sleepingWoman`, `stretchMorning`, etc. | 840x560 | 3:2 | Card headers |
| Biorhythm (main) | `yogaCliff`, `neckStretch` | 1200x800 | 3:2 | Story image |
| Four Pillars (large) | `cozyBed` | 840x560 | 3:2 | Large card |
| Four Pillars (small x3) | `runningRoad`, `nutritionPlate`, `windowLight` | 600x400 | 3:2 | Small cards |
| Beyond Bedroom | `friendsHug` | 1200x896 | ~4:3 | Section image |
| Warning Signs | `tiredEyes` | 800x1280 | 4:5 | Warning image |
| Sleep Facts (x3) | `focusBrain`, `bodyRepair`, `dailyPerformance` | 800x1280 | 4:5 | Fact cards |
| Guidance (x2) | `doctorConsult`, `doctorConsult2` | 800x1000 | 4:5 | Gallery images |

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