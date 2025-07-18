import CCP from "../assets/AWS CCP.png";

export default function Cert() {
  return (
    <a
      href="https://www.credly.com/badges/32effd86-55d3-4757-8437-f424c538bbdc/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md mx-auto mt-8"
    >
      <div className="p-4 bg-[url('./assets/construction-paper.png')] bg-cover border-4 border-dark rounded-xl shadow-[5px_5px_0px_0px_#333]">
        <h2 className="text-primary font-staat text-3xl text-center mb-4 underline underline-offset-4 decoration-dark tracking-wide">
          AWS Cloud Certified
        </h2>
        <div className="flex justify-center">
          <img
            src={CCP}
            alt="AWS CCP Certificate"
            className="rounded-md border-2 border-dark shadow-md h-auto w-32"
          />
        </div>
      </div>
    </a>
  );
}
