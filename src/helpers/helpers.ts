const colorByStatus: Record<string, string> = {
  Ongoing: "#43AD28",
  Finished: "#EB0237",
  Scheduled: "#EB6402",
};

export const getStatusButtonColor = (status: string): string => {
  return colorByStatus[status] || "#43AD28";
};
