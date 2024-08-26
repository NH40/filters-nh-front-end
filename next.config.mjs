/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

export default nextConfig
