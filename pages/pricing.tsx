import { Flex, Link, Section, Strong, Text } from "@radix-ui/themes";
import Layout from "~/components/Layout";
import { FreePricingCard, PremiumPricingCard } from "~/components/pricing-cards";

export default function Pricing() {
	return (
		<Layout
			metaInfo={{
				title: "Pricing – Animechan API | Free tier & $5/month Premium",
				description:
					"Animechan API pricing. Start free with 5 requests per hour, or get Animechan Premium for $5/month: 1,000 requests per hour and an API key emailed instantly.",
			}}
		>
			<div className="mx-4 lg:mx-0">
				<Section pb="0">
					<Flex direction="column" gap="4">
						<Text size="8" weight="bold" className="text-center">
							Simple pricing for the Animechan API
						</Text>
						<Text size="4" className="text-center max-w-3xl mx-auto">
							Start free - no key, no signup. When you need more throughput, Animechan Premium gives
							you 1,000 requests per hour for $5/month.
						</Text>
					</Flex>
				</Section>

				<Section pb="0">
					<Flex
						justify="center"
						direction={{
							xl: "row",
							md: "row",
							initial: "column",
						}}
						align="stretch"
						gapX={{
							lg: "8",
							md: "8",
							initial: "0",
						}}
						gapY={{
							lg: "0",
							md: "0",
							initial: "8",
						}}
					>
						<FreePricingCard />
						<PremiumPricingCard />
					</Flex>
				</Section>

				<Section>
					<Text size="6" weight="bold" as="div" className="mb-4">
						How it works
					</Text>
					<ol className="list-decimal pl-6 space-y-4 my-4">
						<li>
							<Strong>Subscribe to Premium</Strong> - $5/month via Buy Me a Coffee.
						</li>
						<li>
							<Strong>Get your API key by email</Strong> - sent automatically as soon as the
							subscription starts.
						</li>
						<li>
							<Strong>
								Send it as <code>x-api-key</code>
							</Strong>{" "}
							- one header, all endpoints.{" "}
							<Link href="/docs/auth" underline="always">
								See the auth docs
							</Link>
							.
						</li>
					</ol>
					<Text as="p" size="2" className="mt-6 text-gray-400">
						Billed monthly through Buy Me a Coffee. Cancel any time from your Buy Me a Coffee
						account settings. See our{" "}
						<Link href="/terms" underline="always">
							Terms
						</Link>{" "}
						and{" "}
						<Link href="/cancellation" underline="always">
							Cancellation Policy
						</Link>
						.
					</Text>
				</Section>
			</div>
		</Layout>
	);
}
