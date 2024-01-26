import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from "./components/index.js"


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)

  const reset = () => {
    setAmount(0)
    setConvertedAmount(0)
  }

  const convert = () => {
    setConvertedAmount(Math.round((amount*currencyData[to])*100)/100)
  }

  return (
    <div className='w-full h-screen flex flex-wrap 
    justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=600)`, 
    height: "100vh",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition: "contain"
  }}
    >
      <div className="w-full">
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label='From'
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            
            <div className='w-full mb-1'>
              <InputBox 
              label='To'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled
              selectedCurrency={to}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            <button
            onClick={reset}
            className='w-full bg-red-600 text-white px-4 py-3 rounded-lg mt-2'
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
