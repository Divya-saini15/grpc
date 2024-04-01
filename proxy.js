const grpcWebProxyServer = require('grpc-web-proxy');
const grpcServer = `localhost:5001`;

const proxy = grpcWebProxyServer.server({
  grpcServer,
  grpcWebRoot: '/grpc.web',
});

proxy.listen(8080, () => {
  console.log('gRPC Web Proxy listening on port 8080');
});