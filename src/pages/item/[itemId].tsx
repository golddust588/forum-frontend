import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// type ItemType = {
//   id: string;
//   image: string;
//   name: string;
//   price: number;
//   removeItem: (id: string) => void;
// };

// const Item = () => {
//   const [item, setItem] = useState(null);

//   const router = useRouter();

//   const fetchItem = async (itemId: string) => {
//     const item = await axios.get(
//       `https://hp-api.onrender.com/api/character/${itemId}`
//     );

//     setItem(item.data[0]);
//   };

//   useEffect(() => {
//     router.query.itemId && fetchItem(router.query.itemId as string);
//   }, [router.query]);

//   return (
//     <div>
//       {item && (
//         <>
//           <div>{`Name of the actor: ${item.actor}`}</div>
//           <div>{`Name of the actor in series: ${item.name}`}</div>
//           <div>{`Species: ${item.species}`}</div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Item;
