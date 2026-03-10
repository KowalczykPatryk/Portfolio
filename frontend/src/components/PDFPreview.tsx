import { pdfToImg } from "pdftoimg-js/browser";
import { useState, useEffect } from "react";

interface PDFPreviewProps {
  url: string,
  altName?: string
}

function PDFPreview({url, altName}: PDFPreviewProps)
{

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    async function generatePreview()
    {
        const img = await pdfToImg(url, {
          imgType: "png",
          pages: "firstPage",
        });
        setImage(img);
    }
    generatePreview();
  }, [url]);
  if (!image) return <div>Loading...</div>;
  else return <img src={image} alt={altName}/>;
}

export default PDFPreview;