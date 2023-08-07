import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

const PostCards = () => {
  return (
    <section id="tips" className="container mx-auto w-full max-w-5xl px-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-2/3">
          <div className="mx-auto mb-12 max-w-full text-center lg:mb-20 p-8">
            <h2 data-anime="blur" className="mb-4 text-[#142039] font-bold text-4xl sm:text-5xl md:text-6xl">
              Recent Tips and News About Insurances
            </h2>
            <p data-anime="blur" className="text-body-color text-base py-4 text-2xl sm:text-3xl md:text-4xl">
              Stay on top of current information about the insurance market. Know well before investing in your insurance.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div data-anime="up" className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card1.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="/tips/cheapest-car-insurance-companies" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  Top 10 cheapest car insurance companies
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Car insurance is a necessity for every driver, providing financial protection in case of accidents, theft, or other unforeseen events. However, finding affordable...
              </p>
            </div>
          </div>
        </div>
        <div data-anime="up" className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card4.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="/tips/how-do-car-insurances-work" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  Understanding Car Insurances and Car Insurance Comparison
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Car insurance is a vital financial protection that provides coverage against damages, theft, and liability arising from...
              </p>
            </div>
          </div>
        </div>
        <div data-anime="up" className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card3.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="/tips/the-value-of-life-insurance" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  The Value of Life Insurance: Safeguarding What Matters Most
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Life is full of uncertainties, and it is our responsibility to protect ourselves and our loved ones from potential financial burdens that may arise in the future. One crucial way...
              </p>
            </div>
          </div>
        </div>
        <div data-anime="up" className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="relative mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card2.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="/tips/hiring-business-insurance-professional" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  Hiring a Business Insurance Professional: Your Ultimate Guide
                </Link>
              </h3>
              <p className="text-body-color text-base">
                When it comes to running a business, there are numerous factors to consider to ensure its success and longevity. One crucial aspect that often gets overlooked is business insurance. Having the right insurance coverage...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCards;