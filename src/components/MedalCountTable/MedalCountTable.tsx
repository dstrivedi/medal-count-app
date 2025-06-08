import medals from "../../data/medals.json";
import "./MedalCountTable.css";

const MedalCountTable = () => {
    return (
        <div>
            <h1>Medal Count</h1>
            
            <table className="medal-count-table">
                <thead>
                    <tr className="medal-count-table-header-row">
                        <th></th>
                        <th><span className="medal-circle gold"></span></th>
                        <th><span className="medal-circle silver"></span></th>
                        <th><span className="medal-circle bronze"></span></th>
                        <th className="total-cell-header">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {medals.map((medal, index) => (
                        <tr key={medal.code} className="medal-count-table-row-body">
                            <td className="country-cell">
                                <span className="country-index">{index + 1}</span>
                                <span className={`flag flag-${medal.code.toLowerCase()}`}></span>
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