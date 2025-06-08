import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const CustomTable = ({data, columns} : {data: any[], columns: string[]}) => {
    return (
        <table>
            <TableHeader columns={columns} />
            <TableBody data={data} columns={columns} />
        </table>
    )
};

export default CustomTable;