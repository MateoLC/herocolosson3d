# Design System Specification: Dark Industrial Luxury

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Monolith"**

This design system rejects the "standard SaaS" aesthetic in favor of a high-end editorial experience. It draws inspiration from the precision of German industrial engineering and the rhythmic, architectural boldness of Latin American brutalism. 

To move beyond a "template" look, we utilize **intentional asymmetry**. Layouts should feel like a high-end magazine spread: large-scale typography that occasionally bleeds off-canvas, overlapping elements that create physical depth, and a rigorous adherence to "Tonal Layering" over structural lines. This is a system built for a B2B audience that values craft, permanence, and the tactile nature of 3D-printed luxury.

---

## 2. Colors & Surface Architecture

The palette is anchored in a "Deep Black" foundations with a "Molten Gold" providing a high-heat industrial glow.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited.** Sectioning must be achieved through background shifts. For example, a hero section in `surface` transition into a feature grid in `surface-container-low`. The eye should perceive boundaries through mass and tone, not outlines.

### Surface Hierarchy & Nesting
Treat the UI as a series of machined plates. 
*   **Base Layer:** `surface` (`#131313`)
*   **Deep Recess:** `surface-container-lowest` (`#0E0E0E`) for background utilities.
*   **Elevated Plates:** `surface-container-high` (`#2A2A2A`) for floating cards or interactive modules.
*   **Nesting:** When placing a card inside a section, the card must be exactly one tier higher or lower than its parent container to create a "machined" fit.

### The Glass & Gradient Rule
To simulate the high-tech nature of NFC and 3D resin, use **Glassmorphism** for floating overlays:
*   **Token:** `surface-container-high` at 60% opacity with a `20px` backdrop-blur.
*   **Signature Gradient:** For primary CTAs, use a linear gradient from `primary` (`#3e9603`) to `primary-container` (`#469f12`) at a 135° angle. This adds a "molten" metallic luster that flat hex codes lack.

---

## 3. Typography

The typographic voice is a dialogue between industrial precision (`Space Grotesk`) and humanistic clarity (`Manrope`).

*   **Display & Headlines (Space Grotesk):** Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em). These are your "Industrial Boldness" moments. Do not be afraid to use `primary` color for headlines to command attention.
*   **Body & Labels (Manrope):** All functional text uses Manrope. It provides the "Apple-esque" clean modernism required for readability in technical B2B specs.
*   **Scale Contrast:** Always pair a `display-sm` header with a significantly smaller `body-md`. This high-contrast ratio creates an editorial, premium feel.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering**. Use the `surface-container` tiers to create a "stepped" architecture. A `surface-container-highest` element sitting on a `surface` background provides all the "lift" needed without a single shadow.

### Ambient Shadows
If a component must float (e.g., a modal or dropdown), use an **Ambient Shadow**:
*   **Color:** `on-background` (`#73796c`) at 6% opacity.
*   **Blur:** `40px` to `60px`.
*   **Spread:** `-10px`.
*   *Note: Never use pure black (#000) for shadows; it "muddies" the dark industrial palette.*

### The Ghost Border Fallback
If accessibility requires a container boundary, use a **Ghost Border**:
*   **Token:** `outline-variant` (`#4F4634`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Gradient (Primary to Primary-Container), `rounded-DEFAULT` (`0`) (0.25rem). Text: `on-primary` (`#402D00`) Bold. No border.
*   **Secondary:** `surface-container-highest` background. Subtle `outline-variant` Ghost Border.
*   **Tertiary:** Text-only in `primary`. Interaction state: 10% `primary` background fill on hover.

### Input Fields
*   **Base:** `surface-container-lowest` background. 
*   **State:** On focus, the bottom edge gains a 2px `primary` (molten gold) highlight. Do not wrap the entire box in a gold border.
*   **Typography:** Labels must be `label-md` in `on-surface-variant`.

### Cards & Lists
*   **The Divider Ban:** Never use horizontal lines to separate list items. Use `1.4rem` (`spacing-4`) of vertical padding and a 2% background shift on hover to define the row.
*   **Physicality:** Cards should use `rounded-md` (`0`) (0.375rem) to maintain a sharp, industrial "machined" edge.

### NFC Industrial Status Chips
*   **Design:** Small, pill-shaped (`rounded-full`). 
*   **Color:** `secondary-container` (`#588241`) background with `on-secondary-container` (`#F5F5F0`) text. This muted, metallic look signifies "Industrial Ready."

---

## 6. Do's and Don'ts

### Do
*   **Use Asymmetry:** Place a large `display-lg` headline on the left and a small `body-md` paragraph offset to the right.
*   **Embrace Negative Space:** Use `spacing-20` (7rem) between major sections to let the "Dark Luxury" breathe.
*   **Use Subtle Grain:** (Design Suggestion) Apply a 3% opacity noise texture to `background` to simulate carbon fiber or industrial metal.

### Don't
*   **Don't use Rounded-XL:** Avoid overly rounded corners. High-end industrial design is about precision; stay within `DEFAULT` (`0`) (0.25rem) or `md` (`0`) (0.375rem).
*   **Don't use Pure White:** Never use #FFFFFF. Use `electric-white` (`#F5F5F0`) to maintain the premium, slightly warm "gallery" feel.
*   **Don't Over-Gold:** Use the `primary` (molten gold) as a surgical tool—for CTAs, active states, and accents only. Overusing it turns "luxury" into "gaudy."

---

## 7. Spacing Scale
Consistency in breathing room is what separates "Industrial Luxury" from "Dark Mode Template."
*   **Micro-spacing (1, 2, 3):** For internal component padding (buttons, inputs).
*   **Macro-spacing (10, 16, 20):** For section gaps and hero-to-body transitions. 
*   **Strict Rule:** All vertical margins must be multiples of `spacing-2` (0.7rem) to maintain a mathematical rhythm.