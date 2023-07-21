import axios from "axios";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useRef,
  useState,
} from "react";
import FormInput from "./FormInput";
import Button from "../ui/Button";
import FormTextArea from "./FormTextArea";
import Reveal from "../Animation/Reveal";
import SlideFromBottom from "../Animation/SlideFromBottom";

interface FormProps {
  email: string;
  name: string;
  surname: string;
  phone: string;
  birthday: string;
  details?: string;
  invite_token?: string;
  team_id?: string;
}

export default function SignForm() {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [alertShown, setAlertStatus] = useState<boolean>(false);

  var date = new Date();
  var formatedDate = date.toISOString().split("T")[0];
  const todayDate = formatedDate;

  const [formData, setFormData] = useState<FormProps>({
    email: "",
    name: "",
    surname: "",
    phone: "",
    details: "",
    birthday: "",
    invite_token: "",
    team_id: "",
  });

  const handleSubmit: any = async (e: any) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await axios.post(
        "http://81.181.87.216:100/participants/add",
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log(res.data);
    } catch (err: any) {
      console.log(err.response.data.error);
      setError(err.response.data.error);
    }

    setSending(false);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e: ChangeEvent<any>) => {
    var { name, value } = e.target;
    if (name == "team_id") {
      if (!alertShown) {
        alert(
          "Daca vrei sa inscrii o echipa, toti membrii se vor inscrie cu acelasi nume de echipa"
        );
        setAlertStatus(true);
      }
    }

    if (name == "birthday") {
      const values = value.split("-");
      value = `${values[0]}-${values[1]}-${values[2]}`;
      console.log(value);
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <SlideFromBottom className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full mx-auto pt-24"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormInput title="Nume" onChange={handleChange} name="name" />
          <FormInput title="Prenume" onChange={handleChange} name="surname" />
        </div>
        <FormInput
          type="email"
          title="Email"
          onChange={handleChange}
          name="email"
        />
        <FormInput title="Numar Telefon" onChange={handleChange} name="phone" />
        <div className="grid grid-cols-2 gap-4 w-full">
          <FormInput
            title="Nume Echipa"
            onChange={handleChange}
            name="team_id"
          />
          <FormInput
            title="Token invitatie"
            onChange={handleChange}
            name="invite_token"
          />
        </div>
        <FormInput
          type="date"
          title="Data Nasterii"
          name="birthday"
          value={todayDate}
          onChange={handleChange}
        />

        <FormTextArea
          title="Detalii"
          onChange={handleChange}
          name="details"
        ></FormTextArea>

        <div className="flex flex-row gap-2 ms-1 text-xl items-start">
          <input required={true} type="checkbox" className="mt-[8px]" />
          <label>
            Sunt de acord cu prelucrarea datelor cu caracter personal
          </label>
        </div>

        <div className="flex flex-row gap-2 ms-1 text-xl items-start">
          <input required={true} type="checkbox" className="mt-[8px]" />
          <label>Am citit regulamentul competitiei</label>
        </div>
        {error && (
          <label className="text-red-600 text-semibold text-lg md:text-2xl">
            {error}
          </label>
        )}
        <div>
          <div
            className={
              "w-fit " + (sending ? " opacity-60 pointer-events-none" : "")
            }
          >
            <Button variant="primary" type="submit" rounded={false}>
              Inscrie-te
            </Button>
          </div>
        </div>
      </form>
    </SlideFromBottom>
  );
}
