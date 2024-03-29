import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {

  // Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);


  //Normal JS variable 
  // let listOfRestaurants =[
  // {
  //   data: {
  //     id: "439223",
  //     name: "KARIM'S- Original from Jama ",
  //     cloudinaryImageId: "wusbnsbstd15y20fr2ck",
  //     cuisines: [
  //       "North Indian",
  //       "Biryani",
  //       "Tandoor",
  //       "Lucknowi",
  //       "Desserts",
  //       "Indian",
  //       "Kebabs",
  //     ],
  //     tags: [],
  //     costForTwo: 80000,
  //     costForTwoString: "₹800 FOR TWO",
  //     deliveryTime: 40,
  //     avgRating: "4.1",

  //   }
  // },
  // {
  //   data: {
  //     id: "301010",
  //     name: "Kolkata@99",   
  //     cloudinaryImageId: "ptx2rjik3s57qhc6wz9o",
  //     cuisines: ["Indian"],
  //     costForTwo: 20000,
  //     costForTwoString: "₹200 FOR TWO",
  //     deliveryTime: 37,
  //     avgRating: "3.6",
    
  //   }
  // },
  // {
  //   data: {
  //     id: "301057",
  //     name: "MOMO Mami",   
  //     cloudinaryImageId: "ptx2rjik3s57qhc6wz9o",
  //     cuisines: ["Indian","Chinese","Tibetan","Pahadi"],
  //     costForTwo: 20000,
  //     costForTwoString: "₹200 FOR TWO",
  //     deliveryTime: 45,
  //     avgRating: "4.7",
    
  //   }
  // }
  // ];
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {     
           const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container ">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard 
           resData = {resList[0]}
          />
          <RestaurantCard 
           resData = {resList[1]}
          />
          <RestaurantCard 
           resData = {resList[2]}
          />
          <RestaurantCard 

           resData = {resList[3]}
          />
          <RestaurantCard 
           resData = {resList[4]}
          /> */}

        {/* <RestaurantCard
            resName="Hangout Cakes & More"
            cuisines="Bakery,Desserts,Snacks"
            starRating="4.5 stars"
            address="Dadar"
          />
         */}
      </div>
    </div>
  );
};

export default Body;
