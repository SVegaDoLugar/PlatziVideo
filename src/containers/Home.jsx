import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals}) => {
  return (
    <>
      <Header />
      <Search />
      {mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel >
            {mylist.map(item =>
              <CarouselItem
                key={item.id} 
                {...item}
                isList={true}
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Best newest movies (2010 - today)">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Best movies of all time">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
      </>
  );
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);