import { useState } from "react";
import Converted from "./Converted";
const ShortenLink = () =>{
    const [link, setLink] = useState('');
    const [result, setResult] = useState([]);
    const shortener = () =>{
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(res => {
            if(res.ok){
                res.json()
                .then(data => {
                    const arr = [...result, data.result];
                    setResult(arr);
                    setLink('');
                })
            }
        })

    }
    return(
        <div className="shorten-link">
            <div className="bg-pnk container d-flex p-5 gap-3">
                <input onChange={(e) => setLink(e.target.value)} value={link} type="text" className="rounded-1 px-2" placeholder="Shorten a link here..." />
                <button onClick={shortener} className="shorten-btn col-md-1 rounded-1 text-light fw-bold py-3 px-4">Shorten It!</button>
            </div>
            {
                result.map((item,index) =>{
                    return <Converted key={index} item={item} />
                })
            }
        </div>
    )
}
export default ShortenLink;