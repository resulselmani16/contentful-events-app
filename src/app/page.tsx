"use client";
import { useQuery } from "@tanstack/react-query";
import { EventCard } from "./components/EventCard";
import EventListSkeleton from "./components/skeletons/EventListSkeleton";
import { graphqlFetcher } from "./lib/contentful";
import { EVENTS_QUERY } from "./queries/events";
import { Typography } from "./components/Typography/Typography";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await graphqlFetcher(EVENTS_QUERY);
      return response.data;
    },
  });

  const events = data?.eventCollection.items;

  return (
    <div className="p-16 w-full flex justify-start flex-wrap gap-6">
      {isLoading ? (
        <EventListSkeleton />
      ) : (
        events.map((event: any, idx: number) => (
          <EventCard
            key={event.sys?.id || idx}
            coverImage={event.coverImage}
            title={event.title || ""}
            organizerName={event.organizer.name || ""}
            organizerEmail={event.organizer.email || ""}
            ctaText={"Read more"}
            ctaHref={`event/${event.slug.trim()}` || ""}
            startDate={event.startDate || ""}
            endDate={event.endDate || ""}
          />
        ))
      )}
      {error && (
        <div className="flex items-center justify-center">
          <Typography as="h1">{error.message}</Typography>
        </div>
      )}
    </div>
  );
}
