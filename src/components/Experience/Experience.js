
const Experience = () => {
    return (
        <div id="experience" className="bg-primary-gray md:pb-28 pb-16">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="space-y-5 text-white">
          <h3 className="uppercase text-xl font-medium text-primary-main">
          Experience
          </h3>
          <h2 className="md:text-5xl text-3xl font-semibold">My Work Experience</h2>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-4 gap-8 lg:mt-16 mt-6">
          <div className="text-white space-y-4">
            <span className="text-lg inline-block text-primary-main py-3 px-6 border border-primary-main">
              2020 -2023
            </span>
            <h3 className="md:text-3xl text-xl font-bold">Motion Graphics Designer</h3>
            <h3 className="text-xl font-medium">
              Skill It, Rangpur
            </h3>
            <p className="md:pr-24 pr-0">I specialize in creating captivating motion graphics and editing cartoon videos at Skill It. Additionally, I bring my expertise to the realm of graphic design, contributing my creative skills to deliver visually compelling content.</p>
          </div>
          <div className="text-white space-y-4">
            <span className="text-lg inline-block text-primary-main py-3 px-6 border border-primary-main">
              2021 -2022
            </span>
            <h3 className="md:text-3xl text-xl font-bold">Graphics Design - Intern</h3>
            <h3 className="text-xl font-medium">
            Inspired IT, Rangpur
            </h3>
            <p className="md:pr-24 pr-0">Interned at Inspired IT during my diploma 8th semester, focusing on graphic design. Contributed creatively to captivating visual elements, honing my skills in translating ideas into compelling designs.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Experience;