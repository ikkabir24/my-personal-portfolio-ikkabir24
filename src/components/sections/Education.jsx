import { GraduationCap } from "lucide-react";
import SectionBadge from "../../shared/SectionBadge";
import FadeIn from "../animations/FadeIn";
import PrimaryTitle from "../../shared/PrimaryTitle";
import SubTitle from "../../shared/SubTitle";
import { educationData } from "../../data/education";
import EducationCard from "../ui/EducationCard";

export default function Education() {
  return (
    //   <section id="education" className="w-full max-w-4xl mx-auto px-6 py-16">
    //     {/* Badge */}
    //     <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit mb-6">
    //       <BookOpen className="w-4 h-4 text-primary" />
    //       <span className="text-sm text-primary font-medium">
    //         Academic Journey
    //       </span>
    //     </div>


    //     {/* Title */}
    //     <div className="mb-10">
    //       <div className="flex items-center gap-3 mb-2">
    //         <GraduationCap className="w-7 h-7 text-gray-900" />
    //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    //           Education
    //         </h2>
    //       </div>
    //       <p className="text-gray-600 text-base md:text-lg">
    //         Academic background and qualifications
    //       </p>
    //     </div>


    //     {/* Education Cards */}
    //     <div className="space-y-6">
    //       {educationData.map((item) => (
    //         <div
    //           key={item.id}
    //           className="bg-white rounded-2xl shadow-md p-6"
    //         >
    //           <h3 className="text-xl font-semibold text-gray-900">
    //             {item.degree}
    //           </h3>


    //           <p className="text-gray-700 mt-1">
    //             {item.department && `${item.department}, `}
    //             <span
    //               className={
    //                 item.highlight
    //                   ? "font-semibold text-blue-600"
    //                   : ""
    //               }
    //             >
    //               {item.institution}
    //             </span>
    //           </p>


    //           <p className="text-sm text-gray-500 mt-2">
    //             {item.session && `Session: ${item.session}`}
    //             {item.year && `Year: ${item.year}`}
    //             {item.result && ` · Result: ${item.result}`}
    //             {item.status && (
    //               <span className="inline-block mt-2 ml-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
    //                 {item.status}
    //               </span>
    //             )}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    <section id="education" className="relative bg-black overflow-hidden ">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute top-50 inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
            `,
          backgroundSize: '30px 30px'
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="flex flex-col justify-center items-center gap-6 mb-6">
            <PrimaryTitle>Education Qualification</PrimaryTitle>
            <SubTitle>Academic background and qualifications</SubTitle>
            <SectionBadge icon={GraduationCap} label={'Academic Journey'} />
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {
          educationData.map((edu, i) => <FadeIn
            delay={100 + i * 100}
            key={i}>
            <EducationCard
              edu={edu}
            ></EducationCard>
          </FadeIn>
          )
        }
      </div>

    </section>
  );
}
