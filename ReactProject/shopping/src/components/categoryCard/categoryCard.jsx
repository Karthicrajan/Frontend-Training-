export default function CategoryCard({data}){
    const {cat_imag,category} = data;
    return (
        <>
            <div class="col col-md">
                <div className="cat-card text-center"> 
                    <div className="cat-image-container">
                        <img className="rounded-circle" src={cat_imag} ></img>
                        <p className="fs-5 font-weight-bold">{category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}