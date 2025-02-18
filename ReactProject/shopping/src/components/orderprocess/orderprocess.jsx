import './orderprocess.css';
export default function Orderprocess({processTitle,processIcon}){
    return(
        <>
        <div class="col">
            <div className="step-card">
                <div className="d-flex gap-3 align-items-center">
                    <span className="fs-2"><i class={processIcon}></i></span>
                    <h5 className="order-process-title">{processTitle}</h5>
                </div>
            </div>
        </div>
        </>
    )
}