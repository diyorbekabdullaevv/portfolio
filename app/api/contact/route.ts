import { NextResponse } from 'next/server';

// Message is sent as plain text (no parse_mode), so user input cannot inject
// Telegram markup — no escaping needed.
const TELEGRAM_API = 'https://api.telegram.org';

type ContactPayload = {
	name?: unknown;
	email?: unknown;
	message?: unknown;
};

const isFilledString = (value: unknown, max: number): value is string =>
	typeof value === 'string' &&
	value.trim().length > 0 &&
	value.trim().length <= max;

const isEmail = (value: unknown): value is string =>
	typeof value === 'string' &&
	value.length <= 200 &&
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
	let body: ContactPayload;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json(
			{ error: 'Invalid request body.' },
			{ status: 400 }
		);
	}

	const { name, email, message } = body;

	if (!isFilledString(name, 100)) {
		return NextResponse.json(
			{ error: 'Please enter your name.' },
			{ status: 400 }
		);
	}
	if (!isEmail(email)) {
		return NextResponse.json(
			{ error: 'Please enter a valid email address.' },
			{ status: 400 }
		);
	}
	if (!isFilledString(message, 2000)) {
		return NextResponse.json(
			{ error: 'Please enter a message.' },
			{ status: 400 }
		);
	}

	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	if (!token || !chatId) {
		console.error(
			'Contact form: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars.'
		);
		return NextResponse.json(
			{ error: 'Messaging is not configured yet. Please try again later.' },
			{ status: 503 }
		);
	}

	const text =
		`📬 New message\n\n` +
		`👤 Name: ${name.trim()}\n` +
		`✉️ Email: ${email.trim()}\n\n` +
		`💬 Message:\n${message.trim()}`;

	try {
		const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text,
				disable_web_page_preview: true,
			}),
		});

		if (!res.ok) {
			const detail = await res.text();
			console.error('Telegram sendMessage failed:', res.status, detail);
			return NextResponse.json(
				{ error: 'Could not send your message. Please try again later.' },
				{ status: 502 }
			);
		}
	} catch (err) {
		console.error('Telegram request error:', err);
		return NextResponse.json(
			{ error: 'Could not send your message. Please try again later.' },
			{ status: 502 }
		);
	}

	return NextResponse.json({ ok: true });
}
