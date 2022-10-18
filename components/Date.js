const FomattedDate = (props) => {
  const { value } = props;

  return new Date(value).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default FomattedDate;
