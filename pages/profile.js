import React from "react";
import { getSession, useSession } from "next-auth/react";
import Layout from "../components/Layout";

const Profile = () => {
  const { data } = useSession();

  return (
    <Layout>
      <div className=" max-w-4xl mx-auto ">
        <h1 className="text-center mb-2">My Account</h1>
        <div className="mb-6 mt-10">
          <h2 className="mb-2">Order History</h2>
          <p className="text-sm text-gray-600">
            You haven't placed any orders yet.
          </p>
        </div>
        <div>
          <h2 className="mb-2">Account Details</h2>
          <p className="text-sm text-gray-600 capitalize ">
            {data?.user?.name.firstName} {data?.user?.name.lastName}
          </p>
        </div>
        <button className="text-xs font-normal text-white bg-gray-600 px-5 py-3 mt-3 transition-all hover:bg-yellow-c">
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
