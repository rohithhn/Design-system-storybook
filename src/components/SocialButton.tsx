import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button'; // Leveraging the base button styles
import { Icon } from './Icons';

type SocialBrand = 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribbble';
type SocialTheme = 'brand' | 'color' | 'gray';

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    brand: SocialBrand;
    theme?: SocialTheme;
    supportingText?: boolean; // If true, shows "Sign in with [Brand]"
}

// Brand Icons
const Icons = {
    google: (
        <Icon>
            <path d="M23.49 12.275c0-.85-.075-1.67-.22-2.455H12v4.64h6.435a5.505 5.505 0 0 1-2.385 3.61v2.99h3.86c2.26-2.08 3.56-5.145 3.56-8.785Z" fill="#4285F4" />
            <path d="M12 24c3.235 0 5.95-1.075 7.93-2.915l-3.86-2.99c-1.07.72-2.44 1.15-4.07 1.15-3.125 0-5.77-2.115-6.72-4.965H1.36v3.13A11.996 11.996 0 0 0 12 24Z" fill="#34A853" />
            <path d="M5.28 14.28A7.2 7.2 0 0 1 4.95 12c0-.795.135-1.56.38-2.28V6.59H1.36A11.996 11.996 0 0 0 0 12c0 1.935.465 3.77 1.28 5.41l3.99-3.13Z" fill="#FBBC05" />
            <path d="M12 4.75c1.76 0 3.34.605 4.585 1.795l3.435-3.435C17.945 1.215 15.23 0 12 0 7.42 0 3.39 2.595 1.36 6.59l3.99 3.13c.945-2.85 3.59-4.97 6.64-4.97Z" fill="#EA4335" />
        </Icon>
    ),
    facebook: (
        <Icon fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-7H7.9V12h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v7C18.34 21.13 22 17 22 12Z" />
        </Icon>
    ),
    apple: (
        <Icon fill="currentColor">
            <path d="M16.98 13.91c.09 2.65 2.34 3.54 2.36 3.55-.02.06-.37 1.26-1.21 2.5-.73 1.07-1.49 2.14-2.69 2.16-1.18.02-1.56-.7-2.91-.7-1.36 0-1.78.68-2.92.72-1.17.04-2.07-1.17-2.82-2.26-1.54-2.22-2.71-5.63-1.14-8.36.78-1.36 2.18-2.22 3.7-2.25 1.15-.02 2.24.78 2.94.78.7 0 2.01-.96 3.38-.82.58.02 2.21.23 3.25 1.76-.08.05-1.94 1.13-1.94 3.22ZM12.75 4.09c.62-.75 1.04-1.79.93-2.83-.9.04-1.99.6-2.63 1.35-.58.67-1.08 1.76-.94 2.77.99.08 2.02-.54 2.64-1.29Z" />
        </Icon>
    ),
    twitter: (
        <Icon fill="currentColor">
            <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0 1.27 5.49A4.09 4.09 0 0 1 1.9 9.4v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.18 11.63 11.63 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68v-.53A8.35 8.35 0 0 0 22 5.8Z" />
        </Icon>
    ),
    figma: (
        <Icon fill="none">
            <path d="M8.25 21a3.75 3.75 0 1 1 0-7.5h3.75v3.75A3.75 3.75 0 0 1 8.25 21Z" fill="#0ACF83" />
            <path d="M8.25 13.5a3.75 3.75 0 1 1 0-7.5h3.75v7.5H8.25Z" fill="#A259FF" />
            <path d="M8.25 7.5a3.75 3.75 0 1 1 0-7.5h3.75v7.5H8.25Z" fill="#F24E1E" />
            <path d="M15.75 7.5a3.75 3.75 0 1 1 0-7.5h-3.75v7.5h3.75Z" fill="#FF7262" />
            <path d="M21.75 13.5a3.75 3.75 0 1 1-3.75-3.75h3.75v3.75Z" fill="#1ABCFE" />
        </Icon>
    ),
    dribbble: (
        <Icon fill="currentColor">
            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.13-1.78 4.54-3.112 4.76-3.362ZM12 3.475c2.47 0 4.5 1.045 6.27 2.158a25.823 25.823 0 0 1-5.11 3.511c-.266-.82-.676-2.028-1.272-3.708 1.408-.68 3.09-1.95 4.762-2.922L12 3.475Zm-4.75 1.258c.708 2.05 1.295 3.657 1.64 4.675C6 9.41 4.248 9.53 3.6 9.57a8.47 8.47 0 0 1 3.65-4.837Zm-3.79 7.294c.04-.005 1.01-.126 3.465-.126 1.75 0 3.785.12 5.093.425.295 1.256.405 2.652.128 4.07-.63.08-1.42.12-2.145.12-2.145 0-4.305-.48-5.83-1.345a8.495 8.495 0 0 1-.71-3.144Zm1.13 4.25c1.675 1.025 3.965 1.55 6.275 1.55.77 0 1.595-.125 2.22-.315-.65 2.29-2.31 3.96-4.524 4.62-1.996-1.12-3.355-3.565-3.97-5.855Zm10.035 4.095c.575-1.75.76-3.49.385-5.06 2.44-.06 4.635-.015 5.5.075-.47 2.375-2.03 4.295-4.225 5.255-.545-.1-1.11-.19-1.66-.27Z" clipRule="evenodd" />
        </Icon>
    )
};

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
    ({ className, brand, theme = 'brand', supportingText = false, ...props }, ref) => {

        // Map theme to button variant content
        // 'brand' for social buttons usually means specific brand colors, 
        // but Figma shows mapping to Design System variants often.
        // Based on inspection:
        // Theme=Color -> likely 'secondary' or 'secondary-brand' logic
        // We will implement custom styles for social buttons to match Figma exactly if needed
        // or map to our robust Button variants.

        // const isBrandTheme = theme === 'brand'; // Unused


        let variantClass = "";
        if (theme === 'brand') {
            if (brand === 'facebook') variantClass = "bg-[#1877F2] text-white hover:bg-[#1864cc] border-transparent";
            if (brand === 'twitter') variantClass = "bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] border-transparent";
            if (brand === 'apple') variantClass = "bg-black text-white hover:bg-gray-800 border-transparent";
            if (brand === 'dribbble') variantClass = "bg-[#EA4C89] text-white hover:bg-[#d9447e] border-transparent";
            // Google usually doesn't have a 'brand' solid background in most design systems, keeps white bg, but if requested:
            if (brand === 'google') variantClass = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
        } else if (theme === 'color') {
            variantClass = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
        } else if (theme === 'gray') {
            variantClass = "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200";
        }

        return (
            <Button
                ref={ref}
                className={cn(variantClass, className)}
                startIcon={Icons[brand]}
                iconOnly={!supportingText}
                {...props}
            >
                {supportingText && `Sign in with ${brand.charAt(0).toUpperCase() + brand.slice(1)}`}
            </Button>
        );
    }
);
SocialButton.displayName = "SocialButton";

export { SocialButton };
