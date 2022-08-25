import React, { useEffect, useState } from "react";
import styles from "./Home.module.css"
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
import Pop1 from "components/popup/Pop1";
import readUpdate from "utils/readUpdate";
import { dbService } from "myBase";
import makeId from "utils/makeId";
import logo from "assets/img/etc/logo.png";
import { size } from "lodash";

const Home = () => {

    const [count, setCount] = useState(false);

    let cut = -1;
    let cutSafe = -1;

    const [cutMessage, setCutMessage] = useState(-1);
    const [cutSafeMessage, setCutSafeMessage] = useState(-1);

    const [lec, setLec] = useState("");
    const [level, setLevel] = useState("학년");
    const [main, setMain] = useState("전공자 여부");
    const [over, setOver] = useState("초수강 여부");
    const [end, setEnd] = useState("졸업신청 여부");
    const [num, setNum] = useState("신청과목수");
    const [before, setBefore] = useState(-1);
    const [full, setFull] = useState(-1);
    const [finish, setFinish] = useState(-1);
    const [people, setPeople] = useState(-1);
    //const [term, setTerm] = useState("졸업요건학점");

    const onSubmit = () => {
        if((lec!="")&&(main!="전공자 여부")&&(level!="학년")&&(over!="초수강 여부")&&(end!="졸업신청 여부")&&(num!="신청과목수")){
            readUpdate(lec, level, main, over, end, num, before, full, finish, people, setCount);
            //readUpdate(lec, level, main, num, term, setCount);
        }
    }

    const onChange = (event) => {
        const {target: {value}} = event;
        setLec(value);
    }

      const onChange2  = (event) => {
        const {target: {name, value}} = event;
        if(name=="before"){
            setBefore(value);
        }else if(name=="full"){
            setFull(value);
        }else if(name=="finish"){
            setFinish(value);
        }else if(name=="people"){
            setPeople(value);
        }
    }

    const [popOpen, setPopOpen] = useState(false);
    const closePop = () => { setPopOpen(false); }
    const openPop = () => { setPopOpen(true); }

    function readCut() { 

        let cut2 = -1;
        let cutSafe2 = -1;

        dbService.collection("user").doc(makeId(count)).get().then((doc) => {
            if (doc.exists) {
                
                cut = Number(doc.data().cut);
                cutSafe = Number(doc.data().cutSafe);
                console.log("cut1: "+cut);
                console.log(typeof(cut));
                cut2 = cut;
                cutSafe2 = cutSafe;

                if(cut != -1){
                    setCutMessage(cut2);
                    setCutSafeMessage(cutSafe2);
                    openPop();
                }
            }
        })

        setTimeout(function() {  
            console.log("cut2: "+cut);
            if((cut2 == -1)){
                readCut();     
            }
        }, 1000)
    }

    useEffect(()=>{
        if(count!=0){
            console.log("count: "+count);
            readCut();
        }
    }, [count])

    const text = (cut, cutSafe) => {
        if(cut == -1){
            return(
                <Pop1 state={popOpen} close={closePop} title={"Mileage Cut"}>조금만<br/>기다려요</Pop1>  
            )
        }else{
            if(cutSafe==0){
                return(
                    <Pop1 state={popOpen} close={closePop} title={"Mileage Cut"}>신청할 수 없는 과목에<br/>신청하려 하시는군요!</Pop1>     
                )
            }else if(cutSafe==37){
                return(
                    <Pop1 state={popOpen} close={closePop} title={"Mileage Cut"}>마일리지 풀로 박아도<br/>실패입니다! ㅎㅎㅎ</Pop1>     
                )
            }else{
                return(
                    <Pop1 state={popOpen} close={closePop} title={"Mileage Cut"}>이 과목의 컷은 {cutMessage}마일리지<br/>당신은 {cutSafeMessage}을 넣어야 안전함!</Pop1>       
                )
            }
        }
    }

    return(
        <>
            <Box id={styles.blue} bg='#003875' w='100%' h='70px' p={0} borderWidth='0px' borderRadius='xs' display='flex' flexDirection='row'>
                <img id={styles.logo} src={logo}/>
                <Text fontFamily='Noto Sans CJK KR' color='#ffffff' fontSize='20px' position='relative' ml='calc(10% - 20px/2)' mt='18px'>Yall_clear</Text>
            </Box>
            <Box bg='#F2F7FC' w='100%' h='80px' p='0px' borderWidth='0px' borderRadius='xs'></Box>
            <div id={styles.top}>
            </div>
                
            <div id={styles.main}>
                <Box id={styles.box} bg='#ffffff' w='80%' h='450px' p='0px' color='black' borderWidth='1px' borderRadius='lg'>
                    <Input mt='0px' w='96.6%' placeholder='마일리지 컷을 예측하고 싶은 과목의 학정 번호를 입력해 주세요 (AMR3104-01-00)' fontSize='13px' borderRadius='md' p='20px' onChange={onChange}/>
                    <div id={styles.box2}>
                        <Text id={styles.text} fontFamily='Noto Sans CJK KR' ml='28px' position='relative' fontSize='14px'>학생정보</Text>
                    </div>
                    <Menu>
                        <MenuButton className={styles.in} fontSize='11px' as={Button} rightIcon={<ChevronDownIcon />}>
                            {level}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setLevel("2학년")}>2학년</MenuItem>
                            <MenuItem onClick={() => setLevel("3학년")}>3학년</MenuItem>
                            <MenuItem onClick={() => setLevel("4학년")}>4학년</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton className={styles.in} fontSize='11px' as={Button} rightIcon={<ChevronDownIcon/>}>
                            {main}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setMain("본전공자")}>본전공자</MenuItem>
                            <MenuItem onClick={() => setMain("부(복수)전공자")}>부(복수)전공자</MenuItem>
                            <MenuItem onClick={() => setMain("비전공자")}>비전공자</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton className={styles.in2} fontSize='11px' as={Button} rightIcon={<ChevronDownIcon />}>
                            {over}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setOver("Yes")}>Yes</MenuItem>
                            <MenuItem onClick={() => setOver("No")}>No</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton className={styles.in3} fontSize='11px' as={Button} rightIcon={<ChevronDownIcon />}>
                            {end}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setEnd("Yes")}>Yes</MenuItem>
                            <MenuItem onClick={() => setEnd("No")}>No</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton className={styles.in4} fontSize='11px' as={Button} rightIcon={<ChevronDownIcon />}>
                            {num}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setNum("1개")}>1개</MenuItem>
                            <MenuItem onClick={() => setNum("2개")}>2개</MenuItem>
                            <MenuItem onClick={() => setNum("3개")}>3개</MenuItem>
                            <MenuItem onClick={() => setNum("4개")}>4개</MenuItem>
                            <MenuItem onClick={() => setNum("5개")}>5개</MenuItem>
                            <MenuItem onClick={() => setNum("6개")}>6개</MenuItem>
                        </MenuList>
                    </Menu>
                    <Input className={styles.in5} type='number' mt='2%' fontSize='10px' w='47%' placeholder='직전학기 이수학점 (모르면 적지 마시오)' size='sm' borderRadius='md' p='20px' name="before"   onChange={onChange2} />
                    <Input className={styles.in6} type='number' mt='2%' fontSize='10px' w='47%' placeholder='총이수학점 (모르면 적지 마시오)' size='sm' borderRadius='md' p='20px' name="full"   onChange={onChange2} />
                    <Input className={styles.in5} type='number' mt='2%' fontSize='10px' w='47%' placeholder='졸업요건학점 (모르면 적지 마시오)' size='sm' borderRadius='md' p='20px' name="finish"   onChange={onChange2} />
                    <Input className={styles.in6} type='number' mt='2%' fontSize='10px' w='47%' placeholder='담은인원 (모르면 적지 마시오)' size='sm' borderRadius='md' p='20px' name="people"   onChange={onChange2} />
                    
                    <Button id={styles.btn} fontSize='14px' variant='solid' w="80%" onClick={onSubmit}>
                        {((lec!="")&&(main!="전공자 여부")&&(level!="학년")&&(over!="초수강 여부")&&(end!="졸업신청 여부")&&(num!="신청과목수"))
                        ? "Submit"
                        : "Please enter the info"
                        }
                    </Button>
                </Box>
                {text()}
            </div>
        </>
    );
};
export default Home;