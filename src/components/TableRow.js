import React from "react";

function TableRow({ participant }) {
  // console.log(participant)
  return (
    <tr className=" border border-b-slate-200 odd:bg-white even:bg-gray-50">
      <td className="Student_Name p-3 uppercase">
        {participant["User Name"]}
        {participant["All Skill Badges & Games Completed"] == "Yes" ? "🏅" : ""}
      </td>


      <td className="Redemption_Status p-3 relative">
        <div
          className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${
            participant["Access Code Redemption Status"] == "Yes"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {participant["Access Code Redemption Status"] == "Yes" ? "Done" : "Not!"}
        </div>
      </td>

      <td className="Institution mob:hidden relative p-3">
        <div
          className={`m-auto w-fit rounded-3xl px-2 py-1 text-center ${
            participant["Institution"] == "Poornima University - Jaipur"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {participant["Institution"] == "Poornima University - Jaipur"
            ? "PU"
            : "Other"}
        </div>
      </td>

      <td className="Completions_both_Pathways_relative mob:hidden p-3 text-center">
        <div
          className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${
            participant["All Skill Badges & Games Completed"] == "Yes"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {participant["All Skill Badges & Games Completed"] == "Yes"
            ? "Yes"
            : "No !"}
        </div>
      </td>


      <td className="no_Skill_Badges_Completed mob:hidden p-3 text-center">
        {participant["# of Skill Badges Completed"]}
      </td>

      <td className="GenAI_Game_Completed mob:hidden p-3 text-center">
        {participant["# of Arcade Games Completed"]}
      </td>
    </tr>
  );
}

export default TableRow;
