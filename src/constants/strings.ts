export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['WOWIE! You\'ve done it now...', 'Amazong.', 'Well did!', 'We\'re all very proud.', 'That one was easy.', 'Showoff.', 'Oh, come on, you definitely cheated.', 'Hmmf.']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard - I\'m sure everyone can\'t wait to see how you did.'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Are you stupid on purpose?'
export const WORD_NOT_FOUND_MESSAGE = 'That word is not real. No way. You made that up.'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const FUNNY_MODE_DESCRIPTION =
  'Changes the correct word after every guess'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_PREFIXES = ['L + Ratio +', 'Ha! I win again.', 'It must be difficult being this stupid.', 'You\'ll get it eventually.', 'You suck.', 'Unsurprising.']
export const CORRECT_WORD_MESSAGE = (isFunnyMode: boolean, solution: string, rowSolutions: string[]) =>
  CORRECT_WORD_PREFIXES[Math.floor(Math.random()*CORRECT_WORD_PREFIXES.length)] + (isFunnyMode ?
  ` The words were ${rowSolutions.join(', ')}` :
  ` The word was ${solution}`)
export const FUNNY_MODE_MESSAGE = (rowSolutions: string[]) =>
  `Alright, fine, we were messing with you. The game will play normally now.`
export const CORRECT_FUNNY_MODE_MESSAGE = 'Alright, fine, we were messing with you - but you somehow managed to get it anyway. The game will play normally now.'
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'ENTER'
export const DELETE_TEXT = 'WAIT GO BACK'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New Word'
export const NOBODY_CARES_TEXT = 'Error, could not share: Nobody cares.'
export const SHARE_TEXT = 'Annoy Twitter'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
