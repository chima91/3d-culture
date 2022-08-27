import { useQRCode } from 'next-qrcode';
import { VFC } from 'react';

export const QR: VFC = () => {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={window.location.href}
      options={{
        quality: 0.3,
        level: 'M', // 誤り訂正レベル
        margin: 6,
        scale: 1,
        width: 200,
      }}
    />
  );
};
