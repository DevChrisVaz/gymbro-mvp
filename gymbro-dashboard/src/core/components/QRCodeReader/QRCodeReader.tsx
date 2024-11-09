import React, { useEffect, useRef, useState } from 'react'
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";

export type QRCodeReaderProps = {
  onRead: (result: string) => void;
  onError?: () => void;
}

const QRCodeReader: React.FC<QRCodeReaderProps> = (props) => {
  const [codeReader, setCodeReader] = useState(new BrowserMultiFormatReader());

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      codeReader.listVideoInputDevices().then(videoInputDevices => {
        codeReader.decodeOnceFromVideoDevice(videoInputDevices[1].deviceId, videoRef.current!).then((result) => {
          console.log(result);
          props.onRead(result.getText());
        }).catch((err) => {
          if (err && !(err instanceof NotFoundException)) {
            console.error(err);
            if (props.onError) props.onError();
          }

        });
      })
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      codeReader.reset();
      setCodeReader(new BrowserMultiFormatReader());
    }
  }, []);

  return (
    <video ref={videoRef} src=""></video>
  );
}

export default QRCodeReader;