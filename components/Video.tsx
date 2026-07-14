interface VideoProps {
  source: string;
}

const Video = (props: VideoProps) => {
  return (
    <video loop muted autoPlay playsInline>
      <source src={props.source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
