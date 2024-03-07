import axios from "axios";

export const ivloadForLevel1=async(dept,emp)=>{
    // alert(dept)
    try{
    const receive = await axios.get(`${url}/iv/ivloadForLevel1/${dept}/${emp}`)
    console.log(receive.data)
    // alert(JSON.stringify(receive.data.resultArr[0]))
    return receive.data.resultArr[0]
    }
    catch(e){
        console.log("No request on level 1");
    }

}
export const ivloadforlevel2=async(dept,emp)=>{
    try{
    // alert(dept)
    const receive = await axios.get(`${url}/iv/ivloadForLevel2/${dept}/${emp}`)
    
    return receive.data.resultArr[0].resultRows
    }
    catch(err){
        console.log("No request on level 2");
    }

}
export const ivloadforlevel3=async(dept,emp)=>{
    // alert(dept)
    try{
    const receive = await axios.get(`${url}/iv/ivloadForLevel3/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
}
catch(err){
    console.log("No request on level 3");
}
}
export const ivloadforlevel4=async(dept,emp)=>{
    // alert(dept)
    try{
    const receive = await axios.get(`${url}/iv/ivloadForLevel4/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
}
catch(err){
    console.log("No request on level 4");
}
}
export const ivloadforlevel5=async(dept,emp)=>{
    // alert(dept)
    try{
    const receive = await axios.get(`${url}/iv/ivloadForLevel5/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
}
catch(err){
    console.log("No request on level 5");
}
}

export const ivloadComForLevel1=async(dept,emp)=>{
    try{
    // alert(dept)
    // alert(dept+','+emp)
    const receive = await axios.get(`${url}/iv/ivcompletionloadforlevel1/${dept}/${emp}`)
    // alert(JSON.stringify())
    return receive.data.resultArr[0].resultRows
    }
    catch(e){
        console.log("Not found");
    }

}
export const ivloadComForLevel2=async(dept,emp)=>{
    try{
    // alert(dept)
    const receive = await axios.get(`${url}/iv/ivcompletionloadforlevel2/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
    }
    catch(e){
        console.log("Not found in loadComLevel2");
    }

}
export const ivloadComForLevel3=async(dept,emp)=>{
    try{
    // alert(dept)
    const receive = await axios.get(`${url}/iv/ivcompletionloadforlevel3/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
    }
    catch(e){
        console.log("Not found in loadComLevel3");
    }

}
export const ivloadComForLevel4=async(dept,emp)=>{
    try{
    // alert(dept)
    const receive = await axios.get(`${url}/iv/ivcompletionloadforlevel4/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
    }
    catch(e){
        console.log("Not found in loadComLevel4");
    }

}
export const ivloadComForLevel5=async(dept,emp)=>{
    try{
    // alert(dept)
    const receive = await axios.get(`${url}/iv/ivcompletionloadforlevel5/${dept}/${emp}`)
    return receive.data.resultArr[0].resultRows
    }
    catch(e){
        console.log("Not found in loadComLevel5");
    }

}
