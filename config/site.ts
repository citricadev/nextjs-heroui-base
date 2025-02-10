export type SiteConfig = typeof siteConfig;
import { Home, ClipboardCheck, Settings, Users, Bell, ShieldCheck } from "lucide-react"

export const siteConfig = {
	name: "Proyecto Web",
	description: "Descripción Proyecto Web",
	sidebarItems: [
		{
			title: "Panel",
			icon: Home,
			href: "/panel",
		},
		{
			title: "Acciones requeridas",
			icon: ClipboardCheck,
			href: "/acciones",
		},
		{
			title: "Configuración de la app",
			icon: Settings,
			subItems: [
				{
					title: "Básica",
					href: "/config/basica",
				},
				{
					title: "Avanzada",
					href: "/config/avanzada",
				},
				{
					title: "Mejorada",
					href: "/config/mejorada",
				},
			],
		},
		{
			title: "Roles de la app",
			icon: Users,
			href: "/roles",
		},
		{
			title: "Alertas",
			icon: Bell,
			href: "/alertas",
		},
		{
			title: "Revisión de la app",
			icon: ShieldCheck,
			href: "/revision",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
