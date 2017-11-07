const HttpsProxyAgent = require('https-proxy-agent');

let proxyConfig = [
    {
        context: [
            "/google",
            "/search"
        ],
        target: "https://google.com",
        secure: false,
        pathRewrite: {
            "/.*": ""
        },
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
            if (/^\/search.*/.test(req.url)) {
                console.log('Skipping proxy for "/search" context');
                return "/index.html";
            }
        }
    }
];

function setupForCorporateProxy(proxyConfig) {
    let proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;

    if (proxyServer) {
        let agent = new HttpsProxyAgent(proxyServer);
        console.log('Using corporate proxy server: ' + proxyServer);
        proxyConfig.forEach(function(entry) {
            entry.agent = agent;
        });
    }

    return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
