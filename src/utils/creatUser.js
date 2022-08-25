import { authService, dbService } from "myBase";
import makeId from "./makeId";

export default function createUser(count, lec, level, main, over, end, num, before, full, finish, people) {

    dbService.collection("user").doc(makeId(count)).set({
        cut: -1,
        cutSafe: -1,
        lec: lec,
        level: level,
        main: main,
        over: over,
        end: end,
        num: num,
        before: before,
        full: full,
        finish: finish,
        people: people,
    })
    // return today2
}

