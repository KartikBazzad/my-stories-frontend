import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../../app/myHooks";

import { login, setToken } from "../../app/myReducers/userSlice";
import { userApi } from "../../app/queries/userQuery";

function LoginPage() {
  const [cookie, setCookie] = useCookies(["auth"]);
  const { token }: any = useRouter().query;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const userApiResult = userApi.endpoints.getUserProfile.useQuery(token!, {
    skip: !token,
  });
  const { data } = userApiResult;
  useEffect(() => {
    if (!token) return;
    if (data) {
      setCookie("auth", token, { maxAge: 60 * 60 * 2 });
      dispatch(
        login({
          ...user,
          token: token,
          userId: data?.userId as string,
          username: data?.username as string,
          photo: data?.photo as string,
          isLoggedIn: true,
        })
      );
      Router.push("/");
    }
  }, [token, cookie, data]);

  return (
    <>
      <div className="h-96 w-full flex items-center justify-center text-center text-gray-700 font-roboto text-xl font-semibold">
        <h1>Redirecting....</h1>
      </div>
    </>
  );
}

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { token } = context.query;

  console.log(token);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {
      token: token,
    },
  };
};
