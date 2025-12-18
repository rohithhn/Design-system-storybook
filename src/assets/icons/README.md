# Text Editor Icons - Figma Asset Integration

## Current Status
The text editor icons are currently using **Lucide React** as a temporary solution due to Figma MCP configuration limitations.

## Required Figma Assets
The following icons need to be exported from Figma and placed in `src/assets/icons/`:

### Icon List (from Figma node 9291:551743)
1. `bold.svg` - Bold text formatting
2. `italic.svg` - Italic text formatting
3. `underline.svg` - Underline text formatting
4. `dot-points.svg` - Bullet list
5. `left-align.svg` - Left text alignment
6. `center-align.svg` - Center text alignment
7. `right-align.svg` - Right text alignment
8. `link.svg` - Insert hyperlink
9. `insert-image.svg` - Insert image
10. `insert-video.svg` - Insert video
11. `attach-file.svg` - Attach file
12. `insert-code.svg` - Insert code block
13. `color-picker.svg` - Color picker
14. `generate.svg` - AI generate
15. `more-options.svg` - More options menu

## How to Export from Figma
1. Open the Figma file in Figma Desktop App
2. Navigate to the Text Editor Icons frame (node 9291:551743)
3. Select each icon variant
4. Right-click → Export → SVG
5. Save all SVGs to `src/assets/icons/`

## Integration Steps
Once SVGs are available:
1. Place all SVG files in `src/assets/icons/`
2. Update `TextEditorIcon.tsx` to import SVG files instead of Lucide components
3. Remove `lucide-react` dependency
4. Test all icon variants

## Temporary Solution
Currently using Lucide React icons that closely match the Figma designs:
- Professional, consistent design
- Proper accessibility
- Tree-shakeable imports
- **Should be replaced with actual Figma assets**
