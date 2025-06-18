import React from "react";
import { BiLogoGithub } from "react-icons/bi";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        {/* About Section */}
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Hey! I'm <b>Albin Binu</b>, a final-year Computer Science student at
            the <b>College of Applied Science, Thiruvambadi</b>. I'm passionate
            about <b>programming</b>, especially in <b>backend development</b>{" "}
            and <b>object-oriented languages</b> like <b>Python</b> and{" "}
            <b>Dart</b>. I'm currently learning Flutter to build cross-platform
            apps and improving my skills in <b>app development</b>. Although{" "}
            <b>math</b> and <b>web designing</b> (especially CSS) can be
            challenging, I enjoy working with <b>data structures</b> and backend
            logic. While my design skills are still growing, I focus on clean
            code and strong functionality. I'm always learning and building—one
            step at a time.
          </p>
        </div>

        {/* Certificates */}
        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificates</h1>
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Introduction to Python – SoloLearn
              </h3>
              <h4 className="text-sm font-semibold md:text-lg">
                Completed: August 2024
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Gained foundational knowledge of Python programming, including
                variables, data types, control structures, functions, and basic
                object-oriented concepts. The course included hands-on coding
                exercises and assessments to reinforce learning.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Introduction to C – SoloLearn
              </h3>
              <h4 className="text-sm font-semibold md:text-lg">
                Completed: August 2024
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Covered the basics of C programming such as syntax, data types,
                operators, control flow, and functions. Developed a solid
                foundation for understanding low-level programming and
                system-level logic.
              </p>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">References</h1>
          <div className="flex flex-wrap gap-10">
            <div className="space-y-1">
              <h3 className="text-lg font-light">Designer</h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Sooraj Valsaraj
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Phone: ---</p>
              <p className="text-gray-600 dark:text-gray-400">Email: soorajvalsaraj24@gmail.com</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-light">Designer</h3>
              <h2 className="text-base font-semibold md:text-2xl">Ashin P</h2>
              <p className="text-gray-600 dark:text-gray-400">Phone: ---</p>
              <p className="text-gray-600 dark:text-gray-400">Email: ashinssj3@gmail.com</p>
            </div>
          </div>
        </div>

        {/* mini projects */}
        
       <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
<ul className="space-y-4">
  <li>
    <h3 className="font-semibold flex items-center gap-2 text-lg md:text-xl">
      Portfolio Website
      <a
        href="https://github.com/Albin-Binu/personal-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-white transition-colors"
        title="View on GitHub"
      >
        <BiLogoGithub size={20} />
      </a>
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
      A responsive portfolio website built using React.js and Bootstrap. Features include animations, social linking, and contact information.
    </p>
  </li>
</ul>

      </main>
    </div>
  );
};

export default Home;
