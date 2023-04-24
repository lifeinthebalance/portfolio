import { ReactElement, useState } from "react";
import { BsFillMoonStarsFill, BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";

const Header: React.FC = (): ReactElement => {
  return (
    <header className="bg- flex min-h-screen  flex-col">
      <section className="flex justify-between">
        <article className="my-5 ml-10 flex gap-2">
          <span>
            <BsGithub className="cursor-pointer transition hover:scale-125" />
          </span>
          <span>
            <GoMail className="cursor-pointer transition hover:scale-125" />
          </span>
          <span>
            <CgFileDocument className="cursor-pointer transition hover:scale-125" />
          </span>
        </article>
        <span>
          <BsFillMoonStarsFill className="my-5 mr-10 cursor-pointer transition hover:scale-125" />
        </span>
      </section>
      <section className="my-auto text-center">
        <h1 className="font-serif text-3xl font-bold ">Cyril Peshkov</h1>
        <h2 className="font-sans font-semibold ">Software Developer</h2>
        <div>
          <button className="my-10">VIEW PROJECTS</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
