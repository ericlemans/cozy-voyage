# Gallery Editorial Grid Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the PrimeReact Galleria carousel with a static asymmetric editorial grid — hero image on the left spanning full height, two stacked images on the right — with hover overlays and location labels.

**Architecture:** Single component rewrite of `Gallery.tsx`. No new packages — uses only `next/image` and Tailwind CSS. The `gallery.scss` override file is deleted. Two tasks: write failing tests first (TDD), then implement.

**Tech Stack:** Next.js Image, Tailwind CSS v3, React 19, TypeScript

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `__test__/home/Gallery.test.tsx` | Tests for editorial grid (heading, images, labels) |
| Modify | `components/home/Gallery/Gallery.tsx` | Full rewrite — editorial grid |
| Delete | `components/home/Gallery/gallery.scss` | No longer needed |

---

## Task 1: Write failing tests for the redesigned Gallery

**Files:**
- Create: `__test__/home/Gallery.test.tsx`

The current `Gallery.tsx` uses PrimeReact Galleria with `alt="Item template"` and an `h2` reading "Unsere Wohnungen in Bildern". The new tests assert on the redesigned heading and meaningful alt text — they will fail against the current implementation, giving us the TDD red step.

- [ ] **Step 1: Create `__test__/home/Gallery.test.tsx`**

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '@/components/home/Gallery/Gallery';

describe('Gallery', () => {
  it('renders the #gallery section wrapper', () => {
    render(<Gallery />);
    expect(document.getElementById('gallery')).toBeInTheDocument();
  });

  it('renders the "In Bildern" heading', () => {
    render(<Gallery />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('In');
    expect(heading).toHaveTextContent('Bildern');
  });

  it('renders all 3 images with descriptive alt text', () => {
    render(<Gallery />);
    expect(screen.getByAltText('Berlin Stylish 135m²')).toBeInTheDocument();
    expect(screen.getByAltText('Dresden Frauenkirche')).toBeInTheDocument();
    expect(screen.getByAltText('Berlin Wohnzimmer')).toBeInTheDocument();
  });

  it('renders location labels for all 3 images', () => {
    render(<Gallery />);
    expect(screen.getByText('Stylish 135m²')).toBeInTheDocument();
    expect(screen.getByText('Frauenkirche')).toBeInTheDocument();
    expect(screen.getByText('Wohnzimmer')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests and confirm failures**

```bash
npm test -- __test__/home/Gallery.test.tsx
```

Expected: Tests 2, 3, and 4 FAIL (heading text and alt text don't match current implementation). Test 1 passes (the `#gallery` id is present in the old component too).

- [ ] **Step 3: Commit the failing tests**

```bash
git add __test__/home/Gallery.test.tsx
git commit -m "test: add failing Gallery editorial grid tests"
```

---

## Task 2: Implement the editorial grid and delete gallery.scss

**Files:**
- Modify: `components/home/Gallery/Gallery.tsx`
- Delete: `components/home/Gallery/gallery.scss`

- [ ] **Step 1: Replace the full content of `Gallery.tsx`**

```tsx
'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/assets/images/Berlin.webp',
    alt: 'Berlin Stylish 135m²',
    city: 'Berlin',
    neighborhood: "Ku'damm",
    label: 'Stylish 135m²',
  },
  {
    src: '/assets/images/Dresden.jpeg',
    alt: 'Dresden Frauenkirche',
    city: 'Dresden',
    neighborhood: 'Altstadt',
    label: 'Frauenkirche',
  },
  {
    src: '/assets/images/berlin_card .jpeg',
    alt: 'Berlin Wohnzimmer',
    city: 'Berlin',
    neighborhood: 'Wittenbergplatz',
    label: 'Wohnzimmer',
  },
] as const;

const Gallery = () => {
  return (
    <section id="gallery" className="bg-black py-24 px-6 md:px-10">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-[1200px]">
        <p
          className="mb-4 text-xs font-medium uppercase text-rose-500"
          style={{ letterSpacing: '0.28em' }}
        >
          Unsere Wohnungen
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-bold leading-none text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            In<br />Bildern
          </h2>
          <p className="text-sm font-light leading-relaxed text-white/45 md:max-w-sm">
            Mit einer Mischung aus Funktionalität und Design haben wir unsere
            Wohnungen so eingerichtet, dass Sie einen unvergesslichen Aufenthalt
            genießen können.
          </p>
        </div>
      </div>

      {/* Editorial grid */}
      <div
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[10px] md:grid-cols-[1.4fr_1fr] md:[grid-template-rows:340px_340px]"
      >
        {images.map(({ src, alt, city, neighborhood, label }, index) => (
          <div
            key={src}
            className={`group relative overflow-hidden ${
              index === 0
                ? 'aspect-[3/4] md:aspect-auto md:row-span-2'
                : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              sizes={
                index === 0
                  ? '(max-width: 768px) 100vw, 58vw'
                  : '(max-width: 768px) 100vw, 42vw'
              }
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* Location label */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p
                className="mb-1 text-xs font-medium uppercase text-rose-400"
                style={{ letterSpacing: '0.2em' }}
              >
                {city} · {neighborhood}
              </p>
              <p className="font-bold tracking-tight text-white">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
```

- [ ] **Step 2: Delete `gallery.scss`**

```bash
rm /Users/ericlehmann/Repositories/cozy-voyage/components/home/Gallery/gallery.scss
```

- [ ] **Step 3: Run the tests and confirm all 4 pass**

```bash
npm test -- __test__/home/Gallery.test.tsx
```

Expected: All 4 tests PASS.

- [ ] **Step 4: Run the full test suite to check for regressions**

```bash
npm test -- --passWithNoTests
```

Expected: All existing tests pass (CozyButton suite unaffected).

- [ ] **Step 5: Visual check**

Start the dev server and open the page:

```bash
npm run dev
```

Open `http://localhost:3000` (or the port shown) and scroll to the Gallery section. Verify:
- Editorial grid renders with hero left + two stacked right
- Hovering each image shows the gradient overlay + location label fading up
- On a narrow viewport (< 768px) images stack vertically
- No PrimeReact carousel or thumbnail strip visible

- [ ] **Step 6: Commit**

```bash
git add components/home/Gallery/Gallery.tsx
git rm components/home/Gallery/gallery.scss
git commit -m "feat: replace PrimeReact Galleria with editorial asymmetric grid"
```
