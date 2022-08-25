import { authService, dbService } from "myBase";
import createUser from "./creatUser";
import readCut from "./readCut";
import update from "./update";

export default function readUpdate(lec, level, main, over, end, num, before, full, finish, people, setCount) {


    dbService.collection("flag").doc("control").get().then((doc) => {
        if (doc.exists) {
            
            let count = Number(doc.data().count)+1;
       
            update(count);
            createUser(count, lec, level, main, over, end, num, before, full, finish, people);
            setCount(count);
            //readCut(count, setCut, setCutSafe, openPop);
        }
    }).catch((error) => {
        return -1
    });

}

