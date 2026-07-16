import { AspectRatio } from "@chakra-ui/react";

interface YouTubeProps {
  id: string;
  title?: string;
}

const YouTube = (props: YouTubeProps) => {
  return (
    <AspectRatio ratio={16 / 9} marginY={5} borderRadius={2} overflow="hidden">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${props.id}`}
        title={props.title ?? "YouTube video player"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default YouTube;
