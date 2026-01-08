import React from 'react';
import FadeIn from '../animations/FadeIn';
import { backEndSkills, frontEndSkills, toolsSkill } from '../../data/skills';
import { Box } from 'lucide-react';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import PrimaryTitle from '../../shared/PrimaryTitle';
import SectionBadge from '../../shared/SectionBadge';
import SubTitle from '../../shared/SubTitle';

const Skills = () => {
    return (
        <section id='skills' className='relative min-h-screen overflow-hidden flex flex-col items-center gap-8'>

            <RadialGradientBackground />

            <FadeIn delay={100}>
                <div className='text-center'>
                    <PrimaryTitle tailClass={'mb-6'}>Tech Skills</PrimaryTitle>
                    <SubTitle>The technologies I have work with to build amazing products.</SubTitle>
                </div>
            </FadeIn>


            {/* front end skills */}
            <FadeIn delay={200}>
                <SectionBadge label={"FrontEnd"} icon={Box}/>
            </FadeIn>

            <FadeIn delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-7xl">
                    {
                        frontEndSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="group min-w-35 relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                            >
                                <img src={skill.iconImgSrc} alt={skill.name} />
                                <div className="text-sm text-white/80 font-medium text-center">
                                    {skill.name}
                                </div>

                                {/* hover glow effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))
                    }
                </div>
            </FadeIn>

            {/* back end skills */}
            <FadeIn delay={400}>
                <SectionBadge label={"BackEnd"} icon={Box}/>
            </FadeIn>

            <FadeIn delay={500}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-7xl">
                    {
                        backEndSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="group min-w-35 relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                            >
                                <img src={skill.iconImgSrc} alt={skill.name} />
                                <div className="text-sm text-white/80 font-medium text-center">
                                    {skill.name}
                                </div>

                                {/* hover glow effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))
                    }
                </div>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={400}>
                <SectionBadge label={"Tools"} icon={Box}/>
            </FadeIn>

            <FadeIn delay={500}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-7xl">
                    {
                        toolsSkill.map((skill, i) => (
                            <div
                                key={i}
                                className="group min-w-35 relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                            >
                                <img src={skill.iconImgSrc} alt={skill.name} />
                                <div className="text-sm text-white/80 font-medium text-center">
                                    {skill.name}
                                </div>

                                {/* hover glow effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))
                    }
                </div>
            </FadeIn>
        </section>
    );
};

export default Skills;