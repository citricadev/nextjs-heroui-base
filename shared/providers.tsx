"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
		<HeroUIProvider locale="es-ES">
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</HeroUIProvider>
	);
}
