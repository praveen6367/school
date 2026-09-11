"use client";

import React from "react";
import { siteContent } from "../content";

export function TopBanner() {
  const { topUtilityBar } = siteContent;

  return (
    <div className="w-full bg-[#111111] text-[#E5E7EB] border-b border-[#222222] py-2 px-3 sm:px-4 text-center text-[10px] sm:text-xs font-semibold tracking-wider uppercase relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center">
        <span>{topUtilityBar.text}</span>
      </div>
    </div>
  );
}
