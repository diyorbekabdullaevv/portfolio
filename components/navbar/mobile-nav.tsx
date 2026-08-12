'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cvUrl } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Download, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from './nav-links';

export const MobileNav = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	// While open: lock body scroll, close on Escape, and close when the
	// viewport grows back to the desktop breakpoint (md).
	useEffect(() => {
		if (!open) return;

		document.body.style.overflow = 'hidden';

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		const desktop = window.matchMedia('(min-width: 768px)');
		const onDesktop = (e: MediaQueryListEvent) => {
			if (e.matches) setOpen(false);
		};

		window.addEventListener('keydown', onKeyDown);
		desktop.addEventListener('change', onDesktop);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeyDown);
			desktop.removeEventListener('change', onDesktop);
		};
	}, [open]);

	return (
		<>
			<Button
				variant='outline'
				size='icon'
				className='relative z-50 rounded-full shadow-none'
				aria-expanded={open}
				aria-controls='mobile-menu'
				aria-label={open ? 'Close menu' : 'Open menu'}
				onClick={() => setOpen((prev) => !prev)}
			>
				{open ? <X /> : <Menu />}
			</Button>

			{/* Backdrop — dims and blurs the page behind the menu */}
			<div
				aria-hidden
				onClick={() => setOpen(false)}
				className={cn(
					'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
					open ? 'opacity-100' : 'pointer-events-none opacity-0'
				)}
			/>

			{/* Dropdown menu — mirrors the navbar pill (same width, border, radius) */}
			<div
				id='mobile-menu'
				role='dialog'
				aria-modal='true'
				aria-label='Menu'
				className={cn(
					'fixed inset-x-4 top-24 z-40 mx-auto flex max-w-3xl flex-col gap-1 rounded-3xl border bg-background p-3 shadow-lg transition duration-300 md:hidden dark:border-slate-700/70',
					open
						? 'translate-y-0 opacity-100'
						: 'pointer-events-none -translate-y-3 opacity-0'
				)}
			>
				{navLinks.map((link) => {
					const active =
						link.href === '/'
							? pathname === '/'
							: pathname.startsWith(link.href);

					return (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							aria-current={active ? 'page' : undefined}
							className={cn(
								'rounded-full px-4 py-3 text-center text-sm font-medium transition-colors',
								active
									? 'bg-accent text-accent-foreground'
									: 'text-foreground hover:bg-accent hover:text-accent-foreground'
							)}
						>
							{link.label}
						</Link>
					);
				})}

				<Separator className='my-2' />

				<Button asChild className='w-full rounded-full'>
					<a
						href={cvUrl}
						target='_blank'
						rel='noopener noreferrer'
						onClick={() => setOpen(false)}
					>
						<Download className='h-4 w-4' />
						Download CV
					</a>
				</Button>
			</div>
		</>
	);
};
