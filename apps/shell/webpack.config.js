const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PnpWebpackPlugin } = require('pnp-webpack-plugin'); // Yarn Berry2에서는 내장되어서 다운로드 안해두 된다. 3에서는 해야함

// new webpack.DefinePlugin()을 사용하기 위해 사용
const webpack = require('webpack');

// NODE_ENV 기본값 보장
const mode = process.env.NODE_ENV || 'development';

// env 로드 공유 - root 공통 .env파일을 사용
require('dotenv').config({
  path: `../../.env.${mode}`,
});

module.exports = {
    mode,
    entry: './src/main.jsx',
    output: {
        filename: '[name].[contenthash].js', // 이름을 고정시키면 chunk spliting이 불가능하다.
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 이전 빌드 파일 삭제
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
                    'css-loader', // CSS를 JS 모듈로 변환
                    'postcss-loader', // tailwind 적용을 위함
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]', // 빌드 후 dist/assets 폴더로 복사
                },
            },
        ]
    },
    plugins: [
        // 초기에는 각 앱들을 iframe으로 가져오려고 했었음
        new webpack.DefinePlugin({
        __KAKAOBANK_URL__: JSON.stringify(process.env.KAKAOBANK_APP_URL),
        __TOSS_URL__: JSON.stringify(process.env.TOSS_APP_URL),
        // __NODE_ENV__: JSON.stringify(mode),
        }),
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
    // 없어도 인식 되네?
    resolveLoader: {
        plugins: [PnpWebpackPlugin]
    },
    ...(mode === 'development'
    ? {
        // 개발용 devServer만 적용
        devServer: {
            static: [
            { directory: path.join(__dirname, "dist") }, // 해당 디렉토리들은 devServer에서만 보임
            { directory: path.join(__dirname, "public") }, //
            ],
            port: 4010,
            open: true,
            hot: true,
            historyApiFallback: true,
            client: { overlay: true },
            // headers: { 'Access-Control-Allow-Origin': '*' },
        },
        }
    : {
        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'all'
            }
        },
    }),
}