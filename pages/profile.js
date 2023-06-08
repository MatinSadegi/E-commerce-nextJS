import React from "react";
import { getSession, useSession } from "next-auth/react";
import Layout from "../components/Layout";

const Profile = () => {
  const { data:session } = useSession();
  const {firstName, lastName} = session?.user?.name
  
  return (
    <Layout>
      <div className="px-14 mx-auto my-10 ">
        <h1 className="text-center text-4xl">My Account</h1>
        <div className="mb-8 mt-10">
          <h2 className="mb-2 text-3xl">Order History</h2>
          <p className=" text-gray-600">
            You haven't placed any orders yet.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-3xl">Account Details</h2>
          <p className=" text-gray-600 capitalize ">
            {firstName} {lastName}
          </p>
        </div>
        <button className="text-xs font-normal text-white bg-gray-500 px-6 py-3 mt-3 transition-all hover:bg-yellow-c">
          View Addresses
        </button>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Profile;
