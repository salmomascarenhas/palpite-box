import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <h1>Sobre</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    );
}

export default About;