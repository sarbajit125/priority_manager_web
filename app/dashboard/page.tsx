import * as dayjs from 'dayjs';
import NextImage from 'next/image';
import { IconBriefcase2, IconChecklist, IconChevronUp, IconPlus, IconPointFilled, IconTopologyComplex } from '@tabler/icons-react';
import {
  ActionIcon,
  BackgroundImage,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Badge,
  Box
} from '@mantine/core';
import bgImg from '../../public/assests/bg.jpg';

export default function Page() {
  return (
    <Container fluid>
      <BackgroundImage
        src={
          'https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain-studio-background_1258-71253.jpg?t=st=1730052544~exp=1730056144~hmac=edb679a35c805f3f8ddd8236c22a63e1fe411a42a8a499f271ad3d200315d955&w=1480'
        }
        radius={'md'}
      >
        <Stack>
          <Text size="sm">{dayjs().format('ddd, MMM D')}</Text>
          <Text size="xl" fw={500}>
            Hello Courtney
          </Text>
          <Group>
            <Text
              size="xl"
              fw={500}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              How can I help you today
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'violet', to: 'cyan', deg: 90 }}
              radius={'lg'}
            >
              Ask AI?
            </Button>
            <Button variant="outline" radius={'lg'}>
              Get task update
            </Button>
            <Button variant="outline" radius={'lg'}>
              Create workspace
            </Button>
            <Button variant="outline" radius={'lg'}>
              Connect apps
            </Button>
          </Group>
        </Stack>
        <SimpleGrid cols={2}>
          <Paper shadow="sm" p="xl" radius={'md'}>
            <Group>
              <IconChecklist />
              <Text>My Tasks</Text>
            </Group>
            <Group>
                <ActionIcon variant='transparent'>
                    <IconChevronUp style={{ color: 'gray', width: '18px', height: '18px' }} />
                </ActionIcon>
                <Badge color="cyan">In progress</Badge>
                <IconPointFilled />
                6 tasks
            </Group>
            <Group>
                <ActionIcon variant='transparent'>
                    <IconChevronUp style={{ color: 'gray', width: '18px', height: '18px' }} />
                </ActionIcon>
                <Badge color="gray">To Do</Badge>
                <IconPointFilled />
                2 tasks
            </Group>
            <Group>
                <ActionIcon variant='transparent'>
                    <IconChevronUp style={{ color: 'gray', width: '18px', height: '18px' }} />
                </ActionIcon>
                <Badge color="orange">Upcoming</Badge>
                <IconPointFilled />
                1 tasks
            </Group>
          </Paper>
          <Paper shadow="sm" p="xl" radius={'md'}>
            <Group>
              <IconBriefcase2 />
              <Text>Projects</Text>
            </Group>
            <SimpleGrid cols={2}>
            <Group gap={'xs'}>
              <ActionIcon
                variant="outline"
                size={'lg'}
                style={{
                  border: '2px dashed', // Set dashed border
                  borderColor: '#007bff', // Change this to your preferred color
                  color: '#007bff', // Change text color to match border
                  '&:hover': {
                    backgroundColor: '#e7f0ff', // Optional hover effect
                  },
                }}
              >
                <IconPlus />
              </ActionIcon>
              <Text>Add new Task</Text>
            </Group>
            <Group>
                <IconTopologyComplex />
                <Box>
                    <Text>Mobiquity Pay</Text>
                    <Text> 270 tasks . 10 defects</Text>
                </Box>
            </Group>
            <Group>
                <IconTopologyComplex />
                <Box>
                    <Text>SDUI</Text>
                    <Text> 510 tasks . 12 defects</Text>
                </Box>
            </Group>
            </SimpleGrid>
          </Paper>
        </SimpleGrid>
      </BackgroundImage>
    </Container>
  );
}
