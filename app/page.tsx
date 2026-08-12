import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CircleArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		// flex-1 claims the height left over between navbar and footer, so the
		// hero stays vertically centred however tall the viewport is.
		<div className='relative flex flex-1 items-center justify-center overflow-hidden px-6 pt-28 pb-10 md:pt-32'>
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					'mask-[radial-gradient(500px_circle_at_center,white,transparent)]',
					'inset-x-0 h-full skew-y-12',
				)}
			/>
			<div className='relative z-1 text-center max-w-3xl'>
				<div className='flex justify-center mb-6'>
					<div className='relative w-52 h-52 rounded-full overflow-hidden border-4 border-primary shadow-lg'>
						<Image
							src='/diyorbek.jpg'
							alt='Diyorbek Abdullaev'
							fill
							sizes='208px'
							className='object-cover'
							priority
						/>
					</div>
				</div>
				<Badge className='rounded-full border-none'>
					<Zap className='fill-current' />
					CS (AI) Student at MDIS Tashkent
				</Badge>
				<h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight'>
					Diyorbek Abdullaev 🎮
				</h1>
				<p className='mt-6 text-[17px] md:text-lg'>
					Computer Science (AI) student at MDIS Tashkent learning software
					engineering and game development. I&apos;m currently building games with
					Unity and improving my programming and problem-solving skills.
				</p>
				<div className='mt-12 flex items-center justify-center gap-4'>
					<Button asChild size='lg' className='rounded-full text-base'>
						<Link href='/about'>
							Learn more about me{' '}
							<CircleArrowRight className='ml-2 h-5.5 w-5.5' />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
