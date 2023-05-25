const PROXY_CONFIG = [
    {
        context: [
            "/realtime",
        ],
        target: "https://localhost:7203",
        secure: false,
        ws: true
    }
]

module.exports = PROXY_CONFIG;