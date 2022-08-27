import React, { useEffect, useState } from "react";
import styles from "./Lec3.module.css"
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

const Lec3 = ({lec, count, onClick}) => {

    return(
        <>
            <Box bg='white' borderWidth='1px' borderColor='#F2F7FC' w='200px' h='350px' p='0px'borderRadius='md'>
                <div onClick={onClick}>
                    <img id={styles.img} src={face}/>
                    <p className={styles.text}>코딩수업계의 빛이십니다</p>
                </div>

                <p className={styles.title}>세상을 변화시키는 프로그래밍</p>
                <p className={styles.prof}>손의성 교수님</p>
                <p className={styles.num}>YCS1009-01-00</p>
                <p className={styles.count}>득표수 : {count}</p>
            </Box>
        </>
    );
};
export default Lec3;