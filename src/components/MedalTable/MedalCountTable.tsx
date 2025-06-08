import CustomTable  from "../UI/CustomTable/CustomTable";
import medals from "../../data/medals.json";

const MedalCountTable = () => {
    return (
        <div>
            <h1>Medal Count</h1>
            <CustomTable data={medals} columns={["code", "gold", "silver", "bronze"]} />
        </div>
    );
};

export default MedalCountTable;