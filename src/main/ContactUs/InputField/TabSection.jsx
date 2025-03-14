import Button from "./Button"

export default function TabSection({ active, onChange }) {
  return (
    <>
      <Button id={'sayHi'} isActive={active === 'SayHi'} onClick={() => onChange('SayHi')} />
      <label id="labelSayHi" htmlFor="sayHi">Say Hi</label>
      <Button id={'getAQuote'} isActive={active === 'GetAQuote'} onClick={() => onChange('GetAQuote')} />
      <label id="labelGetAQuote" htmlFor="getAQuote">Get a quote</label>
    </>
  )
}