import { Box, Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const ResponsiveImage = ({ src, alt }) => {
  const imageSize = useBreakpointValue({
    base: "50vh",
    md: "50vh",
    lg: "100vh",
    xl: "100vh",
  });

  return (
    <Box width={imageSize}>
      <Image src={src} alt={alt} objectFit="contain" />
    </Box>
  );
};

export default ResponsiveImage;
