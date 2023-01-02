import "../index.css"
import { useEffect, useState } from "react";
import book1 from '../assets/Books/book1.jpg';
import book2 from '../assets/Books/book2.jpg';
import book3 from '../assets/Books/book3.jpg';

function Carousel() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: book1,
    },
    {
      id: "2",
      image: book2,
    },
    {
      id: "3",
      image: book3,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    //   console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel ">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md card--active";
          } else if (i === indexRight) {
            className = "card img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md card--right";
          } else if (i === indexLeft) {
            className = "card img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="LAtest Books"
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
