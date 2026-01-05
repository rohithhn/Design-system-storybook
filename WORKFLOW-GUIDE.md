# Design System Workflow Guide

A complete guide for creating components from Figma, managing with Git, and auto-deploying to Chromatic.

---

## 🎨 Part 1: Creating Components from Figma

### Prerequisites
- [Figma Desktop App](https://www.figma.com/downloads/) installed
- Figma MCP Server enabled (Dev Mode → MCP Server toggle)
- Node.js 18+ installed

### Steps

1. **Enable Figma MCP Server**
   - Open Figma Desktop App
   - Go to any file → Enable Dev Mode
   - Toggle on "MCP Server" in the Dev Mode panel

2. **Extract Design Tokens**
   - Copy colors, typography, and spacing from Figma
   - Add to `src/index.css` as CSS variables:
   ```css
   :root {
     --color-primary: #6366f1;
     --color-secondary: #8b5cf6;
     --font-family: 'Inter', sans-serif;
     --spacing-4: 1rem;
   }
   ```

3. **Create Component File**
   ```bash
   # Component structure
   src/components/
   ├── Button.tsx          # Component logic
   ├── Button.stories.tsx  # Storybook stories
   └── Button.css          # Component styles (optional)
   ```

4. **Write Component Code**
   ```tsx
   // src/components/Button.tsx
   import React from 'react';

   interface ButtonProps {
     variant?: 'primary' | 'secondary';
     children: React.ReactNode;
     onClick?: () => void;
   }

   export const Button: React.FC<ButtonProps> = ({
     variant = 'primary',
     children,
     onClick
   }) => {
     return (
       <button className={`btn btn-${variant}`} onClick={onClick}>
         {children}
       </button>
     );
   };
   ```

5. **Create Storybook Story**
   ```tsx
   // src/components/Button.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { Button } from './Button';

   const meta: Meta<typeof Button> = {
     title: 'Components/Button',
     component: Button,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Button>;

   export const Primary: Story = {
     args: {
       variant: 'primary',
       children: 'Click me',
     },
   };
   ```

6. **Test Locally**
   ```bash
   npm run storybook
   # Opens at http://localhost:6006
   ```

---

## 📦 Part 2: Git Repository Setup

### Initial Setup (One-time)

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `Design-system-storybook` (or your preferred name)
   - Keep it private or public
   - **Don't** initialize with README

3. **Link Remote Repository**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

### Daily Workflow

```bash
# After making changes
git add .
git commit -m "feat: add new Button variant"
git push
```

---

## 🚀 Part 3: Chromatic Setup

### Initial Setup (One-time)

1. **Install Chromatic**
   ```bash
   npm install --save-dev chromatic
   ```

2. **Get Project Token**
   - Go to https://www.chromatic.com/
   - Create account / Sign in with GitHub
   - Create new project → Link your GitHub repo
   - Copy the project token

3. **Add to package.json**
   ```json
   {
     "scripts": {
       "chromatic": "npx chromatic --project-token=YOUR_TOKEN"
     }
   }
   ```

4. **Manual Deploy (Test)**
   ```bash
   npm run chromatic
   ```

---

## ⚡ Part 4: Automatic Chromatic Deployment (CI/CD)

### Setup GitHub Actions

1. **Store Token Securely**
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: Your Chromatic project token

2. **Create Workflow File**
   
   Create `.github/workflows/chromatic.yml`:
   ```yaml
   name: 'Chromatic'

   on:
     push:
       branches:
         - main
     pull_request:
       branches:
         - main

   jobs:
     chromatic:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v4
           with:
             fetch-depth: 0

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Run Chromatic
           uses: chromaui/action@latest
           with:
             projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
             autoAcceptChanges: main
   ```

3. **Push Workflow**
   ```bash
   git add .github/workflows/chromatic.yml
   git commit -m "ci: add Chromatic auto-deploy"
   git push
   ```

### How It Works

| Event | Action |
|-------|--------|
| Push to `main` | Auto-deploys to Chromatic, auto-accepts changes |
| Pull Request | Runs visual tests, requires manual approval |

---

## 📋 Quick Reference

### Commands

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start local Storybook (port 6006) |
| `npm run chromatic` | Manual deploy to Chromatic |
| `npm run build-storybook` | Build static Storybook |

### Links

- **Local Storybook:** http://localhost:6006
- **GitHub Repo:** https://github.com/rohithhn/Design-system-storybook
- **Chromatic:** https://www.chromatic.com/builds?appId=6943d372e9a4e935684c6791

---

## ✅ Complete Workflow Summary

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     FIGMA       │────▶│    STORYBOOK    │────▶│    CHROMATIC    │
│  Design Tokens  │     │   Components    │     │  Visual Tests   │
│   Components    │     │    Stories      │     │   Hosting       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │     GITHUB      │
                        │   Version Ctrl  │
                        │   CI/CD Trigger │
                        └─────────────────┘
```

1. **Design** in Figma
2. **Build** components in Storybook
3. **Commit** to Git
4. **Push** to GitHub
5. **Auto-deploy** to Chromatic via GitHub Actions
