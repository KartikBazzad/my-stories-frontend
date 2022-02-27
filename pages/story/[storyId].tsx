import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import DisplayStoryCard from "../../components/StoryComponents/cards/DisplayStoryCard";
import axios from "axios";
import StoryButtons from "../../components/Buttons/StoryButtons";
function StoryPage({ data }: any) {
  useEffect(() => {}, [data]);
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
                <StoryButtons story={data} />
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
  const res = await axios.get(
    `${process.env.BASE_URL}/story/${storyId}/details`
  );
  const data = await res.data;
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
