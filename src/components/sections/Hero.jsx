import React from 'react';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import FadeIn from '../animations/FadeIn';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
            <RadialGradientBackground variant="hero" />

            {/* content container */}
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    {/* left column - Intro & Designation */}
                    <div className='text-left'>
                        <FadeIn delay={0}>
                            <div className='flex flex-col gap-2'>
                                <div className='inline-flex w-fit items-center gap-2.5 px-[18px] py-[11px] bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full'>
                                    <Star className='w-4 h-4 text-white fill-white' />
                                    <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                                        {PERSONAL_INFO.title}
                                    </span>
                                </div>
                                <div className='inline-flex w-fit items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full'>
                                    <MapPin className='w-4 h-4 text-white' />
                                    <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                                        Based in {PERSONAL_INFO.location}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight'>
                                MERN Stack Developer Portfolio
                            </h1>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className='text-lg text-white/70 max-w-[550px] mb-8'>Building seamless, scalable web experiences with the MERN Stack. Transforming ideas into exceptional digital experiences.</p>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <button
                                className='inline-flex items-center gap-0 mb-12 group'
                                onClick={() => scrollToSection('contact')}
                            >
                                <div className='relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base'>
                                    Get in Touch
                                </div>
                            </button>
                        </FadeIn>

                        {/* in future stats will be here */}
                    </div>

                    {/* right column - Developer image */}
                    <FadeIn delay={200}>
                        <div className='relative'>
                            <div className='relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group'>
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                                </div>

                                {/* image container */}
                                <div className="relative rounded-2xl overflow-hidden m-[3px] h-[calc(100%-2px)]">
                                    <img
                                        src="/Dev_Image.png"
                                        alt="Dev_Image"
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                {/* technology logos */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <FadeIn delay={500}>
                                        <div className="flex items-center gap-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiMongodb className='w-full h-full text-primary font-extrabold' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiExpress className='w-full h-full text-primary stroke-1' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiReact className='w-full h-full text-primary' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiNodedotjs className='w-full h-full text-primary' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiNextdotjs className='w-full h-full text-primary' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiTailwindcss className='w-full h-full text-primary' />
                                            </div>

                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* scroll indicator */}
            <button
                className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'
                onClick={() => scrollToSection('about')}
            >
                <ChevronDown className='w-8 h-8 text-primary' />
            </button>

        </section>
    );
};

export default Hero;