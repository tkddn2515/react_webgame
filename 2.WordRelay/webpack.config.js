const path = require('path'); // 경로 쉽게 얻기 위해 사용
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development',// 실서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'] // client.jsx에서 jsx를 사용하지 않아도 되게 해준다.
  },
  entry: {
    app: ['./client'], // ['./client.jsx', 'WordRelay.jsx'] 이렇게 사용해야하지만 client.jsx에서 WordRelay를 포함하기 때문에 이러한 파일은 입력하지 않아도 된다.
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/, // 정구표현식, js, jsx파일을 룰 적용하겠다. 
      loader: 'babel-loader',// babel-loader라는 룰을 적용하겠다
      options: { // 옵션 추가
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          'react-refresh/babel'
        ]
      } 
    }]
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 출력할 경로
    filename: '[name].js', // 출력할 파일 이름, [name]은 entry에서 설정한 이름
    publicPath: '/dist',
  }, // 출력
  devServer: {
    devMiddleware: { publicPath: '/dist' }, // 웹팩이 빌드한 파일 경로
    static: {directory: path.resolve(__dirname)}, // 정적 파일 경로(index.html)
    hot: true
  },
}
// 