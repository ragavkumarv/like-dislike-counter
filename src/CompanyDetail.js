import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ALL_COMPANY_DETAILS } from "./App";

export function CompanyDetail() {
  const { companyid } = useParams();
  //   // ALL_COMPANY_DETAILS
  // console.log( "filter",  ALL_COMPANY_DETAILS.filter( detail => detail.id ===  companyid) )
  // console.log( "find", ALL_COMPANY_DETAILS.find( detail => detail.id ===  companyid) )
  // const contestant = ALL_COMPANY_DETAILS.find(
  //   (detail) => detail.id === companyid
  // );

  const [contestant, setContestant] = useState({});

  useEffect(() => {
    loadContestantDetails(companyid);

    return () => console.log(`Bye from company details`);
  }, []);

  function loadContestantDetails(id) {
    // Filter the contestant in the API
    fetch(`https://60c98aa8772a760017203b57.mockapi.io/poll/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setContestant(data));
  }

  // 10M
  // id -> api -> backend it will filter and give paritcular company
  // api call - Get call with filter companyid
  return (
    <div>
      <h1 style={{ color: contestant.color }}> {contestant.company} </h1>
      <p> {contestant.content} </p>
    </div>
  );
}
