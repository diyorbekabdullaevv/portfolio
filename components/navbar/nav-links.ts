export type NavLink = {
	href: string;
	label: string;
};

// Single source of truth for the site's primary navigation, consumed by both
// the desktop menu (nav-menu.tsx) and the mobile drawer (mobile-nav.tsx).
export const navLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];
