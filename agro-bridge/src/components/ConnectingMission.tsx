
import Image from "next/image";

interface TitleProps {
  titleText: string;
}

export default function ConnectingMission({ titleText }: TitleProps ) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-indie text-(--agro-green-dark)">{titleText}</span>
      
      <Image
        src="/landing/truck.png"
        alt="Landing Truck"
        width={200}
        height={200}
        className="object-contain w-10 h-10"
      />
    </div>
  )
}
