import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { navLinks } from './nav-links';

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
	<NavigationMenu
		className={cn('data-[orientation=vertical]:items-start', className)}
		{...props}
	>
		<NavigationMenuList className='gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
			{/* Home is reachable via the logo on desktop, so it's omitted here.
			    The mobile drawer still lists it (see mobile-nav.tsx). */}
			{navLinks
				.filter((link) => link.href !== '/')
				.map((link) => (
					<NavigationMenuItem key={link.href}>
						<NavigationMenuLink asChild>
							<Link href={link.href}>{link.label}</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
		</NavigationMenuList>
	</NavigationMenu>
);
