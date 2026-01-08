import React from 'react';
import PrimaryTitle from '../../shared/PrimaryTitle';
import FadeIn from '../animations/FadeIn';
import { Briefcase } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';   // ✅ add navigation styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import SectionBadge from '../../shared/SectionBadge';
import SubTitle from '../../shared/SubTitle';

const Projects = () => {
    return (
        <section id='projects' className='relative py-20 bg-black overflow-hidden'>
            <RadialGradientBackground variant="about" />
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <PrimaryTitle tailClass={'mb-6'}>Featured Projects</PrimaryTitle>

                        <SubTitle tailClass={'mb-6'}>Showcasing my best work and achievements</SubTitle>

                        <SectionBadge tailClass={'mb-6'} label={"My Works"} icon={Briefcase}/>

                        <div>
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination]}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1, spaceBetween: 20 },
                                    768: { slidesPerView: 2, spaceBetween: 30 },
                                    1024: { slidesPerView: 3, spaceBetween: 30 },
                                }}
                                centeredSlides={true}
                                spaceBetween={30}
                                grabCursor={true}
                                loop={true}   // ✅ infinite scroll
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}   // ✅ navigation buttons
                                className="mySwiper relative"
                            >
                                {projects.map(project => (
                                    <SwiperSlide key={project.id}>
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;