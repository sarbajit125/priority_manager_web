import SummaryTableModel from "@/models/dataModel"
import { Table } from "@mantine/core"
import dayjs from 'dayjs';


const SummaryTable = ({tableData, headers}:SummaryTableProps) => {


    const daysLeft = (targetDate: Date): string => {
    const currentDate = dayjs();
    const endDate = dayjs(targetDate);

    // Calculate the difference in days
    const differenceInDays = endDate.diff(currentDate, 'day');

    return ` ${differenceInDays} Days left`;
    }

    const rows = tableData.map((item) => (
        <Table.Tr key={item.id}>
            <Table.Td>{item.title}</Table.Td>
            <Table.Td>{item.priority}</Table.Td>
            <Table.Td>{daysLeft(item.deliveryDate)}</Table.Td>
        </Table.Tr>
    ))
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    {headers.map((item) => (<Table.Th>{item}</Table.Th>))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {rows}
            </Table.Tbody>
        </Table>
    )
}
export interface SummaryTableProps {
    tableData: SummaryTableModel[],
    headers: string[]
}
export default SummaryTable
