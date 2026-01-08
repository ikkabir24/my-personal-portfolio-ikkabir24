import React from 'react';

const SubTitle = ({children, tailClass}) => {
    return (
        <div className={`text-lg text-white/60 max-w-2xl mx-auto ${tailClass}`}>
            {children}
        </div>
    );
};

export default SubTitle;