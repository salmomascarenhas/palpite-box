import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className="container mx-auto">
                    <Link href="/">
                        <a >
                            <img className="mx-auto" src="/logo_palpitebox.png" alt="Palpitebox" />
                        </a>

                    </Link>
                </div>
            </div>
            <div className="bg-gray-300 p-4 shadow-md text-center">
                <Link href='/about'>
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href='/contact'>
                    <a className='px-2 hover:underline'>Contato</a>
                </Link>
                <Link href='/search'>
                    <a className='px-2 hover:underline'>Pesquisa</a>
                </Link>
            </div>
        </>
    );
}
export default Header