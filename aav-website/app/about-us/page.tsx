"use client";

import ImageSlider from "@/components/ImageSlider";
import React from "react";
import Image from "next/image";
import "tailwindcss";

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 space-y-8 bg-white text-black">
      {/* Section 1: About Us */}
      <section className="flex flex-col md:flex-row items-start gap-8">
        {/* Left column: Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="leading-relaxed">
            Archimedes is a team of innovators dedicated to shaping the future
            of autonomous systems. We design and build intelligent maritime
            vehicles that can operate both on water and in the air, executing
            complex missions with full autonomy. Our focus is on developing
            robust and reliable autonomous systems capable of adapting to
            dynamic and challenging environments. Leveraging advanced sensor
            suites and high-performance actuators, we strive to achieve seamless
            navigation, perception, and decision-making without human
            intervention. Given the multidisciplinary nature of autonomous
            systems, our team brings together talents from diverse fields —
            including Mechanical, Aerospace, Electrical, Computer, Materials,
            and Bio Engineering, Computer Science, Maritime Studies, and Fine
            Arts. This fusion of expertise enables us to tackle complex
            technical challenges while delivering innovative and elegant
            solutions.
          </p>
        </div>

        { /* Image */ }
        <div className="flex-1 flex justify-end">
          <Image
            src="/about-us/AAV_Website_about_us.jpg" 
            alt="RobotX Challenge"
            width={700}
            height={600}
            className="rounded-lg shadow"
            priority
          />
        </div>
      </section>

    {/* Section 2: Background */}    
            <>
                <h2 className="text-3xl font-bold mb-4"> Background </h2>
                <section>
                    <p>
                      Archimedes was established in 2012 following an invitation 
                      from Singapore’s Ministry of Defence (MINDEF), specifically
                      the Future Technology Systems Directorate (FSTD), to
                      participate in the inaugural Maritime RobotX Challenge
                      — an international competition focused on advancing autonomous 
                      maritime systems. Over the years, our team has evolved through
                      several iterations. We were initially known as Leviathan (2014)
                      and later as Osmind (2018). From 2016 to 2022, we competed under
                      the name Singaboat. In 2024, we adopted our current name, Archimedes
                      Autonomous Vehicles, paying tribute to the Greek mathematician 
                      who discovered the principle of buoyancy — a name that more accurately
                      reflects our focus on autonomous maritime technologies. 
                      Since then, Archimedes has undergone a significant transformation, 
                      evolving from a project-based initiative into a full-fledged student
                      club open to students across nine faculties at Nanyang Technological
                      University. This shift has allowed us to broaden our talent pool, 
                      foster cross-disciplinary collaboration, and build a stronger 
                      foundation for future innovation. 
                      From a small group of dedicated pioneers, we have grown from 14
                      members in 2024 to 43 members in 2025, reflecting our expanding 
                      capabilities and ambition.   
                    </p>
                </section>
            </>

      { /* Image Slider */ }
      <div className="mt-8">
        <ImageSlider
          images={[
            "/about-us/Background_sec_img1.jpg",
            "/about-us/Background_sec_img2.jpg",
            "/about-us/Background_sec_img3.jpg",
            "/about-us/Background_sec_img4.jpg"
          ]}
          autoplay
          intervalMs={4500}
          aspectRatio="aspect-[16/9]"
        />
      </div>

      {/* Section 3: History */}
      <section>
        <h2 className="text-2xl font-bold mb-4 underline">Our History</h2>
        <p className="text-gray-700 leading-relaxed">
        { /* In 2012, Professor Xie Ming was invited by RoboNation to establish NTU’s first team for the RobotX Challenge. The team was formed specifically for this competition, and they made their debut in 2014 when Singapore hosted the inaugural RobotX event. */ }
        </p>

        <div className="mt-4">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2014 - Singapore</li>
            <li>2016 - Hawaii, USA</li>
            <li>2018 - Hawaii, USA</li>
            <li>2020 - No competition due to COVID-19</li>
            <li>2022 - Sydney, Australia</li>
            <li>2024 - Florida, USA</li>
          </ul>


        </div>
      </section>

      { /* Section 4 */ }
      <section className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 flex justify-start">
          <img 
            src="/about-us/Section4.jpg"
            alt="RobotX Challenge"
            width={400}
            height={300}
            className="rounded-lg shadow flex-shrink-0"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 underline">RobotX Maritime Challenge</h2>
          <p className="text-gray-700 leading-relaxed">
            Launched in 2012 by the U.S. Office of Naval Research (ONR) in collaboration with 
            Singapore’s Future Technology Systems Directorate (FSTD), RobotX is an advanced 
            robotics competition that brings together top teams from around the Pacific Rim. 
            The competition focuses on the development of Autonomous Surface Vehicles (ASVs) 
            and sensor technologies capable of performing complex tasks in dynamic maritime 
            environments. 
            Beyond the competition, RobotX serves as a platform to foster international 
            collaboration between students, academic institutions, government agencies, 
            and industry partners. It bridges research, commercial innovation, and defence 
            applications, ensuring that solutions developed are both cutting-edge and 
            practically relevant. 
            Archimedes competes in the biennial RobotX Challenge, showcasing our capabilities
            in multi-domain robotics — operating on the surface, underwater, and in the air.
            In the 2024 edition, we achieved a 5th place finish and are now striving for a 
            podium position in 2026. 
          </p>
        </div>
      </section>

      { /* Section 5 */ }
      <section className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 underline">SUAS Competition</h2>
          <p className="text-gray-700 leading-relaxed">
            The Student Unmanned Aerial Systems (SUAS) Competition is an international competition organised by RoboNation, challenging university teams to design, build, and operate Unmanned Aerial Systems (UAS) capable of autonomous aerial missions. 
 
            Since its inception in 2002, SUAS has tested students' ability to integrate airframes, avionics, sensors, and software to accomplish a set of mission-critical tasks. These tasks include Autonomous Flight, Obstacle Avoidance, Object Detection, Classification, and Localisation, as well as Precision Air Delivery of payloads. 
 
            Following RobotX 2024, Archimedes is expanding beyond surface autonomy into aerial domains, with our participation in SUAS 2025 marking a strategic step forward. As UAVs and UAS technologies become increasingly vital in maritime, defence, and commercial operations, our team is committed to developing advanced aerial autonomy solutions that complement our maritime expertise. 
          </p>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="w-[350px] h-[250px] relative">
            <Image
              src="/about-us/Section5.jpg"
              alt="SUAS Competition"
              fill
              className="rounded-lg shadow object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
