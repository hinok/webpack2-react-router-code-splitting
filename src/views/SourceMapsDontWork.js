import React from 'react';

const DUMMY_PRIVATE = {
    foo: 'bar',
    bar: () => 'Dummy method',
};

const SourceMapsDontWork = () => {
    const methodDoesntExist = DUMMY_PRIVATE['baz'];

    return (
        <div>
            <h1>SourceMapsDontWork view</h1>
            <p>{DUMMY_PRIVATE.bar()}</p>
            <p>{methodDoesntExist()}</p>
        </div>
    );
};

export default SourceMapsDontWork;
