import { BookCheck, BookDown, MapPin, School } from 'lucide-react';
import React from 'react';

const EducationCard = ({ edu }) => {
    return (
        <div
            className={`group relative ${edu.status === "studying"
                    ? 'bg-white/15 hover:border-primary/60'
                    : 'bg-white/5 hover:border-primary/40'
                } border-2 border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300`}
        >
            <div className="flex gap-6 md:gap-8">
                <div className="w-10 h-10 rounded-lg md:w-16 md:h-16 md:rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {
                        edu.status === "studying"
                            ? <BookDown className='w-5 h-5 md:w-8 md:h-8 text-primary' />
                            : <BookCheck className='w-5 h-5 md:w-8 md:h-8 text-primary' />
                    }
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                    </h3>

                    <div className='mb-4'>
                        <span className='flex gap-2 items-center'>
                            <School className="w-5 h-5 text-primary" />
                            <p className="text-lg font-semibold text-white/80">
                                {edu.institution}
                            </p>
                        </span>

                        <span className='flex gap-2 items-center'>
                            <MapPin className="w-5 h-5 text-primary" />
                            <p className="text-lg font-semibold text-white/80">
                                {edu.location}
                            </p>
                        </span>
                    </div>

                    {/* Added Details */}
                    {
                        edu.department &&
                        <p className="text-white/70">
                            <span className="font-medium text-white/90">Department:</span> {edu.department}
                        </p>
                    }

                    {
                        edu.group &&
                        <p className="text-white/70">
                            <span className="font-medium text-white/90">Group:</span> {edu.group}
                        </p>
                    }

                    <p className="text-white/70">
                        <span className="font-medium text-white/90">Session:</span> {edu.session}
                    </p>

                    {
                        edu.result &&
                        <p className="text-white/70">
                            <span className="font-medium text-white/90">Result:</span> {edu.result}
                        </p>
                    }

                    {
                        edu.yearPassing &&
                        <p className="text-white/70">
                            <span className="font-medium text-white/90">Year of Passing:</span> {edu.yearPassing}
                        </p>
                    }
                </div>
            </div>

            {
                edu.status === "studying" && (
                    <span
                        className="px-5 py-2 text-xs font-semibold bg-primary/90 group-hover:bg-[#2a5f96] border border-primary/20 rounded-full transition-colors duration-300 flex gap-2 items-center w-fit absolute -top-4.5 -right-4 z-15 text-white"
                    >
                        <div className='bg-green-400 w-3 h-3 rounded-full' />
                        Currently Studying
                    </span>
                )
            }
            <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
        </div>
    );
};

export default EducationCard;
