import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../app/myHooks";
import { useCookies } from "react-cookie";
import Image from "next/image";
import { login, logout } from "../../app/myReducers/userSlice";

import { getUserProfile } from "../../utils/api";
import Router from "next/router";
function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [token, setToken, removeToken] = useCookies(["auth"]);
  useEffect(() => {
    if (token.auth) {
      getUserProfile(token.auth)
        .then(({ data }) => {
          setIsLogged(true);
          return dispatch(
            login({ ...user, token: token.auth, isLoggedIn: true, ...data })
          );
        })
        .catch((err) => {
          return;
        });
    }
  }, [user.isLoggedIn, user.token, isLogged]);

  function logoutHandler() {
    removeToken("auth");
    dispatch(logout());
    return Router.reload();
  }
  return (
    <div className="p-4 flex w-full items-center justify-evenly shadow  drop-shadow">
      <div className="w-40 sm:w-96 max-w-xs">
        <h1 className="text-xl font-poppins font-semibold text-purple-700">
          My Stories
        </h1>
      </div>
      <div className="w-full flex items-center justify-evenly max-w-2xl">
        <div className="flex w-full justify-around">
          <span className="nav-link">
            <Link href={"/"}>Home</Link>
          </span>
          {user.isLoggedIn && (
            <Link passHref href={"/stories/create"}>
              <button className="button button-primary flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Write
              </button>
            </Link>
          )}
        </div>
        {!user.isLoggedIn && (
          <div>
            {/* <Link
              passHref
              href={`${process.env.REACT_APP_BASE_URL}/auth/login`}
            > */}
            <button
              onClick={() =>
                (window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`)
              }
              className="button button-ghost font-bold  "
            >
              Login
            </button>
            {/* </Link> */}
          </div>
        )}
        {user.isLoggedIn && (
          <div className="flex items-center justify-center">
            <Menu>
              <Menu.Button>
                <Image
                  src={user.photo}
                  alt={user.username}
                  width="40px"
                  className="rounded-full"
                  height="40px"
                />
              </Menu.Button>
              <Menu.Items className={"absolute flex flex-col"}>
                <Menu.Item>
                  <div className="shadow-md border border-t-0 right-0 top-5 absolute shadow-slate-300 w-40 bg-white flex flex-col justify-center items-center">
                    <Link passHref href={`/profile/${user.userId}`}>
                      <div className="button button-link">My Profile</div>
                    </Link>
                    <div onClick={logoutHandler} className="button button-link">
                      <button>Logout</button>
                    </div>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
