const Education = () => {
  return (
    <div id="education" className="bg-primary-gray py-28">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="space-y-5 text-white">
          <h3 className="uppercase text-xl font-medium text-primary-main">
            Education
          </h3>
          <h2 className="text-5xl font-semibold">My Educational Journey</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-16">
          <div className="text-white space-y-4">
            <span className="text-lg inline-block text-primary-main py-3 px-6 border border-primary-main">
              2017 -2021
            </span>
            <h3 className="text-3xl font-bold">Diploma in Engineering</h3>
            <h3 className="text-xl font-medium">
              Image Polytechnic Institute, Rangpur
            </h3>
            <h3 className="text-xl">
              Department: Computer Science & Enginnering
            </h3>
            <h3 className="text-xl">GPA: 3.65/4</h3>
          </div>
          <div className="text-white space-y-4">
            <span className="text-lg inline-block text-primary-main py-3 px-6 border border-primary-main">
              2012 -2017
            </span>
            <h3 className="text-3xl font-bold">Secondary School Certificate</h3>
            <h3 className="text-xl font-medium">
              Afan Ullah High School, Rangpur
            </h3>
            <h3 className="text-xl">Group: Commerce</h3>
            <h3 className="text-xl">GPA: 3.75/5</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
