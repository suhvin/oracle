import { authService, dbService } from "myBase";
import { useState } from "react";
import createUser from "./creatUser";
import makeId from "./makeId";
import update from "./update";

export default function readCut(count, setCut, setCutSafe, openPop) {

    dbService.collection("user").doc(makeId(count)).get().then((doc) => {
        if (doc.exists) {
            
            let cut = Number(doc.data().cut);
            let cutSafe = Number(doc.data().cutSafe);
            console.log(cut);

            setCut(cut);
            setCutSafe(cutSafe);
            // if(cut =! -1){
            //     //
            //     openPop();
            // }
        }
    })

}

