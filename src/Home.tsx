import styled from "styled-components";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate, AnimatePresence, useAnimation } from "framer-motion"
import { useState } from "react";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: #ffffff89;
`;
const CircleBox = styled(Box)`
  display:flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,250px);
  grid-template-rows: repeat(2,250px);
  grid-gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const SwitchBtn = styled(motion.button)`
  background-color: #ffffff;
  border-radius: 0.3rem;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  height: 5%;
  margin: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2);
`

const MovingCircle = styled(motion.div)`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #eee9e9;
  position: absolute;
  width: 50px;
  height: 50px;
`
const Home = () => {
  const [switchBtn, setSwitchBtn] = useState<boolean>(false);
  const toggleBtn = () => {
    setSwitchBtn((prev) => (!prev));
  }
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        <Box style={{ justifySelf:"flex-end", alignSelf:"end" }} whileHover={{
          width:"220px",
          height:"220px",
        }} onClick={() => setId("1")} key={"1"} layoutId={"1"} />
        <CircleBox style={{ alignSelf:"end"}}>
          <MovingCircle layoutId={"3"}></MovingCircle>
        </CircleBox>
        <CircleBox style={{ justifySelf:"flex-end" }}>
          <AnimatePresence>
            {switchBtn ? <MovingCircle layoutId={"3"}></MovingCircle> : null}
          </AnimatePresence>
        </CircleBox>
        <Box whileHover={{
          width:"220px",
          height:"220px",
        }} onClick={() => setId("2")} key={"2"} layoutId={"2"}></Box>
      </Grid>
      <SwitchBtn
        onClick={toggleBtn}
        animate={switchBtn ? {
          scale: 1.3,
          color: "#ff8f33"
        } : {
          scale: 1,
          color: "#2441ff"
        }}
      >Switch</SwitchBtn>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 400, height: 200, backgroundColor: "white" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};
export default Home;
