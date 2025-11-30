// src/types.ts
export interface SocialLink {
    id?: string;
    platform: string;
    url: string;
    icon: string;
  }
  
  export interface CTACardStyle {
    type: "solid" | "gradient" | "image" | "video";
    background_color?: string | null;
    background_gradient?: { start: string; end: string } | null;
    background_image?: string | null;
    background_video?: string | null;
    logo_icon?: string | null;
    logo_name?: string | null;
    logo_color?: string | null;
    prefix_text?: string | null;
  }
  
  export interface CTACard {
    id: string;
    title: string;
    description?: string | null;
    url: string;
    order: number;
    open_in_new_tab?: boolean;
    style: CTACardStyle;
    require_18plus?: boolean;
    ctr_mechanisms?: any; // keep loose for now
  }
  
  export interface LandingPageSettings {
    id: string;
    link_id: string;
    avatar_url: string | null;
    display_name: string | null;
    bio: string | null;
    background_color: string;
    background_gradient: { start: string; end: string };
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
    profile_display_mode: "full" | "avatar";
    voice_note_url: string | null;
  }
  
  export interface Link {
    id: string;
    title: string | null;
    description: string | null;
    destination_url: string | null;
    domain?: string | null;
    path?: string | null;
  }