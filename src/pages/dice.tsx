import type { FC } from 'react'
import * as Dice from '../components/dice'

const Page: FC = () => (
  <>
    <main>
      <h1>Dice Demo</h1>
      {Object.keys(Dice).map(key => {
        const Die = Dice[key]
        return (
          <fieldset key={key}>
            <legend>{key}</legend>
            <Die width="100px" />
          </fieldset>
        )
      })}
    </main>
    <style jsx>{`
      fieldset {
        background: #d8d8d8;
      }
    `}</style>
  </>
)
export default Page
