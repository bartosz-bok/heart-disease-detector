import { Grid } from '@mantine/core';
import { FC } from 'react';
import { MediaCard } from './MediaCard';

const { Col } = Grid;

export const Cards: FC = () => {
  return (
    <Grid>
      <Col md={12} lg={6}>
        <MediaCard
          src={
            'https://images.unsplash.com/photo-1649443655278-99a66bd9558b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
          }
        />
      </Col>
      <Col md={12} lg={6}>
        <MediaCard
          src={
            'https://images.unsplash.com/photo-1649431510204-ef044491e143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          }
        />
      </Col>
      <Col md={12} lg={6}>
        <MediaCard
          src={
            'https://images.unsplash.com/photo-1649518897210-82409f5c678c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
          }
        />
      </Col>
      <Col md={12} lg={6}>
        <MediaCard
          src={
            'https://images.unsplash.com/photo-1612860129396-19e66d392e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80'
          }
        />
      </Col>
    </Grid>
  );
};
