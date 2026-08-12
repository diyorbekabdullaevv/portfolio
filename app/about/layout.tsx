import type { Metadata } from 'next';

// The page itself is a client component (it animates on mount), so its
// metadata lives here.
export const metadata: Metadata = {
	title: 'About',
	description:
		'About Diyorbek Abdullaev — a Computer Science (AI) student at MDIS Tashkent learning game development, C#, and software engineering.',
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
