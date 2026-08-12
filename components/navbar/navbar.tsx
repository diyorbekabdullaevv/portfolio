import { Button } from '@/components/ui/button';
import { cvUrl } from '@/lib/site';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import { NavMenu } from './nav-menu';

const Navbar = () => {
	return (
		<nav className='fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-3xl mx-auto rounded-full'>
			<div className='h-full flex items-center justify-between mx-auto px-3'>
				<Link href='/'>
					<Logo />
				</Link>

				{/* Desktop Menu */}
				<NavMenu className='hidden md:block' />

				<div className='flex items-center gap-2'>
					<Button
						asChild
						variant='outline'
						className='hidden sm:inline-flex rounded-full shadow-none'
					>
						<Link href={cvUrl} target='_blank' rel='noopener noreferrer'>
							<Download className='h-5! w-5!' />
							Download CV
						</Link>
					</Button>
					<ModeToggle />

					{/* Mobile Menu */}
					<div className='md:hidden'>
						<MobileNav />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
