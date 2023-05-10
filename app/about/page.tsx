import PersonCard from "@/components/PersonCard";
import { ReactNode } from "react";

function getPeopleDescriptions(): {
  people: {
    firstName: string;
    lastName: string;
    bio: string;
    imageID: string;
  }[];
} {
  return {
    people: [
      {
        firstName: "John",
        lastName: "Smith",
        imageID: "officers/jack-fineman",
        bio: "Hi I am John and this is my bio",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        imageID: "officers/jack-fineman",
        bio: "Hi I am Jane and this is my bio",
      },
      {
        firstName: "Jack",
        lastName: "Smith",
        imageID: "officers/jack-fineman",
        bio: "Hi I am Jack and this is my bio",
      },
    ],
  };
}

export default function About({ children }: { children: ReactNode }) {
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
