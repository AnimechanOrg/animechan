import nextra from "nextra";

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
});

export default withNextra({
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	async redirects() {
		return [{ source: "/support", destination: "/pricing", permanent: true }];
	},
});
