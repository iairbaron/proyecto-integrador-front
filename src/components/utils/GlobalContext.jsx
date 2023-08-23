import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [userEmail, setUserEmail] = useState("");

    const mezclarOrdenProducts = (array) => {
        const randomIndexes = [...Array(array.length)].map((_, index) => index);
        randomIndexes.sort(() => Math.random() - 0.5);
        let randomProducts = randomIndexes.map((index) => array[index]);
        return randomProducts;
    };


    const submitProduct = async (url,product) => {
        try {
            const response = await axios.post(url, product);
            console.log("Producto enviado:", response.data);
            setProducts([...products, response.data]); // Suponiendo que la respuesta es el producto creado
            return true;
        } catch (error) {
            console.error("Error al enviar el producto:", error);
            return false;
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();

        const emailFromStorage = sessionStorage.getItem("email");
        if (emailFromStorage) {
            setUserEmail(emailFromStorage)
            console.log("aaaa "+ userEmail);
        }
    }, []);

    return (
        <ContextGlobal.Provider value={{ products, mezclarOrdenProducts, submitProduct, userEmail  }}>
            {children}
        </ContextGlobal.Provider>
    );
};
