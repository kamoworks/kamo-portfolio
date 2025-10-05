"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply class after hydration to avoid mismatch
    document.body.className = "antialiased";
  }, []);

  // Suppress hydration warning for body tag (browser extensions add attributes)
  return <body suppressHydrationWarning>{children}</body>;
}
