import React from 'react';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import FadeIn from '../animations/FadeIn';
import { Brain, Code2, Download, HatGlasses, Sparkles, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import PrimaryTitle from '../../shared/PrimaryTitle';
import SectionBadge from '../../shared/SectionBadge';

const About = () => {
    return (

        <section id='about' className='relative py-20 bg-black overflow-hidden'>
            <RadialGradientBackground variant='about' />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* main grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

                    {/* left column - about me */}
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={60}>
                                <SectionBadge label={"MERN Stack Developer"} icon={Code2}/>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <PrimaryTitle>About Me</PrimaryTitle>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    <p className='text-justify text-base text-white/70 leading-relaxed'>{PERSONAL_INFO.bio}</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <button className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 group'>
                                    <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                                    Download Resume
                                </button>
                            </FadeIn>
                        </div>
                    </div>

                    {/* right column - info grid */}
                    <FadeIn delay={200}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="md:col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <HatGlasses className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                                            <p className="text-sm text-white/70 leading-relaxed ">Focused on developing scalable, maintainable web applications with modern technologies and best practices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 h-full bg-linear-to-br from-primary/30 to-primary/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Sparkles className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
                                            <p className="text-sm text-white/70 leading-relaxed ">I value clean, readable code that is easy to maintain and scale over time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 h-full bg-linear-to-br from-primary/30 to-primary/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Zap className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                                            <p className="text-sm text-white/70 leading-relaxed ">Optimized for speed and efficiency in every project.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Brain className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Mindset</h3>
                                            <p className="text-sm text-white/70 leading-relaxed ">With a growth-driven and logical approach, I focus on consistent, independent work that makes a real impact.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </FadeIn>

                </div>
            </div>

        </section>
    );
};

export default About;