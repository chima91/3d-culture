import { VFC } from 'react';
import { useQRCode } from 'react-qrcodes';

export const QR: VFC = () => {
  const [inputRef]: any = useQRCode({
    text: window.location.href,
    options: {
      level: 'M', // 誤り訂正レベル
      margin: 3, // QRコードの周りの空白マージン
      scale: 1,
      width: 200,
    },
  });

  return <canvas ref={inputRef} />;
};
