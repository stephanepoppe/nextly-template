import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import indoorCyling from "../public/img/undraw_indoor_bike_pwa4.svg";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const agendaList = {
  title: "Agenda",
  desc: "Gedurende 5 digitale sessies van telkens 1 uur, zullen we je klaarstomen voor het fietsseizoen 2023.",
  image: indoorCyling,
  bullets: [
    {
      title: "Rit 1",
      desc: "Dinsdag 7 november",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Rit 2",
      desc: "Dinsdag 5 december",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Rit 3",
      desc: "Dinsdag 9 januari",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Rit 4",  
      desc: "Dinsdag 6 februari",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Rit 5",
      desc: "Dinsdag 5 maart",
      icon: <CalendarDaysIcon />,
    },
  ],
};


export {benefitOne, agendaList};
