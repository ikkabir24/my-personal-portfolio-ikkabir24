import React from 'react';

const SubTitle = ({children, tailClass}) => {
    return (
        <div className={`text-lg text-white/60 max-w-2xl ${tailClass}`}>
            {children}
        </div>
    );
};

export default SubTitle;