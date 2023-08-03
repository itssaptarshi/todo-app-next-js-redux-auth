import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 mb-10 ">
        <div className="flex flex-col justify-center ml-5 bg-slate-900 rounded-lg p-24">
          <div className="text-5xl capitalize mb-2 font-bold font-mono text-red-400  ">
            A fully functional todo app
          </div>
          <div className="text-3xl capitalize mb-2 font-bold font-mono text-red-400 ">
            created with nextjs and redux.
          </div>
          <div className="text-2xl font-sans capitalize">sign in detail:</div>
          <div className="text-2xl font-sans">
            username : saptarshimaitra91@gmail.com
          </div>
          <div className="text-2xl font-sans"> password : dummypassword</div>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-cover bg-center h-auto w-full mr-5 rounded-lg"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg')`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="Btn m-2">
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
            </svg>
          </div>
          <div className="text">
            <LoginLink>Login</LoginLink>
          </div>
        </button>
      </div>
    </div>
  );
}
