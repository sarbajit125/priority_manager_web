import * as dayjs from 'dayjs';
import NextImage from 'next/image';
import { BackgroundImage, Button, Container, Group, Stack, Text } from '@mantine/core';
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
          <Text>{dayjs().format('ddd, MMMM D')}</Text>
          <Text size="xl" fw={500}>
            Hello Courtney
          </Text>
          <Group>
            <Text size="xl" fw={500}>
              How can I help you today
            </Text>
            <Button variant="gradient" gradient={{ from: 'violet', to: 'cyan', deg: 90 }}>
              Ask AI?
            </Button>
            <Button variant='outline'>Get task update</Button>
            <Button variant='outline'>Create workspace</Button>
            <Button variant='outline'>Connect apps</Button>
          </Group>
        </Stack>
      </BackgroundImage>
    </Container>
  );
}
