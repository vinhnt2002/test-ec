"use client";
import returnImage from "@/assets/images/home/return.webp";
import remarkImage from "@/assets/images/home/remake.webp";
import alterationsImage from "@/assets/images/home/alterations.webp";
import Image from "next/image";

const FitGuarantee = () => {
  const guarantees = [
    {
      image: returnImage,
      title: "Exchange",
      description:
        "If your item doesn’t fit perfectly and requires significant adjustments, we will correct and remake your item free of charge, at no extra cost.",
    },
    {
      image: remarkImage,
      title: "Refund",
      description:
        "Something wrong with your item? Contact our Support team. Our well-trained and friendly Support Team is available via email and hotline to help you fix this case directly.",
    },
    {
      image: alterationsImage,
      title: "Pre- or post-purchase",
      description:
        "At Printerval, we put the customer first because we ensure the quality of the customer experience. Feel free to contact us, we are always available to assist with your case.",
    },
  ];

  return (
    <section className="relative bg-red-50 py-8 px-4 overflow-hidden">
      <div className="absolute -top-6 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[100px] wave-animation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F6FAFC"
            fillOpacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,192C480,181,600,107,720,101.3C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 mt-10">
        <h2 className="text-2xl font-bold text-orange-600">
          Our Perfect Fit Guarantee
        </h2>
        <p className="text-gray-700">Complimentary On All Orders</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-full w-[165px] h-[148px] p-4 "
              />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes waveMotion {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .wave-animation {
          animation: waveMotion 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default FitGuarantee;
