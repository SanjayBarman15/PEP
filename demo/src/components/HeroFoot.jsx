import React from "react";

function HeroFoot() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-center">
      <div className="mx-6 py-10  text-center">
        <div className="">
          <div className="f">
            <h5 className="mb-4 flex items-center justify-center font-semibold uppercase text-center">
              Copyright @ ADTU India 2024
            </h5>
            <p className="text-center text-lg">
              <a href="/">Home | </a>
              <a href="/a">About Us | </a>
              <a href="/c">Contact Us | </a>
              <a href="/l">Login | </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-6  dark:bg-neutral-700 text-center">
        <a href="" className="uppercase">
          Practical Test Case | ADTU/2022-25/BCA(I)/056| Sanjay Barman |
          8837000494
        </a>
      </div>
    </footer>
  );
}

export default HeroFoot;
