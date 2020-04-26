import React from "react";
import Text from "../components/Text";

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
      <Text fontSize={2} fontWeight={700}>
        Ali Torbati
      </Text>
    </div>
  );
};

// const StyledHome = styled(Home)`
//   height: 100vh;
// `

export default Home;
