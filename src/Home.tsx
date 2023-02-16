import styled from "styled-components";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion"
/*
  spring : 현실 세계의 물리법칙을 시뮬레이트
  Vs tween : 선형적, 바운스x
  <spring>
    ex)duration,bounce,damping,mass(물체의 질량)
    transition type의 default spring
    bounce : 0~1사이
    -stiffness : 경직됨
    -damping : 반동력, 0으로 설정하면 무한히 움직임
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
  Variants : initial, showing, hidden, from, to,...ect
    obj로 함수 밖에 선언 후 사용할 컴포넌트 안에 Variants={변수}를 이용해 사용. key를 이용해 value에 {}를 사용해 animation을 선언할 수 있으며 사용시 key값은 ""안에 넣는다 
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


const Home = () => {
    const y = useMotionValue(-200);
    const scale = useTransform(y, [-800, -200, 100], [2, 1, 0.1]);
    console.log(y);
    /* value: MotionValue<number>
      inputRange: scale 커지는 범위
      outputRange : scale 커지는 범위*/
    return (
        <Wrapper>
            <Box style={{ y, scale }} drag="y" dragSnapToOrigin></Box>
        </Wrapper>
    );
};
export default Home;
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