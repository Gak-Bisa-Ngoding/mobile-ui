import React from "react";

type CardType = "Spicy" | "Sour" | "Bitter" | "Sweet" | "Umami" | "Salty" | undefined

type CardProps = {
  name: string;
  price: number;
  image: string;
  alt?: string;
  tags: CardType[];
};

const Card: React.FC<CardProps> = ({ name, price, image, alt = "", tags }) => {
    let color: string;
    const getTextColor = (type: CardType) => {
        switch (type) {
            case "Spicy":
                color = "bg-red-500"
                break;
            case "Sour":
                color = "bg-lime-500"
                break
            case "Bitter":
                color = "bg-amber-900"
                break
            case "Sweet":
                color = "bg-pink-400"
                break
            case "Umami":
                color = "bg-fuchsia-500"
                break
            case "Salty":
                color = "bg-sky-500"
            default:
                break;
        }
    }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <a href="/">
        <img className="rounded-t-lg aspect-square object-cover" src={image} alt={alt} />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          Rp. {price}
        </p>
        <div className={`inline-flex gap-2`}>
            {
                tags.map(tag => {
                    getTextColor(tag)
                    return(
                        <div className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full ${color}`}>
                            {tag}
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Card;
