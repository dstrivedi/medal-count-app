const TableBody = ({data, columns} : {data: any[], columns: string[]}) => {
    return (
        <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map(column => <td key={column}>{row[column]}</td>)}
                </tr>
            ))}
        </tbody>
    )
};

export default TableBody;