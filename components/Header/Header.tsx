import Link from "next/link";
import React, { useEffect } from "react";
import { Menu } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../app/myHooks";
import { useCookies } from "react-cookie";
import axios from "axios";
import Image from "next/image";
import { login } from "../../app/myReducers/userSlice";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const token = useCookies(["auth"])[0].auth;
  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/auth/profile", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          return dispatch(login({ ...user, token, isLoggedIn: true, ...data }));
        })
        .catch((err) => {
          router.push("/");
        });
    } else {
      router.push("/");
    }
  }, [user.isLoggedIn]);
  return (
    <div className="p-4 flex w-full justify-evenly bg-gray-50 drop-shadow">
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
            <Link passHref href={"http://localhost:5000/auth/login"}>
              <button className="button button-primary">Login</button>
            </Link>
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
                    <div className="button button-link">
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
