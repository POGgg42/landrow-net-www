import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import LumosCardBG from '../../public/work/lumos/family-using-vr-headset-optimized-1.webp';
import CharleysCardBG from '../../public/work/charleys/charleys-bg.jpg';
import WellnessCardBG from '../../public/work/wellnesspet/wellness-pet-bg.jpg';
import TrueBCardBG from '../../public/work/truebotanicals/true-botanicals-bg.webp';
import LumosLogo from '../../public/work/lumos/logo.svg';
import WellnessLogo from '../../public/work/wellnesspet/wellness-logo.png';

export default function DocsPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Work</h1>
        </div>
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card isFooterBlurred isPressable className="col-span-12 sm:col-span-7 h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={TrueBCardBG.src}
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
              <Button radius="full" size="sm">Visit Site</Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred isPressable className="col-span-12 sm:col-span-5 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
              <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={WellnessCardBG.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="w-13 h-11 bg-white"
                src={WellnessLogo.src}
                classNames={{
                  img: "px-0.5",
                }}
                />
                <div className="flex flex-col">
                  <p className="text-medium text-white/60">Lumos Fiber</p>
                  <p className="text-tiny text-white/60">lumosfiber.com</p>
                </div>
              </div>
              <Button radius="full" size="sm">Visit Site</Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={CharleysCardBG.src}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred isPressable onPress={onOpen} className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <Image
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
              <Button radius="full" size="sm">Visit Site</Button>
            </CardFooter>
          </Card>


        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
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
