import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("firstName"));
  // console.log(watch("lastName"));
  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div className="md:min-h-screen flex flex-col md:flex-row gap-14 p-6 py-24 md:p-0 md:px-40">
      <div className="detailBlock md:w-1/2 md:min-h-screen md:flex flex-col justify-center text-center md:text-left text-white">
        <h1 className="text-[1.6em] md:text-[2.5em] font-bold md:leading-[48px]">
          Learn to code by watching others
        </h1>
        <p className="py-6 mb-8 leading-[1.5em] md:leading-[1.8em]">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="frameBlock md:w-1/2 md:flex flex-col justify-center py-8">
        <div className="tryBlock bg-[var(--Blue)] rounded-xl text-center text-white leading-[1.75em] p-4 px-16 mb-6">
          <span className=" font-semibold">Try it free 7 days</span> then
          $20/mo. thereafter
        </div>
        <div className="formBlock rounded-xl overflow-hidden">
          <div className="bg-white p-6 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" relative mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className={`w-full rounded-md placeholder:text-gray-400 placeholder:font-semibold p-4 px-6 md:px-8
                  focus:outline-none focus:border-2 focus:border-gray-500 
                  ${
                    errors.firstName
                      ? "border-[3px] border-[var(--Red)]"
                      : "border border-gray-400"
                  }`}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <p className="w-full text-xs text-[var(--Red)] text-right py-1">
                    First Name cannot be empty
                  </p>
                )}
                {errors.firstName && (
                  <div className="absolute top-4 right-4">
                    <img src="/images/icon-error.svg" alt="icon-error" />
                  </div>
                )}
              </div>

              <div className=" relative mb-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`w-full rounded-md placeholder:text-gray-400 placeholder:font-semibold p-4 px-6 md:px-8
                  focus:outline-none focus:border-2 focus:border-gray-500 
                  ${
                    errors.lastName
                      ? "border-[3px] border-[var(--Red)]"
                      : "border border-gray-400"
                  }`}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <p className="w-full text-xs text-[var(--Red)] text-right py-1">
                    Last Name cannot be empty
                  </p>
                )}
                {errors.lastName && (
                  <div className="absolute top-4 right-4">
                    <img src="/images/icon-error.svg" alt="icon-error" />
                  </div>
                )}
              </div>

              <div className="relative mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full rounded-md placeholder:text-gray-400 placeholder:font-semibold p-4 px-6 md:px-8
                  focus:outline-none focus:border-2 focus:border-gray-500 
                  ${
                    errors.email
                      ? "border-[3px] border-[var(--Red)]"
                      : "border border-gray-400"
                  }`}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors.email && (
                  <p className="w-full text-xs text-[var(--Red)] text-right py-1">
                    Look like this is not an email
                  </p>
                )}
                {errors.email && (
                  <div className="absolute top-4 right-4">
                    <img src="/images/icon-error.svg" alt="icon-error" />
                  </div>
                )}
              </div>

              <div className=" relative mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full rounded-md placeholder:text-gray-400 placeholder:font-semibold p-4 px-6 md:px-8
                  focus:outline-none focus:border-2 focus:border-gray-500 
                  ${
                    errors.password
                      ? "border-[3px] border-[var(--Red)]"
                      : "border border-gray-400"
                  }`}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="w-full text-xs text-[var(--Red)] text-right py-1">
                    Password cannot be empty
                  </p>
                )}
                {errors.password && (
                  <div className="absolute top-4 right-4">
                    <img src="/images/icon-error.svg" alt="icon-error" />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btnClaim w-full bg-[var(--Green)] rounded-md text-white font-semibold uppercase p-4 px-6 md:px-8 mb-6
                hover:bg-green-300"
              >
                Claim your free trial
              </button>
              <p className="text-[var(--Grayish-Blue)] font-medium text-xs text-center px-2">
                By clicking the button, you are agreeing to our{" "}
                <span className="text-[var(--Red)]">Terms and Services</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
