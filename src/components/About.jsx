import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen p-8 text-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#00FF8C]">About Me</h2>
        <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg">
          <p className="text-xl mb-4">
            Hi, I'm a passionate developer focused on creating impactful solutions through code.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#00FF8C]">Education</h3>
              <ul className="space-y-2">
                <li>🎓 Computer Science Engineering</li>
                <li>📚 Specializing in AI & ML</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#00FF8C]">Goals</h3>
              <ul className="space-y-2">
                <li>🎯 Master Full-Stack Development</li>
                <li>💡 Contribute to Open Source</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;