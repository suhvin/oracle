import React, { useEffect, useState } from "react";
import styles from "./Lec.module.css"
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
import king from "assets/img/etc/king2.png";

const Lec = ({lec, count, onClick}) => {



    return(
        <>
            <Box bg='white' borderWidth='1px' borderColor='#F2F7FC' w='200px' h='350px' p='0px'borderRadius='md'>
                <div onClick={onClick}>
                    <img id={styles.img} src={face}/>
                    <p className={styles.text}>연세대에 내려오신<br/>천사 강의 그 자체...! </p>
                    <img id={styles.king} src={king}/>
                </div>

                <p className={styles.title}>한국미술사</p>
                <p className={styles.prof}>송희경 교수님</p>
                <p className={styles.num}>UCJ1104-01-00</p>
                <p className={styles.count}>득표수 : {count}</p>
            </Box>
        </>
    );
};
export default Lec;