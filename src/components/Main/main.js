import Logo from '../../assets/Logo.svg';
import classes from '../Main/main.module.css';
import Card from '../Card/Card.js';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import usePosts from '../../hook';
import { useMemo } from 'react';

const Main = () => {
  const { data, isLoading } = usePosts();
  const algos = useMemo(() => {
    if (data) return data.slice(0, 10);
    return [];
  }, [data]);
  console.log(algos);
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <button className={classes.analyze}>ANALAYZE ASAs</button>
      </div>
      <h3 className={classes.list}>
        List of Algorand Standard Assets on ASAlytics
      </h3>
      <div className={classes.card}>
        {algos.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
