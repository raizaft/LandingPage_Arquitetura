import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";

function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand alt="Flowbite Logo" href="#" src="img/logo.png" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="sobre o noda" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">O Estúdio</Footer.Link>
                <Footer.Link href="#">Nosso Time</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="segue a gente" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Pinterest</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="nodaarquitetura™" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterWithSocialMediaIcons;
