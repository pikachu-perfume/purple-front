import { useMediaQuery } from "@mui/material";

export const MAX_MOBILE_WIDTH = 800;

const useDeviceType = () => {
  const isMobile = useMediaQuery(`(max-width: ${MAX_MOBILE_WIDTH}px)`);
  return {
    isMobile,
  };
};

export default useDeviceType;
