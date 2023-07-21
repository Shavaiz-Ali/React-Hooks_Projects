import Navbar from "./Navbar";
import { Data } from "./Data";
import Product from "./Product"
export const Home = () => {
  return (
    <>
      <Navbar />
      <h2 className="text-4xl tracking-wide py-4 pl-8">New IN</h2>

      <div className="container grid lg:grid-cols-3 grid-cols-2 gap-12 mb-10 items-center mx-auto text-center">
        {Data.map((item, i) => {
          return (
            <>
              <Product
                id={i}
                item={item}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
