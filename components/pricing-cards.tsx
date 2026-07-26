import { Flex, Text } from "@radix-ui/themes";
import { BMAC_LINK } from "~/constants/common";

export const FreePricingCard = () => {
	return (
		<div className="rounded-xl p-8 text-center bg-[#38394f] max-w-sm border border-gray-600 text-white">
			<div className="font-semibold rounded mb-2 text-xl text-white">Free</div>
			<div className="mt-4 mb-2">
				<span className="text-4xl font-bold text-white">$0</span>
			</div>
			<p className="text-sm text-gray-400">forever</p>
			<p className="text-sm mt-5 mb-10 text-gray-300">No API key, no signup.</p>

			<Text as="p" className="text-left text-white" ml="4" mb="4" weight="bold">
				INCLUDES:
			</Text>
			<Flex direction="column" align="start" gapY="4" className="px-4 text-left">
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-gray-400">✓</span> 5 requests per hour
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-gray-400">✓</span> All API endpoints
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-gray-400">✓</span> No API key required
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-gray-400">✓</span> Community support on Discord
				</Text>
			</Flex>
		</div>
	);
};

export const PremiumPricingCard = () => {
	return (
		<div className="relative overflow-hidden rounded-xl p-8 text-center max-w-sm bg-black text-white border border-yellow-500 shadow-lg shadow-yellow-500/20">
			<div className="absolute top-0 right-0">
				<div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
					PREMIUM
				</div>
			</div>
			<div className="font-semibold rounded mb-2 text-xl text-yellow-500">Premium</div>
			<div className="mt-4 mb-2">
				<span className="text-4xl font-bold text-yellow-500">$5</span>
				<span className="text-gray-400">/month</span>
			</div>
			<p className="text-sm text-gray-400">billed monthly</p>
			<p className="text-sm mt-5 mb-6 text-gray-300">For apps that need real throughput.</p>

			<div className="mb-8">
				<a
					href={BMAC_LINK}
					target="_blank"
					rel="noreferrer"
					className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200"
				>
					Get Premium
				</a>
			</div>

			<Text as="p" className="text-left text-yellow-500" ml="4" mb="4" weight="bold">
				INCLUDES:
			</Text>
			<Flex direction="column" align="start" gapY="4" className="px-4 text-left">
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-yellow-500 font-bold">✓</span> 1,000 requests per hour
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-yellow-500 font-bold">✓</span> Personal API key, emailed instantly
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-yellow-500 font-bold">✓</span> All API endpoints
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-yellow-500 font-bold">✓</span> Email support from the developer
				</Text>
				<Text className="flex items-start gap-2 text-gray-300">
					<span className="text-yellow-500 font-bold">✓</span> Cancel any time
				</Text>
			</Flex>
		</div>
	);
};
