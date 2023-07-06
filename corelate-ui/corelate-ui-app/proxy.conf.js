const PROXY_CONFIG = [
  {
    context: [
      "/app",
      "/api"
     ],
    target: "http://localhost:8090/activiti-app",
    secure: true
  },
  {
    context: [
      "/twitter"
     ],
    target: "https://api.twitter.com/1.1/search/tweets.json",
    secure: true
  },
  {
    context: [
      "/api/user/*",
      "/api/cms/*",
      "/api/catalog/*",
      "/api/workflow/*",
      "/api/rules/*",
      "/api/shopping-cart/*"
    ],
    target: "http://localhost:8002",
    secure: false
  },
  {
    context: [
      "/user-account",
      "/permission",
      "/permission-group",
      "/group"
     ],
    target: "http://localhost:8081",
    secure: false
  },
  {
    context: [
      "/header",
      "/faq",
      "/carousel",
      "/general-content",
      "/help-topic",
      "/footer",
      "/text-template",
      "/contact-info",
      "/contact-form",
      "/simple-layout",
      "/blocks",
      "/grid-layout",
      "/grid-item",
      "/color-config",
      "/inbox",
      "/site-head"
    ],
    target: "http://localhost:8082",
    secure: false
  },
  {
    context: [
      "/catalog"
    ],
    target: "http://localhost:8083",
    secure: false
  },
  {
    context: [
      "/item",
      "/payment"
    ],
    target: "http://localhost:8086",
    secure: false
  },
  {
    context: [
      "/suggestions",
      "/rules"
    ],
    target: "http://localhost:8085",
    secure: false
  },
  {
    context: [
      "/authentication/user"
    ],
    target: "http://localhost:8004",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
