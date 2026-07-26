import Footer from "components/footer";
import Navbar from "components/navbar";

export default {
	darkMode: false,
	nextThemes: {
		defaultTheme: "dark",
	},
	// Must match the page background (#25252b). Nextra paints its own chrome with
	// rgb(var(--nextra-bg)) - the TOC heading shadow, sidebar footer, dropdowns -
	// so leaving it at the default 17,17,17 draws near-black boxes on our lighter
	// background.
	backgroundColor: {
		dark: "37,37,43",
		light: "250,250,250",
	},
	navbar: {
		component: <Navbar isInDocsPage={true} />,
	},
	project: {
		link: "https://github.com/Animechan-API/animechan",
	},
	search: {
		component: null,
	},
	footer: {
		component: <Footer />,
	},
	editLink: {
		component: null,
	},
	feedback: {
		content: null,
	},
};
