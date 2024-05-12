"use client";

import type { PropsWithChildren } from "react";
import { SDKProvider, type SDKProviderProps } from "@tma.js/sdk-react";

export function TmaSDKLoader({ children }: PropsWithChildren) {
  const options: SDKProviderProps = {
    acceptCustomStyles: true,
    debug: true,
  };

  return <SDKProvider {...options}>{children}</SDKProvider>;
}
