import { ReactNode } from "react";
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

const getPeopleDescriptions = (): { people: { firstName: string, lastName: string, bio: string, imageID: string }[] } => {
    return {
        people: [
            { firstName: 'John', lastName: 'Smith', imageID: 'pfp1_ybjb7b', bio: "Hi I am John and this is my bio" },
            { firstName: 'Jane',lastName: 'Smith', imageID: 'pfp1_ybjb7b', bio: "Hi I am Jane and this is my bio" },
            { firstName: 'Jack', lastName: 'Smith', imageID: 'pfp1_ybjb7b', bio: "Hi I am Jack and this is my bio" },
        ]
    };
}

export default function About({ children }: { children: ReactNode }){

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
        { people.map((person) => <PersonCard firstName={person.firstName} lastName={person.lastName} bio={person.bio} imageID={person.imageID} />) }
        </div>
    </div>
    </div>


    </>)
}

const PersonCard = ({ firstName, lastName, imageID, bio }: { firstName: string, lastName: string, imageID: string, bio: string }) => {
    return (
        <article className="leading-6 text-indigo-900 sm:flex p-10" data-sb-field-path=".0">
        <div className="w-full text-indigo-900 sm:h-full sm:w-1/3 sm:flex-shrink-0">
          <div
            className="block relative w-full h-0"
            data-sb-field-path=".image"
            // style="padding-top: 96%;"
          >
            {/* <CldImage
                width="600"
                height="600"
                src={imageID}
                alt={firstName + ' ' +lastName} /> */}
            <Image 
                src={`https://blockchainucsb.com/images/pfp1.png`}
                width={600}
                height={600}
                alt={firstName + ' ' +lastName}
            />
          </div>
        </div>
        <div className="pt-6 mb-4 text-indigo-900 sm:flex-grow sm:pt-0 sm:pl-6">
            <h3
                className="m-0 text-3xl font-normal tracking-normal text-indigo-900 normal-case break-words"
                >
                <span data-sb-field-path=".firstName" className="leading-9 break-words mr-3"
                    >{ firstName }</span>
                <span data-sb-field-path=".lastName" className="leading-9 break-words"
                    >{ lastName }</span>
            </h3>

          <p data-sb-field-path=".role" className="m-0">President</p>
          <div className="mt-4" data-sb-field-path=".bio">
            <p className="m-0">
                { bio }
            </p>
          </div>
        </div>
      </article>
      
    )
}