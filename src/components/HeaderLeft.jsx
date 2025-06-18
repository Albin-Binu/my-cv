import React from "react";
import {
  BiCookie,
  BiCurrentLocation,
  BiEnvelope,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTelegram,
  BiMoon,
  BiMovie,
  BiMusic,
  BiSun,
} from "react-icons/bi";
import { BsAirplane } from "react-icons/bs";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-5">
          <img
            src="https://avatars.githubusercontent.com/u/93376762?v=4"
            alt="profile-pic"
            className="w-32 rounded-full"
          />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Albin <span className="font-semibold text-red-600">Binu</span>
            </h1>
            <h3 className="text-xl font-light">Python Developer</h3>
          </div>
          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-5">
              <BiCurrentLocation className="text-xl" />
              <span>Kerala, Kozhikode</span>
            </li>
            <li className="flex items-center gap-5">
              <BiEnvelope className="text-xl" />
              <span><a href="mailto:albinbinuk17@gmail.com">albinbinuk17@gmail.com</a></span>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start justify-start gap-5 border p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-5">
              <BiLogoGithub className="text-xl" />
              <span>
                <a
                  href="https://github.com/Albin-Binu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Albin-Binu
                </a>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <BiLogoInstagram className="text-xl" />
              <span>
                <a
                  href="https://instagram.com/albinbinu.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  albinbinu.me
                </a>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <BiLogoFacebook className="text-xl" />
              <span>
                <a
                  href="https://facebook.com/albin.binu.526"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  albin.binu.526
                </a>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <BiLogoLinkedin className="text-xl" />
              <span>--</span>
            </li>
            <li className="flex items-center gap-5">
              <BiLogoTelegram className="text-xl" />
              <span>
                <a
                  href="https://t.me/Albin_binu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Albin_Binu
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">Education</h1>
          <ul>
            <li className="relative flex flex-col gap-1 border p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                B.Sc Computer Science
              </span>
              <span className="font-light">University of Calicut</span>
              <span className="text-sm text-gray-400">2023 - </span>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col items-start justify-start gap-5 border p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "Css",
              "JavaScript",
              "React Js",
              "Python",
              "C",
              "C++",
              "Dart",
              "Flutter",
              "Sql",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-base md:text-lg">
              <BiMusic className="text-lg md:text-2xl" />
              <span>Music</span>
            </li>
            <li className="flex items-center gap-3 text-base md:text-lg">
              <BiMovie className="text-lg md:text-2xl" />
              <span>Movies</span>
            </li>
            <li className="flex items-center gap-3 text-base md:text-lg">
              <BsAirplane className="text-lg md:text-2xl" />
              <span>Traveling</span>
            </li>
            <li className="flex items-center gap-3 text-base md:text-lg">
              <BiCookie className="text-lg md:text-2xl" />
              <span>Cooking</span>
            </li>
          </ul>
        </div>

        {/* Languages */}
        <div className="flex flex-col items-start justify-start gap-5 border p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>
          <ul className="flex list-disc flex-wrap gap-12 pl-5 md:text-lg">
            <li>Malayalam</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
