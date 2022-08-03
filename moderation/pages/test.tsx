import { NextPage } from 'next';
import React from 'react';

const TestPage: NextPage = () => {
    return (
        <div>
            <h2>This is test page</h2>
            <a href="/moderation">Back to main moderation page</a>
        </div>
    )
};

export default TestPage;
