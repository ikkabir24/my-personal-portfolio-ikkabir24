import React from 'react';

const SectionBadge = ({ icon: Icon, label, tailClass }) => {

    return (
        <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit ${tailClass}`}>
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">{label}</span>
        </div>
    );
};

export default SectionBadge;