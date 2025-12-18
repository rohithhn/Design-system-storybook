import React from 'react';
import { Button } from "./components/Button";

import { SwatchCard } from "./components/SwatchCard";
import { Input } from "./components/Input";
import { ActivityIcon, HeartIcon, LinkIcon } from "./components/Icons";
import { CloseButton } from "./components/CloseButton";
import { SocialButton } from "./components/SocialButton";
import { AppStoreBadge } from "./components/AppStoreBadge";
import { ButtonGroup } from "./components/ButtonGroup";
import { Badge } from "./components/Badge";
import { Tag } from "./components/Tag";
import { Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from "./components/Dropdown";
import { Icon } from "./components/Icons";
import { Textarea } from "./components/Textarea";
import { VerificationCodeInput } from "./components/VerificationCodeInput";
import { MegaInputBase } from "./components/MegaInputBase";

import { ButtonPlayground } from './playgrounds/ButtonPlayground';
import { InputPlayground } from './playgrounds/InputPlayground';
import { TextareaPlayground } from './playgrounds/TextareaPlayground';
import { VerificationCodePlayground } from './playgrounds/VerificationCodePlayground';
import { MegaInputPlayground } from './playgrounds/MegaInputPlayground';
import { TagPlayground } from './playgrounds/TagPlayground';
import { BadgePlayground } from './playgrounds/BadgePlayground';
import { TextEditorPlayground } from './playgrounds/TextEditorPlayground';
import { TogglePlayground } from './playgrounds/TogglePlayground';

function App() {
  const [isDark, setIsDark] = React.useState(false);

  // Toggle theme class on html element
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-bg-primary p-8 transition-colors duration-300">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-display-lg font-semibold text-text-primary mb-4">Enkrypt AI Design System</h1>
          <p className="text-text-tertiary">Figma Implementation Showcase & Playgrounds</p>
        </div>
        <Button
          variant="secondary"
          onClick={() => setIsDark(!isDark)}
          startIcon={isDark ? <span>🌞</span> : <span>🌙</span>}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>

      <main className="space-y-16">
        {/* Colors Section */}
        <section className="space-y-6">
          <h2 className="text-display-xs font-semibold border-b border-border-secondary pb-2">Colors</h2>
          {/* Swatch Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <SwatchCard name="Brand Primary" value="Brand 600" colorClass="bg-brand-600" />
            <SwatchCard name="Error" value="Error 500" colorClass="bg-error-500" />
            <SwatchCard name="Success" value="Success 500" colorClass="bg-success-500" />
            <SwatchCard name="Orange" value="#FF7500" style={{ backgroundColor: '#FF7500' }} />
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-display-xs font-semibold border-b border-gray-200 pb-2">Buttons</h2>
          <ButtonPlayground />

          <div className="space-y-4 pt-4 border-t border-border-secondary">
            <h3 className="text-text-sm font-medium text-text-tertiary uppercase">Other Button Types</h3>
            <div className="flex flex-wrap gap-4">
              <CloseButton size="md" />
              <SocialButton brand="google" supportingText />
              <ButtonGroup>
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-6">
          <h2 className="text-display-xs font-semibold border-b border-gray-200 pb-2">Inputs & Forms</h2>
          <div className="space-y-12">
            <InputPlayground />
            <TextareaPlayground />
            <VerificationCodePlayground />
            <MegaInputPlayground />
            <TextEditorPlayground />
            <TogglePlayground />
          </div>
        </section>

        {/* Data Display Section */}
        <section className="space-y-6">
          <h2 className="text-display-xs font-semibold border-b border-gray-200 pb-2">Data Display</h2>
          <div className="space-y-12">
            <BadgePlayground />
            <TagPlayground />
          </div>

          <div className="space-y-4 pt-4 border-t border-border-secondary">
            <h3 className="text-text-sm font-medium text-text-tertiary uppercase">Other Components</h3>
            <div className="flex gap-4 p-8 bg-gray-50 rounded-lg min-h-[200px] items-start dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Dropdown
                trigger={<Button variant="secondary" endIcon={<Icon><path d="M6 9l6 6 6-6" /></Icon>}>Dropdown Menu</Button>}
              >
                <DropdownHeader>My Account</DropdownHeader>
                <DropdownItem label="Profile" shortcut="⌘P" />
                <DropdownDivider />
                <DropdownItem label="Logout" disabled />
              </Dropdown>
              <AppStoreBadge store="app-store" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
