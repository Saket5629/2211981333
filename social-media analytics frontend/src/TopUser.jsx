import React, { useEffect, useState } from "react";

const TopUser = () => {
    const [Users,SetUsers] = useState([]);
    const data = async () => {
      const d = await fetch(
        "http://20.244.56.144/evaluation-service/users"
      ).then((response) => response.json());
      //SetUsers(d);
      console.log(d);
    };
    data();
    return <>
    
    </>
}
export default TopUser;