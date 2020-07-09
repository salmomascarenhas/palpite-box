import React from 'react';
import Link from 'next/link';
import Title from '../components/Title';

const About = () => {
    return (
        <div>
            <Title title='Sobre' />
            <h1>Sobre</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    );
}

export default About;