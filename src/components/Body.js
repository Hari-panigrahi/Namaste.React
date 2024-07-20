import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {

  // Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]); 
  useEffect(() => {
    // console.log("body rendered")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(json?.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfRestaurants.length == 0){
  return<Shimmer/>;
  }

  // Normal JS variable 
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
  //  }
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
  
  return listOfRestaurants.length == 0 ? (
   <Shimmer/> 
  ) : (
    <div className="body">
      <div className="filter" >  
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
      </div>
    </div>
  );
};

export default Body;
