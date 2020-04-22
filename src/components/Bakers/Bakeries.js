import React from 'react';
import ShortInfo from './ShortInfo/ShortInfo';
import './Bakeries.scss'
const Bakeries = () => {
  return <div className="bakeries">
    <div className="container">
      <h1 className="title">The best bakeries</h1>
    </div>
    <ShortInfo />
  </div>
}
export default Bakeries;