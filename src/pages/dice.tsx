import type { FC } from 'react'
import * as Dice from '../components/dice'

const Page: FC = () => (
  <>
    <main>
      <h1>Dice Demo</h1>
      {Object.keys(Dice).map(type => {
        return (
          <fieldset key={type}>
            <legend>{type}</legend>
            <ul>
              {Object.keys(Dice[type]).map(face => {
                const Die = Dice[type][face]
                return (
                  <li key={face}>
                    <Die width="100px" />
                  </li>
                )
              })}
            </ul>
          </fieldset>
        )
      })}
    </main>
    <style jsx>{`
      fieldset {
        background: #d8d8d8;
      }

      li {
        float: left;
        list-style: none;
      }
    `}</style>
  </>
)
export default Page
