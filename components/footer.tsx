import { SocialLinks } from '@/components/social-links';
import { Separator } from '@/components/ui/separator';
import { siteName } from '@/lib/site';

const Footer = () => {
	return (
		<footer>
			<div className='max-w-3xl mx-auto pt-10'>
				<Separator />
				<div className='py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0'>
					{/* Copyright */}
					<span className='text-muted-foreground'>
						&copy; {new Date().getFullYear()} {siteName}. All rights reserved.
					</span>

					<SocialLinks />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
