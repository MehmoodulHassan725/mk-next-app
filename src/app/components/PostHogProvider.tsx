"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { Suspense, useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return 
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      ui_host: "https://eu.posthog.com",
      person_profiles: "always",
      capture_pageview: false, // We capture pageviews manually using the usePathname hook
      capture_pageleave: true,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense>{children}</Suspense>
    </PHProvider>
  );
}
