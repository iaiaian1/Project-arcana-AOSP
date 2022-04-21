import { useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

const Firebase = ({ state }) => {
    const colRef = collection(db, "maintainers");
    
    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                state(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
    }, [state, colRef])
}

export default Firebase;

// const devices = ["Poco M3/Redmi 9t", "Poco X3 NFC", "Xiaomi Redmi Note 7/7s", "Xiaomi Redmi Note 10", "Poco X2", "Xiaomi Redmi Note 4x", "Xiaomi Redmi Note 10 Pro", "Xiaomi Redmi Note 7 Pro", "Xiaomi Redmi Note 8", "Xiaomi Redmi Note 9s/9 Pro/9 Pro Max/10 Lite/Poco M2 Pro", "Xiaomi Redmi Note 8 Pro", "Asus Zenfone Max Pro M1", "Poco F1", "Xiaomi Redmi Note 5A Prime/Lite", "Xiaomi Poco F3/Redmi K40/Mi 11X", "Oneplus 8T/9R", "Xiaomi Mi10T/Pro", "Xiaomi Redmi K20/Mi 9t Pro", "Realme XT", "Xiaomi Mi 8 Lite", "Lenovo Z5s (jd2019)", "mi439", "Redmi 4 (4x)", "Realme 7 Pro"]
// const maintainer = ["frostg012 & whyyraku", "TheStrechh", "JojiOnThatBeat", "blur2003", "Sharma_G04", "Alone0316 & Vastolorde", "Hari HK", "Sir Johnny", "♪ rasend", "HaSSan_MoHi", "blazerpaul15", "Naveen4264", "xisan", "LaLeeroy", "Eidoron1", "Soumyou and lalalisa", "Realizeyes", "Irongfly", "dhruvesh_23", "gustadev", "HsyHusker", "iaiaian1", "EvilAnsh", "SUICIDAL_BOI"]
// const codenames = ["juice", "surya", "lavender", "mohito", "pocox2", "mido", "sweet", "note7pro", "ginkgo", "miatoll", "begonia", "asusm1", "pocof1", "ugglite", "alioth", "oneplus8t9r", "apollo", "raphael", "realmext", "mi8lite", "lenovoz5s", "mi439", "santoni", "rmx2170"]
    
    
// // temporary populate it.
// devices.forEach((element, index) => {
//     addDoc(colRef, {
//         codename: codenames[index],
//         device: element,
//         maintainer: maintainer[index],
//         time: serverTimestamp()
//     })
// });