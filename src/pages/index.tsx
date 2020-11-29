import { times } from 'ramda'
import type { FC } from 'react'

const Cell: FC<{ idx: number }> = ({ idx, ...props }) => (
  <div {...props}>
    <button>Space {idx}</button>
    <style jsx>{`
      button {
        width: 100px;
        height: 100px;
      }
    `}</style>
  </div>
)

const cell = (idx: number) => <Cell idx={idx} key={['space', idx].join('-')} />

const Page: FC = () => (
  <>
    <main>
      <h1>Railroad Ink</h1>
      <article>{times(cell, 7 * 7)}</article>
    </main>
    <style jsx>{`
      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      }
      article {
        display: grid;
        grid-template-columns: repeat(7, 100px);
      }
    `}</style>
  </>
)
export default Page
