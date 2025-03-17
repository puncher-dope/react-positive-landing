import SayHi from './InputField/SayHi'
import GetAQuote from './InputField/GetAQuote'
import { useState } from 'react'
import TabSection from './InputField/TabSection'
import './Form.css'
export default function FormContactUs() {
  const [tab, setTab] = useState('SayHi')
  return (
    <>
      <div className='FormContainer'>
        <div className='interactiveMenu'>
          <TabSection active={tab} onChange={current => setTab(current)} />
          {tab === 'SayHi' && <SayHi />}
          {tab === 'GetAQuote' && <GetAQuote />}
        </div>
        <img id='contact' src="./ImgForHome/ContactUs.svg" />
      </div>
    </>
  )
}