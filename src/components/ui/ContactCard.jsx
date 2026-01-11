import React from 'react';

const ContactCard = ({ icon: Icon, label, value }) => {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300 hover:scale-102">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="">
                    <p className="">{label}</p>
                    <p className=''>{value}</p>
                </div>
            </div>
            <div className="" />
        </div>
    );
};

export default ContactCard;