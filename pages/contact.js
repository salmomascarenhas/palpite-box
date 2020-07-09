import React from 'react';
import Link from 'next/link';
import Title from '../components/Title';

const Contact = () => {
    return (
        <div>
            <Title title='Contato' />
            <h1>Contato</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    );
}

export default Contact;
