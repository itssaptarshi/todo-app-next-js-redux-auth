import React from "react";
import {
  getKindeServerSession,
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import Login from "../login/page";
import '../styles.css'

const NavBar = () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <div>
      <header>
        <nav className="mt-5">
          <div>
            {!isAuthenticated() ? (
              <>
                <div>
                  <div className="flex justify-between px-3 py-3">
                    <div className="text-5xl font-bold ml-3 ">
                      Welcome to the Todo App
                    </div>
                    <div>
<div className="flex m-2">

                    <button class="Btn m-2">
                    <div class="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                      </svg>
                    </div>
                    <div class="text">
                    <LoginLink >
                        Sign in
                      </LoginLink>
                    </div>
                  </button>

                  <button class="Btn m-2">
                    <div className="sign">
                      <svg viewBox="0 0 512 512" className="rotate-90">
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                      </svg>
                      
                    </div>
                    <div class="text">
                       
                    <RegisterLink >
                        Sign up
                      </RegisterLink>
                    </div>
                  </button>
</div>
                        
                     
                    </div>
                    {/* <div className="flex justify-center mt-10">
                    </div> */}
                  </div>
                </div>

                {/* <Login/> */}
              </>
            ) : (
              <div>
                <div className="flex justify-between">
                  <p className="text-5xl font-bold ml-3 ">
                    Welcome {user?.given_name}
                  </p>
                  <button class="Btn m-4">
                    <div class="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                      </svg>
                    </div>
                    <div class="text">
                      <LogoutLink>Logout</LogoutLink>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
