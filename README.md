# Percy Demo - Next.js

A simple Next.js application to demonstrate Percy visual regression testing workflow with GitHub Actions.

## Features

- **Page 1**: Displays 5 different shades of blue boxes
- **Page 2**: Displays 5 different shades of red boxes
- **Navigation**: Simple navigation between the two pages
- **Percy Integration**: Visual regression testing configured for both pages
- **Responsive Design**: Tests at multiple screen widths (375px, 768px, 1280px)

## Pages

### Page 1 (/)

- Heading: "Page 1"
- 5 blue boxes with varying shades (blue-100 to blue-500)
- Navigation button to Page 2

### Page 2 (/page2)

- Heading: "Page 2"
- 5 red boxes with varying shades (red-100 to red-500)
- Navigation button back to Page 1

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd chain-calculator-next
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Percy Visual Testing

### Configuration Files

- **`snapshots.yml`**: Defines which pages to snapshot and at what screen widths
- **`.github/workflows/percy.yml`**: GitHub Actions workflow for automated visual testing

### Workflow

The Percy workflow runs automatically on:

- **Pull Requests**: Creates visual diffs comparing the PR branch against main
- **Main Branch Pushes**: Updates the visual baseline for future comparisons

### Setting Up Percy

1. Create a Percy project at https://percy.io
2. Add your `PERCY_TOKEN` as a GitHub secret in your repository settings
3. Push changes or create a PR to trigger the workflow

### Percy Snapshots

The configuration captures:

- Page 1 at mobile (375px), tablet (768px), and desktop (1280px) widths
- Page 2 at mobile (375px), tablet (768px), and desktop (1280px) widths

## Development

### Built With

- **Next.js 15.4.5** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Percy** - Visual regression testing

### Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx          # Page 1 - Blue boxes
│   └── page2/
│       └── page.tsx      # Page 2 - Red boxes
.github/
└── workflows/
    └── percy.yml         # Percy CI workflow
snapshots.yml             # Percy snapshot configuration
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run percy:snapshot` - Run Percy snapshots locally (requires local server)

## Testing Visual Changes

1. Make changes to the UI (colors, layout, etc.)
2. Create a pull request
3. Percy will automatically capture screenshots and compare them
4. Review visual diffs in the Percy dashboard
5. Approve or reject changes as needed

## Example Visual Changes to Test

Try making these changes to see Percy in action:

- Change box colors in Page 1 from blue to green
- Modify the heading text
- Adjust spacing or layout
- Add or remove boxes
- Change button colors or styles

Each change will be captured and compared visually, making it easy to catch unintended UI regressions.
