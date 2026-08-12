import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CircleArrowRight, Compass, Home } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Page not found',
};

export default function NotFound() {
	return (
		<div className='relative flex flex-1 items-center justify-center overflow-hidden px-6 pt-28 pb-10 md:pt-32'>
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					'mask-[radial-gradient(500px_circle_at_center,white,transparent)]',
					'inset-x-0 h-full skew-y-12'
				)}
			/>
			<div className='relative z-1 text-center max-w-2xl'>
				<Badge className='rounded-full border-none'>
					<Compass />
					Error 404
				</Badge>
				<h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight'>
					Game over 🎮
				</h1>
				<p className='mt-6 text-[17px] md:text-lg'>
					This page doesn&apos;t exist — it may have been moved, renamed, or the
					link was mistyped. Let&apos;s get you back on track.
				</p>
				<div className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-4'>
					<Button asChild size='lg' className='rounded-full text-base'>
						<Link href='/'>
							<Home className='mr-2 h-5 w-5' />
							Back to home
						</Link>
					</Button>
					<Button
						asChild
						variant='outline'
						size='lg'
						className='rounded-full text-base shadow-none'
					>
						<Link href='/projects'>
							See my projects
							<CircleArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
