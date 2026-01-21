const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PnpWebpackPlugin } = require('pnp-webpack-plugin'); // Yarn Berry2에서는 내장되어서 다운로드 안해두 된다. 3에서는 해야함

// NODE_ENV 기본값 보장
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // Babel Loader
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",  // 최신 JS문법을 변환
                        ["@babel/preset-react", { runtime: 'automatic' }],
                        "@babel/preset-typescript" // 타입스크립트를 변환
                    ]
                },
                // exclude: /node_modules/ // 외부 모듈을 제외 -> pnp로 대체
            },
            {
                // CSS Loader & style-loader
                test: /\.css$/, // test -> 어떤 파일에 로더를 적용할 지 (.css 확장자에만 적용)
                use: [
                    // **우측에서 왼쪽 순으로 실행된다.**
                    'style-loader', // CSS를 <style> 태그로 주입
                    'css-loader', // CSS를 JS 모듈로 변환,
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]', // 빌드 후 dist/assets 폴더로 복사
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html", // 템플릿 HTML
            filename: "index.html", // 출력될 HTML 파일 이름
            inject: true // <script> 태그 자동 삽입
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
        '@': path.resolve(__dirname, './src'),
        },
        plugins: [PnpWebpackPlugin]
    },
    resolveLoader: {
        plugins: [PnpWebpackPlugin]
    },
    // resolveLoader: {
    //     plugins: [PnpWebpackPlugin.moduleLoader(module)], 이전버전 스타일 [PnpWebpackPlugin] 지금은 이렇게 사용해야함 
    // },
    ...(mode === 'development'
    ? {
        // 개발용 devServer만 적용
        devServer: {
          static: [
            { directory: path.join(__dirname, "dist") },
            { directory: path.join(__dirname, "public") },
          ],
          port: 3010,
          open: true,
          hot: true,
          historyApiFallback: true,
          client: { overlay: true },
          headers: { 'Access-Control-Allow-Origin': '*' },
        },
      }
    : {}),
}