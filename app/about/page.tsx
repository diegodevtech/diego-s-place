import Image from "next/image";
import about1 from "@/public/about-1.png";
import Link from "next/link";
import { getCabins } from "../_service/data-service";

export const revalidate = 86400;

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="flex flex-col gap-y-4 mb-8 md:mb-0">
      <h1 className="text-4xl mb-4 text-accent-400 font-medium">
        Welcome to Diego&apos;s Place{" "}
      </h1>
      <div className="md:grid md:grid-cols-5 md:space-x-8 space-y-4">
        <div className="md:col-span-2">
          <Image
            className="rounded-lg"
            src={about1}
            alt="Couple taking a selfie picture in front of our amazing hotel inside the amazon forest"
            placeholder="blur"
            quality={100}
          />
        </div>
        <div className="md:col-span-3 space-y-8 md:text-lg ">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Amazon Rainforest, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding jungle. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>
      <h1 className="text-4xl my-4 text-accent-400 font-medium md:text-right">
        Managed by me since 2024
      </h1>
      <div className="md:grid md:grid-cols-6 md:gap-x-16 space-y-4">
        <div className="relative aspect-square md:order-2 md:col-span-2">
          {/* RESPONSIVE WAY IN A SCENARIO WE CAN NOT IMPORT IMAGES STATICALLY */}
          <Image
            src="/about-2.jpg"
            alt="Family that manages The Wild Oasis"
            fill
            className="object-cover rounded-lg md:col-sapn-2"
          />
        </div>
        <div className="md:col-span-4 space-y-8 md:text-lg md:order-1">
          <p>
            Since 2024, Diego&apos;s place has been a cherished family-run
            retreat in the jungle. Started by my grandparents, this haven has
            been nurtured with love and care, passing down through our family as
            a testament to our dedication to creating a warm, welcoming
            environment.
          </p>
          <p>
            Over the years, I&apos;ve maintained the essence of Diego&apos;s
            place, blending the timeless beauty of the jungle with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of my extended family. So join us at
            Diego&apos;s place soon, where tradition meets tranquility, and
            every visit is like coming home.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore our luxury cabins
        </Link>
      </div>
    </div>
  );
}
