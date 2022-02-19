import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/myHooks";
import Header from "../../../components/Header/Header";
import CreateStoryForm from "../../../components/StoryComponents/CreateStoryForm";

function Index() {
  const router = useRouter();
  const user = useAppSelector((state) => state.userReducer);
  useEffect(() => {
    if (!user.token) {
      router.push("/");
    }
  }, [user.isLoggedIn]);
  return (
    <div>
      <Head>
        <title>Create Story</title>
        <meta name="description" content="Create a new story" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header />
        </div>
        <div>
          <CreateStoryForm />
        </div>
      </main>
    </div>
  );
}

export default Index;
