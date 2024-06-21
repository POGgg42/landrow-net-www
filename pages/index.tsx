import { Link, Snippet, Code, button as buttonStyles } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { LinkedInIcon } from "@/components/icons";
import { Profile } from "@/components/profile";
import { Superpowers } from "@/components/superpowers";
import DefaultLayout from "@/layouts/default";
export default function IndexPage() {  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Technology Leader & Digital Marketing &nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Expert&nbsp;</h1>
          <h1 className={title()}>
          with a demonstrated track record for building high-functioning teams.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Winston Salem, NC
          </h4>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Full Resume
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
          <LinkedInIcon size={20} />
            LinkedIn
          </Link>
        </div>
        <div className="mt-8 max-w-3xl text-center justify-center">
          <Profile />
        </div>
        <div className="flex w-full max-w-3xl text-center justify-center">
          <Superpowers />
        </div>
      </section>
    </DefaultLayout>
  );
}