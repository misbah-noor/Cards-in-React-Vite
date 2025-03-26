import React from "react";
import Card from "./Components/Card";

function App() {
  return (
    <div className="bg-gray-950">
      <div className="heading text-center mb-7 pt-10">
        <h1 className="font-bold text-white md:text-5xl text-2xl">
        🔥WEB SERIES🔥
        </h1>
        <h6 className="text-yellow-500 mt-3">In react-app</h6>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 md:px-20 px-16">
      <Card
        title="AFTER"
        image="./images/img1.jpg"
        description="A beautiful sunset over the mountains."
        link="https://example.com/sunset"
      />
      <Card
        title="ALADDIN"
        image="./images/img2.jpg"
        description="A breathtaking view of mountains."
        link="https://example.com/mountains"
      />
       <Card
        title="BEAUTY & BEAST"
        image="./images/img3.jpg"
        description="A beautiful sunset over the mountains."
        link="https://example.com/sunset"
      />
       <Card
        title="HARRY POTTER"
        image="./images/img4.png"
        description="A beautiful sunset over the mountains."
        link="https://example.com/sunset"
      />
       <Card
        title="THE DISASTER"
        image="./images/img5.jpeg"
        description="A beautiful sunset over the mountains."
        link="https://example.com/sunset"
      />
      <Card
        title="FINDING NEMO"
        image="./images/img6.jpg"
        description="The vibrant city skyline at night."
        link="https://example.com/city"
      />
         <Card
        title="HORROR ONE"
        image="./images/img7.jpg"className="object-cover"
        description="The vibrant city skyline at night."
        link="https://example.com/city"
      />
         <Card
        title="THE MUTANTS"
        image="./images/img8.jpeg"
        description="The vibrant city skyline at night."
        link="https://example.com/city"
      />
    </div>
    </div>
  );
}

export default App;
