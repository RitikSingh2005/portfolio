import React from "react";

import { certificates } from "../../constants";




const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Certifications that validate my skills and continuous learning journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Certificate Entries */}
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {cert.title}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {cert.issuer}
                    </h4>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {cert.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">
                {cert.desc}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white py-1 px-2 rounded-full mt-4 text-lg font-bold transition   duration-300   transform hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}
              >
               View Certificate 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
