import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Layout, withLayout } from '../layout/Layout';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '@/helpers/api';

function Home({ menu }: HomeProps): JSX.Element {

  return (
    <>
      Body

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }

  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}