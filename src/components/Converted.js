import { useState } from "react";

const Converted = ({item}) => {
    const [link, setLink] = useState(item.short_link);
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(link)
        setCopied(true);
    }
    return(
        <div className="converted mt-2">
            <div className="container-fluid p-2 d-flex justify-content-between align-items-center">
                <p className="fw-bold text-light original">
                    {item.original_link}
                </p>
                <div className="copy-sec d-flex align-items-center gap-2">
                    <p className="fw-semibold short">
                        {item.short_link}
                    </p>
                    <button onClick={handleCopy} className={`${copied ? 'copied-btn' : 'copy-btn'} rounded-1 text-light fw-bold`}>{!copied ? 'Copy' : 'Copied!'}</button>
                </div>
            </div>
        </div>
    )
}
export default Converted