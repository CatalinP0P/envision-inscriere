import React from "react";
import Reveal from "../../components/Animation/Reveal";
import Container from "../../components/ui/Container";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

const calendar = [
  {
    date: ">25",
    month: "Septembrie",
    title: "Inscrierea Concurentilor",
    content: [],
  },
  {
    date: "29",
    month: "Septembrie",
    title:
      "Participanții vor sosi în oraș și vor fi preluați de către voluntari.",
    content: [],
  },
  {
    date: "30",
    month: "Septembrie",
    title: "PRIMA ZI A COMPETIȚIEI",
    content: [
      {
        hour: "08:00",
        title: "Deschiderea oficială",
      },
      { hour: "08:30", title: "Trimiterea subiectelor către participanți" },
      { hour: "12:00", title: "MASA 1" },
      { hour: "16:00", title: "Workshop 1" },
      { hour: "20:00", title: "Subiecte BLITZ" },
      { hour: "21:00", title: "MASA 2" },
    ],
  },
  {
    date: "01",
    month: "Octombrie",
    title: "A DOUA ZI A COMPETIȚIEI",
    content: [
      {
        hour: "08:00",
        title: "Deschiderea oficială",
      },
      { hour: "10:00", title: "Workshop 2" },
      { hour: "12:00", title: "MASA 3" },
      { hour: "14:00", title: "Finalizarea Lucrarilor" },
      { hour: "14:30", title: "Jurizare" },
      { hour: "18:30", title: "Inceperea Fesitvitatii" },
      { hour: "19:00", title: "Decernarea Premiilor" },
      { hour: "20:00", title: "Concluzii, incheiere" },
    ],
  },
  {
    date: "02",
    month: "Octombrie",
    title: "Final",
    content: [
      {
        hour: "10:00",
        title: "Deschiderea oficială",
      },
    ],
  },
];

export default function Schedule() {
  return (
    <Container
      className="py-24 flex flex-col items-center
    "
    >
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          25 Septembrie - 2 Octombrie
        </label>
      </Reveal>
      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-4">
          Calendarul Competitiei
        </label>
      </Reveal>

      <div className="flex flex-col gap-4 md:gap-8 pt-24 w-full">
        {calendar.map((schedule: ScheduleProps) => {
          return (
            <div key={Math.random() * 1000}>
              <ScheduleCard schedule={schedule} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const ListItem = ({ hour, title }: { hour: string; title: string }) => {
  return (
    <li className="flex flex-row gap-4 text-start items-baseline w-full justify-start ms-2">
      <span className="bg-primary px-2 w-fit h-fit py-1 text-white rounded-md">
        {hour}
      </span>
      <label>{title}</label>
    </li>
  );
};

interface ScheduleProps {
  date: string;
  title: string;
  content: any[];
}

const ScheduleCard = ({ schedule }: { schedule: any }) => {
  return (
    <SlideFromBottom>
      <div className="relative flex flex-col md:flex-row py-4 px-8 w-full h-full items-start md:items-center shadow-lg gap-12 md:gap-24">
        <div className="flex flex-col gap-2 md:items-center">
          <label
            className={
              "text-primary text-2xl md:text-6xl font-semibold " +
              (schedule.date.includes(">")
                ? " md:translate-x-[-28px] -me-8"
                : "")
            }
          >
            {schedule.date}
          </label>
          <label className="text-base md:text-lg inline-block text-primary font-bold">
            {schedule.month}
          </label>
        </div>
        <div className="absolute top-20 md:top-auto md:left-40 h-[2px] w-[85%] md:h-[75%] md:w-[2px] bg-primary my-4" />
        <div className="w-full flex flex-col gap-4">
          <label className="mx-auto text-base :text-2xl font-bold ms-2 uppercase text-black/75">
            {schedule.title}
          </label>
          <ul className="w-full flex flex-col gap-2">
            {schedule.content.map((x: any) => {
              return (
                <div key={x.title}>
                  <ListItem hour={x.hour} title={x.title} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </SlideFromBottom>
  );
};
