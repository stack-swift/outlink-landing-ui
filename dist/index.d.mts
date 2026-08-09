import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface SocialLink {
    id?: string;
    platform: string;
    url: string;
    icon: string;
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
type LayoutSectionKey = "header" | "bio" | "social_block" | "voice_note" | "cta_block" | "gallery" | "branding";
interface CTACardStyle {
    type: "solid" | "gradient" | "image" | "video";
    background_color?: string | null;
    background_gradient?: {
        start: string;
        end: string;
    } | null;
    background_image?: string | null;
    background_video?: string | null;
    background_video_poster_url?: string | null;
    logo_icon?: string | null;
    logo_name?: string | null;
    logo_color?: string | null;
    prefix_text?: string | null;
    brand_layout?: "wordmark" | "icon_text" | null;
    brand_text_size?: number | null;
    dashboard_glow_effect?: "none" | "soft" | "strong" | null;
    dashboard_bounce_effect?: boolean | null;
    background_fit?: "fill" | "fit";
    background_focus?: "top" | "center" | "bottom";
    countdown_badge?: {
        enabled: boolean;
        label: string;
        message?: string | null;
        duration_seconds: number;
    } | null;
}
interface CTACardStyle {
    type: "solid" | "gradient" | "image" | "video";
    size?: "small" | "standard" | "large" | null;
    background_color?: string | null;
    background_gradient?: {
        start: string;
        end: string;
    } | null;
    background_image?: string | null;
    background_video?: string | null;
    background_video_poster_url?: string | null;
    logo_icon?: string | null;
    logo_name?: string | null;
    logo_color?: string | null;
    prefix_text?: string | null;
    brand_layout?: "wordmark" | "icon_text" | null;
    brand_text_size?: number | null;
    dashboard_glow_effect?: "none" | "soft" | "strong" | null;
    dashboard_bounce_effect?: boolean | null;
    background_fit?: "fill" | "fit";
    background_focus?: "top" | "center" | "bottom";
    countdown_badge?: {
        enabled: boolean;
        label: string;
        message?: string | null;
        duration_seconds: number;
    } | null;
}
type SectionSpacing = "tight" | "normal" | "relaxed";
interface LandingPageSettings {
    id: string;
    link_id: string;
    avatar_url: string | null;
    /** Optional short header video clip (MP4/WebM) that can play in the hero area. */
    header_video_url?: string | null;
    /** Poster thumbnail (WebP) for the header video (for instant load/LCP). */
    header_video_poster_url?: string | null;
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
    gallery_images?: string[];
    layout_sections?: LayoutSectionKey[];
    section_spacing?: Partial<Record<LayoutSectionKey, SectionSpacing>>;
    verified_badge: boolean;
    verified_badge_style: "chip" | "solid";
    show_active_now?: boolean;
    show_location?: boolean;
    location_text?: string | null;
    show_response_time?: boolean;
    response_time_text?: string | null;
    show_follower_count: boolean;
    follower_count: number;
    show_domain_handle: boolean;
    profile_display_mode: "full" | "avatar" | "video";
    voice_note_url: string | null;
    auto_redirect_enabled?: boolean;
    auto_redirect_delay_seconds?: number;
    auto_redirect_cta_id?: string | null;
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
    visitorLocationLabel?: string | null;
}
declare function LandingPageViewer({ link, settings, onButtonClick, isPreview, isFreePlan, visitorLocationLabel, }: LandingPageViewerProps): react_jsx_runtime.JSX.Element;

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
    /** When set, "I'm 18+" is rendered as a native <a target="_blank"> so in-app browsers may open in system browser */
    confirmHref?: string;
    confirmTargetBlank?: boolean;
    children: React.ReactNode;
}
declare function AgeConfirmationModal({ isOpen, onConfirm, onCancel, confirmHref, confirmTargetBlank, children, }: AgeConfirmationModalProps): react_jsx_runtime.JSX.Element;

export { AgeConfirmationModal, type AgeConfirmationModalProps, type CTACard, type CTACardStyle, CTACardWithMechanisms, type LandingPageSettings, LandingPageViewer, type LayoutSectionKey, type Link, ModernAudioPlayer, type SectionSpacing, type SocialLink };
