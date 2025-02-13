export type SiteConfig = typeof siteConfig;
import { Home, ClipboardCheck, Settings, Users, Bell, ShieldCheck } from "lucide-react"

export const siteConfig = {
	name: "Proyecto Web",
	description: "Descripción Proyecto Web",
	navLinks: [
		{
			title: "Inicio",
			href: "/",
		},
		{
			title: "Proyectos",
			href: "#proyect",
		},
		{
			title: "Panel",
			href: "/panel",
		},
	],
	sidebarItems: [
		{
			title: "Home",
			icon: "Home",
			href: "/",
		},
		{
			title: "Tareas",
			icon: "ClipboardCheck",
			href: "/panel/tareas",
		},
		{
			title: "Configuración de la app",
			icon: "Settings",
			subItems: [
				{
					title: "Básica",
					href: "/panel/config-app?type=basic",
				},
				{
					title: "Avanzada",
					href: "/panel/config-app?type=advanced",
				},
				{
					title: "Mejorada",
					href: "/panel/config-app?type=best",
				},
			],
		},
		{
			title: "Roles de la app",
			icon: "Users",
			href: "/users",
		},
		{
			title: "Alertas",
			icon: "Bell",
			href: "/alerts",
		},
		{
			title: "Seguridad",
			icon: "ShieldCheck",
			href: "/secutiry",
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
