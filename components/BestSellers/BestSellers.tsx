'use client';

import NextImage from 'next/image';
import { Button, Divider, Grid, Group, Text } from '@mantine/core';
import StarIcon from '../../public/images/start icon.png';
import classes from './BestSellers.module.css';
import p1 from '../../public/images/p1.png';
import p2 from '../../public/images/p2.png';
import p3 from '../../public/images/p3.png';

export function BestSellers() {
  return (
    <div className={classes.main}>
      <Group justify="space-between">
        <Text className={classes.title}>our bestsellers</Text>
        <Group>
          <Text className={classes.side}>View all</Text>
          <NextImage src={StarIcon} alt="starIcon" />
        </Group>
      </Group>
      <Grid>
        <Grid.Col span={4}>
          <div style={{ position: 'relative' }}>
            <NextImage src={p1} alt="p1" />
            <Group justify="space-between" className={classes.item}>
                <Text className={classes.imgTxt}>Supreme Lifting Eye Serum</Text>
                <Text className={classes.imgTxt}>32.87€</Text>
            </Group>
            <Button variant="filled" color="#46583D" size="md" style={{ marginLeft: '20px' }}>Add to cart</Button>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div style={{ position: 'relative' }}>
            <NextImage src={p2} alt="p2" />
            <Group justify="space-between" className={classes.item}>
                <Text className={classes.imgTxt}>Hydrating Eye Cream</Text>
                <Text className={classes.imgTxt}>32.87€</Text>
            </Group>
            <Button variant="filled" color="#46583D" size="md" style={{ marginLeft: '20px' }}>Add to cart</Button>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div style={{ position: 'relative' }}>
            <NextImage src={p3} alt="p3" />
            <Group justify="space-between" className={classes.item}>
                <Text className={classes.imgTxt}>Extra Sensitive calming serum</Text>
                <Text className={classes.imgTxt}>32.87€</Text>
            </Group>
            <Button variant="filled" color="#46583D" size="md" style={{ marginLeft: '20px' }}>Add to cart</Button>
          </div>
        </Grid.Col>
      </Grid>
      <div className={classes.divider}>
      <Divider my="md" />
      </div>
      <Grid>
      <Grid.Col span={4}>
          <div style={{ position: 'relative' }}>
            <NextImage src={p2} alt="p2" />
            <Group justify="space-between" className={classes.item}>
                <Text className={classes.imgTxt}>Hydrating Eye Cream</Text>
                <Text className={classes.imgTxt}>32.87€</Text>
            </Group>
            <Button variant="filled" color="#46583D" size="md" style={{ marginLeft: '20px' }}>Add to cart</Button>
          </div>
      </Grid.Col>
        <Grid.Col span={4}>
          <div style={{ position: 'relative' }}>
            <NextImage src={p1} alt="p1" />
            <Group justify="space-between" className={classes.item}>
                <Text className={classes.imgTxt}>Supreme Lifting Eye Serum</Text>
                <Text className={classes.imgTxt}>32.87€</Text>
            </Group>
            <Button variant="filled" color="#46583D" size="md" style={{ marginLeft: '20px' }}>Add to cart</Button>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div style={{ position: 'relative' }}>
            <NextImage src={p3} alt="p3" />
            <Group justify="space-between" className={classes.item}>
                <Text className={classes.imgTxt}>Extra Sensitive calming serum</Text>
                <Text className={classes.imgTxt}>32.87€</Text>
            </Group>
            <Button variant="filled" color="#46583D" size="md" style={{ marginLeft: '20px' }}>Add to cart</Button>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
