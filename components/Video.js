const Video = (props) => {
  return (
    <video loop muted autoPlay>
      <source src={props.source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
