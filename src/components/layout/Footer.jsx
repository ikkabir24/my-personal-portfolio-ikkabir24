import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";
import Logo from '../ui/Logo';
import SubTitle from '../../shared/SubTitle';
import SemiTitle from '../../shared/SemiTitle';
import { FaCalendarCheck, FaCopyright, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaSquareCheck } from 'react-icons/fa6';
import { MdBuildCircle } from 'react-icons/md';

const Footer = () => {
    return (
        // <div className="border-t border-white/10 bg-black/80">
        //     <div className="max-w-7xl mx-auto px-6 py-10">
        //         <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        //             {/* Left - Personal Note */}
        //             <p className="text-sm text-white/60 text-center md:text-left">
        //                 Built with care, curiosity, and a love for clean code.
        //             </p>

        //             {/* Center - Copyright */}
        //             <span>
        //                 <p className="text-xs text-white/40">
        //                     © {new Date().getFullYear()}
        //                 </p>
        //                 <p className="text-xs text-white/40">Kabir. All rights reserved.</p>
        //             </span>

        //             {/* Right - Socials */}
        //             <div className="flex items-center gap-4">
        //                 <a
        //                     href="https://github.com/yourusername"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="text-white/60 hover:text-primary transition-colors"
        //                 >
        //                     <Github size={18} />
        //                 </a>

        //                 <a
        //                     href="https://linkedin.com/in/yourusername"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="text-white/60 hover:text-primary transition-colors"
        //                 >
        //                     <Linkedin size={18} />
        //                 </a>

        //                 <a
        //                     href="mailto:your@email.com"
        //                     className="text-white/60 hover:text-primary transition-colors"
        //                 >
        //                     <Mail size={18} />
        //                 </a>
        //             </div>

        //         </div>
        //     </div>
        // </div>


        <footer className="relative bg-black overflow-hidden border-t border-white/15">
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/80 opacity-30 rounded-full blur-3xl" />

                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/80 opacity-30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-px-8 py-2 lg:py-5">
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
                    <div className='space-y-4'>
                        <Logo tailClass={'mb-2'} />
                        <SemiTitle>Built with care, curiosity, and a love for clean code.</SemiTitle>
                    </div>

                    <span className='md:text-right'>
                        <SemiTitle tailClass={'flex items-center md:justify-end gap-2'}>
                            <FaCopyright className='w-4 h-4 text-primary' /> 
                            {new Date().getFullYear()}
                        </SemiTitle>
                        <SemiTitle tailClass={'flex items-center md:justify-end gap-2'}>
                            <FaSquareCheck className='w-4 h-4 text-primary' />
                            Kabir. All rights reserved.
                        </SemiTitle>
                        <SemiTitle tailClass={'flex items-center md:justify-end gap-2'}>
                            <MdBuildCircle className='w-5 h-5 text-primary' /> Built using <FaReact className="w-6 h-6 text-primary animate-[spin_4s_linear_infinite]" /> & <SiTailwindcss className='w-6 h-6 text-primary animate-pulse' />
                        </SemiTitle>
                    </span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;