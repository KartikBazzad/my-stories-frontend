import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

function LoginPage({ token }: any) {
  const [cookie, setCookie, removeCookie] = useCookies(["auth"]);
  useEffect(() => {
    setCookie("auth", token, { maxAge: 60 * 60 * 2 });
    Router.push("/");
  }, [token]);

  return (
    <div className="h-96 w-full flex items-center justify-center text-center text-gray-700 font-roboto text-xl font-semibold">
      Redirecting....
    </div>
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
