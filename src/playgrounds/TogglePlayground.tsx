import React from 'react';
import { Toggle } from '../components/Toggle';
import { ToggleBase } from '../components/ToggleBase';

export const TogglePlayground: React.FC = () => {
    const [pressed1, setPressed1] = React.useState(false);
    const [pressed2, setPressed2] = React.useState(true);
    const [pressed3, setPressed3] = React.useState(false);
    const [pressed4, setPressed4] = React.useState(true);

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Toggle Playground</h3>

                {/* Toggle Base - No Text */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-medium text-text-tertiary mb-3">Toggle Base (No Text)</h4>
                        <div className="flex flex-wrap gap-6">
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Default / MD</p>
                                <ToggleBase
                                    type="default"
                                    size="md"
                                    pressed={pressed1}
                                    onPressedChange={setPressed1}
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Default / SM</p>
                                <ToggleBase
                                    type="default"
                                    size="sm"
                                    pressed={pressed1}
                                    onPressedChange={setPressed1}
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Slim / MD</p>
                                <ToggleBase
                                    type="slim"
                                    size="md"
                                    pressed={pressed1}
                                    onPressedChange={setPressed1}
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Slim / SM</p>
                                <ToggleBase
                                    type="slim"
                                    size="sm"
                                    pressed={pressed1}
                                    onPressedChange={setPressed1}
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Disabled</p>
                                <ToggleBase
                                    type="default"
                                    size="md"
                                    pressed={true}
                                    state="disabled"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Toggle with Text */}
                    <div>
                        <h4 className="text-sm font-medium text-text-tertiary mb-3">Toggle with Text</h4>
                        <div className="space-y-4">
                            <Toggle
                                type="default"
                                size="md"
                                text={true}
                                pressed={pressed2}
                                onPressedChange={setPressed2}
                                label="Enable notifications"
                                description="Receive email notifications for important updates"
                            />
                            <Toggle
                                type="default"
                                size="sm"
                                text={true}
                                pressed={pressed3}
                                onPressedChange={setPressed3}
                                label="Dark mode"
                                description="Use dark theme across the application"
                            />
                            <Toggle
                                type="slim"
                                size="md"
                                text={true}
                                pressed={pressed4}
                                onPressedChange={setPressed4}
                                label="Auto-save"
                                description="Automatically save changes as you work"
                            />
                            <Toggle
                                type="default"
                                size="md"
                                text={true}
                                pressed={true}
                                state="disabled"
                                label="Premium feature"
                                description="This feature is only available for premium users"
                            />
                        </div>
                    </div>

                    {/* States Demo */}
                    <div>
                        <h4 className="text-sm font-medium text-text-tertiary mb-3">States</h4>
                        <div className="flex flex-wrap gap-6">
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Default</p>
                                <ToggleBase
                                    type="default"
                                    size="md"
                                    pressed={false}
                                    state="default"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Hover</p>
                                <ToggleBase
                                    type="default"
                                    size="md"
                                    pressed={false}
                                    state="hover"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Focus</p>
                                <ToggleBase
                                    type="default"
                                    size="md"
                                    pressed={false}
                                    state="focus"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-text-tertiary">Disabled</p>
                                <ToggleBase
                                    type="default"
                                    size="md"
                                    pressed={false}
                                    state="disabled"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
