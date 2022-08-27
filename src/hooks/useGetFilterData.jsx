import { useMemo } from "react";
import uhg from "../API/uhg.json";
const useGetFilterData = (site) => {
  const filteredData = useMemo(
    () =>
      uhg.data.filter((item) => {
        return item.site.includes(site.toLowerCase());
      }),
    [site]
  );
  return { filteredData };
};

export default useGetFilterData;
