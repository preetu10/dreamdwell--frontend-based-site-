import { useLoaderData, useParams } from "react-router-dom";
import { getEstateFromLocalStorage } from "../../utility/localstorage";
import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
const MyCart = () => {
  const data = useLoaderData();
  const { email } = useParams();
  const [carts, setCarts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = `DreamDwell-${user.displayName}-Cart`;
    const ids = getEstateFromLocalStorage(email);
    if (ids.length > 0) {
      const estates = [];
      for (const id of ids) {
        const estate = data.find((p) => p.id == id);
        if (estate) {
          estates.push(estate);
        }
      }
      setCarts(estates);
    }
  }, [data]);

  return (
    <div className="mb-12 mt-8">
      <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-4">
        My Cart
      </h1>
      <hr className="mb-2"></hr>
      <hr className="mb-4"></hr>
      <div className="flex flex-row ml-5">
        <FaShoppingCart color="#CC935C" className="w-7 h-7"></FaShoppingCart>
        <p className="text-neutral-500 text-lg font-semibold px-3 ">
          Total Cart: {carts.length}
        </p>
      </div>
      <hr className="mb-2 mt-2"></hr>
      <hr className="mb-4"></hr>
      <div className="space-y-4  flex flex-col items-center justify-center">
        {carts.map((cart) => (
          <Cart key={cart.id} data={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
