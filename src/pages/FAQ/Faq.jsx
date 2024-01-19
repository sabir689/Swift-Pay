const Faq = () => {
  return (
    <div className="mt-20 mb-32">
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium text-[#49108B]">
          What is Swift Pay?
        </div>
        <div className="collapse-content">
          <p>
            Swift Pay is a user-friendly online payment platform designed to
            streamline your transaction experience. It allows you to make secure
            and swift payments for various services.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#49108B]">
          What services can I pay for using Swift Pay?
        </div>
        <div className="collapse-content">
          <p>
            Swift Pay supports a wide range of services, including utility
            bills, mobile recharge, internet bills, and more. Check our platform
            for the full list of supported services.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#49108B]">
          Is Swift Pay safe and secure?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! Swift Pay prioritizes the security of your transactions.
            We use advanced encryption technologies to ensure your financial
            information is protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
