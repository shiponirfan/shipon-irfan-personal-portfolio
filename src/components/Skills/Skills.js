const Skills = () => {
  return (
    <div id="skills" className="bg-primary-gray md:py-28 py-16">
      <div className="container px-6 lg:px-8 mx-auto flex flex-col lg:flex-row justify-center items-center gap-16">
        <div className="lg:w-1/2 w-full text-white md:space-y-5 space-y-3 text-xs md:text-base">
          <h3 className="uppercase text-xl font-medium text-primary-main">
            My Skills
          </h3>
          <h2 className="md:text-5xl text-3xl font-semibold">
            Passionate & Proficient Developer
          </h2>
          <p>
            Expertly navigating the world of web development, I bring
            proficiency in the MERN stack, with a strong focus on React.js. My
            skills extend to crafting responsive and visually appealing user
            interfaces using Tailwind CSS and Material UI. I am deeply committed
            to writing clean and efficient code, translating design concepts
            into seamless digital experiences. Let&apos;s innovate together!
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-full px-4">
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">React Js</h2>
              <div className="bg-primary-blue-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[99%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  99%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">Next Js</h2>
              <div className="bg-primary-blue-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[85%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  85%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">Tailwind CSS</h2>
              <div className="bg-primary-blue-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[99%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  99%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">Material UI</h2>
              <div className="bg-primary-blue-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  80%
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">JavaScript</h2>
              <div className="bg-primary-blue-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[75%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
