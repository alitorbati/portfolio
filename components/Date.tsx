interface DateProps {
  value: string;
}

const FomattedDate = ({ value }: DateProps): string => {
  return new Date(value).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default FomattedDate;
