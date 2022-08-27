import { authService, dbService } from "myBase";
import makeId from "./makeId";

export default function createUser(count, lec, level, main, over, end, num, before, full, finish, people) {

    console.log(before);

    let before2 = "-10";
    let full2 = "-10";
    let finish2 = "-10";
    let people2 = "-10";

    if(before!=-1){ before2 = before }
    if(full!=-1){ full2 = full }
    if(finish!=-1){ finish2 = finish }
    if(people!=-1){ people2 = people }

    dbService.collection("user").doc(makeId(count)).set({
        cut: -1,
        cutSafe: -1,
        lec: lec,
        level: level,
        main: main,
        over: over,
        end: end,
        num: num,
        before: before2,
        full: full2,
        finish: finish2,
        people: people2,
    })
    // return today2
}

