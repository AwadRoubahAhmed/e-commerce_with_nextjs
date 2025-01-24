"use client";

import { useFilter } from "@/app/context/Context";
import Link from "next/link";

function ConnectionPage() {
  //State
  const { email, setEmail, password, setPassword } = useFilter();

  //Comportement
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setPassword(parseFloat(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Send the form data to the server for authentication

    console.log(`Email: ${email}, Password: ${password}`);
  };

  //Affichage(render)
  return (
    <div className="container bg-white">
      <div className="max-w-full flex justify-center items-center h-screen text-gray-800 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl text-white bg-white p-12 rounded-lg shadow-2xl"
        >
          <h2 className="max-w-md text-center text-2xl text-black font-bold font-serif contrast-50 mb-4">
            Connectez-vous{" "}
          </h2>

          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email..."
              value={email || ""}
              onChange={handleEmailChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="password..."
              value={password || ""}
              onChange={handlePasswordChange}
            />
          </label>
          <div className="text-gray-800 my-4">
            <p className="font-semibold">
              <Link href={`/forgot_password`}>Mot de passe oublié?</Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary font-bold text-base text-white my-2 overflow-hidden"
          >
            <div>
              <Link href={`/products`}>Se Connecter</Link>
            </div>
          </button>
          <div className="mt-4">
            <p className="text-gray-800 font-bold">
              Pas encore de compte?{" "}
              <Link href="/header/inscription" className="underline">
                Créer un compte
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ConnectionPage;
