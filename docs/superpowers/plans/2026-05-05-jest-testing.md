# Jest Testing System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install and configure Jest with React Testing Library and write full behavior tests for all 8 client components.

**Architecture:** `next/jest` provides SWC-based transpilation and handles CSS/SCSS mocking. Mock files live in `__mocks__/` and are wired via `moduleNameMapper` in `jest.config.js`. All test files live under `__test__/`, mirroring the `components/` tree. The `jest.setup.ts` file registers `@testing-library/jest-dom` matchers and global browser API stubs.

**Tech Stack:** Jest 29, jest-environment-jsdom, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, next/jest (SWC transform), identity-obj-proxy

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `jest.config.js` | Jest configuration via `next/jest` |
| Create | `jest.setup.ts` | Global matchers + browser API stubs |
| Create | `__mocks__/next/image.tsx` | Replaces `next/image` with plain `<img>` |
| Create | `__mocks__/next/script.tsx` | Replaces `next/script` with null |
| Create | `__mocks__/swiper/react.tsx` | Replaces Swiper with simple divs |
| Create | `__test__/shared/CozyButton.test.tsx` | CozyButton tests |
| Create | `__test__/shared/Header.test.tsx` | Header tests |
| Create | `__test__/home/Banner.test.tsx` | HomeBanner tests |
| Create | `__test__/home/Properties.test.tsx` | Properties tests |
| Create | `__test__/home/Gallery.test.tsx` | Gallery tests |
| Create | `__test__/home/TestimonialCarousel.test.tsx` | TestimonialCarousel tests |
| Create | `__test__/shared/LodgifySearchBar.test.tsx` | LodgifySearchBar tests |
| Create | `__test__/shared/LodgifyBookingBar.test.tsx` | LodgifyBookingBar tests |
| Modify | `package.json` | Add `test` and `test:watch` scripts |

---

## Task 1: Install dependencies and wire up Jest

**Files:**
- Create: `jest.config.js`
- Create: `jest.setup.ts`
- Create: `__mocks__/next/image.tsx`
- Create: `__mocks__/next/script.tsx`
- Create: `__mocks__/swiper/react.tsx`
- Modify: `package.json`

- [ ] **Step 1: Install devDependencies**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest identity-obj-proxy
```

Expected: packages added to `devDependencies` in `package.json`.

- [ ] **Step 2: Create `jest.config.js`**

```js
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx',
    '^next/script$': '<rootDir>/__mocks__/next/script.tsx',
    '^swiper/react$': '<rootDir>/__mocks__/swiper/react.tsx',
  },
};

module.exports = createJestConfig(config);
```

- [ ] **Step 3: Create `jest.setup.ts`**

```typescript
import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
```

- [ ] **Step 4: Create `__mocks__/next/image.tsx`**

```tsx
import React from 'react';

const Image = ({ src, alt, fill, priority, sizes, objectFit, ...props }: any) => (
  <img src={src} alt={alt} {...props} />
);

export default Image;
```

- [ ] **Step 5: Create `__mocks__/next/script.tsx`**

```tsx
const Script = () => null;
export default Script;
```

- [ ] **Step 6: Create `__mocks__/swiper/react.tsx`**

```tsx
import React from 'react';

export const Swiper = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="swiper">{children}</div>
);

export const SwiperSlide = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="swiper-slide">{children}</div>
);
```

- [ ] **Step 7: Add test scripts to `package.json`**

In the `"scripts"` block, add:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 8: Verify Jest discovers no tests but runs cleanly**

```bash
npm test -- --passWithNoTests
```

Expected output: `Test Suites: 0 skipped` or similar — no errors, no "Cannot find module" failures.

- [ ] **Step 9: Commit**

```bash
git add jest.config.js jest.setup.ts __mocks__/next/image.tsx __mocks__/next/script.tsx __mocks__/swiper/react.tsx package.json package-lock.json
git commit -m "feat: install and configure Jest with next/jest and RTL"
```

---

## Task 2: CozyButton tests

**Files:**
- Test: `__test__/shared/CozyButton.test.tsx`
- Component: `components/shared/Button/CozyButton.tsx`

CozyButton wraps PrimeReact's Button, takes an `href` prop, and calls `router.push(href)` on click. `useRouter` must be mocked per-file since it's only used here.

- [ ] **Step 1: Write the failing tests**

Create `__test__/shared/CozyButton.test.tsx`:

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CozyButton from '@/components/shared/Button/CozyButton';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush, replace: jest.fn() }),
}));

describe('CozyButton', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders children', () => {
    render(<CozyButton href="/test">Click me</CozyButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<CozyButton href="/test" className="custom-class">Button</CozyButton>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('calls router.push with href on click', () => {
    render(<CozyButton href="/booking">Book</CozyButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(mockPush).toHaveBeenCalledWith('/booking');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __test__/shared/CozyButton.test.tsx
```

Expected: FAIL — module not found or import errors (no implementation wired yet — this is the TDD red step confirming the test file is picked up and the component imports are resolved).

- [ ] **Step 3: Run test again after config is in place**

If Task 1 is done, re-run:
```bash
npm test -- __test__/shared/CozyButton.test.tsx
```

Expected: All 3 tests PASS.

- [ ] **Step 4: Commit**

```bash
git add __test__/shared/CozyButton.test.tsx
git commit -m "test: add CozyButton behavior tests"
```

---

## Task 3: Header tests

**Files:**
- Test: `__test__/shared/Header.test.tsx`
- Component: `components/shared/Header/Header.tsx`

Header currently returns `<></>` — all nav content is commented out. Tests verify it renders without error and produces no DOM output.

- [ ] **Step 1: Write the tests**

Create `__test__/shared/Header.test.tsx`:

```tsx
import React from 'react';
import { render } from '@testing-library/react';
import Header from '@/components/shared/Header/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('renders no visible content', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).toBe('');
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/shared/Header.test.tsx
```

Expected: Both tests PASS.

- [ ] **Step 3: Commit**

```bash
git add __test__/shared/Header.test.tsx
git commit -m "test: add Header tests"
```

---

## Task 4: HomeBanner tests

**Files:**
- Test: `__test__/home/Banner.test.tsx`
- Component: `components/home/Banner/HomeBanner.tsx`

HomeBanner renders a hero section with h1 ("Cozy" / "Voyage"), a CTA "Alle Objekte" link, and destination links for Berlin and Dresden. `next/image` and `next/link` are resolved — `next/link` renders as a real `<a>` in jsdom; `next/image` uses our `__mocks__/next/image.tsx`.

- [ ] **Step 1: Write the tests**

Create `__test__/home/Banner.test.tsx`:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeBanner from '@/components/home/Banner/HomeBanner';

describe('HomeBanner', () => {
  it('renders the hero heading with Cozy and Voyage', () => {
    render(<HomeBanner />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Cozy');
    expect(heading).toHaveTextContent('Voyage');
  });

  it('renders the Alle Objekte CTA link with correct href', () => {
    render(<HomeBanner />);
    const ctaLink = screen.getByRole('link', { name: /alle objekte/i });
    expect(ctaLink).toHaveAttribute(
      'href',
      'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'
    );
  });

  it('renders destination links for Berlin and Dresden', () => {
    render(<HomeBanner />);
    const berlinLinks = screen.getAllByRole('link', { name: /berlin/i });
    const dresdenLinks = screen.getAllByRole('link', { name: /dresden/i });
    expect(berlinLinks.length).toBeGreaterThan(0);
    expect(dresdenLinks.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/home/Banner.test.tsx
```

Expected: All 3 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add __test__/home/Banner.test.tsx
git commit -m "test: add HomeBanner render and link tests"
```

---

## Task 5: Properties tests

**Files:**
- Test: `__test__/home/Properties.test.tsx`
- Component: `components/home/Properties/Properties.tsx`
- Used by: `components/home/Cards/PropertyCard.tsx` (server component, no mock needed)

Properties renders 4 PropertyCard components. Titles are in `<h3>` inside each card. The featured card (Berlin) is the first in the `properties` array.

- [ ] **Step 1: Write the tests**

Create `__test__/home/Properties.test.tsx`:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Properties from '@/components/home/Properties/Properties';

describe('Properties', () => {
  it('renders all 4 property titles', () => {
    render(<Properties />);
    expect(screen.getByText("Stylish 135m² am Ku'damm")).toBeInTheDocument();
    expect(screen.getByText('Frauenkirche — Für 2–4 Personen')).toBeInTheDocument();
    expect(screen.getByText('Frauenkirche — Für 4–6 Personen')).toBeInTheDocument();
    expect(screen.getByText('Altstadt Zentrum — Für 8 Personen')).toBeInTheDocument();
  });

  it('renders the featured property (Berlin Ku\'damm)', () => {
    render(<Properties />);
    expect(screen.getByText("Stylish 135m² am Ku'damm")).toBeInTheDocument();
  });

  it('renders the Alle Objekte ansehen link with correct href', () => {
    render(<Properties />);
    const link = screen.getByRole('link', { name: /alle objekte ansehen/i });
    expect(link).toHaveAttribute(
      'href',
      'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'
    );
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/home/Properties.test.tsx
```

Expected: All 3 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add __test__/home/Properties.test.tsx
git commit -m "test: add Properties render and link tests"
```

---

## Task 6: Gallery tests

**Files:**
- Test: `__test__/home/Gallery.test.tsx`
- Component: `components/home/Gallery/Gallery.tsx`

Gallery renders PrimeReact's Galleria (real, not mocked) with `id="gallery-galleria"` and 6 images. The `window.matchMedia` and `ResizeObserver` stubs in `jest.setup.ts` prevent PrimeReact from throwing. The `gallery.scss` import is handled by `next/jest`'s built-in CSS mock.

- [ ] **Step 1: Write the tests**

Create `__test__/home/Gallery.test.tsx`:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '@/components/home/Gallery/Gallery';

describe('Gallery', () => {
  it('renders the #gallery section wrapper', () => {
    render(<Gallery />);
    expect(document.getElementById('gallery')).toBeInTheDocument();
  });

  it('renders Galleria with stable id="gallery-galleria"', () => {
    render(<Gallery />);
    expect(document.getElementById('gallery-galleria')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Gallery />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/home/Gallery.test.tsx
```

Expected: All 3 tests PASS. If PrimeReact throws about a missing browser API, add the appropriate stub to `jest.setup.ts` (e.g., `global.IntersectionObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), disconnect: jest.fn() }))`).

- [ ] **Step 3: Commit**

```bash
git add __test__/home/Gallery.test.tsx
git commit -m "test: add Gallery render and navigation tests"
```

---

## Task 7: TestimonialCarousel tests

**Files:**
- Test: `__test__/home/TestimonialCarousel.test.tsx`
- Component: `components/home/TestimonialCarousel/TestimonialCarousel.tsx`

TestimonialCarousel uses Swiper (mocked as divs) and `next/image` (mocked). Note: the individual testimonial card content is commented out in the component, so only slide containers and award badge images are verifiable in the DOM.

- [ ] **Step 1: Write the tests**

Create `__test__/home/TestimonialCarousel.test.tsx`:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCarousel from '@/components/home/TestimonialCarousel/TestimonialCarousel';

describe('TestimonialCarousel', () => {
  it('renders the section heading', () => {
    render(<TestimonialCarousel />);
    expect(
      screen.getByText('Was unsere Gäste über uns sagen')
    ).toBeInTheDocument();
  });

  it('renders 8 swiper slides (one per testimonial)', () => {
    render(<TestimonialCarousel />);
    const slides = screen.getAllByTestId('swiper-slide');
    expect(slides).toHaveLength(8);
  });

  it('renders 3 award badge images', () => {
    render(<TestimonialCarousel />);
    const awardImages = screen.getAllByRole('img', {
      name: /airbnb guest favourite/i,
    });
    expect(awardImages).toHaveLength(3);
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/home/TestimonialCarousel.test.tsx
```

Expected: All 3 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add __test__/home/TestimonialCarousel.test.tsx
git commit -m "test: add TestimonialCarousel heading, slide, and award badge tests"
```

---

## Task 8: LodgifySearchBar tests

**Files:**
- Test: `__test__/shared/LodgifySearchBar.test.tsx`
- Component: `components/shared/Lodgify/LodgifySearchBar/LodgifySearchBar.tsx`

LodgifySearchBar renders a div with `data-*` attributes and injects a `<style>` into `document.head` via `useEffect`. The style is removed on unmount.

- [ ] **Step 1: Write the tests**

Create `__test__/shared/LodgifySearchBar.test.tsx`:

```tsx
import React from 'react';
import { render } from '@testing-library/react';
import LodgifySearchBar from '@/components/shared/Lodgify/LodgifySearchBar/LodgifySearchBar';

describe('LodgifySearchBar', () => {
  it('renders the search bar div with correct data-website-id', () => {
    render(<LodgifySearchBar />);
    const div = document.getElementById('lodgify-search-bar');
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute('data-website-id', '568678');
  });

  it('appends a style element to document.head on mount', () => {
    const stylesBefore = document.head.querySelectorAll('style').length;
    render(<LodgifySearchBar />);
    expect(document.head.querySelectorAll('style').length).toBe(stylesBefore + 1);
  });

  it('removes the style element from document.head on unmount', () => {
    const stylesBefore = document.head.querySelectorAll('style').length;
    const { unmount } = render(<LodgifySearchBar />);
    unmount();
    expect(document.head.querySelectorAll('style').length).toBe(stylesBefore);
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/shared/LodgifySearchBar.test.tsx
```

Expected: All 3 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add __test__/shared/LodgifySearchBar.test.tsx
git commit -m "test: add LodgifySearchBar DOM and style injection tests"
```

---

## Task 9: LodgifyBookingBar tests

**Files:**
- Test: `__test__/shared/LodgifyBookingBar.test.tsx`
- Component: `components/shared/Lodgify/LodgifyBookingBar/LodgifyBookingBar.tsx`

LodgifyBookingBar accepts a `rentalId` prop and sets it as `data-rental-id`. Style injection lifecycle is identical to LodgifySearchBar.

- [ ] **Step 1: Write the tests**

Create `__test__/shared/LodgifyBookingBar.test.tsx`:

```tsx
import React from 'react';
import { render } from '@testing-library/react';
import LodgifyBookingBar from '@/components/shared/Lodgify/LodgifyBookingBar/LodgifyBookingBar';

describe('LodgifyBookingBar', () => {
  it('renders the booking bar div with correct data-rental-id', () => {
    render(<LodgifyBookingBar rentalId="4578017" />);
    const div = document.getElementById('lodgify-book-now-box');
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute('data-rental-id', '4578017');
  });

  it('reflects the rentalId prop in data-rental-id', () => {
    render(<LodgifyBookingBar rentalId="9999999" />);
    const div = document.getElementById('lodgify-book-now-box');
    expect(div).toHaveAttribute('data-rental-id', '9999999');
  });

  it('appends a style to document.head on mount and removes it on unmount', () => {
    const stylesBefore = document.head.querySelectorAll('style').length;
    const { unmount } = render(<LodgifyBookingBar rentalId="4578017" />);
    expect(document.head.querySelectorAll('style').length).toBe(stylesBefore + 1);
    unmount();
    expect(document.head.querySelectorAll('style').length).toBe(stylesBefore);
  });
});
```

- [ ] **Step 2: Run and confirm tests pass**

```bash
npm test -- __test__/shared/LodgifyBookingBar.test.tsx
```

Expected: All 3 tests PASS.

- [ ] **Step 3: Final full suite run**

```bash
npm test
```

Expected: All 8 test files, all tests PASS. No failures.

- [ ] **Step 4: Commit**

```bash
git add __test__/shared/LodgifyBookingBar.test.tsx
git commit -m "test: add LodgifyBookingBar prop and style injection tests"
```
