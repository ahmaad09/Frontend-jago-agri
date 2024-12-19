import { Fragment, useState} from "react";
import CardProduct from "../components/Elemets/Fragments/CardProduct";
import Button from "../components/Elemets/Button/Index";

const products = [
    {
        id: 1,
        name: "Tas",
        price: 30000,
        image: "/img/tas.jpg",
        description: "lorem insum have to the gays"
    },
    {
        id: 2,
        name: "Tas",
        price: 2000,
        image: "/img/ces.webp",
        description: "lorem insum have to the gays"
    },
    {
        id: 3,
        name: "Tas",
        price: 10000,
        image: "/img/tas.jpg",
        description: "lorem insum have to the gays"
    },
]
const email = localStorage.getItem("username")

const hendaleLogout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    window.location.href = "/login     "
}
const ProductPage = () => {
    const [cart,setCart] = useState([
        {
            name: "Sepatu Baru",
            qyt: 1,
        }
    ])
    return (
        <Fragment>
            <div className="flex justify-end items-center text-white px-10 bg-blue-500 h-20">
                {email}
                <Button classname="bg-black ml-5" onClick={hendaleLogout}>Logout</Button>
            </div>
            <div className="flex gap-3 mx-5 my-5 overflow-y-auto no-scrollbar">
                <div className="w-3/4 flex flex-wrap gap-4">
                    {
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body name={product.name}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer price={product.price}></CardProduct.Footer>
                                <div className="flex justify-center mt-5">
                                </div>
                            </CardProduct>
                        )
                        )
                    }
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl text-blue-500 font-bold">Cart</h1>
                    <ul>{cart.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}</ul>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductPage;