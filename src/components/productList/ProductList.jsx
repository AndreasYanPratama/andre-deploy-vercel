// import "./productList.css";
import Product from "../product/Product";
import { products } from "@/libraries/repositories/data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                    some portfolio works made by me
                </p>
            </div>
            <div className="pl-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc}/>
            ))}
            </div>
        </div>
    )
}

export default ProductList;