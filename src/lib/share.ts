import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import { MAX_CHALLENGES } from '../constants/settings'
import { UAParser } from 'ua-parser-js'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void
) => {
  /*const textToShare =
    `${GAME_TITLE} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
    generateEmojiGrid(guesses, getEmojiTiles(isDarkMode, isHighContrastMode))*/

  const textToShare = 
    `This attention seeker wanted to share their MQordle score, but we saved them from themselves.\n` +
    `Join the MQ, Tuesdays at 6PM in Half Dome Lounge.\n` +
    `⬜⬜⬜⬜⬜⬜⬜⬜⬜\n` +
    `⬜⬜⬛⬜⬜⬜⬛⬜⬜\n` +
    `⬜⬛⬜⬛⬜⬛⬜⬛⬜\n` +
    `⬜⬛⬜⬛⬜⬛⬜⬛⬜\n` +
    `⬜⬛⬜⬜⬛⬜⬜⬛⬜\n` +
    `⬜⬛⬜⬜⬛⬜⬜⬛⬜\n` +
    `⬜⬛⬜⬜⬛⬜⬜⬛⬜\n` +
    `⬜⬜⬜⬜⬜⬜⬜⬜⬜\n` +
    `⬜⬜⬜⬛⬛⬛⬜⬜⬜\n` +
    `⬜⬜⬛⬜⬜⬜⬛⬜⬜\n` +
    `⬜⬛⬜⬜⬜⬜⬜⬛⬜\n` +
    `⬜⬛⬜⬜⬜⬜⬜⬛⬜\n` +
    `⬜⬛⬜⬜⬜⬛⬜⬛⬜\n` +
    `⬜⬜⬛⬜⬜⬜⬛⬜⬜\n` +
    `⬜⬜⬜⬛⬛⬛⬜⬛⬜\n` +
    `⬜⬜⬜⬜⬜⬜⬜⬜⬜`;
    
  const shareData = { text: textToShare }

  let shareSuccess = false

  try {
    if (attemptShare(shareData)) {
      navigator.share(shareData)
      shareSuccess = true
    }
  } catch (error) {
    shareSuccess = false
  }

  if (!shareSuccess) {
    navigator.clipboard.writeText(textToShare)
    handleShareToClipboard()
  }
}

export const generateEmojiGrid = (guesses: string[], tiles: string[]) => {
  return guesses
    .map((guess, index) => {
      const status = getGuessStatuses(guess, index)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return tiles[0]
            case 'present':
              return tiles[1]
            default:
              return tiles[2]
          }
        })
        .join('')
    })
    .join('\n')
}

const attemptShare = (shareData: object) => {
  return (
    // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
    browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
    webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
    navigator.canShare &&
    navigator.canShare(shareData) &&
    navigator.share
  )
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '🟧' : '🟩')
  tiles.push(isHighContrastMode ? '🟦' : '🟨')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
