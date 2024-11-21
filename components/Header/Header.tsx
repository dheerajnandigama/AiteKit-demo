import {
    Button,
    Box,
    Group,
  } from '@mantine/core';
  import Image from 'next/image';
  import classes from './Header.module.css';
  import starImg from '../../public/images/star.png';
  import cart from '../../public/images/cart.png';
  import login from '../../public/images/login.png';

  export function Header() {
    return (
      <Box>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <div className={classes.logo}>aitekit</div>

            <Group h="100%" gap={0} visibleFrom="sm">
              <Group className={classes.mainLinks} gap={5}>
                <a href="#" className={classes.link}>
                  Take a test
                </a>
                <Image src={starImg} alt="starImg" />
                <a href="#" className={classes.link}>
                  About
                </a>
                <Image src={starImg} alt="starImg" />
                <a href="#" className={classes.link}>
                  Products
                </a>
                <Image src={starImg} alt="starImg" />
                <a href="#" className={classes.link}>
                  FAQ
                </a>
                <Image src={starImg} alt="starImg" />
                <a href="#" className={classes.link}>
                  Contact us
                </a>
              </Group>
            </Group>

            <Group>
              <Group className={classes.sidelinks} gap={5}>
                <Button variant="subtle">
                  <Image src={cart} alt="cart" style={{ marginRight: '8px' }} />
                  <a href="#" className={classes.slink}>
                  Cart
                  </a>
                </Button>
                <Button variant="subtle">
                  <Image src={login} alt="cart" style={{ marginRight: '8px' }} />
                  <a href="#" className={classes.slink}>
                  Log in
                  </a>
                </Button>
              </Group>
            </Group>
          </Group>
        </header>
      </Box>
    );
  }
