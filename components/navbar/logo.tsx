import { LiverBird } from './LiverBird';

export const Logo = () => (
	<div className='flex items-center gap-1'>
		<LiverBird className='h-6 w-auto' />

		<span className='font-semibold text-lg tracking-tight'>Diyorbek</span>
	</div>
);
