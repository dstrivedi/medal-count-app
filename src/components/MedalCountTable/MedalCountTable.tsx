import { useState } from "react";
import medals from "../../data/medals.json";
import "./MedalCountTable.css";
import { sortMedal } from "./sortMedal";

const flagClassMap: { [key: string]: string } = {
    RUS: "flag-rus",
    NOR: "flag-nor",
    CAN: "flag-can",
    USA: "flag-usa",
    NED: "flag-ned",
    GER: "flag-ger",
    SUI: "flag-sui",
    BLR: "flag-blr",
    FRA: "flag-fra",
    AUT: "flag-aut",
    CHN: "flag-chn",
    SWE: "flag-swe",
    ITA: "flag-ita",
};
  
  
const MedalCountTable = () => {
    const [sortColumn, setSortColumn] = useState({
        column: "gold",
        order: "desc"
    });

    const handleSort = (column: string) => {
        setSortColumn((prev) => {
            if(prev.column === column) {
                return {
                    column,
                    order: prev.order === "asc" ? "desc" : "asc"
                }
            } else {
                return {
                    column,
                    order: "desc"
                }
            }
        })
    }

    const sortMedals = sortMedal(medals, sortColumn.column, sortColumn.order);

    return (
        <div>
            <h1>Medal Count</h1>
            
            <table className="medal-count-table">
                <thead>
                    <tr className="medal-count-table-header-row">
                        <th></th>
                        <th onClick={() => handleSort("gold")} className={`${sortColumn.column === "gold" ? "sorted-column" : ""}`}><span className="medal-circle gold"></span></th>
                        <th onClick={() => handleSort("silver")} className={`${sortColumn.column === "silver" ? "sorted-column" : ""}`}><span className="medal-circle silver"></span></th>
                        <th onClick={() => handleSort("bronze")} className={`${sortColumn.column === "bronze" ? "sorted-column" : ""}`}><span className="medal-circle bronze"></span></th>
                        <th onClick={() => handleSort("total")} className={"total-cell-header " + (sortColumn.column === "total" ? "sorted-column" : "")}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {sortMedals.map((medal, index) => (
                        <tr key={medal.code} className="medal-count-table-row-body">
                            <td className="country-cell">
                                <span className="country-index">{index + 1}</span>
                                <span className={`flag ${flagClassMap[medal.code]}`}></span>
                                <span className="country-name">{medal.code}</span>
                            </td>
                            <td>{medal.gold}</td>
                            <td>{medal.silver}</td>
                            <td>{medal.bronze}</td>
                            <td className="total-cell">{medal.gold + medal.silver + medal.bronze}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedalCountTable;