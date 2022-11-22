const PROXY_CONFIG = [
  {
    context: [
      "/showapi","/actorapi"
    ],
    target: "http://localhost:7206",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
