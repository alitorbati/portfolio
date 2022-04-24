import * as React from "react";
import Text from "../components/Text";
import Box from "../components/Box";

// const MAX_WEIGHT = 900
// const MIN_WEIGHT = 100
// const weightRange = MAX_WEIGHT - MIN_WEIGHT

// const calcWeight = (positionPercentX) => positionPercentX * weightRange + MIN_WEIGHT

const Home = (props) => {
  // const [ weight, setWeight ] = useState(null)
  return (
    // <div onMouseMove={ e => setWeight(calcWeight(e.clientX / window.innerWidth)) }>
    <div>
      {/* <Text fontSize={ 2 } fontWeight={ weight }> */}
      <Text fontSize={3} fontWeight={600}>
        Ali Torbati
      </Text>
      <Box marginBottom={2} />
      <Text fontSize={1} color="accent">
        My professional focus is on UI Engineering. This discipline is
        expressive, nuanced and complex. It requires both deep and broad
        knowledge, which is why I find it so rewarding.
      </Text>
    </div>
  );
};

// const StyledHome = styled(Home)`
//   height: 100vh;
// `

export default Home;
