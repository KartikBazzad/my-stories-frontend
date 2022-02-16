import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import DisplayStoryCard from "../../components/StoryComponents/cards/DisplayStoryCard";
function StoryPage({ data }: any) {
  useEffect(() => {}, [data.storyId]);
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta
          name="description"
          content={`${data.content} - This is a story app created with nextjs and nestjs`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="flex flex-col w-full p-8 items-center justify-center">
          <div className="w-full rounded-md max-w-lg">
            <Link passHref href={`/profile/${data.user.userId}`}>
              <div className="header shadow p-2 h-12 bg-gray-100 flex items-center cursor-pointer">
                <div>
                  <Image
                    src={data.user.photo}
                    className="rounded-full"
                    width="35px"
                    height="35px"
                    alt={data.user.username}
                  />
                </div>
                <div className="font-roboto px-4 text-gray-700 text-lg font-semibold">
                  {data.user.username}
                </div>
              </div>
            </Link>
            <div className=" outline outline-gray-100 outline-1">
              <DisplayStoryCard details={data} />
            </div>

            <div className="w-full  max-w-lg">
              <div className="flex bg-gray-50 shadow w-full items-start">
                <button className="flex px-2 py-1 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6  subpixel-antialiased "
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth=""
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-lg">{data.likes}</span>
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm opacity-60">
                Published On : {new Date(data.createdOn).toLocaleDateString()}
              </p>
              <div className="flex items-center text-lg">
                <div>
                  <Image
                    src={data.user.photo}
                    className="rounded-full"
                    width="30px"
                    height="30px"
                    alt={data.user.username}
                  />
                </div>
                <div className="font-roboto text-lg font-semibold">
                  {data.user.username}
                </div>
              </div>
              <p className="text-blue-700 font-poppins text-lg">
                {data.caption}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { storyId }: any = context.params;
  console.log(context.params);
  const res = await fetch(`${process.env.BASE_URL}/story/${storyId}/details`);
  const data = await res.json();
  console.log(data);
  if (data) {
    return {
      props: {
        data: data,
      },
    };
  }
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};
