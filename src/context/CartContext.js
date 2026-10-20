import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";


const initialState =
{
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => {
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload:
            {
                products: updatedCartList
            }

        })
    };
    const removeProduct = (product) => {
        const updatedCartList = state.cartList.filter(p => p.id !== product.id);
        updateTotal(updatedCartList);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:
            {
                products: updatedCartList
            }

        })
    };
    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price)

        dispatch({
            type: "UPDATE_TOTAL",
            payload:
            {
                total
            }

        })
    };
    const value = {
        total: state.total,
        cartList: state.cartList,
        addProduct,
        removeProduct
    };

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

export const UseCart = () => {
    return useContext(CartContext);
}