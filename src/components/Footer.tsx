// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 mt-2 text-white ">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold   text-white  hover:bg-emerald-500 hover:text-slate-800">
              FitGear
            </h2>
            <p className="mt-2 text-white">
              Your go-to destination for premium fitness equipment.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800">
              Follow Us
            </h3>
            <div className="mt-2 flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07c0-5.5-4.5-10-10-10S2 6.57 2 12.07c0 4.9 3.61 8.98 8.31 9.89V14.89h-2.5v-2.82h2.5v-2.08c0-2.48 1.49-3.84 3.69-3.84 1.06 0 2.11.08 2.11.08v2.3h-1.19c-1.17 0-1.53.73-1.53 1.49v1.78h2.76l-.44 2.82h-2.32v7.07C18.39 21.05 22 16.98 22 12.07z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                 className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.8 10.8 0 0 1-3.13.86A5.43 5.43 0 0 0 22.37 2a10.87 10.87 0 0 1-3.41 1.3A5.36 5.36 0 0 0 16.8 1a5.4 5.4 0 0 0-5.4 5.4c0 .43.05.86.13 1.27A15.23 15.23 0 0 1 1.67 3.13a5.36 5.36 0 0 0-.73 2.71A5.38 5.38 0 0 0 2.5 8a5.28 5.28 0 0 1-2.45-.67v.07c0 2.6 1.85 4.77 4.29 5.27a5.43 5.43 0 0 1-2.43.09c.69 2.18 2.69 3.78 5.06 3.83a10.8 10.8 0 0 1-6.65 2.3c-.43 0-.85-.03-1.27-.07A15.23 15.23 0 0 0 12 21.8a15.18 15.18 0 0 0 15-15v-.7a10.76 10.76 0 0 0 2.63-2.73z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                 className="rounded-md  text-white  hover:bg-emerald-500 hover:text-slate-800"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.75 0 4.2.01 5.7.08 1.54.07 2.82.69 3.75 1.62.93.93 1.56 2.21 1.62 3.75.07 1.5.08 2.95.08 5.7s-.01 4.2-.08 5.7c-.07 1.54-.69 2.82-1.62 3.75-.93.93-2.21 1.56-3.75 1.62-1.5.07-2.95.08-5.7.08s-4.2-.01-5.7-.08c-1.54-.07-2.82-.69-3.75-1.62-.93-.93-1.56-2.21-1.62-3.75C2.21 16.4 2.2 14.95 2.2 12s.01-4.2.08-5.7c.07-1.54.69-2.82 1.62-3.75.93-.93 2.21-1.56 3.75-1.62 1.5-.07 2.95-.08 5.7-.08zM12 0c-3.8 0-4.25.02-5.75.08-1.48.07-2.77.66-3.78 1.67-1.01 1.01-1.6 2.3-1.67 3.78-.06 1.5-.08 2.95-.08 5.75s.02 4.25.08 5.75c.07 1.48.66 2.77 1.67 3.78 1.01 1.01 2.3 1.6 3.78 1.67 1.5.06 2.95.08 5.75.08s4.25-.02 5.75-.08c1.48-.07 2.77-.66 3.78-1.67 1.01-1.01 1.6-2.3 1.67-3.78.06-1.5.08-2.95.08-5.75s-.02-4.25-.08-5.75c-.07-1.48-.66-2.77-1.67-3.78-1.01-1.01-2.3-1.6-3.78-1.67-1.5-.06-2.95-.08-5.75-.08zM12 6.7a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6zm0 8.9a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm3.2-6.6a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
