import React from 'react';
import { connect } from 'react-redux'

let NewsItem = (listingData) => {
  let listArr = [];
  if (listingData && listingData.list && listingData.list.results) {
    listArr = listingData.list.results;
    // console.log("Name", listingData.list.results);
  }

  return listArr.length ? (
    listArr.map(({ id, image, name, status, species, gender, origin, location }) => (
      <div className="col-3 tile" key={id}>
        <img src={image} />
        <div className="top-text">
          <h4>{name}</h4>
          <p>id: {id} - created 2 years ago</p>
        </div>
        <ul>
          <li>
            <span className="float-left">STATUS</span>
            <span className="float-right">{status}</span>
          </li>
          <li>
            <span className="float-left">Species</span>
            <span className="float-right">{species}</span>
          </li>
          <li>
            <span className="float-left">Gender</span>
            <span className="float-right">{gender}</span>
          </li>
          <li>
            <span className="float-left">Origin</span>
            <span className="float-right">{origin.name}</span>
          </li>
          <li>
            <span className="float-left">Last loaction</span>
            <span className="float-right">{location.name}</span>
          </li>
        </ul>
      </div>
    ))

  ) : null;
}

export default NewsItem;
