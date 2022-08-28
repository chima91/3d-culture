import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ApolloProvider } from './providers/ApolloClient';
import { AuthStateListener } from './providers/AuthStateListener';
import { GlobalAccount } from './providers/GlobalAccount';
import { RootRouter } from './Route';
// Material-UIの「テーマ」を作成。
const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    {/* Recoilを初期化し、アプリケーション全体でRecoilを使用できるようにする */}
    <RecoilRoot>
      {/* Material-UIを初期化し、アプリケーション全体でMaterial-UIを使用できるようにする */}
      <ThemeProvider theme={theme}>
        {/* Apollo Clientを初期化して、アプリケーション全体でApollo Clientを使えるようにする */}
        <ApolloProvider>
          {/* ユーザーの認証情報を読む込み */}
          <AuthStateListener>
            {/* ユーザー情報を読む込み */}
            <GlobalAccount>
              <BrowserRouter>
                {/* ブラウザの違いを吸収し、どのデバイスでも同じように表示する用のCSSを使用する */}
                <CssBaseline />
                {/* ルーティング用のメインコンポーネント */}
                <RootRouter />
              </BrowserRouter>
            </GlobalAccount>
          </AuthStateListener>
        </ApolloProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
