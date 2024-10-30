'use client';
import { IconPointFilled } from '@tabler/icons-react';
import { Accordion, Badge, Group, Text } from '@mantine/core';
import { progressMockData, toDoMockData, upcomingMockData } from '@/constants/Constants';
import SummaryTable from '../SummaryTable/SummaryTable';

const SummaryAccordion = () => {
  const progressData = progressMockData;
  const toData = toDoMockData;
  const upcomingData = upcomingMockData;
  const headersArr: string[] = ['Name', 'Priority', 'Due Date']
  const setAccordionLabel = (type: string, taskCount: number) => {
    return (
      <Group gap={'xs'}>
        <Badge color={type === 'IN PROGRESS' ? 'cyan' : type === 'TO DO' ? 'gray': 'orange'}>{type}</Badge>
        <IconPointFilled style={{width:12, height: 12}} />
        <Text>{taskCount + ' tasks'}</Text>
      </Group>
    );
  };

  return (
    <Accordion chevronPosition="left">
      <Accordion.Item value="progress" key={'progress'}>
        <Accordion.Control>{setAccordionLabel('IN PROGRESS', progressData.length)}</Accordion.Control>
        <Accordion.Panel>
            <SummaryTable tableData={progressData} headers={headersArr} />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="todo" key={'todo'}>
        <Accordion.Control>{setAccordionLabel('TO DO', toData.length)}</Accordion.Control>
        <Accordion.Panel>
            <SummaryTable tableData={toData} headers={headersArr} />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="upcoming" key={'upcoming'}>
        <Accordion.Control>{setAccordionLabel('UPCOMING', upcomingData.length)}</Accordion.Control>
        <Accordion.Panel>
            <SummaryTable tableData={upcomingData} headers={headersArr} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default SummaryAccordion;
