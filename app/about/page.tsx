import PersonCard from "@/components/PersonCard";
import { ReactNode } from "react";

function getPeopleDescriptions(): {
  people: {
    firstName: string;
    lastName: string;
    position: string;
    bio: string;
    imageID: string;
  }[];
} {
  return {
    people: [
      {
        firstName: "Jack",
        lastName: "Fineman",
        imageID: "officers/jack-fineman",
        position: "President",
        bio: `Jack is a 3rd-year Economics major whose interests lie in disruptive technology and innovation. 
            From June of 2022 to January of 2023 he spent his time as a full-time student and full-time intern 
            at WisdomTree where he was a Defi Product Manager.`,
      },
      {
        firstName: "Jacey",
        lastName: "Buchner",
        position: "Vice President",
        imageID: "officers/jacey-buchner",
        bio: `Jacey is a 2nd-year Computer Science major whose interests lie at the intersection of Distributed Systems, 
            Blockchain technologies, and Security. Jacey is also currently working as a researcher as part of the SecLab 
            at UCSB in the blockchain field!`,
      },
      {
        firstName: "Monty",
        lastName: "Sage",
        position: "Head Of Strategy",
        imageID: "officers/monty-sage",
        bio: `Monty is a second year economics major working towards an education in technology and business. 
            Last year he worked for a venture capital firm as an analyst, exposing himself to a plethora of motivated 
            founders and cutting edge technology. With a passion for business fundamentals and new technology, 
            he hopes to work in tech after graduation and make an impact on how we work and live.`,
      },
      {
        firstName: "Ysabel",
        lastName: "Chen",
        position: "Head Of Education",
        imageID: "officers/ysabel-chen",
        bio: `Ysabel is a 1st-year Statistics & Data Science major, and she's passionate about exploring the paradigm 
            shift created by Web 3.0. Ysabel is interested in developing new products and discussing regulation in this new space. 
            Fun fact, she previously won a Web3 hackathon and is currently writing a paper on law and regulation in the Web3/blockchain industry!`,
      },
      {
        firstName: "Mateo",
        lastName: "Wang",
        position: "Co-Head Of Technology",
        imageID: "officers/mateo-wang",
        bio: `Mateo is a 3rd year CS major at UCSB with over 5 years of experience in the tech industry, hackathons, and 
        side projects. He's well-versed in topics such as web development, machine learning, and blockchain technologies. 
        His goal is to grow the Blockchain UCSB's technological advancements and to help students take their first steps into 
        learning to develop on the blockchain.`,
      },
      {
        firstName: "Jesus",
        lastName: "Velarde",
        position: "Co-Head Of Technology",
        imageID: "officers/jesus-velarde",
        bio: `Jesus is a 3rd year CS student at UCSB with experience in frontend and backend web technologies. His goal 
            is to realize the engineering vision of Blockchain at UCSB`,
      },
      {
        firstName: "Zack",
        lastName: "Gubner",
        position: "Treasurer",
        imageID: "officers/zack-gubner",
        bio: `Zach is a 3rd-year Economics Major with a focus on the integration of blockchain technology within current 
        frameworks. He has immersed himself in understanding the potential of blockchain to revolutionize property management 
        and traditional finance. Zach has set his sights on entering the Web3 market, leveraging his innovative mindset and 
        keen understanding of emerging technologies`,
      },
      {
        firstName: "Anthony",
        lastName: "Lo",
        position: "Project Director & Developer",
        imageID: "officers/anthony-lo",
        bio: `Anthony is passionate about leading, developing and innovating ESG frameworks that provide social good. 
        He has been exposed to a number of opportunities in this field, including developing web3 applications, hackathons, 
        and learning the intricacies of interoperable ecosystems.`,
      },
    ],
  };
}

export default function About() {
  const { people } = getPeopleDescriptions();

  return (
    <>
      <div className="flex justify-center w-full leading-6 text-indigo-900">
        <div className="w-full max-w-screen-xl text-indigo-900">
          <h2
            className="m-0 text-5xl font-normal tracking-normal text-center normal-case break-words sm:text-5xl"
            data-sb-field-path=".title"
          >
            About
          </h2>
          <p
            className="mx-0 mt-6 mb-0 text-lg leading-7 text-center sm:text-xl sm:leading-7"
            data-sb-field-path=".subtitle"
          >
            Board &amp; Officers
          </p>
          <div
            className="grid gap-x-8 gap-y-10 mt-12 lg:grid-cols-2"
            data-sb-field-path=".people"
          >
            {people.map((person, i) => (
              <PersonCard
                firstName={person.firstName}
                lastName={person.lastName}
                position={person.position}
                bio={person.bio}
                imageID={person.imageID}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
