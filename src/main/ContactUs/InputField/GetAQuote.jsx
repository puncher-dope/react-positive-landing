
import { useState } from "react"

export default function GetAQuote() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: "default"
  })
  return (
    <>
      <div className="FormField">
        <form action="">
          <div>
            <label htmlFor="formName">Name</label>
            <input type="text" id="formName" placeholder="Full name*" required />

            <label htmlFor="formTel">Mobile number</label>
            <input type="tel" id="formTel" placeholder="Your mobile number*" required />

            <label htmlFor="formEmail">Email</label>
            <input type="email" id="formEmail" placeholder="Your email*" required />

            <label htmlFor="reason">Select your service</label>
            <select name="reason" className="control" value={form.reason}
              onChange={e => setForm(prev => ({ ...prev, reason: e.target.value }))}>

              <option value="default">Select your service</option>
              <option value="house">Rental House</option>
              <option value="houseForLease">House For Lease</option>
              <option value="propertyForSale">Property For Sale</option>
              <option value="legalOpinion">Legal Opinion</option>
              <option value="loanService">Loan Service</option>
              <option value="installmentScheme">Installment Scheme</option>
              <option value="otherServices">Other Services</option>
            </select>

            <label htmlFor="formMessageQuote">Message</label>
            <textarea id="formMessageQuote" placeholder="Your message here..." />

          </div>
          <button id="submitBtn" type="submit">Get a Quote</button>
        </form>
      </div>
    </>
  )
}