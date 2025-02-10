import "@/styles/globals.scss";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "../shared/providers";
import { Toaster } from 'react-hot-toast';
// import SupabaseProvider from './context/supabase-context' <== DESCOMENTAR PARA USAR SUPABASE
// import { AuthContextProvider } from "./context/AuthContext"; <== DESCOMENTAR PARA USAR AUTH
import Navbar from "@/shared/components/citrica-ui/organism/navbar";



export const metadata: Metadata = {
	title: {
		default: "Gáliz",
		template: `%s - Gáliz`,
	},
	description: "Productora audiovisual en Lima",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
			>
				<Toaster/>
				{/* <SupabaseProvider> */}
					{/* <AuthContextProvider> */}
						<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
						<Navbar />
							{children}
						</Providers>
					{/* </AuthContextProvider> */}
				{/* </SupabaseProvider> */}
			</body>
		</html>
	);
}
					
						
