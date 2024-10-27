'use client';

import { useState } from 'react';
import {
  IconChartInfographic,
  IconHome,
  IconCalendar,
  IconChecklist,
  IconMail,
  IconLogout,
  IconAi
} from '@tabler/icons-react';
import { Avatar, Box, Code, Group, Stack, Text } from '@mantine/core';
import classes from './NavbarSimple.module.css';

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Prodify AI', icon: IconAi },
  { link: '', label: 'My Task', icon: IconChecklist },
  { link: '', label: 'Inbox', icon: IconMail },
  { link: '', label: 'Calendar', icon: IconCalendar },
  { link: '', label: 'Report & Analytics', icon: IconChartInfographic },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} gap={'xs'} justify="flex-start" align="flex-start">
          <Avatar color="cyan" radius="xl">
            CH
          </Avatar>
          <Box>
            <Text size="sm">Courtney Henry</Text>
            <Text c="dimmed" size="xs">
              Online
            </Text>
          </Box>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
