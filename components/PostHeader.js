import Link from "next/link";
import Box from "./foundations/Box";
import Text from "./foundations/Text";
import Date from "./Date";
// import { useEffect, useState, useRef } from "react";

// function scale (number, inMin, inMax, outMin, outMax) {
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

const PostHeader = (props) => {
  const { frontmatter } = props;
  // const ref = useRef(null);
  // const [weight, setWeight] = useState(800);

  //   useEffect(() => {
  //       const onScroll = () => setWeight(scale(window.scrollY, 0, ref.current.offsetTop + ref.current.offsetHeight, 800, 200));
  //       // clean up
  //       window.removeEventListener('scroll', onScroll);
  //       window.addEventListener('scroll', onScroll, { passive: true });
  //       return () => window.removeEventListener('scroll', onScroll);
  //   }, []);

  return (
    <Box>
      {/* <h1 style={{'font-variation-settings': `"wght" ${weight}`}} ref={ref}>{frontmatter.title}</h1> */}
      <h1>{frontmatter.title}</h1>
      <Text fontSize={[0, 1]} fontStyle="italic">
        {frontmatter.summary}
      </Text>
      <Box marginBottom={5} />
      <Date value={frontmatter.date} />
      {frontmatter.url ? (
        <>
          {" · "}
          <Link href={frontmatter.url.url} target="_blank" rel="noreferrer">
            {frontmatter.url.title}
          </Link>
        </>
      ) : null}
    </Box>
  );
};

export default PostHeader;
