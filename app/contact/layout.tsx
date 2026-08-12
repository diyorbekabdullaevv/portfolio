import type { Metadata } from 'next';

// The page itself is a client component (it owns the form state), so its
// metadata lives here.
export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Get in touch with Diyorbek Abdullaev about internships, projects, and collaboration.',
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
