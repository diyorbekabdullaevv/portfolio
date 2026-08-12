'use client';

import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home, RotateCw, TriangleAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

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
					<TriangleAlert />
					Something went wrong
				</Badge>
				<h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight'>
					Unexpected error 🛠️
				</h1>
				<p className='mt-6 text-[17px] md:text-lg'>
					Something broke on my end while loading this page. Try again — and if
					it keeps happening, let me know on the contact page.
				</p>
				<div className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-4'>
					<Button
						size='lg'
						className='rounded-full text-base'
						onClick={() => reset()}
					>
						<RotateCw className='mr-2 h-5 w-5' />
						Try again
					</Button>
					<Button
						asChild
						variant='outline'
						size='lg'
						className='rounded-full text-base shadow-none'
					>
						<Link href='/'>
							<Home className='mr-2 h-5 w-5' />
							Back to home
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
