import { motion, motionValue, transform, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, SwitchBtn, Wrapper } from "./Home";

const Container = styled(Box)`
    width: 300px;
    height: 400px;
    align-items: center;
    display: flex;
    position : relative;
    overflow-x: hidden;
    touch-action: pan-y;
`
/* 조상 요소가 relative */

const InnerContainer = styled(Container)`
    align-items: center;
    width:900px;
    position: absolute;
`

//translateX 양수는 불가능
//음수로만
const Slider = () => {
    const x = motionValue(0);
    /*      x.set(-300);
        useMotionValueEvent(x, "change", (x) => {
            if(x < -100){
            }
        });  */

    useEffect(() => {
        function updateOpacity() {
            const maxXY = Math.max(x.get());
            console.log(maxXY);
            const newOpacity = transform(maxXY, [-600, 0], [-600, 0]);
            // transform<number>(inputValue: number, inputRange: number[], outputRange: number[]):
            x.set(newOpacity);
        }
        const unsubscribeX = x.on("change", updateOpacity)

        return () => {
            unsubscribeX()
        }
    }, [])

    return (
        <Wrapper>
            <Container>
                <InnerContainer drag="x" style={{ x }}>
                    <Box >1</Box> 
                    <Box >2</Box>
                    <Box >3</Box>
                </InnerContainer>
            </Container>
        </Wrapper >
    );
};
export default Slider;
