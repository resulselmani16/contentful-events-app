"use client";
import { useQuery } from "@tanstack/react-query";
import { EventCard } from "./components/EventCard";
import EventListSkeleton from "./components/skeletons/EventListSkeleton";
import { graphqlFetcher } from "./lib/contentful";
import { EVENTS_QUERY } from "./queries/events";
import { Typography } from "./components/Typography/Typography";

type EventApiType = {
  sys?: { id?: string };
  coverImage: { title: string; url: string };
  title: string;
  organizer?: { name?: string; email?: string };
  slug?: string;
  startDate?: string | Date;
  endDate?: string | Date;
};

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
        events.map((event: Record<string, unknown>, idx: number) => {
          const e = event as unknown as EventApiType;
          return (
            <EventCard
              key={e.sys?.id || idx}
              coverImage={e.coverImage}
              title={e.title || ""}
              organizerName={e.organizer?.name || ""}
              organizerEmail={e.organizer?.email || ""}
              ctaText={"Read more"}
              ctaHref={`event/${e.slug?.trim()}` || ""}
              startDate={e.startDate || ""}
              endDate={e.endDate || ""}
            />
          );
        })
      )}
      {error && (
        <div className="flex items-center justify-center">
          <Typography as="h1">{error.message}</Typography>
        </div>
      )}
    </div>
  );
}
