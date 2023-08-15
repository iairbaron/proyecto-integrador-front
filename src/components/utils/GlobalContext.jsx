import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const mezclarOrdenProducts = (array) => {
        const randomIndexes = [...Array(array.length)].map((_, index) => index);
        randomIndexes.sort(() => Math.random() - 0.5);
        let randomProducts = randomIndexes.map((index) => array[index])
        return randomProducts
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("URL DE LA API");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        fetchProducts();
    }, []);

    return (
        <ContextGlobal.Provider value={{ products, mezclarOrdenProducts }}>
            {children}
        </ContextGlobal.Provider>
    );
};
