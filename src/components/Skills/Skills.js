const Skills = () => {
  return (
    <div className="bg-primary-blue-gray py-28">
      <div className="container px-6 lg:px-8 mx-auto flex justify-center items-center gap-16">
        <div className="w-1/2 text-white space-y-5">
          <h3 className="uppercase text-xl font-medium text-primary-main">
            My Skills
          </h3>
          <h2 className="text-5xl font-semibold">
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
        <div className="w-1/2">
          <div className="w-full px-4">
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">React Js</h2>
              <div className="bg-primary-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[99%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  99%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">Next Js</h2>
              <div className="bg-primary-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[85%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  85%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">Tailwind CSS</h2>
              <div className="bg-primary-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[99%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  99%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">Material UI</h2>
              <div className="bg-primary-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                <div className="bg-primary-main absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl font-semibold text-primary-dark">
                  80%
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-white text-xl mb-1">JavaScript</h2>
              <div className="bg-primary-gray dark:bg-dark-3 relative h-4 w-full rounded-2xl">
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
