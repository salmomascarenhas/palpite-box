import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Projeto desenvolvido por: Salmo Mascarenhas / {/*ignore line*/}
                <a className="hover:underline" href="https://www.linkedin.com/in/salmomascarenhas/" target="_blank">Linkedin</a>  /
                <a className="hover:underline" href="https://github.com/salmomascarenhas" target="_blank">Github</a>
                <div className="mt-2">
                    <img className="inline p-4" src="/logo_semana_fsm.png" alt="Logo Evento" />
                    <img className="inline p-4" src="/logo_devpleno.png" alt="Logo DevPleno" />
                </div>
            </div>
        </div>

    );
}

export default Footer;