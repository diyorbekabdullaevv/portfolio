import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	// Pages set only their own name; the template appends the site identity.
	title: { default: siteTitle, template: `%s | ${siteName}` },
	description: siteDescription,

	openGraph: {
		type: 'website',
		url: '/',
		siteName,
		title: siteTitle,
		description: siteDescription,
	},

	twitter: {
		card: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
	},

	manifest: '/site.webmanifest',

	icons: {
		icon: [
			// Preferred by modern browsers. Solid red reads on light and dark tab bars alike.
			{ url: '/icon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
			{ url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-scroll-behavior='smooth' suppressHydrationWarning>
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem={false}
					disableTransitionOnChange
				>
					<div className='min-h-screen flex w-full flex-col'>
						<Navbar />
						{/* flex column so a page can claim the leftover height with
					    flex-1 and centre itself in it (see app/page.tsx) */}
					<main className='flex flex-1 flex-col'>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
