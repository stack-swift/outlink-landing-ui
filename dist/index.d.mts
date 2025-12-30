import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface SocialLink {
    id?: string;
    platform: string;
    url: string;
    icon: string;
}
interface CTACardStyle {
    type: "solid" | "gradient" | "image" | "video";
    background_color?: string | null;
    background_gradient?: {
        start: string;
        end: string;
    } | null;
    background_image?: string | null;
    background_video?: string | null;
    logo_icon?: string | null;
    logo_name?: string | null;
    logo_color?: string | null;
    prefix_text?: string | null;
    background_fit?: "fill" | "fit";
    background_focus?: "top" | "center" | "bottom";
}
interface CTACard {
    id: string;
    title: string;
    description?: string | null;
    url: string;
    order: number;
    open_in_new_tab?: boolean;
    style: CTACardStyle;
    require_18plus?: boolean;
    ctr_mechanisms?: any;
}
interface LandingPageSettings {
    id: string;
    link_id: string;
    avatar_url: string | null;
    /** Optional short header video clip (MP4/WebM) that can play in the hero area. */
    header_video_url?: string | null;
    /** Where to focus the header video inside the hero area. */
    header_video_focus?: "top" | "center" | "bottom";
    display_name: string | null;
    bio: string | null;
    background_color: string;
    background_gradient: {
        start: string;
        end: string;
    };
    theme_mode: "light" | "dark";
    button_style: "gradient" | "outline" | "solid" | "flat";
    button_color: string;
    social_links: SocialLink[];
    cta_cards: CTACard[];
    verified_badge: boolean;
    verified_badge_style: "chip" | "solid";
    show_follower_count: boolean;
    follower_count: number;
    show_domain_handle: boolean;
    profile_display_mode: "full" | "avatar" | "video";
    voice_note_url: string | null;
}
interface Link {
    id: string;
    title: string | null;
    description: string | null;
    destination_url: string | null;
    domain?: string | null;
    path?: string | null;
    link_type?: "whitehat" | "greyhat" | "blackhat" | null;
}

interface LandingPageViewerProps {
    link: Link;
    settings: LandingPageSettings;
    onButtonClick?: () => void;
    isPreview?: boolean;
    isFreePlan?: boolean;
}
declare function LandingPageViewer({ link, settings, onButtonClick, isPreview, isFreePlan, }: LandingPageViewerProps): react_jsx_runtime.JSX.Element;

interface ModernAudioPlayerProps {
    src: string;
    theme?: 'light' | 'dark';
}
declare function ModernAudioPlayer({ src, theme }: ModernAudioPlayerProps): react_jsx_runtime.JSX.Element;

interface CTACardWithMechanismsProps {
    card: CTACard;
    onReveal: () => void;
    children?: React.ReactNode;
}
declare function CTACardWithMechanisms({ card, onReveal, children, }: CTACardWithMechanismsProps): react_jsx_runtime.JSX.Element;

interface AgeConfirmationModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    children: React.ReactNode;
}
declare function AgeConfirmationModal({ isOpen, onConfirm, onCancel, children, }: AgeConfirmationModalProps): react_jsx_runtime.JSX.Element;

export { AgeConfirmationModal, type CTACard, type CTACardStyle, CTACardWithMechanisms, type LandingPageSettings, LandingPageViewer, type Link, ModernAudioPlayer, type SocialLink };
