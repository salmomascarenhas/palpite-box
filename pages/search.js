import React from "react";
import Link from "next/link";

const Search = () => {
    return (
        <div className="pt-6">
            <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
            <p className="mb-6 my-12 text-center">
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="w-1/5 mx-auto bg-red-100">
                <label className="font-bold" htmlFor="">Seu nome:</label>
                <input className="p-4 block shadow bg-blue-100 my-2 rounded" type="text" />
            </div>
        </div>
    );
}

export default Search;