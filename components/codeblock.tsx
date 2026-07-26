import { Highlight, themes } from "prism-react-renderer";
import type { CodeBlock } from "~/types";

export default function Codeblock({ language, snippet }: CodeBlock) {
	return (
		<Highlight theme={themes.dracula} code={snippet} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={`${className} relative rounded-md p-6 whitespace-pre-wrap overflow-auto lg:text-sm text-xs`}
					style={style}
				>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line })} key={i}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token })} key={key} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}
