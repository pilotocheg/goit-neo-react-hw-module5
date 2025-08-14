export const formatRuntime = (minutes) => {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

export const formatRating = (rating) => {
  return rating ? rating.toFixed(1) : "N/A";
};

export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatCurrency = (amount) => {
  if (!amount || amount <= 0) return "N/A";
  return `$${amount.toLocaleString()}`;
};

export const formatVoteCount = (count) => {
  if (!count || count <= 0) return "No votes";

  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M votes`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K votes`;
  }

  return `${count} votes`;
};
