import { times } from 'ramda'
import type { FC } from 'react'
import StraighHighwayDie from '../components/dice/StraightHighway'

const Cell: FC<{ idx: number }> = ({ idx, ...props }) => (
  <div {...props}>
    <button>
      <StraighHighwayDie />
    </button>
    <style jsx>{`
      div {
        border-top: 1px solid #000;
        border-left: 1px solid #000;
      }
      button {
        appearance: none;
        background: 0;
        border: none;
        padding: 0;
        height: 100px;
        width: 100px;
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
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
      }
    `}</style>
  </>
)
export default Page
