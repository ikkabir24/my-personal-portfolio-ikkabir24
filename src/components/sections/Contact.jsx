import React, { useRef, useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { Facebook, Github, Linkedin, Mail, MessageSquare, Phone, Send, X } from 'lucide-react';
import SectionBadge from '../../shared/SectionBadge';
import PrimaryTitle from '../../shared/PrimaryTitle';
import SubTitle from '../../shared/SubTitle';
import ContactCard from '../ui/ContactCard';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import SecondaryTitle from '../../shared/SecondaryTitle';
import Social_Icons from '../../shared/Social_Icons';
import { BsTwitterX } from 'react-icons/bs';

const Contact = () => {

    const form = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all fields.'
            })
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email.'
            })
            return;
        }

        Swal.fire({
            title: "Are you sure you want to send this message?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Send"
        }).then((result) => {
            if (result.isConfirmed) {

                emailjs.sendForm("service_6qddivv", "template_frb7uuj", form.current, "KFB-nZ-bOM-Bx3r_f")
                    .then(() => {
                        Swal.fire({
                            title: "Sent!",
                            text: "Message sent successfully.",
                            icon: "success"
                        })

                        setStatus({
                            type: 'success',
                            message: 'Got it! Your message is on its way. I’ll be in touch shortly.'
                        })
                        setFormData({
                            name: '',
                            email: '',
                            message: ''
                        })

                        setTimeout(() => setStatus({
                            type: '',
                            message: ''
                        }), 10000);
                    },
                        (error) => {
                            Swal.fire({
                                title: "Something went wrong!",
                                text: error.text,
                                icon: "error"
                            })
                        }
                    )

            }
        });

    }

    return (
        <section id='contact' className='relative py-20 bg-black overflow-hidden'>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                <FadeIn delay={0}>
                    <div className="w-full flex flex-col gap-6 justify-center items-center mb-12">
                        <PrimaryTitle>Let's Work Together</PrimaryTitle>
                        <SubTitle tailClass={'text-center'}>Thinking about a project? I’d love to help turn your vision into reality.</SubTitle>
                        <SectionBadge label={'Get in Touch'} icon={MessageSquare} />
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12 items-center justify-center">

                    {/* left side - form */}
                    <FadeIn delay={100}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <form
                                ref={form}
                                onSubmit={handleSubmit}
                                className='space-y-6'
                            >
                                {/* Name field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className='block text-sm font-medium text-white/80 mb-2'
                                    >
                                        Name
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                                        onChange={handleChange}
                                        value={formData.name}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='Enter Your Name'
                                    />
                                </div>

                                {/* Email field */}
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className='block text-sm font-medium text-white/80 mb-2'
                                    >
                                        Email
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                                        onChange={handleChange}
                                        value={formData.email}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder='enter@your.email'
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="">
                                    <label
                                        htmlFor="message"
                                        className='block text-sm font-medium text-white/80 mb-2'
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none'
                                        name="message"
                                        id="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Got something exciting in mind? Share it here…'
                                    />

                                </div>
                                <button
                                    className='w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary/60 text-white font-medium rounded-xl hover:shadow-lg 
                                    hover:scale-102 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2'
                                    type="submit"
                                >
                                    <Send className='w-5 h-5 hover:scale-115 transition-transform duration-300' />
                                    Drop A Message
                                </button>

                                {
                                    status.message && (
                                        <div className={`p-4 rounded-xl 
                                            ${status.type === 'success'
                                                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                                : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                            }
                                        `}>
                                            {status.message}
                                        </div>
                                    )
                                }

                            </form>
                        </div>
                    </FadeIn>

                    {/* right side - contact info */}
                    <FadeIn delay={200}>
                        <div className="space-y-4">
                            <div className='space-y-4'>
                                <SecondaryTitle>Find Me Online</SecondaryTitle>
                                <p className="text-white/60 leading-relaxed">Connect with me on social platforms and feel free to start a conversation anytime. I’m always open to discussing new projects, creative ideas, or opportunities to collaborate and contribute to your vision.</p>
                            </div>

                            <div className="space-y-4">

                                <a
                                    href="mailto:ikkabir24@yahoo.com"
                                    className='block'
                                >
                                    <ContactCard label={'Email'} value={'ikkabir24@yahoo.com'} icon={Mail} />
                                </a>

                                <a
                                    href="https://wa.me/8801518977907"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='block'
                                >
                                    <ContactCard label={'WhatsApp'} value={'+880 1518-977907'} icon={FaWhatsapp} />
                                </a>

                                <a
                                    href="tel:+8801890995309"
                                    className='block'
                                >
                                    <ContactCard label={'Contact'} value={'+880 1890-995309'} icon={Phone} />
                                </a>
                            </div>
                            <div className="space-y-4">
                                <SecondaryTitle>Let’s Connect</SecondaryTitle>
                                <div className="flex gap-4">
                                    
                                    <Social_Icons 
                                    icon={Github}
                                    UrL={'https://github.com/ikkabir24'}
                                    />
                                    
                                    <Social_Icons 
                                    icon={Linkedin}
                                    UrL={'https://www.linkedin.com/in/ikkabir24/'}
                                    />

                                    <Social_Icons 
                                    icon={Facebook}
                                    UrL={'https://www.facebook.com/ikkabir24/'}
                                    />

                                    <Social_Icons 
                                    icon={BsTwitterX }
                                    UrL={'https://x.com/ikkabir24'}
                                    />

                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};

export default Contact;