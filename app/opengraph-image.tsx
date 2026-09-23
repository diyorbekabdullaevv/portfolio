import { siteDomain } from '@/lib/site';
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Diyorbek Abdullaev — Game Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	const photo = await readFile(join(process.cwd(), 'public/diyorbek-2.jpg'));
	const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				background: '#ffffff',
				backgroundImage:
					'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)',
				backgroundSize: '32px 32px',
				padding: '72px',
				fontFamily: 'sans-serif',
			}}
		>
			{/* Top: badge */}
			<div style={{ display: 'flex' }}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						background: '#0a0a0a',
						color: '#ffffff',
						padding: '12px 24px',
						borderRadius: '999px',
						fontSize: '26px',
						fontWeight: 600,
					}}
				>
					⚡ CS (AI) Student at MDIS Tashkent
				</div>
			</div>

			{/* Middle: name + photo */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '56px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<div
						style={{
							fontSize: '72px',
							fontWeight: 800,
							color: '#0a0a0a',
							lineHeight: 1.05,
							letterSpacing: '-0.02em',
						}}
					>
						Diyorbek
					</div>
					<div
						style={{
							fontSize: '72px',
							fontWeight: 800,
							color: '#0a0a0a',
							lineHeight: 1.05,
							letterSpacing: '-0.02em',
						}}
					>
						Abdullaev 🎮
					</div>
					<div
						style={{
							marginTop: '20px',
							fontSize: '32px',
							color: '#525252',
							fontWeight: 500,
						}}
					>
						Game Developer · Unity · Software Engineering
					</div>
				</div>
				<img
					src={photoSrc}
					alt=''
					width={280}
					height={280}
					style={{
						width: '280px',
						height: '280px',
						borderRadius: '999px',
						objectFit: 'cover',
						border: '6px solid #0a0a0a',
					}}
				/>
			</div>

			{/* Bottom: url */}
			<div
				style={{
					display: 'flex',
					fontSize: '30px',
					color: '#525252',
					fontWeight: 600,
				}}
			>
				{siteDomain}
			</div>
		</div>,
		{ ...size },
	);
}
