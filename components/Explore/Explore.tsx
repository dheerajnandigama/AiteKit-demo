'use client';

import { Box, Grid, Text, Group } from '@mantine/core';
import NextImage from 'next/image';
import classes from './Explore.module.css';
import explore1 from '../../public/images/i1.png';
import explore2 from '../../public/images/i2.png';
import explore3 from '../../public/images/i3.png';
import exploreButton from '../../public/images/i4.png';

const PRIMARY_COL_HEIGHT = 600;

export function Explore() {
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - 16; // assuming mantine spacing-md is 32px

  return (
    <Box>
      <Group justify="space-between" className={classes.explore}>
        <Text className={classes.text}>
          skin <span style={{ color: '#46583D' }}>balance</span> is yours
        </Text>
        <Text className={classes.caption}>
          your skin is perfection with <br /> aitekit
        </Text>
      </Group>
      <Grid>
        <Grid.Col span={1}>
          <div style={{ position: 'relative', height: PRIMARY_COL_HEIGHT }}>
            <NextImage
              src={explore1}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
              alt="explore1"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div style={{ position: 'relative', height: PRIMARY_COL_HEIGHT }}>
            <NextImage
              src={explore2}
              style={{ objectFit: 'cover', borderRadius: '20px' }}
              alt="explore2"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={5}>
          <div style={{ position: 'relative', height: SECONDARY_COL_HEIGHT, marginBottom: '25px' }}>
            <NextImage
              src={explore3}
              fill
              style={{ objectFit: 'cover', borderRadius: '20px' }}
              alt="explore3"
            />
          </div>
          <div style={{ position: 'relative', height: 250, width: '90%' }}>
            <NextImage
              src={exploreButton}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
              alt="explore button"
            />
          </div>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
