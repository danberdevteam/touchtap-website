'use client';
import { Loader2 } from 'lucide-react';
import { Rowdies } from 'next/font/google';
import { HTMLInputTypeAttribute, useState } from 'react';
import { toast } from 'sonner';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

type Input = {
  label: string;
  placeholder: string;
  value: string;
  onChange: any;
  type?: HTMLInputTypeAttribute | 'text-area';
};

const Input = ({
  label,
  onChange,
  placeholder,
  value,
  type = 'text',
}: Input) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <label className="text-xl">{label}</label>
      {type === 'text-area' ? (
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="input min-h-[245px] px-5 py-4 w-full"
        />
      ) : (
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="input h-[58px] px-5 py-0.5 w-full"
        />
      )}
    </div>
  );
};

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    setSendingMessage(true);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URI}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('dd', data);
          if (data.success) {
            toast('Message sent successfully');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
          }
        });
    } catch (e) {
      toast('Failed to send message');
    } finally {
      setSendingMessage(false);
    }
  };

  return (
    <form className="flex flex-col gap-12 flex-1 grow-[1.16089613]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <Input
            label="First Name"
            onChange={(e: any) => setFirstName(e.target.value)}
            placeholder=""
            value={firstName}
          />
          <Input
            label="Last Name"
            onChange={(e: any) => setLastName(e.target.value)}
            placeholder=""
            value={lastName}
          />
        </div>

        <Input
          label="Email Address"
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder=""
          value={email}
        />
        <Input
          label="Phone Number"
          onChange={(e: any) => setPhoneNumber(e.target.value)}
          placeholder=""
          value={phoneNumber}
          type="tel"
        />
        <Input
          label="Message"
          onChange={(e: any) => setMessage(e.target.value)}
          placeholder=""
          value={message}
          type="text-area"
        />
      </div>

      <div className="w-full max-w-[300px] md:ml-auto sm:max-w-[215px]">
        <button
          disabled={
            sendingMessage ||
            !firstName.trim().length ||
            !lastName.trim().length ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ||
            !phoneNumber.trim().length ||
            !message.trim().length
          }
          onClick={handleSubmit}
          className="text-white px-5 sm:px-0 gradient text-center uppercase p-4 disabled:py-[15px] inline-block transform -skew-x-[20deg] w-full disabled:cursor-not-allowed"
        >
          <span
            className={`${rowdies.className} inline-block transform skew-x-[20deg] text-lg w-full`}
          >
            {sendingMessage ? (
              <div className="w-full  flex justify-center items-center b">
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              'Send Message'
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
