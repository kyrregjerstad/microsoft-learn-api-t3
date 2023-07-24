import type { GetServerSideProps } from "next";
import APIClient from "~/lib/services/api-client";
import type { Module } from "~/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

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
      <div className="mt-12 flex min-h-screen flex-col gap-12 text-foreground">
        <div className="relative flex w-full flex-col items-center gap-6 sm:flex-row">
          <Image
            src={moduleDetails.icon_url}
            width={250}
            height={250}
            alt={moduleDetails.title}
          />
          <div className="bottom-0 flex flex-col items-center justify-center gap-5 p-4 sm:items-start">
            <h1 className="items-center text-center text-2xl font-bold sm:text-left sm:text-4xl">
              {moduleDetails.title}
            </h1>
            <div className="flex flex-col items-center gap-4 sm:items-start">
              <div>
                <span className="font-bold">
                  {moduleDetails.rating.average}/5
                </span>
                {" - "}({moduleDetails.rating.count})
              </div>

              {moduleDetails.subjects && (
                <Badge className="self-start p-2 px-4">
                  {moduleDetails.subjects}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <section>
          <h2 className="text-xl font-bold sm:text-3xl">Description:</h2>
          <p>{moduleDetails.summary}</p>
          <div>
            <Link href={moduleDetails.url} target="_blank">
              <Button variant="outline" className="mt-4">
                Go To Lesson
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsRoute;
