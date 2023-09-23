import React from "react";
import Avatar from "../Avatar/page";
import { User } from "@/app/model/user";

type Props = {
  user: User;
};

const SideBar = ({ user: { name, username, email, image } }: Props) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <section className="flex items-center mb-4">
        <article>
          {image && <Avatar image={image} size="small" highlight={false} />}
        </article>
        <article className="ml-4">
          <h4 className="text-xl font-semibold">{email}</h4>
          <span className="text-gray-500 leading-4">{name}</span>
        </article>
      </section>
      <section className="text-gray-500 text-sm mt-4">
        About Help Press API Jobs Privacy Terms Location Language
      </section>
      <section className="text-sm mt-4 font-semibold text-gray-500">
        &copy; COPYRIGHT INSTANTGRAM from METAL
      </section>
    </div>
  );
};

export default SideBar;
