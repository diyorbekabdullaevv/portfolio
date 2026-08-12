import Link from 'next/link';
import type { SVGProps } from 'react';

import { GithubLogo, LinkedinLogo, TelegramLogo } from '@/components/icons';
import { socialLinks, type SocialLabel } from '@/lib/site';
import { cn } from '@/lib/utils';

const icons: Record<SocialLabel, (props: SVGProps<SVGSVGElement>) => React.ReactElement> = {
	LinkedIn: LinkedinLogo,
	GitHub: GithubLogo,
	Telegram: TelegramLogo,
};

type SocialLinksProps = {
	className?: string;
	iconClassName?: string;
};

export const SocialLinks = ({ className, iconClassName }: SocialLinksProps) => (
	<div className={cn('flex items-center gap-5 text-muted-foreground', className)}>
		{socialLinks.map(({ href, label }) => {
			const Icon = icons[label];

			return (
				<Link key={label} href={href} target='_blank' aria-label={label}>
					<Icon
						className={cn(
							'h-5 w-5 transition-colors hover:text-foreground',
							iconClassName
						)}
					/>
				</Link>
			);
		})}
	</div>
);
