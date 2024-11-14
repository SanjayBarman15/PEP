import React from "react";

const LoginForm = () => {
    return (
        <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="border border-primary relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16">
                    <a
                      href="/"
                      className="mx-auto inline-block max-w-[160px]"
                    >
                      <h1 className="font-bold text-3xl ">MY LOGO</h1>
                    </a>
                  </div>
                  <form>
                    <InputBox type="email" name="email" placeholder="Email" />
                    <InputBox
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="mb-10">
                      <input
                        type="submit"
                        value="Sign In"
                        className="bg-blue-600 w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                      />
                    </div>
                  </form>
                  <a
                    href="/e"
                    className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-black"
                  >
                    Forget Password?
                  </a>
                  <p className="text-base text-body-color dark:text-dark-6">
                    <span className="pr-0.5">Not a member yet?</span>
                    <a
                      href="/s"
                      className="text-primary hover:underline font-bold"
                    >
                      Sign Up?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default LoginForm;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-black"
      />
    </div>
  );
};
