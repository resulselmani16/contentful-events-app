"use client";
import RichTextRenderer from "@/app/components/RichTextRenderer/RichTextRenderer";
import { graphqlFetcher } from "@/app/lib/contentful";
import { GET_ORGANIZER_BIO } from "@/app/queries/organizerBio";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { Image } from "@/app/components/Image";
import { Typography } from "@/app/components/Typography/Typography";
import { Link } from "@/app/components/Link/Link";

const fetchOrganizerBio = async (organizerId: string) => {
  const data = await graphqlFetcher(GET_ORGANIZER_BIO, { organizerId });
  return data?.data?.personCollection.items[0] || null;
};

const OrganizerPage = () => {
  const params = useParams();
  const organizerId = Array.isArray(params.organizerId)
    ? params.organizerId[0]
    : params.organizerId;
  const { data: organizer } = useQuery({
    queryKey: ["organizer", organizerId],
    queryFn: () => fetchOrganizerBio(organizerId || ""),
    enabled: !!organizerId,
  });

  const richTextDocument = organizer?.bio?.json;
  console.log("organizer data:", organizer);
  return (
    <div>
      <div className="flex justify-start gap-14 items-center p-6 bg-gray-800 m-12 rounded-2xl">
        <Image
          width={400}
          height={400}
          format="rounded"
          className="!w-64 !h-64"
          src={organizer?.profileImage?.url}
          alt={organizer?.profileImage?.title}
        />
        <div>
          <Typography as={"h2"}>{organizer?.name}</Typography>
          <Typography as={"h3"}>{organizer?.email}</Typography>
          <Link openInNewTab href={organizer?.website}>
            {organizer?.website}
          </Link>
        </div>
      </div>
      <RichTextRenderer document={richTextDocument} />
    </div>
  );
};

export default OrganizerPage;
