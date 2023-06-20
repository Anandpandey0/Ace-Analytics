import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap relative">
            {/* <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
            <div class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
              <Image
                alt="team"
                src={
                  "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/IMG-20230617-WA0004.jpg"
                }
                fill
                className="object-fill lg:object-fill"
              />
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Raghav Mangal
              </h1>
              <h2 class="text-sm title-font text-gray-500 tracking-widest font-semibold">
                (The Director of Ace Analytics)
              </h2>

              <p class="leading-relaxed">
                I am an accomplished professional with a B.Tech Degree from IIT
                Roorkee. Notably, he played a pivotal role as part of IPAC,
                leading the WB-AITC campaign in Kolkata and the North Parganas
                Zone from 2019 to 2021. His exceptional performance in the WB
                elections for IPAC/AITC propelled him to join Namo briefly,
                where he devised a comprehensive strategy to target the 120
                critical L.S. Assemblies that BJP failed to secure in the 2019
                GE. In 2021, Raghav co-founded Ace Analytics alongside his
                esteemed colleagues from IIT and IPAC. The organization made
                significant contributions to political campaigns, notably
                supporting a senior cabinet minister from BJP in the UP Assembly
                Elections and collaborating with the INC State President for the
                Goa Assembly elections. Their expertise was sought after in
                2022, as they advised the INC Rajasthan State President on
                crucial political matters, including candidate selection,
                organization building, and padyatras throughout Rajasthan.
                Additionally, Ace Analytics collaborated with TRS in the same
                year, providing in-depth assembly reports and statewide surveys,
                encompassing 119 constituencies. Currently, Ace Analytics is
                actively engaged with esteemed senior MPs from various states
                such as Orissa, U.P., and Telangana. They offer their expertise
                in social media campaigns and public outreach programs,
                effectively supporting these politicians in their endeavors to
                connect with the masses and amplify their presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
