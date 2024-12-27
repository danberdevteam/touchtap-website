import Card from './card';
import Form from './form';

export default function ContactUsWrapper() {
  return (
    <div className="page">
      <div className="cta py-6 md:py-7 lg:py-12 px-6 rounded-[10px] flex flex-col md:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-[50px] pb-[100px] md:px-7 lg:px-12 lg:pb-[150px]">
        <Card />
        <Form />
      </div>
    </div>
  );
}
