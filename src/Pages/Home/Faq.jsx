const Faq = () => {
  return (
    <section className="mt-40">
      <div>
        <button className="border-2 border-[#020043] text-[#020043] px-6 py-2 rounded-full text-base mb-4">
          Faq
        </button>
        <h2 className="text-4xl font-bold text-[#020043]">
          Frequently Asked Question
        </h2>
      </div>
      {/*  */}
      <div className="mt-10">
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-2xl font-medium">
          What are your office hours?
          </div>
          <div className="collapse-content text-lg bg-white">
            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-medium">
          How can I schedule an appointment?
          </div>
          <div className="collapse-content text-lg bg-white">
            <p>You can schedule an appointment by call us and also booking on our website. </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-medium">
          Do you accept insurance?
          </div>
          <div className="collapse-content text-lg bg-white">
            <p>Yes, We accept insurance</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-medium">
          What should I bring to my appointment?
          </div>
          <div className="collapse-content text-lg bg-white">
            <p>Bring your previous reports and prescription(if you have)</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-medium">
          Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content text-lg bg-white">
            <p>Yes, we are offer telemedicine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
