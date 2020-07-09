import React from 'react';
import Head from 'next/head';

const Title = ({ title }) => {
    return (
        <Head>
            <title>{title} - PalpiteBox</title>
        </Head>
    );
}

export default Title;