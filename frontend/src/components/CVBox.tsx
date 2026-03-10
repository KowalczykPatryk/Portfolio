import PDFPreview from './PDFPreview';
import cv from "../files/example.pdf";

function CVBox()
{
    return (
        <>
            <div className="gap-2 p-4 bg-white flex flex-col rounded-xl shadow-md">
                <PDFPreview url={cv} altName="CV First Page Preview" />
                <div className="flex flex-row justify-center">
                    <a href={cv} target="_blank" rel="noreferrer">Open PDF</a>
                </div>
            </div>
        </>
    );
}
export default CVBox;