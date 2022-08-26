import { useQRCode } from 'next-qrcode';
import { VFC } from 'react';

export const QR: VFC = () => {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={window.location.href}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M', // 誤り訂正レベル
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />
  );
};
