export default function SayHi() {
  return (
    <>
      <div className="FormField">
        <form action="">
          <div>
            <label htmlFor="formName">Name</label>
            <input type="text" id="formName" placeholder="Name*" required />

            <label htmlFor="formEmail">Email</label>
            <input type="email" id="formEmail" placeholder="Email*" required />

            <label htmlFor="formMessage">Message</label>
            <textarea id="formMessage" placeholder="Message" />

          </div>
          <button id="submitBtn" type="submit">Send a message</button>
        </form>
      </div>
    </>
  )
}