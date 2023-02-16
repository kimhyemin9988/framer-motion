import styled from "styled-components";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion"
/*
  spring : transition type의 default spring : bounce가 있음
  -tween : 선형적, 바운스x
  styled.div => styled(motion.div)
  animate : 애니메이션 설정값을 바로 사용
  initial : 애니메이션 초기값을 지정
  useMotionValue:()안에 값을 넣어 변수로 쓸 수 있음
  const shadowX = useMotionValue(60)
  useSpring : Data를 a 에서 b로 이동
  const shadowY = useSpring(shadowX)
  shadowX값을 shadowY로 이동
  useSprings : 다중 Spring, ex)List
  useTransform(x, [-100, 0, 100], [0, 1, 0])
  useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
*/
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Ul = styled(motion.ul)`
  
`
const App = () => {

  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
/*
      <motion.div animate={{ x: 100, rotate: 100 }} />

      Hover & Tap 동안 커짐
      left: -100, right: 100 범위 안에 drag 가능
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      />


      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>

      나타남
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />

      Server-side rendering?
      <motion.div initial={false} animate={{ x: 100 }} />
       initial={false} : animate의 값으로 초기화

      x축으로 drag시 사라짐
      <motion.div drag="x" style={{ x, opacity }} />
*/