import { navLinks } from '@/components/navbar/nav-links';
import { siteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return navLinks.map(({ href }) => ({
		url: `${siteUrl}${href === '/' ? '' : href}`,
		priority: href === '/' ? 1 : 0.8,
	}));
}
