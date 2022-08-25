export default function makeId(num) {
    if(num < 10){
        return "user000"+String(num)
    }
    else if(num < 100) {
        return "user00"+String(num)
    }
    else if(num < 1000) {
        return "user0"+String(num)
    }
    else {
        return "user"+String(num)
    }
}

