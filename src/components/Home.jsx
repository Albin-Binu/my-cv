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

        {/* Certificate section */}
        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificates</h1>
          <div className="space-y-10">
            {/* Python Certificate */}
            <div className="space-y-2 border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold">
                Introduction to Python – SoloLearn
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Completed: August 2024
              </p>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Successfully completed a beginner-level course on Python
                programming. Covered topics included variables, data types,
                control structures, functions, and basic object-oriented
                concepts, along with interactive coding challenges to reinforce
                learning.
              </p>
            </div>

            {/* C Certificate */}
            <div className="space-y-2 border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold">
                Introduction to C – SoloLearn
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Completed: August 2024
              </p>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Completed a foundational course on C programming. Topics
                included syntax, data types, operators, control flow, and
                function structures—laying the groundwork for system-level
                programming and logical thinking in low-level languages.
              </p>
            </div>

            {/* IV Certificate */}
            <div className="space-y-2 border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold">
                Industrial Visit – Cybrosys Technologies
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Participated: December 2024
              </p>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Participated in a one-day industrial visit at Cybrosys
                Technologies. Gained valuable exposure to real-world software
                development environments, including insights into project
                workflows, team structures, and development tools used in the IT
                industry.
              </p>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">References</h1>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            {/* Reference 1 */}
            <div className="space-y-2 border-l-4 border-indigo-500 pl-4">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Professional Reference
              </h3>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Sooraj Valsaraj
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Role: Editor & Desinger
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Email:{" "}
                <a
                  href="mailto:soorajvalsaraj24@gmail.com"
                  className="underline hover:text-indigo-600"
                >
                  soorajvalsaraj24@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Phone: ---
              </p>
            </div>

            {/* Reference 2 */}
            <div className="space-y-2 border-l-4 border-indigo-500 pl-4">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Professional Reference
              </h3>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Ashin P
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Role: Designer & Game tester
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Email:{" "}
                <a
                  href="mailto:ashinssj3@gmail.com"
                  className="underline hover:text-indigo-600"
                >
                  ashinssj3@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Phone: ---
              </p>
            </div>
          </div>
        </div>

        {/* mini projects */}

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
          {/* project 1 */}
          <ul className="space-y-6">
            <li className="border-l-4 border-indigo-500 pl-4">
              <h3 className="flex items-center gap-3 text-lg font-semibold md:text-xl text-gray-900 dark:text-white">
                Portfolio Website
                <a
                  href="https://github.com/Albin-Binu/personal-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                  title="View Source Code on GitHub"
                >
                  <BiLogoGithub size={22} />
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                A fully responsive personal portfolio website built using{" "}
                <b>React.js</b> and <b>Bootstrap</b>. Includes features like
                animated components, contact form, social media integration,
                dark mode support, and project showcasing—all optimized for
                smooth navigation and accessibility.
              </p>
            </li>
          </ul>
          {/* project -2  */}
          <ul className="space-y-6">
            <li className="border-l-4 border-indigo-500 pl-4">
              <h3 className="flex items-center gap-3 text-lg font-semibold md:text-xl text-gray-900 dark:text-white">
                College Website Clone
                <a
                  href="https://github.com/Albin-Binu/cas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                  title="View Source Code on GitHub"
                >
                  <BiLogoGithub size={22} />
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Recreated the official College of Applied Science, Thiruvambadi
                website using HTML, CSS, and basic JavaScript as a learning
                project during my first year. While not responsive, the project
                helped me understand web page structure, semantic HTML, and
                styling fundamentals.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
