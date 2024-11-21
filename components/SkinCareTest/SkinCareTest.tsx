'use client';

import NextImage from 'next/image';
import { Box, Grid, Group, Text } from '@mantine/core';
import TestImage from '../../public/images/SkinCareTest.png';
import classes from './SkinCareTest.module.css';
import TextImage from '../../public/images/Text button.png';

export function SkinCareTest() {
  return (
    <Box className={classes.SCT}>
      <Group justify="space-between" className={classes.explore}>
        <Text className={classes.text}>
          about <span style={{ color: '#46583D' }}>AiteKit</span>
        </Text>
      </Group>
      <Grid>
        <Grid.Col span={5} miw="550px">
            <NextImage
              src={TestImage}
              style={{ objectFit: 'cover', borderRadius: '8px', position: 'relative' }}
              alt="explore button"
            />
        </Grid.Col>
        <Grid.Col span={7}>
          <div style={{ position: 'relative' }}>
            <Text className={classes.caption}>
                We believe that true beauty should not come at the<br />
                expense of our planet or our furry friends. Our brand is built<br />
                on the foundation of ethical and sustainable practices. We<br />
                carefully source our ingredients, ensuring they are cruelty-<br />
                free and eco-friendly.
            </Text>
            <NextImage
              src={TextImage}
              alt="TextButton"
            />
          </div>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
