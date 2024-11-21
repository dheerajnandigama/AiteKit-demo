'use client';

import { Button, Grid, Text } from '@mantine/core';
import NextImage from 'next/image';
import classes from './UniqueOffer.module.css';
import OfferImg from '../../public/images/OfferImg.png';

export function UniqueOffer() {
    return (
        <div className={classes.main}>
            <Grid>
                <Grid.Col span={6}>
                    <NextImage src={OfferImg} alt="OfferImg" />
                </Grid.Col>
                <Grid.Col span={6}>
                    <div>
                    <Button variant="outline" size="xl" radius="md" color="#46583D">UNIQUE OFFER</Button>
                    <Text className={classes.caption}>
                    Revitalize your skin with our Microbiome Cosmetics Kit – a<br />
                    harmonious blend of science and nature, delivering a radiant<br />
                    complexion by nourishing your skins unique microbiome. Unveil<br />
                    the beauty within and embrace a healthier, more luminous glow.
                    </Text>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    );
}
