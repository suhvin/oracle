import { authService, dbService } from "myBase";

export default function update(count) {

    dbService.collection("flag").doc("control").update({
        count: count,
    })
    // return today2
}

