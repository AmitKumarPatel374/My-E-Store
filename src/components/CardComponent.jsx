import '../index.css';

const CardComponent = ({ image, productname, price }) => {
    return (
        <div className="card border w-[14rem] rounded-t-xl cursor-pointer overflow-hidden">
            <div className="w-[14rem] h-[12rem] border-b flex justify-center overflow-hidden">
                <img className="w-[10rem] h-[12rem] object-cover " src={image} alt="" />
            </div>
            <div className="bg-[#F3A26D] p-3 flex flex-col items-center">
                <h2 className="font-bold text-blue-600">{productname}</h2>
                <p className="text-sm">{price}</p>
            </div>
        </div>
    )
}

export default CardComponent

