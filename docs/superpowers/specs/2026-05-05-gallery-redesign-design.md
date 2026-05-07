# Gallery Section Redesign — Design Spec

**Date:** 2026-05-05
**Component:** `components/home/Gallery/Gallery.tsx`

---

## 1. Goal

Replace the current PrimeReact Galleria (narrow 640px carousel + thumbnail strip) with an editorial asymmetric grid that matches the luxury aesthetic of the rest of the page.

---

## 2. Layout

### Desktop (md and above)

Two-column CSS grid, full section width (max-width 1200px, centred):

```
[ Hero image (left, spans 2 rows) ] [ Image 2 (right top) ]
[                                  ] [ Image 3 (right bottom) ]
```

- Left column: `1.4fr` — hero image at full column height (~680px)
- Right column: `1fr` — two equal images stacked, each ~340px tall
- Gap: `10px` between cells

### Mobile (below md)

Three images stacked full-width, each with a fixed aspect ratio.

---

## 3. Images

| Slot | File | Label |
|------|------|-------|
| Hero (left) | `Berlin.webp` | Berlin · Ku'damm · "Stylish 135m²" |
| Right top | `Dresden.jpeg` | Dresden · Altstadt · "Frauenkirche" |
| Right bottom | `berlin_card .jpeg` | Berlin · Wittenbergplatz · "Wohnzimmer" |

Each image uses `next/image` with `fill` and `objectFit="cover"`.

---

## 4. Interaction

On hover for each image cell:
- Image scales to `1.04×` — smooth `transform` with `transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Dark gradient overlay fades in (`opacity: 0 → 1`, `transition: 0.4s ease`) — `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)`
- Location label fades up from bottom: city in rose (`#e11d47`, `tracking-[0.2em]`, uppercase, 0.6rem) + property name in white bold below it — `translateY(8px) → translateY(0)`, `opacity: 0 → 1`

This pattern mirrors the destination cards in `HomeBanner`.

---

## 5. Section Heading

Replaces the current centred `h2` + divider + `h4` layout:

```
[eyebrow]  Unsere Wohnungen          (rose, 0.7rem, tracking-[0.28em], uppercase)
[heading]  In                        (white, clamp(2.5rem, 5vw, 4.5rem), font-bold, leading-none, tracking-tight)
           Bildern
[row]      heading left  |  subtitle right (max-w-sm, white/45, 0.9rem, font-light)
```

- Eyebrow + heading + right-aligned subtitle in a flex row (`items-end justify-between`)
- Section padding: `py-24 px-6 md:px-10`
- Heading + grid max-width: `1200px`, `mx-auto`

---

## 6. What Is Removed

- `primereact/galleria` import and component
- `primereact/icons/chevronleft` and `chevronright` imports
- `gallery.scss` and its import
- `GalleriaResponsiveOptions` type usage
- The `id="gallery-galleria"` prop (hydration fix no longer needed)
- The `<div className='pb-20 border-t-white ...'></div>` divider

The `id="gallery"` anchor on the section wrapper is kept for in-page navigation.

---

## 7. Dependencies

No new packages. Uses only:
- `next/image` (already a dependency)
- Tailwind CSS (already configured)

---

## 8. Mobile Behaviour

Below `md` breakpoint:
- Grid becomes single-column (`grid-cols-1`)
- Each image has `aspect-[4/3]` (Hero loses the tall 3:4 ratio and becomes the same proportion as the others)
- Images stack in order: Berlin hero, Dresden, Berlin card

---

## 9. Files Changed

| Action | Path |
|--------|------|
| Modify | `components/home/Gallery/Gallery.tsx` |
| Delete | `components/home/Gallery/gallery.scss` |
