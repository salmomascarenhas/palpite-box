import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <p className="my-12 text-center">
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="text-center my-12">
                <Link href="/search" >
                    <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg">
                        Dar opinião ou sugestão.
                    </a>
                </Link>
            </div>
            <p className="my-12 text-center">
                Mensagem de desconto.
            </p>
        </div>
    );
}

export default Index