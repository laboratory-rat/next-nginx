import { NextPage } from "next";
import { useRouter } from "next/router";
import React from 'react';

const NotFoundPage: NextPage = () => {
    const router = useRouter();
    
    return (
        <div>
            <h2>Moderation not found</h2>
            <h4>pathname: {router.pathname}</h4>
            <h4>basepath: {router.basePath}</h4>
            <h4>asPath: {router.asPath}</h4>
        </div>
    );
};

export default NotFoundPage;
