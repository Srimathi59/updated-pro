import { useEffect, useState } from "react";

import { ivloadComForLevel1, ivloadComForLevel2, ivloadComForLevel3, ivloadComForLevel4, ivloadComForLevel5, ivloadForLevel1, ivloadforlevel2, ivloadforlevel3, ivloadforlevel4, ivloadforlevel5 } from "./ivconnect";
import dateFormat from "dateformat";





export const HoDIVPage=()=>{

  const[iv,setiv]=useState([]);
  const[iv1,setiv1]=useState([]);

  useEffect(()=>{
    load()
    loadSeminars()
  },[])

  const logged=sessionStorage.getItem("person")
  const loggedUser = JSON.parse(logged)

  
  const load = async()=>{
    const logged = JSON.parse(sessionStorage.getItem("person"))
    let temp;
    try{
      temp=await ivloadComForLevel1(logged.dept_id.faculty_id)
      setiv1(temp)
    }
    catch(e){
      console.log("error in loadcomforlevel1")
    }
    try{
      temp=await ivloadComForLevel2(logged.dept_id,logged.faculty_id)
      setiv1(temp)
    }
    catch(e){
      console.log("error in loadcomforlevel2")
    }
    try{
      temp=await ivloadComForLevel3(logged.dept_id,logged.faculty_id)
      setiv1(temp)
    }
    catch(e){
      console.log("error in loadcomforlevel3")
    }
    try{
      temp=await ivloadComForLevel4(logged.dept_id,logged.faculty_id)
      setiv1(temp)
    }
    catch(e){
      console.log("error in loadcomforlevel4")
    }
    try{
      temp=await ivloadComForLevel5(logged.dept_id,logged.faculty_id)
    }
    catch(e){
      console.log("error in loadcomforlevel5")
    }
  }



const loadSeminars = async () =>{
  const logged =JSON.parse(sessionStorage.getItem("person"))
  let temp;
  try{
    temp=await ivloadForLevel1(logged.dept_id,logged.faculty_id)
    console.log(temp)
    setiv(temp)
  }
  catch(e){
    console.log("error in loadforlevel1")
  }
  try{
    temp=await ivloadforlevel2(logged.dept_id,logged.faculty_id)
    setiv(temp)
  }
  catch{
    console.log("error in loadforlevel2")
  }
  try{
    temp=await ivloadforlevel3(logged.dept_id,logged.faculty_id)
    setiv(temp)
  }
  catch{
    console.log("error in loadforlevel3")
  }
  try{
    temp=await ivloadforlevel4(logged.dept_id,logged.faculty_id)
    setiv(temp)
  }
  catch{
    console.log("error in loadforlevel4")
  }
  try{
    temp=await ivloadforlevel5(logged.dept_id,logged.faculty_id)
    setiv(temp) 
  }
  catch{
    console.log("error in loadforlevel5")
  }

}
return(
<>

<div class="report-container1">
    <div class="report-header">
      <h1 class="recent-Articles">Your Report</h1>
    </div>
    <div className="table-responsive text-nowrap">
      <table className='table table-striped'> 
        <thread>
          <tr>
            <th>ID</th>
            <th>Date of visit</th>
                <th>Industry</th>
                <th>Year/Sem</th>
                <th>Co-ordinator</th>
                

                <th>Proposal</th>
             

                <th>Completion</th><th>Status</th><th>Details</th>
               
          </tr>
          
        </thread>
        <tbody>
          
          {

            iv?.length ||0 > 0 ?(
              iv.map((data,key)=>(
                <tr>
                  <td><br></br>{data.report_id}</td>
                  <td><br></br>{dateFormat(data.date_of_visit_from, "dd-mm-yyyy")}</td>
                  <td><br></br>{data.details_of_the_industry_1}</td>
                  <td><br></br>{`${data.year_of_students_visited}/${data.sem_of_students_visited}`}</td>
                  <td><br></br>{data.event_coordinator}</td>
  
                </tr>
              ))
  
            ):
            <tr></tr>
            
              }
              
          
        </tbody>

       </table>
    </div>
</div>

  </>
)

}
