import BrandCard from "../brandCard/brandCard";
import Card from "../Card/Card";

export default function BrandSection(){
    return(
        <>
         <div className="order-process-section">
            <Card title={"Brands"}>
            <div class="row row-cols-5">
                <BrandCard logo={"https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_248,h_139,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp"}/>
                <BrandCard logo={"https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_248,h_139,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp"}/>
                <BrandCard logo={"https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_248,h_139,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp"}/>
                <BrandCard logo={"https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_248,h_139,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp"}/>
                <BrandCard logo={"https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_248,h_139,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp"}/>
                
            </div>
            </Card>
         </div>
        </>
    )
}