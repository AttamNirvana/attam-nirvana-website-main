/**
 * Theme Design Tokens
 * Centralized constants for maintaining consistency across the application.
 * Follow these tokens to ensure long-term maintainability and design coherence.
 */

// ============================================================================
// COLOR PALETTE - Monochrome Purple Theme
// ============================================================================

export const COLORS = {
  // Primary color scale (based on #6e1fd2)
  PRIMARY: '#6e1fd2',
  PRIMARY_DARK: '#5a18b3',
  PRIMARY_DARKER: '#4a1495',
  PRIMARY_DARKEST: '#3a0f7a',
  PRIMARY_LIGHT: '#8844e2',
  PRIMARY_LIGHTER: '#a366ea',
  
  // Text colors for dark backgrounds
  TEXT_WHITE: 'rgb(255 255 255)',
  TEXT_WHITE_90: 'rgb(255 255 255 / 0.9)',
  TEXT_WHITE_80: 'rgb(255 255 255 / 0.8)',
  TEXT_WHITE_70: 'rgb(255 255 255 / 0.7)',
  TEXT_WHITE_60: 'rgb(255 255 255 / 0.6)',
  
  // Text colors for light backgrounds
  TEXT_PRIMARY: '#1a0033',
  TEXT_PRIMARY_90: 'rgb(26 0 51 / 0.9)',
  TEXT_PRIMARY_80: 'rgb(26 0 51 / 0.8)',
  TEXT_PRIMARY_70: 'rgb(26 0 51 / 0.7)',
  
  // Background colors
  BG_WHITE: '#ffffff',
  BG_PRIMARY: '#6e1fd2',
  BG_PRIMARY_DARK: '#5a18b3',
  
  // Border colors
  BORDER_PRIMARY_20: 'rgb(110 31 210 / 0.2)',
  BORDER_PRIMARY_40: 'rgb(110 31 210 / 0.4)',
  BORDER_WHITE_20: 'rgb(255 255 255 / 0.2)',
  BORDER_WHITE_40: 'rgb(255 255 255 / 0.4)',
} as const;

// ============================================================================
// SPACING SCALE - 8px Grid System
// ============================================================================

export const SPACING = {
  // Base unit: 4px (Tailwind: 1)
  XS: '4px',      // 1
  SM: '8px',      // 2
  MD: '12px',     // 3
  BASE: '16px',   // 4
  LG: '24px',     // 6
  XL: '32px',     // 8
  '2XL': '48px',  // 12
  '3XL': '64px',  // 16
  '4XL': '96px',  // 24
  '5XL': '128px', // 32
  
  // Section spacing (mobile → desktop with 0.5x ratio)
  SECTION_MOBILE: '48px',   // py-12
  SECTION_TABLET: '64px',   // py-16
  SECTION_DESKTOP: '96px',  // py-24
  SECTION_LARGE: '128px',   // py-32
  
  // Content spacing
  CONTENT_MOBILE: '24px',   // gap-6
  CONTENT_TABLET: '32px',   // gap-8
  CONTENT_DESKTOP: '48px',  // gap-12
} as const;

// ============================================================================
// ANIMATION DURATIONS
// ============================================================================

export const DURATION = {
  INSTANT: '150ms',
  FAST: '300ms',
  NORMAL: '500ms',
  SLOW: '700ms',
  SLOWER: '1000ms',
} as const;

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

export const EASING = {
  DEFAULT: 'ease-out',
  IN: 'ease-in',
  OUT: 'ease-out',
  IN_OUT: 'ease-in-out',
  SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
  BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// ============================================================================
// TRANSITIONS - Predefined Combinations
// ============================================================================

export const TRANSITIONS = {
  // For interactive elements (buttons, links)
  INTERACTIVE: `all ${DURATION.FAST} ${EASING.DEFAULT}`,
  
  // For cards and containers
  CARD: `all ${DURATION.NORMAL} ${EASING.DEFAULT}`,
  
  // For subtle hover effects
  SUBTLE: `all ${DURATION.FAST} ${EASING.SMOOTH}`,
  
  // For layout changes
  LAYOUT: `all ${DURATION.SLOW} ${EASING.SMOOTH}`,
} as const;

// ============================================================================
// SCALE TRANSFORMS
// ============================================================================

export const SCALE = {
  HOVER: 1.02,
  ACTIVE: 0.98,
  SUBTLE: 0.99,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const Z_INDEX = {
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
} as const;

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================

export const FONT_FAMILY = {
  HEADING: 'Poppins, sans-serif',
  BODY: 'Inter, sans-serif',
} as const;

export const FONT_WEIGHT = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  EXTRABOLD: 800,
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Create a CSS custom property reference
 * @param name - The CSS variable name
 * @returns CSS variable reference string
 */
export const cssVar = (name: string) => `var(--${name})`;

/**
 * Create an RGB color with opacity
 * @param rgb - RGB values as string (e.g., "110 31 210")
 * @param opacity - Opacity value (0-1)
 * @returns RGB color string with opacity
 */
export const withOpacity = (rgb: string, opacity: number) => 
  `rgb(${rgb} / ${opacity})`;
