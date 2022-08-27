import React, { useEffect, useState } from "react";
import styles from "./Vote.module.css"
import { Box, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, 
    Button,
    Input,
    Text
     } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { dbService } from "myBase";
import Lec from "./Lec";
import Lec2 from "./Lec2";
import Lec3 from "./Lec3";
import Lec4 from "./Lec4";

const Vote = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const onClick1 = () => {
        setCount1(count1+1);
    }

    const onClick2 = () => {
        setCount2(count2+1);
    }

    const onClick3 = () => {
        setCount3(count3+1);
    }

    const onClick4 = () => {
        setCount4(count4+1);
    }

    // useEffect(()=>{
    //     const arr = [count1, count2, count3, count4];
    //     arr.sort

    // },[count1, count2, count3, count4])

    return(
        <>
            <Box id={styles.title} fontSize='13px' color='white' bg='#003875' w='160px' h='35px' p='0px' borderWidth='0px' borderRadius='md' fontFamily='Noto Sans CJK KR' textAlign='center' lineHeight='250%'>
                2학기 꿀강 명예의 전당 
            </Box>
            <div id={styles.lecs}>
                <div id={styles.one}>
                <Lec lec={"UCJ"} count={count1} onClick={onClick1}/>
                </div>
                <div id={styles.two}>
                <Lec2 lec={"PUB"} count={count2} onClick={onClick2}/>
                </div>
                <div id={styles.three}>
                <Lec3 lec={"YSC"} count={count3} onClick={onClick3}/>
                </div>
                <div id={styles.four}>
                <Lec4 lec={"BIZ"} count={count4} onClick={onClick4}/>
                </div>
            </div>
            
        </>
    );
};
export default Vote;