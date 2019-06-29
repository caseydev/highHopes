import React, { Component } from "react";
const connectors = [
  {
    name: "Charlie",
    imgSrc: "Janitor"
  },
  {
    name: "Charlie",
    imgSrc: "Janitor"
  },
  {
    name: "Charlie",
    imgSrc: "Janitor"
  },
  {
    name: "Charlie",
    imgSrc: "Janitor"
  }
];
const ContentHeader = () => {
  return (
    <div className='slot content-head'>
      <div>Name</div>
      <div>Job</div>
    </div>
  );
};
const ContentBody = () => {
  return (
    <div className='content-body'>
      <div className='slot'>
        <div>Charlie</div>
        <div>Janitor</div>
      </div>
      <div className='slot'>
        <div>Mac</div>
        <div>Bouncer</div>
      </div>
      <div className='slot'>
        <div>Dee</div>
        <div>Aspiring actress</div>
      </div>
      <div className='slot'>
        <div>Dennis</div>
        <div>Bartender</div>
      </div>
    </div>
  );
};
export default class Table extends Component {
  render() {
    return (
      <div>
        <ContentHeader />
        <ContentBody />
      </div>
    );
  }
}
