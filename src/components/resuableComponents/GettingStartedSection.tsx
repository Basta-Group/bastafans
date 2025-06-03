import WomanImage from "../../assets/girl-main.png";

const steps = [
  {
    title: "Create An Account",
    description:
      "To begin sharing your content on BastaFans, you'll need to create an account. It's free to sign up, and takes only a few moments.",
  },
  {
    title: "Set Up Your Subscription Rate",
    description:
      "It’s up to you whether your account should be free or paid. Although free accounts allow fans to access your content without paying for a subscription, there are still many ways to make money. Features like pay-per-view messages, posts, and streams are available to free accounts.",
  },
  {
    title: "Create Content & Promote Your BastaFans",
    description:
      "Once you’ve started sharing content, let your followers on other social platforms know about your BastaFans profile!",
  },
];

const GettingStartedSection = () => {
  return (
    <section className=" md:py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="relative z-10">
            <img
              src={WomanImage}
              alt="Model"
              className=" w-full max-w-[600px]"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 max-w-2xl max-w-[500px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-[20px] bg-gradient-to-r from-[#2a3142] to-transparent border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 flex flex-col items-start text-start"
            >
              <h3 className="text-white text-2xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
