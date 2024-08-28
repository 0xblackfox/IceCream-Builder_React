import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IcreCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state={
        items: {
            // vanilla: 45,
            // chocolate: 50,
            // strawberry: 70,
            // lemon: 40,
            // orange: 50,
        },
        scoops: [],
        totalPrice: 0,
    };

    componentDidMount() {
        fetch('https://icecream-builder-36aa7-default-rtdb.firebaseio.com/items.json')
          .then((response) => response.json()) 
          .then((responseData) => {
            this.setState({
              items: responseData, 
            });
          })
          .catch((error) => {
            console.error('Error fetching data:', error); 
          });
      }

    // addScoop = (scoop) => {
    //     const {scoops, items,totalPrice} = this.state;
    //     const workingScoops = {...scoops};
    //     workingScoops.push(scoop);
    //     this.setState(
    //         {
    //             scoop: workingScoops,
    //             totalPrice: totalPrice + items[scoop],
    //         }
    //     )

    // };

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops]; 
        workingScoops.push(scoop);
        this.setState((prevState) => ({
          scoops: workingScoops,
          totalPrice: prevState.totalPrice + items[scoop],
        }));
      };
      

      removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops]; 
      
        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop); 
        if (scoopIndex !== -1) { 
          workingScoops.splice(scoopIndex, 1); 
          this.setState((prevState) => ({
            scoops: workingScoops,
            totalPrice: prevState.totalPrice - items[scoop], 
          }));
        }
      };
      
  render() {
    const {items,totalPrice,scoops} = this.state
    return (
        <div className={[classes.container,'container'].join(' ')}>
            <IceCream scoops={scoops} />
            <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops}/>
        </div>
    )
  }
}
