"use client";
import React from "react";
import { graphqlFetcher } from "../../lib/contentful";
import { GET_SINGLE_EVENT } from "../../queries/singleEvent";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import SingleEventSkeleton from "../../components/skeletons/SingleEventSkeleton";
import { Image } from "../../components/Image";
import { Typography } from "../../components/Typography/Typography";
import { formatEventDateTime } from "../../lib/helpers";
import { Link } from "../../components/Link/Link";
import RichTextRenderer from "../../components/RichTextRenderer/RichTextRenderer";

const fetchSingleEvent = async (slug: string) => {
  console.log("slug", slug);
  const data = await graphqlFetcher(GET_SINGLE_EVENT, { slug });
  console.log("data", data);
  return data?.data?.eventCollection?.items[0] || null;
};
const SingleEvent = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  console.log(slug);
  const { data: event, isLoading } = useQuery({
    queryKey: ["event", slug],
    queryFn: () => fetchSingleEvent(slug || ""),
    enabled: !!slug,
  });
  const richTextDocument = event?.description?.json;
  console.log(event);
  return isLoading && !event ? (
    <SingleEventSkeleton />
  ) : (
    <>
      <Image src={event?.coverImage?.url} alt={event?.coverImage?.name} />
      <div className="mx-32 py-4">
        <div className="flex justify-between">
          <Typography as="h1">{event?.title}</Typography>
          <div>
            <Typography as="span" className="block">
              {formatEventDateTime(event?.startDate, event?.endDate)}
            </Typography>
            <Typography as="span" className="block">
              Event type: {event?.eventType}
            </Typography>
            <Link
              variant={"default"}
              rel=""
              href={`/organizer/${event?.organizer?.organizerId}` || ""}
            >
              {`${event?.organizer?.name} - ${event?.organizer?.email}`}
            </Link>
          </div>
        </div>
        <RichTextRenderer document={richTextDocument} />
      </div>
    </>
  );
};

export default SingleEvent;
