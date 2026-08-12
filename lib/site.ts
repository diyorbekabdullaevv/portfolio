// Single source of truth for site-wide links and copy. Anything referenced from
// more than one component belongs here so it only ever has to be updated once.

export const siteUrl = 'https://diyorbekabdullaevv.vercel.app';

export const siteName = 'Diyorbek Abdullaev';

export const siteTitle = 'Diyorbek Abdullaev | Game Developer';

export const siteDescription =
	'Portfolio of Diyorbek Abdullaev, a Computer Science (AI) student at MDIS Tashkent passionate about software engineering, Unity game development, and building interactive applications.';

// Bare host, used for display (e.g. on the Open Graph image).
export const siteDomain = siteUrl.replace(/^https?:\/\//, '');

export const cvUrl =
	'https://drive.google.com/file/d/1z61xpH9QoZSRDvCd5mxkGlr99bMp9hh0/view?usp=sharing';

// The label doubles as the icon key in components/social-links.tsx, so the
// union keeps the icon map exhaustive at compile time.
export type SocialLabel = 'LinkedIn' | 'GitHub' | 'Telegram';

export type SocialLink = {
	href: string;
	label: SocialLabel;
};

export const socialLinks: SocialLink[] = [
	{
		href: 'https://www.linkedin.com/in/diyorbekabdullaevv/',
		label: 'LinkedIn',
	},
	{ href: 'https://github.com/diyorbekabdullaevv', label: 'GitHub' },
	{ href: 'https://t.me/diyorbekabdullaevv', label: 'Telegram' },
];
