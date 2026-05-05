# Jest Testing System — Design Spec

**Date:** 2026-05-05
**Scope:** Full behavior tests for all 8 client components

---

## 1. Infrastructure

### Packages (devDependencies)

```
jest
jest-environment-jsdom
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event
@types/jest
identity-obj-proxy
```

`next/jest` is already bundled with Next.js — no separate install.

### Config files

**`jest.config.ts`** (project root)
- Uses `createJestConfig` from `next/jest`
- `testEnvironment: 'jsdom'`
- `setupFilesAfterFramework: ['<rootDir>/jest.setup.ts']`
- `moduleNameMapper` entries for mocks (see Section 2)
- Maps `.scss` and `.css` imports to `identity-obj-proxy`

**`jest.setup.ts`** (project root)
- Imports `@testing-library/jest-dom` to register matchers (`toBeInTheDocument`, `toHaveAttribute`, etc.)
- Registers global mocks for `next/image`, `next/navigation`, `next/script`, `next/link`, and Swiper

**`tsconfig.json`** — no changes; `next/jest` resolves `@/*` path aliases automatically.

### npm script

Add to `package.json`:
```json
"test": "jest",
"test:watch": "jest --watch"
```

---

## 2. Test File Structure

Tests live in `__test__/` mirroring the component tree:

```
__test__/
  home/
    Banner.test.tsx
    Gallery.test.tsx
    Properties.test.tsx
    TestimonialCarousel.test.tsx
  shared/
    CozyButton.test.tsx
    Header.test.tsx
    LodgifySearchBar.test.tsx
    LodgifyBookingBar.test.tsx
```

---

## 3. Mock Strategy

All mocks defined in `jest.setup.ts` and wired via `moduleNameMapper` in `jest.config.ts`.

### Next.js internals

| Import | Mock |
|--------|------|
| `next/image` | `<img>` forwarding all props |
| `next/link` | `<a href={href}>` forwarding children |
| `next/script` | `<script src={src} />` |
| `next/navigation` | `useRouter` → `{ push: jest.fn(), replace: jest.fn() }` |

### CSS/SCSS

`identity-obj-proxy` — returns the class name string. Covers both `.module.css` and `.scss` imports.

### Swiper

Mock `swiper/react` so `Swiper` renders as `<div data-testid="swiper">` and `SwiperSlide` as `<div data-testid="swiper-slide">`. Stub `swiper/css` and `swiper/css/effect-fade` as empty modules via `moduleNameMapper`.

### PrimeReact Galleria

No mock — render through real PrimeReact in jsdom. The stable `id="gallery-galleria"` prop prevents hydration-related ID drift. The `next/image` mock covers images inside it.

### Lodgify (third-party scripts)

`next/script` mock renders `<script src={src} />`. Tests verify DOM structure and `data-*` attributes; `useEffect` style injection is tested via `document.head` assertions.

---

## 4. Test Coverage Per Component

### `CozyButton`
- Renders children text
- Applies `className` prop
- Calls `router.push(href)` when clicked

### `Header`
- Renders without crashing
- Renders an empty fragment (no visible DOM nodes)

### `HomeBanner`
- Renders hero headline containing "Cozy" and "Voyage"
- Renders Berlin and Dresden destination links with correct `href` attributes
- Renders "Alle Objekte" CTA link pointing to the lodgify URL

### `Properties`
- Renders all 4 property titles
- Featured property card is present in the DOM
- "Alle Objekte ansehen" link points to the correct lodgify URL

### `Gallery`
- Renders the `#gallery` section wrapper
- Galleria root element has `id="gallery-galleria"`
- Prev/next thumbnail icon buttons render

### `TestimonialCarousel`
- Renders section heading "Was unsere Gäste über uns sagen"
- All 8 testimonial guest names appear in the DOM
- All 3 award images render (Guest Favourite, Booking review, Superhost)

### `LodgifySearchBar`
- `#lodgify-search-bar` div is present in the DOM
- `data-website-id="568678"` is set correctly
- `useEffect` appends a `<style>` to `document.head` on mount
- `<style>` is removed from `document.head` on unmount

### `LodgifyBookingBar`
- `#lodgify-book-now-box` div is present in the DOM
- `data-rental-id` matches the passed `rentalId` prop
- `useEffect` appends a `<style>` to `document.head` on mount
- `<style>` is removed from `document.head` on unmount

---

## 5. Out of Scope

- E2E / browser tests (Playwright, Cypress)
- Server components (none exist currently)
- Snapshot tests (brittle, not planned)
- PropertyCard component (not a direct client component, tested indirectly via Properties)
