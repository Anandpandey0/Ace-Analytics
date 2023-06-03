import Image from "next/image";
import React from "react";

const Services = () => {
  const serviceArr = [
    {
      id: 1,
      name: "Political Intelligence",
      url: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/Political-Intel.png",
    },
    { id: 2, name: "Tech Platform", url: "" },
    {
      id: 3,
      name: "Data Analtics",
      url: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/DataAnalytics.png",
    },
    {
      id: 4,
      name: "Campaign & Branding",
      url: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/Campaign.png",
    },
    {
      id: 5,
      name: "Digital Communication",
      url: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/Digital.png",
    },
    {
      id: 6,
      name: "Research & Strategy",
      url: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/Research.png",
    },
    {
      id: 7,
      name: "Addition Support ",
      url: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/AdditionSupport.png",
    },
  ];
  return (
    <div className="bg-[#f5f8fd] p-4 pt-8 ">
      <div className="w-4/5 mx-auto ">
        <h1 className="text-4xl font-bold text-center ">Services</h1>
        <p className="my-4">
          We are political enthusiasts who love to get involved in meticulously
          designing the right strategies, conceptualising innovative campaigns,
          work on developing and delivering the right message, reaching out and
          influencing the electorate and persuading them to act. We can be your
          one-stop-poll-solution-provider who can empower you to win the
          election. We embrace and adopt the latest technology to make your job
          much more easier. We believe in bringing in complete Transparency &
          Accountability into the Political system, in the process making
          democracy much more vibrant, robust, participative and representative.
          To make this happen, we have an umbrella of services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-4/5 mx-auto my-8">
          {serviceArr.map((item) => (
            <div
              class="p-4 border-2 border-solid border-black h-[20vh]  flex flex-col justify-center align-middle text-center shadow-xl hover:scale-110 hover:shadow-2xl"
              key={item.id}
              className="my-8 "
            >
              <div className="relative w-full  h-[10vh]  ">
                <Image
                  src={item.url}
                  alt="Alt"
                  fill
                  className="object-contain lg:object-contain"
                />
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
