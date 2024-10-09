/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... existing config options ...

  async headers() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; frame-src 'self' https://calendar.google.com; script-src 'self'; style-src 'self';",
            },
          ],
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;