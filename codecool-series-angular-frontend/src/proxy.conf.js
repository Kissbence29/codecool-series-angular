const PROXY_CONFIG = [
  {
    context: [
      "/showapi","/actorapi"
    ],
    target: "http://localhost:5206",
    secure: true,
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
