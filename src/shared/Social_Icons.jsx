import React from 'react';

const Social_Icons = ({ UrL, icon: Icon }) => {
    return (
        <a
            href={UrL}
            target='_blank'
            rel='noopener noreferrer'
            className='p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group'
        >
            <Icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
        </a>
    );
};

export default Social_Icons;