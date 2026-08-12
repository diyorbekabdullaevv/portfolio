'use client';

import { SocialLinks } from '@/components/social-links';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
	const [status, setStatus] = useState<Status>('idle');
	const [error, setError] = useState('');

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus('loading');
		setError('');

		const form = e.currentTarget;
		const data = new FormData(form);
		const payload = {
			name: String(data.get('name') ?? ''),
			email: String(data.get('email') ?? ''),
			message: String(data.get('message') ?? ''),
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			const result = await res.json().catch(() => ({}));

			if (!res.ok) {
				setError(result.error ?? 'Something went wrong. Please try again.');
				setStatus('error');
				return;
			}

			form.reset();
			setStatus('success');
		} catch {
			setError('Network error. Please check your connection and try again.');
			setStatus('error');
		}
	}

	return (
		<section className='max-w-2xl w-full mx-auto pt-28 md:pt-32 px-4 md:px-10 pb-16'>
			<h1 className='text-base md:text-xl lg:text-4xl font-bold border-b-2 pb-2 inline'>
				Get in Touch
			</h1>

			<p className='mt-8 text-sm lg:text-base text-muted-foreground'>
				Have a project in mind, an opportunity, or just want to say hi? Send me a
				message and I&apos;ll get back to you soon.
			</p>

			{status === 'success' ? (
				<div className='mt-8 rounded-xl border border-green-600/30 bg-green-50 p-6 text-center dark:bg-green-950/30'>
					<p className='text-lg font-semibold text-green-700 dark:text-green-400'>
						Message sent! 🎉
					</p>
					<p className='mt-1 text-sm text-muted-foreground'>
						Thanks for reaching out. I&apos;ll reply as soon as I can.
					</p>
					<Button
						variant='outline'
						className='mt-4 rounded-full shadow-none'
						onClick={() => setStatus('idle')}
					>
						Send another message
					</Button>
				</div>
			) : (
				<form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-5'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='name' className='text-sm font-medium'>
							Name
						</label>
						<Input
							id='name'
							name='name'
							placeholder='Your name'
							autoComplete='name'
							required
							maxLength={100}
							disabled={status === 'loading'}
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<label htmlFor='email' className='text-sm font-medium'>
							Email
						</label>
						<Input
							id='email'
							name='email'
							type='email'
							placeholder='you@example.com'
							autoComplete='email'
							required
							maxLength={200}
							disabled={status === 'loading'}
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<label htmlFor='message' className='text-sm font-medium'>
							Message
						</label>
						<Textarea
							id='message'
							name='message'
							placeholder='Write your message...'
							rows={6}
							required
							maxLength={2000}
							disabled={status === 'loading'}
						/>
					</div>

					{status === 'error' && (
						<p className='text-sm text-destructive'>{error}</p>
					)}

					<Button
						type='submit'
						size='lg'
						className='self-start rounded-full text-base'
						disabled={status === 'loading'}
					>
						{status === 'loading' ? (
							'Sending...'
						) : (
							<>
								<Send className='h-4 w-4' />
								Send message
							</>
						)}
					</Button>
				</form>
			)}

			<div className='mt-12'>
				<p className='text-sm text-muted-foreground'>Or reach me directly</p>
				<SocialLinks className='mt-4' iconClassName='h-6 w-6' />
			</div>
		</section>
	);
}
