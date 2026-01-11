import React from 'react';
import { PERSONAL_INFO } from '../../utils/constants';
import { Code } from 'lucide-react';

const Logo = ({tailClass}) => {
    return (
        <div className={`flex items-center gap-4 ${tailClass}`}>
            <Code className='w-6 h-6 text-primary' />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='text-4xl font-bold bg-linear-to-r from-primary via via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
                aria-label='home'
            >
                {PERSONAL_INFO.name.split(' ')[2]}
            </button>
        </div>
    );
};

export default Logo;