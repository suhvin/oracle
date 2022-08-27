import React, { useEffect, useState } from "react";
import styles from "./Lec2.module.css"
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
import face from "assets/img/etc/face.png";

const Lec2 = ({lec, count, onClick}) => {

    return(
        <>
            <Box bg='white' borderWidth='1px' borderColor='#F2F7FC' w='200px' h='350px' p='0px'borderRadius='md'>
                <div onClick={onClick}>
                    <img id={styles.img} src={face}/>
                    <p className={styles.text}>교수님 친절하고 젠틀하며<br/>정말 좋으신 분 입니다</p>
                </div>

                <p className={styles.title}>행정법(2) : 행정구제법</p>
                <p className={styles.prof}>김남철 교수님</p>
                <p className={styles.num}>PUB3114-01-00</p>
                <p className={styles.count}>득표수 : {count}</p>
            </Box>
        </>
    );
};
export default Lec2;