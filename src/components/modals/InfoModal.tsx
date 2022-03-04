import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Let's be real, you already know how to play this. But just in case you've been living under a rock, here's how this works:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="H" />
        <Cell value="E" />
        <Cell value="M" />
        <Cell value="Q" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="I" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="U" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Based off of an open-source wordle clone -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
