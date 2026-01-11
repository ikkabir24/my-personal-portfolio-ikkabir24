import React from 'react';

const SemiTitle = ({tailClass, children}) => {
    return (
        <p className={`text-white/60 text-sm leading-relaxed ${tailClass}`}>
            {children}
        </p>
    );
};

export default SemiTitle;