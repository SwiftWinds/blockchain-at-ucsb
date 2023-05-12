"use client";

import { CldImage } from "next-cloudinary";

export default function PersonCard({
  firstName,
  lastName,
  position,
  imageID,
  bio,
}: {
  firstName: string;
  lastName: string;
  position: string;
  imageID: string;
  bio: string;
}) {
  return (
    <article
      className="leading-6 text-indigo-900 sm:flex p-10"
      data-sb-field-path=".0"
    >
      <div className="w-full text-indigo-900 sm:h-full sm:w-1/3 sm:flex-shrink-0">
        <div
          className="block relative w-full h-0"
          data-sb-field-path=".image"
          // style="padding-top: 96%;"
        >
          <CldImage
            width="600"
            height="600"
            src={imageID}
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </div>
      <div className="pt-6 mb-4 text-indigo-900 sm:flex-grow sm:pt-0 sm:pl-6">
        <h3 className="m-0 text-3xl font-normal tracking-normal text-indigo-900 normal-case break-words">
          <span
            data-sb-field-path=".firstName"
            className="leading-9 break-words mr-3"
          >
            {firstName}
          </span>
          <span
            data-sb-field-path=".lastName"
            className="leading-9 break-words"
          >
            {lastName}
          </span>
        </h3>

        <p data-sb-field-path=".role" className="m-0">
          {position}
        </p>
        <div className="mt-4" data-sb-field-path=".bio">
          <p className="m-0">{bio}</p>
        </div>
      </div>
    </article>
  );
}
