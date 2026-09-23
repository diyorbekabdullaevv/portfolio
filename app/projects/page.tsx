import { GithubLogo } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Projects',
	description:
		'Games and web projects built by Diyorbek Abdullaev with Unity, C#, and Next.js.',
};

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	/** Looping preview clip. When set, `image` is used as its poster frame. */
	video?: string;
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
}

const ProjectCard = ({
	title,
	description,
	image,
	video,
	technologies,
	liveUrl,
	githubUrl,
}: ProjectCardProps) => {
	return (
		<div className='group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50'>
			{/* Project preview — a silent looping clip, or a still image */}
			<div className='relative h-64 overflow-hidden bg-accent'>
				{video ? (
					<video
						src={video}
						poster={image}
						autoPlay
						loop
						muted
						playsInline
						preload='metadata'
						aria-label={`${title} preview`}
						className='absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
					/>
				) : (
					<Image
						src={image}
						alt={title}
						className='object-cover transition-transform duration-300 group-hover:scale-105'
						fill
						sizes='(min-width: 768px) 50vw, 100vw'
					/>
				)}
			</div>

			{/* Content */}
			<div className='flex-1 flex flex-col p-6'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-muted-foreground mb-4'>{description}</p>

				{/* Technologies */}
				<div className='flex flex-wrap gap-2 mb-6'>
					{technologies.map((tech) => (
						<Badge key={tech} variant='secondary' className='rounded-full'>
							{tech}
						</Badge>
					))}
				</div>

				{/* Actions */}
				<div className='flex gap-3 mt-auto'>
					{liveUrl && (
						<Button variant='default' className='rounded-full' asChild>
							<a href={liveUrl} target='_blank' rel='noopener noreferrer'>
								<ExternalLink className='mr-1 h-4 w-4' />
								Live Demo
							</a>
						</Button>
					)}
					{githubUrl && (
						<Button
							variant='outline'
							className='rounded-full shadow-none'
							asChild
						>
							<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
								<GithubLogo className='mr-1 h-4 w-4' />
								View Code
							</a>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default function Projects() {
	const projects = [
		{
			title: 'Dyonted',
			description:
				'A browser-based 3D stealth game featuring expanded rooms, new enemies, keys, doors, custom assets, and audio.',
			image: '/dyonted-poster.webp',
			video: '/dyonted.mp4',
			technologies: [
				'Unity 6.3',
				'C#',
				'GameObjects',
				'Prefabs',
				'Animator',
				'Unity UI',
				'Audio Source',
				'Particle System',
				'Materials',
				'Lighting',
			],
			liveUrl: 'https://diyorbekabdullaevv.itch.io/dyonted',
			githubUrl: 'https://github.com/diyorbekabdullaevv/dyonted',
		},
		{
			title: 'Unity Junior Programmer',
			description:
				'A hands-on Unity learning pathway covering gameplay programming, physics, UI, enemy AI, data management, optimization, and OOP.',
			image: '/junior-programmer.png',
			technologies: [
				'Unity 6.3',
				'C#',
				'Unity Input System',
				'Physics',
				'Rigidbody',
				'Colliders',
				'WebGL',
				'Git',
				'SceneManager',
				'Unity Profiler',
			],
			liveUrl:
				'https://www.credly.com/badges/213185e9-25cb-4add-b3b3-ea4d0164a2da/',
			githubUrl: 'https://github.com/diyorbekabdullaevv/junior-programmer',
		},
		{
			title: 'Dyocrate',
			description:
				'A browser-based 2D reflex arcade game featuring click-based gameplay, three difficulty settings, and four target types.',
			image: '/dyocrate-poster.webp',
			video: '/dyocrate.mp4',
			technologies: [
				'Unity 6',
				'C#',
				'WebGL',
				'Unity UI',
				'Canvas',
				'Game States',
				'Random Spawning',
				'Physics',
			],
			liveUrl: 'https://diyorbekabdullaevv.itch.io/dyocrate',
			githubUrl: 'https://github.com/diyorbekabdullaevv/',
		},
		{
			title: 'Unity Essentials',
			description:
				'A hands-on Unity learning pathway covering core tools, workflows, and the fundamentals of 2D and 3D game development.',
			image: '/demo-video-1-poster.webp',
			video: '/demo-video-1.mp4',
			technologies: [
				'Unity 6',
				'C#',
				'GameObjects',
				'Prefabs',
				'Scenes',
				'Physics',
				'2D Development',
				'3D Development',
				'Audio',
				'UI',
				'Cameras',
			],
			liveUrl:
				'https://www.credly.com/badges/132741e3-97ff-43da-a594-8ac9a30beee0',
			githubUrl: 'https://github.com/diyorbekabdullaevv/unity-essentials',
		},
		{
			title: 'Coupons',
			description:
				'A web app for discovering MoneyGram discount coupons with real-time updates, confidence scores, and community voting.',
			image: '/coupons.png',
			technologies: [
				'Next.js',
				'React',
				'TypeScript',
				'Tailwind CSS',
				'Node.js',
				'REST API',
				'Vercel',
			],
			liveUrl: 'https://coupons.samabdullaev.com/',
			githubUrl: 'https://github.com/diyorbekabdullaevv',
		},
		{
			title: 'Dyoppek',
			description:
				'A browser-based 2D arcade game featuring a coin system, 7-day daily rewards, dynamic difficulty, and animated UI.',
			image: '/dyoppek-poster.webp',
			video: '/dyoppek.mp4',
			technologies: [
				'Unity 6',
				'C#',
				'WebGL',
				'Unity Canvas UI',
				'TextMeshPro',
				'Unity Input System',
				'PlayerPrefs',
				'Coroutines',
			],
			liveUrl: 'https://diyorbekabdullaevv.itch.io/dyoppek',
			githubUrl: 'https://github.com/diyorbekabdullaevv/dyoppek',
		},
	];

	return (
		<div className='max-w-4xl w-full mx-auto pt-28 md:pt-32 px-4 md:px-10 pb-16'>
			<div className='mb-12'>
				<h1 className='text-base md:text-xl lg:text-4xl font-bold border-b-2 pb-2 inline'>
					Projects
				</h1>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}
