'use client';
import Image from 'next/image';

import { Paragraph } from '@/components/Paragraph';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

export default function About() {
	const images = [
		'/diyorbek.jpg',
		'/about-1.png',
		'/about-2.png',
		'/about-3.png',
	];

	const like = [
		'Game Development',
		'Unity',
		'C#',
		'Programming',
		'Artificial Intelligence',
		'Software Engineering',
		'Building Projects',
		'Learning New Skills',
		'Problem Solving',
		'Liverpool FC',
		'Football',
		'Video Games',
		'GitHub',
		'Technology',
	];

	const dislike = [
		'Slow Internet',
		'Being Late',
		'Unorganized Projects',
		'Arsenal',
		'Swimming',
	];

	return (
		<>
			<section className='max-w-4xl w-full mx-auto pt-28 md:pt-32 px-4 md:px-10'>
				<h1 className='text-base md:text-xl lg:text-4xl font-bold border-b-2 pb-2 inline'>
					About Me
				</h1>
				<div>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-10 my-10'>
						{images.map((image, index) => (
							<motion.div
								key={image}
								initial={{
									opacity: 0,
									y: -50,
									rotate: 0,
								}}
								animate={{
									opacity: 1,
									y: 0,
									rotate: index % 2 === 0 ? 3 : -3,
								}}
								transition={{ duration: 0.2, delay: index * 0.1 }}
							>
								<Image
									src={image}
									width={200}
									height={400}
									alt='about'
									className='rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200'
								/>
							</motion.div>
						))}
					</div>
					<div className='max-w-4xl text-primary'>
						<Paragraph className='mt-4'>Hi, I&apos;m Diyorbek.</Paragraph>

						<Paragraph className='mt-4'>
							I&apos;m a Computer Science (AI) student at MDIS Tashkent with a
							strong interest in programming, software engineering, and game
							development.
						</Paragraph>

						<Paragraph className='mt-4'>
							I&apos;ve always wanted to become a game developer, which led me
							to start learning Unity and building games to bring my ideas to
							life. Through developing projects, I continue exploring new
							technologies and strengthening my programming skills.
						</Paragraph>

						<Paragraph className='mt-4'>
							My primary focus is on C#, Unity, and software engineering. I
							enjoy building games because they allow me to combine creativity
							with programming, and every project is an opportunity to learn and
							improve.
						</Paragraph>

						<Paragraph className='mt-4'>
							I&apos;m also passionate about Artificial Intelligence and hope to
							combine AI with game development to create smarter, more
							interactive experiences.
						</Paragraph>

						<Paragraph className='mt-4'>
							I&apos;m seeking internship and project opportunities where I can
							collaborate with experienced developers, contribute to meaningful
							projects, and continue growing as a software engineer.
						</Paragraph>

						<Paragraph className='mt-4'>
							This portfolio showcases the projects I&apos;ve built and the
							skills I&apos;m developing. Thanks for visiting, and I hope you
							enjoy exploring my work.
						</Paragraph>
					</div>
				</div>

				<div className='pt-10'>
					<h1 className='text-base md:text-xl lg:text-4xl font-bold border-b-2 pb-2 inline'>
						Like 😁
					</h1>
					<div className='max-w-4xl flex flex-wrap gap-2 pt-8'>
						{like.map((item, index) => (
							<Badge
								key={index}
								className='inline-flex items-center align-top max-w-full font-medium leading-[1.2] outline-2 outline-transparent outline-offset-2 text-green-800 bg-green-100 rounded-lg min-h-8 min-w-8 px-3 text-md'
							>
								{item}
							</Badge>
						))}
					</div>
				</div>

				<div className='pt-10'>
					<h1 className='text-base md:text-xl lg:text-4xl font-bold border-b-2 pb-2 inline'>
						Dislike 😒
					</h1>
					<div className='max-w-4xl text-primary flex flex-wrap gap-2 pt-8'>
						{dislike.map((item, index) => (
							<Badge
								key={index}
								className='inline-flex items-center align-top max-w-full font-medium leading-[1.2] outline-2 outline-transparent outline-offset-2 text-red-800 bg-red-100 rounded-lg min-h-8 min-w-8 px-3 text-md'
							>
								{item}
							</Badge>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
