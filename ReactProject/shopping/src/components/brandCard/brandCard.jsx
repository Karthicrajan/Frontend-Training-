export default function BrandCard({logo}){
    return(
        <>
        <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <img className="w-100" src={logo}/>
                        </div>
                    </div>
                </div>
        </>
    );
}