import React from "react";
import Card from "../../components/Card";
import { CardDefault } from "../../assets";

export const Login: React.FC = () => {
  return (
    <section>
      <Card image={CardDefault} name="Burger Bangor" tags={["Spicy", "Bitter"]} price={50000} alt="Sate Ayam"/>
      {/* <Button text="testing" />
      <p className="text-3sm font-bold">Hello world!</p>; */}
    </section>
  );
};
