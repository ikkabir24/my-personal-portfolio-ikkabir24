import React from 'react';

const SecondaryTitle = ({children, tailClass}) => {
    return (
        <h2 className={`text-xl lg:text-3xl font-normal text-white leading-tight ${tailClass}`}>
            {children}
        </h2>
    );
};

export default SecondaryTitle;