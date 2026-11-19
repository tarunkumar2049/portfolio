export default function Contact() {
  return (
    <div className="mt-60 px-45">
      <div className="text-center flex flex-col gap-6">
        <h1>
          <span className="border-b-4 text-4xl font-bold border-[#8245ec]">
            CONTACT
          </span>
        </h1>
        <h1 className="text-xl font-bold text-gray-600 mb-16">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <form className="flex flex-col text-center w-170 gap-4 p-8 border rounded-md border-gray-400">
          <h1 className="font-bold">Contact With Me</h1>
          <input
            type="text"
            placeholder="Your Email"
            className="border  p-2 rounded-md border-gray-400"
          />
          <input
            type="tex"
            placeholder="Your Name"
            className="border  p-2 rounded-md border-gray-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border  p-2 rounded-md border-gray-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border p-2 rounded-md border-gray-400 h-35"
          ></textarea>
          <button className="bg-linear-to-r from-purple-500 to-pink-600 p-2 text-white font-bold rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
