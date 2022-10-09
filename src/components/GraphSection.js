import BrandRecognition from '../images/icon-brand-recognition.svg'
import DetailedRecords from '../images/icon-detailed-records.svg'
import FullyCustomizable from '../images/icon-fully-customizable.svg'

const GraphSection = () => {
    return(
        <div className="graph-section">
            <div className="container py-5">
                <div className="text-section d-flex flex-column align-items-center">
                    <p className="display-5 fw-bold">Advanced Statistics</p>
                    <p className="description fs-5 text-center text-muted">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className="graphs row">
                    <div className="col-md-4 graph-wrapper">
                        <div className="graph">
                            <div className="graph-img">
                                <img src={BrandRecognition} alt="" />
                            </div>
                            <div className="graph-header">
                                <p className="fw-bold">Brand Recognition</p>
                            </div>
                            <div className="graph-desc">
                                <p className="text-muted">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 graph-wrapper">
                        <div className="graph">
                            <div className="graph-img">
                                <img src={DetailedRecords} alt="" />
                            </div>
                            <div className="graph-header">
                                <p className="fw-bold">Detailed Records</p>
                            </div>
                            <div className="graph-desc">
                                <p className="text-muted">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 graph-wrapper">
                        <div className="graph">
                            <div className="graph-img">
                                <img src={FullyCustomizable} alt="" />
                            </div>
                            <div className="graph-header">
                                <p className="fw-bold">Fully Customizable</p>
                            </div>
                            <div className="graph-desc">
                                <p className="text-muted">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GraphSection;