export default function Contact() {
  return (
    <div className="py-30 md:px-45 px-8 bg-linear-to-t from-[#050414] to-[#1f032a] text-white">
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
        <form className="flex flex-col text-center md:w-170 gap-4 py-8 px-12 md:p-8 border rounded-md border-gray-600 bg-[#0d081f]">
          <h1 className="font-bold">Connect With Me</h1>
          <input
            type="text"
            placeholder="Your Email"
            className="border  p-2 rounded-md border-gray-600"
          />
          <input
            type="tex"
            placeholder="Your Name"
            className="border  p-2 rounded-md border-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border  p-2 rounded-md border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border p-2 rounded-md border-gray-600 h-35"
          ></textarea>
          <button className="bg-linear-to-r from-purple-500 to-pink-600 p-2 text-white font-bold rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
