import React from "react";
import { Image } from "./Image";
import { Typography } from "./Typography/Typography";
import { Button } from "./Button/Button";
import { Link } from "./Link/Link";
import { formatEventDateTime } from "../lib/helpers";

interface EventCardProps {
  coverImage: {
    title: string;
    url: string;
  };
  title: string;
  organizerName: string;
  organizerEmail: string;
  ctaText: string;
  ctaHref: string;
  startDate: string | Date;
  endDate: string | Date;
}

export const EventCard: React.FC<EventCardProps> = ({
  coverImage,
  title,
  organizerName,
  organizerEmail,
  ctaText,
  ctaHref,
  startDate,
  endDate,
}) => {

  return (
    <div className="bg-[#18181b] rounded-lg shadow-lg overflow-hidden max-w-sm w-full border border-gray-700">
      <Image src={coverImage?.url} alt={coverImage?.title} format="banner" />
      <div className="p-5">
        <Typography as="h3" className="text-white mb-2">
          {title}
        </Typography>
        <Typography as="p" className="text-gray-300 text-sm mb-2">
          {formatEventDateTime(startDate, endDate)}
        </Typography>
        <div className="mb-4 text-gray-400 text-sm">
          <div>
            Organized by:{" "}
            <span className="font-medium text-gray-200">{organizerName}</span>
          </div>
          <div>
            Email:{" "}
            <span className="font-mono text-gray-300">{organizerEmail}</span>
          </div>
        </div>
        <Link href={ctaHref} variant="button" className="block">
          {ctaText}
        </Link>
      </div>
    </div>
  );
};
