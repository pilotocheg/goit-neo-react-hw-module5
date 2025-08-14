import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useDataLoader = (fetchFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!fetchFn) {
      return;
    }

    setLoading(true);

    fetchFn()
      .then(setData)
      .catch((error) => {
        toast.error("Network error:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchFn]);

  return [data, loading, setData];
};
