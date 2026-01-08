import React from 'react';

const PrimaryTitle = ({children, tailClass}) => {
    return (
        <h2 className={`text-4xl lg:text-5xl font-normal text-white leading-tight ${tailClass}`}>
            {children}
        </h2>
    );
};

export default PrimaryTitle;