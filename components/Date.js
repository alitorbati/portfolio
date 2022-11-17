const FomattedDate = (props) => {
  const { value } = props;

  return new Date(value).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default FomattedDate;
