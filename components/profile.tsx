import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { Link, button as buttonStyles } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
export const Profile = () => {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Matt Rowland</h4>
            <h5 className="text-small tracking-tight text-default-400">matt@landrow.net</h5>
          </div>
        </div>
        <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Email
          </Link>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
        4A’s Certified Team Leader with over 20 years experience designing & developing digital products and leading high performance digital product teams.
        <span className="py-2" aria-label="computer" role="img">💻</span> 
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
