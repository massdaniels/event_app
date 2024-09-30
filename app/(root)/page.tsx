import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <>
          <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
            <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
              <div className="flex flex-col justify-center gap-8">
                <h1 className=" h1-bold">HOST AND CEREBRATE YOUR EVENTS WITH MANY OTHERS.</h1>
                <p className="p-regular-20 md:p-regular-24">
                  Our Platform offers people to host and connect their special events to more than 1000+ people to make easy of accsessibility in a global community
                </p>
                <Button asChild size='lg' className="button w-full sm:w-fit">
                  <Link href='#events' >
                    Explore Now
                  </Link>
                </Button>
              </div>
              <Image src='/assets/images/events.png'
                      alt="hero"
                      width={1000}
                      height={1000}/>
            </div>
          </section>
          <section className="wrapper my-8 flex flex-col gap-2 md:gap-12">
            <h2 className="h2-bold">Trust by <br /> Hundredth of Events</h2>
            <div className="flex flex-col w-full gap-5 md:flex-row">
              search
              filterCategory
            </div>
          </section>
        </>
  );
}
