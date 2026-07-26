import { Heading, Link } from "@radix-ui/themes";
import type { ReactNode } from "react";
import type { FAQPage, WithContext } from "schema-dts";
import { BMAC_LINK } from "~/constants/common";

const BMAC_CTA = (
	<Link href={BMAC_LINK} target="_blank" underline="always">
		Buy Me A Coffee
	</Link>
);

interface IFaq {
	question: string;
	answer: ReactNode;
	jsonLdAnswer?: string;
}

function generateFaqSchema(faqs: IFaq[]) {
	const mainEntity = faqs.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq?.jsonLdAnswer || faq.answer,
		},
	}));
	const jsonLd: WithContext<FAQPage> = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		// @ts-ignore
		mainEntity,
	};
	return jsonLd;
}

export default function Faq() {
	const FAQs: IFaq[] = [
		{
			question: "What is Animechan API and what anime data does it provide?",
			answer:
				"Animechan is an anime quotes and information API service that provides developers with access to a vast curated collection of anime content. Our API delivers episode counts, detailed show summaries, character information, and memorable quotes from thousands of anime series. You can easily filter and search quotes by specific anime titles or character names, making it perfect for anime-focused applications and websites.",
		},
		{
			question: "Is the Animechan API free? What are the rate limits?",
			answer:
				"Yes. Every endpoint is free to use with no signup and no API key, limited to 5 requests per hour per IP address. Animechan Premium raises that limit to 1,000 requests per hour for $5/month.",
		},
		{
			question: "How do I get an API key for higher rate limits?",
			answer: (
				<>
					Subscribe to Animechan Premium for $5/month on our {BMAC_CTA} page. Your personal API key
					is emailed to you as soon as the subscription starts, and it raises your limit to 1,000
					requests per hour. Note that this is a recurring monthly subscription, not a one-time
					payment. See our{" "}
					<Link href="/pricing" underline="always">
						pricing page
					</Link>{" "}
					for details, and the{" "}
					<Link href="/docs/auth" underline="always">
						auth docs
					</Link>{" "}
					for how to send the key.
				</>
			),
			jsonLdAnswer:
				"Subscribe to Animechan Premium for $5/month on our Buy Me A Coffee page. Your personal API key is emailed to you as soon as the subscription starts, and it raises your limit to 1,000 requests per hour. Note that this is a recurring monthly subscription, not a one-time payment. See our /pricing page for details, and the /docs/auth page for how to send the key.",
		},
		{
			question: "Can I cancel Animechan Premium?",
			answer: (
				<>
					Yes, at any time from your <span className="font-medium">“Buy Me A Coffee”</span> account
					settings. Premium access ends when your subscription ends - there is no long-term
					commitment.
				</>
			),
			jsonLdAnswer:
				"Yes, at any time from your “Buy Me A Coffee” account settings. Premium access ends when your subscription ends - there is no long-term commitment.",
		},
	];

	const jsonLd = generateFaqSchema(FAQs);

	return (
		<article className="flex flex-col space-y-10 mt-16 px-2">
			{/* Schema.org FAQ markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Heading as="h3">Frequently Asked Questions:</Heading>
			{FAQs.map(({ question, answer }) => (
				<section key={question}>
					<Heading as="h4" size="5" mb="2">
						{question}
					</Heading>
					<div>
						<p>{answer}</p>
					</div>
				</section>
			))}
		</article>
	);
}
