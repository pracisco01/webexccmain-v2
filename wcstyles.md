# WebCall Styles Documentation

## Dropdown Menu Styles

### Changes Made
1. Removed background color from dropdown hover states
   - Removed `background-color: #f1f1f1` from base hover style
   - Removed `background-color: rgba(255, 255, 255, 0.1)` from mobile hover style
   - Removed `background-color: transparent` from focus/active states
2. Updated hover text color and removed underline
   - Changed text color to `#00b6e3` on hover
   - Removed underline by setting `text-decoration: none !important`
   - Applied changes consistently across all media queries
3. Fixed hover styles
   - Added `transition: color 0.3s ease` for smooth color change
   - Updated selector specificity to `#myDropdown.dropdown-content a:hover`
   - Ensured consistent hover color across all screen sizes
   - Maintained proper specificity in media queries
4. Removed hamburger menu from mobile views
   - Hidden hamburger button (`.navbar-toggle`)
   - Hidden collapsible menu (`.navbar-collapse`)
   - Hidden navigation links (`.navbar-nav`)
   - Applied to both mobile breakpoints (max-width: 768px and 480px)

### Current Hover Behavior
- All screen sizes: Text color changes to `#00b6e3` on hover with smooth transition
- No background color change
- No underline on hover
- Consistent behavior across desktop, tablet, and mobile views

### Files Affected
- `webcallstyles1.css`
- `webcallstyles2.css`

## Footer Styles

### Changes Made
1. Combined footer text into single container
2. Centered footer content
3. Split footer text into two lines
   - Copyright notice on first line
   - Policy links on second line
4. Removed "|" separators
5. Added proper spacing between lines

### Current Footer Structure
```html
<div class="footer-content">
    <p class="footer-copyright">2024 Webex Demo. All rights reserved.</p>
    <p class="footer-links">Privacy Policy Terms of Service Cookie Policy</p>
</div>
```

### Files Affected
- `webcall.html`
- `webcallstyles1.css` 