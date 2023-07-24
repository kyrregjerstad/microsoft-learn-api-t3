import type { GetServerSideProps } from "next";
import React from "react";
import APIClient from "~/lib/services/api-client";
import type { Module } from "~/lib/types";

const apiClient = new APIClient("/catalog");

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const uid = params?.uid as string;

  // module is a reserved word in Next.js, hence the use of moduleDetails
  const moduleDetails = await apiClient.getSingle(uid);

  return {
    props: {
      moduleDetails,
    },
  };
};

interface Props {
  moduleDetails: Module;
}

const DetailsRoute = ({ moduleDetails }: Props) => {
  return (
    <>
      <div>{moduleDetails.title}</div>
      <div>{moduleDetails.summary}</div>
      <div>{moduleDetails.url}</div>
    </>
  );
};

export default DetailsRoute;
