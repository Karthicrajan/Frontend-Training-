import Button from '../button/button';
import './Card.css';
export default function Card({children,title,footerConf}){
    // const {btnLabel} = footerConf;
    // console.log(footerConf?.clickFun);
    return (
        <>
        
        <div className="order-prcess-card">
           {title ? <div className='card-header'>
                <h3>{title}</h3>
            </div> : ''
            }
            {children}
            
          {footerConf?.btnLabel ?  <div className="d-flex justify-content-center mt-5">
                <div className="w-25">
                        <Button label={footerConf.btnLabel} onclick={footerConf?.clickFun} style={"shopbtn"} />  
                </div>
            </div>
            : '' }
            
        </div>
        </>
    )
}