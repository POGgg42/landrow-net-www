import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import LumosCardBG from '../../public/work/lumos/family-using-vr-headset-optimized-1.webp';
import CharleysCardBG from '../../public/work/charleys/charleys-bg-3.webp';
import CharleysCardLogo from '../../public/work/charleys/charleys-logo.svg';
import WellnessCardBG from '../../public/work/wellnesspet/wellness-pet-bg.jpg';
import WellnessLogo from '../../public/work/wellnesspet/wellness-logo.png';
import TrueBCardBG from '../../public/work/truebotanicals/true-botanicals-bg.webp';
import TrueBCardLogo from '../../public/work/truebotanicals/true-botanicals-logo-2.png';
import LumosLogo from '../../public/work/lumos/logo.svg';


export default function WorkPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  const modal4 = useDisclosure();
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Work</h1>
        </div>
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          
          <Card isFooterBlurred isPressable onPress={modal4.onOpen} className="col-span-12 sm:col-span-12 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl">Bioholistic Skin Science&trade;</h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={TrueBCardBG.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="h-11 bg-white"
                src={TrueBCardLogo.src}
                classNames={{
                  img: "py-0.5 px-3",
                }}
                />
                <div className="flex flex-col">
                  <p className="text-medium text-white/60">True Botanicals</p>
                  <p className="text-tiny text-white/60">truebotanicals.com</p>
                </div>
              </div>
              <Button
                href="https://truebotanicals.com/"
                as={Link}
                color="primary"
                radius="full"
                size="sm"
                isExternal
                >Visit Site</Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred isPressable onPress={modal3.onOpen} className="col-span-12 sm:col-span-6 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white/90 font-medium text-xl">Wellbeing should be shared&trade;</h4>
            </CardHeader>  
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={WellnessCardBG.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="h-11 bg-white"
                src={WellnessLogo.src}
                classNames={{
                  img: "px-0.5",
                }}
                />
                <div className="flex flex-col">
                  <p className="text-medium text-white/60">Wellness Petfood</p>
                  <p className="text-tiny text-white/60">wellnesspetfood.com</p>
                </div>
              </div>
              <Button
                href="https://www.wellnesspetfood.com/"
                as={Link}
                color="primary"
                radius="full"
                size="sm"
                isExternal
                >Visit Site
                </Button>

            </CardFooter>
          </Card>

          <Card isFooterBlurred isPressable onPress={modal2.onOpen} className="col-span-12 sm:col-span-6 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white/90 font-medium text-xl">Building A Cheesesteak Empire.</h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={CharleysCardBG.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="h-11 w-14   bg-white"
                src={CharleysCardLogo.src}
                classNames={{
                  img: "px-0.5",
                }}
                />
                <div className="flex flex-col">
                  <p className="text-medium text-white/60">Charleys</p>
                  <p className="text-tiny text-white/60">charleys.com</p>
                </div>
              </div>
              <Button
                href="https://www.charleys.com/"
                as={Link}
                color="primary"
                radius="full"
                size="sm"
                isExternal
                >Visit Site</Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred isPressable onPress={onOpen} className="w-full h-[300px] col-span-12 sm:col-span-12">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl">Internet Built for the Future</h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src={LumosCardBG.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="w-11 h-11 bg-white"
                src={LumosLogo.src}
                classNames={{
                  img: "px-0.5",
                }}
                />
                <div className="flex flex-col">
                  <p className="text-medium text-white/60">Lumos Fiber</p>
                  <p className="text-tiny text-white/60">lumosfiber.com</p>
                </div>
              </div>
              <Button
                href="https://truebotanicals.com/"
                as={Link}
                color="primary"
                radius="full"
                size="sm"
                isExternal
                >Visit Site</Button>
            </CardFooter>
          </Card>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Lumos Fiber</ModalHeader>
              <ModalBody>
                <p><strong>Role:</strong> Digital Team Leader, Developer, Digital Strategist</p>
                <ul className="list-disc list-inside leading-relaxed pb-4">
                  <li className="-indent-4 pl-4">UI/UX Design</li>
                  <li className="-indent-4 pl-4">Custom eCommerce Front-End Development</li>
                  <li className="-indent-4 pl-4">Custom OSS/BSS API Integration</li>
                  <li className="-indent-4 pl-4">SalesForce/Marketing Cloud API Integration</li>
                  <li className="-indent-4 pl-4">Search Engine Optimization</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button radius="full" size="sm" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  href="https://www.lumosfiber.com/"
                  as={Link}
                  color="primary"
                  radius="full"
                  size="sm"
                  isExternal
                >Visit Site
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      
      <Modal isOpen={modal2.isOpen} onOpenChange={modal2.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Charleys</ModalHeader>
              <ModalBody>
                <p><strong>Role:</strong> Digital Team Leader</p>
                <ul className="list-disc list-inside leading-relaxed pb-4">
                  <li className="-indent-4 pl-4">UI/UX Design</li>
                  <li className="-indent-4 pl-4">Custom eCommerce Front-End Development</li>
                  <li className="-indent-4 pl-4">Location Finder (Google Maps/TomTom Maps API)</li>
                  <li className="-indent-4 pl-4">OLO/Punchh API Integration</li>
                  <li className="-indent-4 pl-4">Search Engine Optimization</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button radius="full" size="sm" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  href="https://www.charleys.com/"
                  as={Link}
                  color="primary"
                  radius="full"
                  size="sm"
                  isExternal
                >Visit Site
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={modal3.isOpen} onOpenChange={modal3.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Wellness Pet Food</ModalHeader>
              <ModalBody>
                <p><strong>Role:</strong> Digital Team Leader, Developer, Digital Strategist</p>
                <ul className="list-disc list-inside leading-relaxed pb-4">
                  <li className="-indent-4 pl-4">UI/UX Design</li>
                  <li className="-indent-4 pl-4">WordPress Development</li>
                  <li className="-indent-4 pl-4">Salsify API Integration</li>
                  <li className="-indent-4 pl-4">Klayvio</li>
                  <li className="-indent-4 pl-4">PriceSpider</li>
                  <li className="-indent-4 pl-4">Search Engine Optimization</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button radius="full" size="sm" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  href="https://www.wellnesspetfood.com/"
                  as={Link}
                  color="primary"
                  radius="full"
                  size="sm"
                  isExternal
                >Visit Site
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={modal4.isOpen} onOpenChange={modal4.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">True Botanicals</ModalHeader>
              <ModalBody>
                <p><strong>Role:</strong> Digital Team Leader</p>
                <ul className="list-disc list-inside leading-relaxed pb-4">
                  <li className="-indent-4 pl-4">UI/UX Design</li>
                  <li className="-indent-4 pl-4">Shopify eCommerce Development</li>
                  <li className="-indent-4 pl-4">WCAG 2.2 AA Compliance</li>
                  <li className="-indent-4 pl-4">Google Tag Manager Optimization</li>
                  <li className="-indent-4 pl-4">Shopify Checkout Extensibility</li>
                </ul>  
              </ModalBody>
              <ModalFooter>
                <Button radius="full" size="sm" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  href="https://truebotanicals.com/"
                  as={Link}
                  color="primary"
                  radius="full"
                  size="sm"
                  isExternal
                  >Visit Site
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

        </div>
      </section>
    </DefaultLayout>
  );
}
