/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['github.com'],
	},
};

const withImages = require('next-images');

module.exports = withImages({
	esModule: true,
});

module.exports = nextConfig;
