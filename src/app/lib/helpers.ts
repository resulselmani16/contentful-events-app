export const formatEventDateTime = (
  start: string | Date,
  end: string | Date
) => {
  const startDate = typeof start === "string" ? new Date(start) : start;
  const endDate = typeof end === "string" ? new Date(end) : end;

  const sameDay = startDate?.toDateString() === endDate?.toDateString();
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
  };

  if (startDate && endDate) {
    if (sameDay) {
      return `${startDate?.toLocaleDateString(
        undefined,
        dateOptions
      )}, ${startDate?.toLocaleTimeString(
        undefined,
        timeOptions
      )} – ${endDate?.toLocaleTimeString(undefined, timeOptions)}`;
    } else {
      return `${startDate?.toLocaleDateString(
        undefined,
        dateOptions
      )}, ${startDate?.toLocaleTimeString(
        undefined,
        timeOptions
      )} – ${endDate?.toLocaleDateString(
        undefined,
        dateOptions
      )}, ${endDate?.toLocaleTimeString(undefined, timeOptions)}`;
    }
  }
};
