import dayjs from 'dayjs';
import { IconSquareFilled } from '@tabler/icons-react';
import { Badge, Box, Table, Text } from '@mantine/core';
import SummaryTableModel from '@/models/dataModel';

const SummaryTable = ({ tableData, headers, type }: SummaryTableProps) => {
  const daysLeft = (targetDate: Date): string => {
    const currentDate = dayjs();
    const endDate = dayjs(targetDate);

    // Calculate the difference in days
    const differenceInDays = endDate.diff(currentDate, 'day');

    return ` ${differenceInDays} Days left`;
  };

  const rows = tableData.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Box display={'inline'}style={{display: 'inline'}}>
          <Text>{item.title}</Text>
        </Box>
      </Table.Td>
      <Table.Td>
        <Badge
          color={item.priority === 'High' ? 'red' : item.priority === 'Medium' ? 'yellow' : 'gray'}
        >
          {item.priority}
        </Badge>
      </Table.Td>
      <Table.Td>{daysLeft(item.deliveryDate)}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {headers.map((item) => (
            <Table.Th>{item}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
export interface SummaryTableProps {
  tableData: SummaryTableModel[];
  headers: string[];
  type: string;
}
export default SummaryTable;
